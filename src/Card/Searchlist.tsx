import React, { useEffect, useState } from "react";
import {
  getVenue,
  MappedinLocation,
  TGetVenueOptions,
  MappedinPolygon,
} from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import "./Searchlist.css";
import Fireicon from "../Assets/fire.png";
import { Searchlocation } from "./listlocationcard"; // Ensure correct import path and component name

const Searchlist = () => {
  const [selectedLocation, setSelectedLocation] = useState<MappedinLocation | null>(null);

  const options: TGetVenueOptions = {
    venue: "mappedin-demo-office",
    clientId: "5eab30aa91b055001a68e996",
    clientSecret: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const venue = await getVenue(options);

        const sortedCategories = [
          ...venue.categories.sort((a, b) => (a.name! > b.name! ? 1 : 0)),
        ];

        sortedCategories.forEach((category) => {
          const sortedLocations = [
            ...category.locations.sort((a, b) => (a.name > b.name ? 1 : -1)),
          ];

          categoryBuilder(category.name ?? "", sortedLocations);
        });
      } catch (error) {
        console.error("Error fetching venue:", error);
      }
    }

    fetchData();
  }, []);

  function categoryBuilder(header: string, locations: MappedinLocation[]) {
    const directoryListElement = document.getElementById("directory")!;
    const categoryElement = document.createElement("div");
    categoryElement.className = "categoryGroup";

    locations.forEach((location) => {
      const locationElement = document.createElement("div");
      locationElement.className = "locationGroup";
      locationElement.onclick = () => handleLocationClick(location);

      const locationHeading = document.createElement("h4");
      locationHeading.textContent = location.name;
      locationElement.appendChild(locationHeading);

      // Example: Displaying polygons
      if (location.polygons) {
        const polygonList = document.createElement("ul");
        location.polygons.forEach((polygon: MappedinPolygon) => {
          const polygonItem = document.createElement("li");
          polygonItem.textContent = polygon.map.name;
          polygonList.appendChild(polygonItem);
        });
        locationElement.appendChild(polygonList);
      }

      categoryElement.appendChild(locationElement);
    });

    directoryListElement.appendChild(categoryElement);
  }

  function handleLocationClick(location: MappedinLocation) {
    setSelectedLocation(location);
  }

  return (
    <div className="searchlist">
      <div id="directory">
        <div className="search_top_header">
          <h4 style={{ fontWeight: "500", fontSize: "16px" }}>Most Popular</h4>
          <img src={Fireicon} alt="" width={13} height={13} />
        </div>
      </div>
      {selectedLocation && <Searchlocation location={selectedLocation} />}
    </div>
  );
};

export default Searchlist;
