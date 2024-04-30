import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const ZOOM_LEVEL = 13;
const MAX_ZOOM_LEVEL = 19;
const Coords = {
  lat: 27.7028,
  lon: 85.3156,
}; // Kathmandu
const OpenStreetMapView = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} style="auto" />
      <WebView
        style={styles.webView}
        source={{
          html: `
          <!DOCTYPE html>
          <html>
          <head>
              <title>Full Screen Leaflet Map</title>
              <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                crossorigin=""/>
              <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
                integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
                crossorigin=""></script>   
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
              <style>
                body {
                  padding: 0;
                  margin: 0;
                }
                html, body, #map {
                  height: 100vh;
                  width: 100%;
                }
              </style>
          </head>
          <body>
              <div id="map"></div>
              <script src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>
              <script>
                const map = L.map('map').setView([${Coords.lat}, ${Coords.lon}], ${ZOOM_LEVEL});
                
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  maxZoom: ${MAX_ZOOM_LEVEL},
                  attribution: '© OpenStreetMap'
                }).addTo(map);
                
                // const popup = L.popup();
                // function onMapClick(e) {
                  //   popup
                  //     .setLatLng(e.latlng)
                  //     .setContent("You clicked the map at " + e.latlng.toString())
                  //     .openOn(map);
                  // }
                // map.on('click', onMapClick)
              </script>
          </body>
          </html>`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default OpenStreetMapView;
