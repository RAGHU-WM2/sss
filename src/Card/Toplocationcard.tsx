import React, { useMemo, useState } from "react";
import {
  TGetVenueOptions,
  E_SDK_EVENT,
  E_CAMERA_EVENT,
} from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import useMapView from "../useMapView";
import useVenue from "../useVenue";
import './Locationcard.css'

import CollaborationSpaceroom from "../Assets/fc08232b08494e0ad8ce92e7e8971e2b01c8f0b2.svg";
import Latopicon from "../Assets/laptop.png";

const Toplocationcard = () => {
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
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  console.log("venue", venue?.venue.topLocations);

  return (
    <div>
      <div id="top_location_container">
        <h4 style={{fontWeight:'500'}}>Top Locations</h4>
        <div className="top_location_icons_loader">
          {venue?.venue.topLocations && venue.venue.topLocations.map((location, index) => (
            <span key={index}>
              {index === 0 && (
                <>
                  <img src={CollaborationSpaceroom} width="40" alt="Cafeteria" />
                  <h6 dangerouslySetInnerHTML={{ __html: location.replace("-", "<br />") }} />
                </>
              )}
              {index === 1 && (
                <>
                  <img src={Latopicon} width="38" alt="Printer Room" />
                  <h6>{location}</h6>
                </>
              )}
              {index === 2 && (
                <>
                  <img
                    src={Latopicon}
                    width="40"
                    alt="Collaboration Space"
                  />
                  <h6>{location}</h6>
                </>
              )}
              {index === 3 && (
                <>
                  <img src={Latopicon} width="43" alt="Boardroom" />
                  <h6>{location}</h6>
                </>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toplocationcard;
