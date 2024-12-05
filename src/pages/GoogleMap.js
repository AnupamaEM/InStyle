import React, { useEffect } from "react";

const GoogleMap = () => {
  useEffect(() => {
    const loadTheMap = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);
    };

    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {center: { lat: 20.5937, lng: 78.9629 }, zoom: 10,});};
      loadTheMap();
    window.initMap = initMap;
  }, []);
  return (
    <div className="map-container">
    <div id="map" >
    </div>
    </div>
  );
};

export default GoogleMap;
