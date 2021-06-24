import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import EarthquakeMap from "./EarthquakeMap";
import axios from "axios";

const Earthquake = () => {
  const [countries, setCountries] = useState([]);

  const load = () => {
    console.log("begin useEffect");
    async function getCountries() {
      console.log("begin getCountries");
      const res = await axios.get(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
      );

      let countries = res.data;
      console.log("return json data from api,", countries);
      if (countries !== null && countries.features !== null) {
        console.log("features:", countries.features);
        setCountries(countries.features);
      }
    }
    getCountries();
  };

  useEffect(load, []); //page load we tell it that it will track [] ,if null, same as componentDidMount

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <EarthquakeMap countries={countries} />
        </div>
      )}
    </div>
  );
};

export default Earthquake;
