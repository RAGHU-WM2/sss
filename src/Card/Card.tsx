import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Categorycard from "./Categorycard";
import TopLocationsCard from "./Toplocationcard";
import SearchList from './Searchlist'
import "./Card.css";
import Listicon from "../Assets/list-cIcY5BTW.png";

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
    setShowSearchList(true); // Always show SearchList when input is clicked
    navigate("/searchlist"); // Navigate to /searchlist route
  };

  return (
    <div id="Card">
      <div className="search_input_container">
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
        <Route path="/searchlist" element={<SearchList />} />
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
