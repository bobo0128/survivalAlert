import React, { useState } from "react";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./EarthquakeMap.css";
import L from "leaflet";

const EarthquakeMap = ({ countries }) => {
  console.log("in EarthquakMap,countries is:" + JSON.stringify(countries));

  const ZOOM_LEVEL = 2;
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const tilelayerURL =
    "https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=xFOBL8w4N5nUKI5Q5jTd";
  const tilelayerAttribution =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

  function GetIcon(_iconSize) {
    return L.icon({
      iconUrl:
        "https://files.123freevectors.com/wp-content/uploads/new/123fv-images/1297-google-maps-pin-icon.jpg",
      iconSize: _iconSize,
    });
  }

  return (
    <MapContainer
      style={{ height: "90vh" }}
      zoom={ZOOM_LEVEL}
      center={[20, 100]}
    >
      <TileLayer url={tilelayerURL} attribution={tilelayerAttribution} />
      {countries.map((earthquakePlace) => (
        <Marker
          key={earthquakePlace.properties.time}
          position={[
            earthquakePlace.geometry.coordinates[1],
            earthquakePlace.geometry.coordinates[0],
          ]}
          icon={GetIcon(30)}
        >
          <Popup>
            {earthquakePlace.properties.place +
              "," +
              new Date(earthquakePlace.properties.time)}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default EarthquakeMap;
