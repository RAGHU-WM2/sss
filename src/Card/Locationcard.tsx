import React, { useEffect } from "react";
import "./Locationcard.css";
import Toilet from '../Assets/toilet_16750317.png';
import Closeicon from '../Assets/close-circle-svgrepo-com.svg';
import Fullscreenicon from '../Assets/fullscreen-r8if0idY-r8if0idY.png';

interface CardProps {
  selectedLocation: any; 
  mapView: any; 
  onClose: () => void; // Function to handle closing the card
}

export const Locationcard: React.FC<CardProps> = ({ selectedLocation, mapView, onClose }) => {
  useEffect(() => {
    if (selectedLocation && selectedLocation.polygons && mapView) {
      selectedLocation.polygons.forEach((polygon: any) => {
        if (polygon.map && polygon.map.name) {
          // console.log('FLOOR', polygon.map.name);
        }
      });
    }
  }, [selectedLocation, mapView]);

  if (!selectedLocation) {
    return null; 
  }

  return (
    <div>
      <div className="location_details">
        <div className="top_header_location">
          <img
            src={Toilet}
            width="40"
            id="icon_loader"
            alt="Icon Loader"
          />
          <h2>{selectedLocation.name}</h2>
          <img
            src={Closeicon}
            width="30"
            alt="Close"
            id="close_icon"
            onClick={onClose} // Adding onClick handler to close the card
          />
        </div>
        <div className="middle_floor">
          {selectedLocation.polygons && selectedLocation.polygons.length > 0 &&
            <h5>{selectedLocation.polygons[0].map.name}</h5>
          }
        </div>
        <div className="bottom_header_location">
          <h6 id="openspacesid">{selectedLocation.categories.map((category: any) => category.name)}</h6>
          {/* Assuming you want to display amenities here */}
          <h6 id="amentityid">{selectedLocation.amenity}</h6>
        </div>
        <div className="directionbtn">
          <button>Directions</button>
        </div>
      </div>
    </div>
  );
};
