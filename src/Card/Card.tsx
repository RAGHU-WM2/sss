import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Categorycard from "./Categorycard";
import TopLocationsCard from "./Toplocationcard";
import SearchList from './Searchlist'
import "./Card.css";
import Listicon from "../Assets/list-cIcY5BTW.png";
import Backicon from "../Assets/back-svgrepo-com.svg";

const Card = () => {
  const navigate = useNavigate();
  const [isCategoryView, setIsCategoryView] = useState(false);
  const [showSearchList, setShowSearchList] = useState(false);

  const handleListIconClick = () => {
    if (isCategoryView) {
      navigate("/");
    } else {
      navigate("/categorycard");
    }
    setIsCategoryView(!isCategoryView);
  };

  const handleSearchInputClick = () => {
    // Navigate to the search route and show the SearchList component
    navigate("/search");
    setShowSearchList(true);
  };

  const handleBackIconClick = () => {
    // Navigate back and hide the SearchList component
    navigate("/");
    setShowSearchList(false);
  };

  return (
    <div id="Card">
      <div className="search_input_container">
        <img
          src={Backicon}
          alt=""
          id="backicon"
          width={23}
          onClick={handleBackIconClick} // Updated click handler
        />
        <input
          type="text"
          id="locationsearch"
          placeholder="Search the office..."
          onClick={handleSearchInputClick}
        />
        <img
          id="toggle_list"
          src={Listicon}
          width="25"
          alt="Toggle List"
          onClick={handleListIconClick}
        />
      </div>
      <Routes>
        <Route path="/" element={<TopLocationsCard />} />
        <Route path="/categorycard" element={<Categorycard />} />
        {showSearchList && <Route path="/search" element={<SearchList />} />} {/* Conditionally render SearchList */}
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Card />
    </Router>
  );
};

export default App;
