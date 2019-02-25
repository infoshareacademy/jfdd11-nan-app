import React, { Component } from "react";
import Leaflet from "leaflet";

import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { red } from "ansi-colors";
Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/";

class Parcel extends Component {
  state = {
    lat: 54.4032034,
    lng: 18.5694926,
    zoom: 15,
    latDelivered: 54.352,
    lngDelivered: 18.6466
  };

  getIcon = () => {
    const icon = new Leaflet.Icon({
      iconUrl: "images/baseline-home-24px.svg",
      iconSize: [30, 41],
      
    });
    return icon;
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const positionDelivered = [
      this.state.latDelivered,
      this.state.lngDelivered
    ];

    return (
      <div className="TrackPanel">
        <h2>Parcel page</h2>
       
        <ul className="deliveredParcels" />
        <ul className="history" />
        <LeafletMap
          center={position}
          zoom={this.state.zoom}
          style={{ height: 300 }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker icon={this.getIcon()} style={{ background: red }} position={position}>
            <Popup>Sending address</Popup>
          </Marker>
          <Marker position={positionDelivered}>
            <Popup>Delivery address</Popup>
          </Marker>
        </LeafletMap>
        <button>Parcel delivered</button>
      </div>
    );
  }
}

export default Parcel;