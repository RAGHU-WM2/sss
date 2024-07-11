import React from "react";
import cafeteriaIcon from "../Assets/63b0fdeaf735df9095d23e89f480b3a0a7224c34.svg";
import womensWashroomIcon from "../Assets/woman.png";
import mensWashroomIcon from "..//Assets/man.png";
import deskIcon from "..//Assets/laptop.png";
import meetingRoomIcon from "..//Assets/chair.png";
import openSpacesIcon from "../Assets/sofa.png";
import washroomsIcon from "../Assets/female-and-male-shapes-silhouettes.png";
import './Categorycard.css'

const Categorycard = () => {
  return (
    <div>
      <div id="Category_container">
        <div className="amenities_container">
          <div className="amenities_top">
            <h4>Amenities</h4>
            <h6 style={{ fontSize: "12px" }}>See All</h6>
          </div>
          <div className="amenities_bottom">
            <button>
              <img src={cafeteriaIcon} width="45" alt="Cafeteria" />
              <h6>Cafeteria</h6>
            </button>
            <button>
              <img src={womensWashroomIcon} width="45" alt="Women's Washroom" />
              <h6>
                Women's
                <br />
                Washroom
              </h6>
            </button>
            <button>
              <img src={mensWashroomIcon} width="45" alt="Men's Washroom" />
              <h6>
                Men's <br />
                Washroom
              </h6>
            </button>
            <button>
              <img src={deskIcon} width="45" alt="01-D-001" />
              <h6>01-D-001</h6>
            </button>
          </div>
        </div>
        <div className="categories_container">
          <h4>Categories</h4>
          <div className="categories_list">
            <ul>
              <li>
                <img src={deskIcon} width="25" alt="Desk" />
                Desk
              </li>
              <li>
                <img src={meetingRoomIcon} alt="Meeting Room" width="25" />
                Meeting Room
              </li>
              <li>
                <img src={openSpacesIcon} alt="Open Spaces" width="25" />
                Open Spaces
              </li>
              <li style={{ border: "none" }}>
                <img src={washroomsIcon} alt="Washrooms" width="25" />
                Washrooms
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorycard;
