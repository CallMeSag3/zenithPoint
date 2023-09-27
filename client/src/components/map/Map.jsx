import React from "react";
import "./map.scss";

export default function Map() {
    return (
        <div className="map">
            <div className="map__container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15907.047736221411!2d-74.06525015!3d4.6365086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sco!4v1691619573321!5m2!1sru!2sco" width="800" height="600" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map__start"></iframe>
            </div>
        </div>
    )
}

    // /*global google*/
    // import React from "react";

    // import { GoogleMap, StandaloneSearchBox, Marker } from "@react-google-maps/api";

    // let markerArray = [];
    // class Map extends React.Component {
    //   state = {
    //     currentLocation: { lat: 0, lng: 0 },
    //     markers: [],
    //     bounds: null
    //   };

    //   onMapLoad = map => {
    //     navigator?.geolocation.getCurrentPosition(
    //       ({ coords: { latitude: lat, longitude: lng } }) => {
    //         const pos = { lat, lng };
    //         this.setState({ currentLocation: pos });
    //       }
    //     );
    //     google.maps.event.addListener(map, "bounds_changed", () => {
    //       console.log(map.getBounds());
    //       this.setState({ bounds: map.getBounds() });
    //     });
    //   };

    //   onSBLoad = ref => {
    //     this.searchBox = ref;
    //   };

    //   onPlacesChanged = () => {
    //     markerArray = [];
    //     let results = this.searchBox.getPlaces();
    //     for (let i = 0; i < results.length; i++) {
    //       let place = results[i].geometry.location;
    //       markerArray.push(place);
    //     }
    //     this.setState({ markers: markerArray });
    //     console.log(markerArray);
    //   };

    //   render() {
    //     return (
    //       <div>
    //         <div id="searchbox">
    //           <StandaloneSearchBox
    //             onLoad={this.onSBLoad}
    //             onPlacesChanged={this.onPlacesChanged}
    //             bounds={this.state.bounds}
    //           >
    //             <input
    //               type="text"
    //               placeholder="Customized your placeholder"
    //               style={{
    //                 boxSizing: `border-box`,
    //                 border: `1px solid transparent`,
    //                 width: `240px`,
    //                 height: `32px`,
    //                 padding: `0 12px`,
    //                 borderRadius: `3px`,
    //                 boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    //                 fontSize: `14px`,
    //                 outline: `none`,
    //                 textOverflow: `ellipses`,
    //                 position: "absolute",
    //                 left: "50%",
    //                 marginLeft: "-120px"
    //               }}
    //             />
    //           </StandaloneSearchBox>
    //         </div>
    //         <br />
    //         <div>
    //           <GoogleMap
    //             center={this.state.currentLocation}
    //             zoom={10}
    //             onLoad={map => this.onMapLoad(map)}
    //             mapContainerStyle={{ height: "400px", width: "800px" }}
    //           >
    //             {this.state.markers.map((mark, index) => (
    //               <Marker key={index} position={mark} />
    //             ))}
    //           </GoogleMap>
    //         </div>
    //       </div>
    //     );
    //   }
    // }

    // export default Map;