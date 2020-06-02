import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import locations from '../../static/campus-locations.json';

type State = {
  lat: number,
  lng: number,
  zoom: number,
};

type CircleMarkerOption = {
  radius: number,
  fillColor: string,
  color: string,
  weight: number,
  opacity: number,
  fillOpacity: number,
};

type PolygonOption = {
  stroke: boolean,
  color: string, // The color of the stroke
  opacity: 1, // The opacity of the stroke
  fill: boolean, // Whether to fill the polygon with color
  fillColor: string,
  fillOpacity: number,
};

export default class CampusMap extends Component<
  {},
  State,
  CircleMarkerOption
  > {
  constructor(props: Props, context: *): void {
    super(props, context);
    this.determinePolygonStyle = this.determinePolygonStyle.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
    this.addPopUps = this.addPopUps.bind(this);
  }

  state: State = {
    lat: 40.1095876,
    lng: -88.2275806,
    zoom: 15,
  };

  urhMarker: CircleMarkerOption = {
    radius: 10,
    fillColor: '#d50032',
    fill: true,
    color: '#000',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  };

  pchMarker: CircleMarkerOption = {
    radius: 10,
    fillColor: '#e84A27',
    fill: true,
    color: '#000',
    weight: 1,
    opacity: 1,
    fillOpacity: 1.0,
  };

  regionMarker: PolygonOption = {
    stroke: true,
    color: '#000000', // The color of the stroke
    opacity: 1, // The opacity of the stroke
    fill: true, // Whether to fill the polygon with color
    fillColor: '#0455A4',
    fillOpacity: 0.7,
  };

  addMarkers(feature, latLng) {
    switch (feature.properties.type) {
      case 'URH':
        console.log('URH Marker: ' + latLng);
        return L.circleMarker(latLng, this.urhMarker);
      case 'PCH':
        console.log('PCH Marker ' + latLng);
        return L.circleMarker(latLng, this.pchMarker);
      default:
        return L.marker(latLng);
    }
  }

  determinePolygonStyle(feature) {
    console.log('Polygon: ' + feature.properties.type);
    switch (feature.properties.type) {
      case 'Region':
        return this.regionMarker;
      case 'Line':
        return { color: '#D50032' };
      case 'College':
        return { fillColor: '#1f4096' }; // Temporary
      default:
        return { fillColor: '#66ccff' };
    }
  }

  addPopUps(feature, layer) {
    console.log('Adding popups');
    if (feature.properties && feature.properties.popupContent) {
      const shortenedPopup = `${feature.properties.popupContent.substring(
        0,
        100
      )}...(具体请见详细介绍)`;
      layer.bindPopup(function(layer) {
        if (!feature.properties.url) {
          return L.Util.template(
            '<h1>' +
            '{name}' +
            '</h1>' +
            '<p align="justify">{popupContent}</p>',
            feature.properties
          );
        }
        return feature.properties.popupContent.length > 100
          ? L.Util.template(
            '<h1>' +
            '<a href="{url}" target="_blank">' +
            '{name}' +
            '</a>' +
            '</h1>' +
            '<p align="justify"/' + shortenedPopup + '>',
            feature.properties
          )
          : L.Util.template(
            '<h1>' +
            '<a href="{url}" target="_blank">' +
            '{name}' +
            '</a>' +
            '</h1>' +
            '<p align="justify">{popupContent}</p>',
            feature.properties
          );
      });
    }
  }

  render() {
    console.log('Rendering CampusMap ...');
    const position = [this.state.lat, this.state.lng];
    if (typeof window !== 'undefined') {
      console.log('Returning CampusMap');
      return (
        <div>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON
              data={locations}
              pointToLayer={this.addMarkers}
              style={this.determinePolygonStyle}
              onEachFeature={this.addPopUps}
              // markersInheritOptions={true}
            />
            <Marker position={position}>
              <Popup>This is Illini Union.</Popup>
            </Marker>
          </Map>
        </div>
      );
    }
    console.log('null returned instead of CampusMap')
    return null;
  }
}
