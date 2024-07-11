import React, { useMemo, useState, useCallback } from "react";
import {
  TGetVenueOptions,
  E_SDK_EVENT,
  E_CAMERA_EVENT,
} from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import useMapView from "./useMapView";
import useVenue from "./useVenue";
import Card from "./Card/Card";
import { Locationcard } from "./Card/Locationcard"; // Import Locationcard component

export default function App() {
  const options = useMemo<TGetVenueOptions>(
    () => ({
      venue: "mappedin-demo-office",
      clientId: "5eab30aa91b055001a68e996",
      clientSecret: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1",
    }),
    []
  );

  const venue = useVenue(options);
  const { elementRef, mapView } = useMapView(venue);
  const [selectedLocation, setSelectedLocation] = useState<any>(null); // State to store selected location

  // Function to handle closing the Locationcard
  const handleClose = useCallback(() => {
    setSelectedLocation(null); // Reset selectedLocation state to close the Locationcard
  }, []);

  useMemo(() => {
    if (mapView && venue) {
      mapView.addInteractivePolygonsForAllLocations();
      mapView.on(E_SDK_EVENT.CLICK, ({ polygons }) => {
        mapView.clearAllPolygonColors(); // Clear all polygon colors first

        if (polygons.length > 0) {
          mapView.setPolygonColor(polygons[0], "grey");

          const parentObject = venue?.locations.find((location) =>
            location.polygons.some((polygon) => polygon.id === polygons[0].id)
          );
          if (parentObject) {
            setSelectedLocation(parentObject); // Set selected location in state
          }
        } else {
          setSelectedLocation(null); // Clear selected location when no polygons are clicked
          mapView.clearAllPolygonColors();
        }
      });

      mapView.on(E_SDK_EVENT.CLICK, ({ polygons }) => {
        if (polygons.length === 0) {
          mapView.Camera.set({
            rotation: 0,
            tilt: 0.0,
            zoom: 4000,
          });
        } else {
          mapView.Camera.focusOn(
            {
              polygons,
            },
            {
              duration: 500,
            }
          );
        }
      });

      mapView.Camera.on(E_CAMERA_EVENT.USER_INTERACTION_START, () => {});

      mapView.Camera.on(E_CAMERA_EVENT.USER_INTERACTION_END, () => {});

      mapView.Camera.on(
        E_CAMERA_EVENT.CHANGED,
        ({ tilt, rotation, zoom, position }) => {}
      );

      // Example icons and colors setup
      const deskIcon = ``;
      const washroomIcon = ``;
      const meetingRoomIcon = ``;
      const spacesIcon = ``;
      const colors = ["#A8577E", "pink", "green", "#219ED4", "tomato", "grey"];
      venue.categories.forEach((category, index) => {
        category.locations.forEach((location) => {
          if (location.polygons.length <= 0) {
            return;
          }

          let icon;
          switch (category.name) {
            case "Desk":
              icon = deskIcon;
              break;
            case "Meeting Room":
              icon = meetingRoomIcon;
              break;
            case "Washrooms":
              icon = washroomIcon;
              break;
            case "Open Spaces":
              icon = spacesIcon;
              break;
            default:
              icon = "";
          }

          const color = colors[index % colors.length];
          mapView.FloatingLabels.add(location.polygons[0], location.name, {
            appearance: {
              marker: {
                icon: icon,
                foregroundColor: {
                  active: color,
                  inactive: color,
                },
              },
            },
          });
        });
      });
    }
  }, [mapView, venue]);

  return (
    <div id="app" ref={elementRef}>
    {!selectedLocation && <Card />}
    {/* Pass onClose function to Locationcard */}
      <Locationcard selectedLocation={selectedLocation} mapView={mapView} onClose={handleClose} />
    </div>
  );
}
