import React, { useEffect } from "react";
import { MappedinLocation, MappedinPolygon } from "@mappedin/mappedin-js"; // Import necessary types from mappedin-js
import "./Locationcard.css";
import Toilet from "../Assets/toilet_16750317.png";
import Closeicon from "../Assets/close-circle-svgrepo-com.svg";
import Fullscreenicon from "../Assets/fullscreen-r8if0idY-r8if0idY.png";

interface Props {
  location: MappedinLocation;
}

export const Searchlocation: React.FC<Props> = ({ location }) => {
  useEffect(() => {
    // Example useEffect logic, adjust as per your requirement
    if (location && location.polygons) {
      location.polygons.forEach((polygon: MappedinPolygon) => {
        if (polygon.map && polygon.map.name) {
          console.log('FLOOR', polygon.map.name);
        }
      });
    }
  }, [location]);

  if (!location) {
    return null; // Return null if location is not defined
  }

  return (
    <div>
      <div className="location_details">
        <div className="top_header_location">
          <img src={Toilet} width="40" id="icon_loader" alt="Icon Loader" />
          <h2>{location.name}</h2>
          <img src={Closeicon} width="30" alt="Close" id="close_icon" />
        </div>
        <div className="middle_floor">
          {location.polygons && location.polygons.length > 0 && (
            <h5>{location.polygons[0].map.name}</h5>
          )}
        </div>
        <div className="bottom_header_location">
          <h6 id="openspacesid">
            {location.categories.map((category) => category.name).join(", ")}
          </h6>
          {/* Assuming you want to display amenities here */}
          <h6 id="amentityid">{location.amenity}</h6>
        </div>
        <div className="directionbtn">
          <button>Directions</button>
        </div>
      </div>
     
    </div>
  );
};
