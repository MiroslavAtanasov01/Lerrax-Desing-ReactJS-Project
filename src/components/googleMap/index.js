import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
const mapStyles = {
    width: '35em',
    height: '30em',
    marginLeft: '20em',
    marginTop: '7em'

};

export class MapContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }


    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{ lat: 42.6998747, lng: 23.3278607 }}

            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Lerrax-Design'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </ Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDAzJ4mGrygJPCizRL--mHLNgu4v691pVc'
})(MapContainer);