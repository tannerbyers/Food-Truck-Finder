import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = "AIzaSyAOEsdFfHB05mHHfRn0bsfENp8mZ1qIGO0";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.237247,
      lng: -81.519488
    },
    zoom: 11
  };
  
  render(props) {
    return (
      // Important! Always set the container height explicitly
      <div
        className="container-fluid"
        style={{ height: "60vh", width: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          center={this.props.CurrentLocation || this.props.center}
          zoom={this.props.CurrentZoom || this.props.zoom}
        >
          <img
            src="http://pluspng.com/img-png/you-are-here-png-hd-you-are-here-icon-512.png"
            lat={
              this.props.CurrentLocation.centered
                ? this.props.CurrentLocation.lat
                : null
            }
            lng={
              this.props.CurrentLocation.centered
                ? this.props.CurrentLocation.lng
                : null
            }
            height="60"
            width="60"
          />

<AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}

text="Availity"            height="40"
            width="40"
         />

          {this.props.Data.map((result, i) => (
            <img
              content={result.Name}
              src="http://wherethatfoodtruck.com/graphics/default/logo.png"
              height="42"
              width="35"
              lat={result.Lat}
              lng={result.Lng}
              text={result.Name}
              alt="A map of nearby Foodtrucks"
            />
          ))}

          {this.props.Data.map((result, i) => (
            <AnyReactComponent
              lat={result.Lat}
              lng={result.Lng}
              text={result.Name}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
