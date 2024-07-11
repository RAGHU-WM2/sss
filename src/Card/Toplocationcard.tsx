import React from "react";
import './Locationcard.css'
import CafeteriaIcon from "../Assets/63b0fdeaf735df9095d23e89f480b3a0a7224c34.svg";
import Printerrommicon from "../Assets/a73dd513b777055cc7d6b2ee952897fe2b83f6b9.svg";
import CollaborationSpaceroom from "../Assets/fc08232b08494e0ad8ce92e7e8971e2b01c8f0b2.svg";

import BoardroomIcon from "../Assets/87e5ae47980dad05f71d4ed3f93956b64a5c7671.svg";

const Toplocationcard = () => {
  return (
    <div>
      <div id="top_location_container">
        <h4 style={{fontWeight:'500'}}>Top Locations</h4>
        <div className="top_location_icons_loader">
          <span>
            <img src={CafeteriaIcon} width="45" alt="Cafeteria" />
            <h6>Cafeteria</h6>
          </span>
          <span style={{ position: "relative", top: "8px" }}>
            <img src={Printerrommicon} width="42" alt="Printer Room" />
            <h6>
              Printer <br />
              Room
            </h6>
          </span>
          <span style={{ position: "relative", top: "8px" }}>
            <img
              src={CollaborationSpaceroom}
              width="40"
              alt="Collaboration Space"
            />
            <h6>
              Collaboration <br />
              Space
            </h6>
          </span>
          <span style={{ position: "relative", top: "-3px" }}>
            <img src={BoardroomIcon} width="55" alt="Boardroom" />
            <h6>Boardroom</h6>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Toplocationcard;
