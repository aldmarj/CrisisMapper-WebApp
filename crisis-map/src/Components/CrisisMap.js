import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class EarthquakesMap extends Component {
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.google !== this.props.google || prevProps.tweets !== this.props.tweets) {
        this.loadMap();
      }
    }

    loadMap() {
        if (this.props && this.props.google) {
          const {google} = this.props;
          const maps = google.maps;
    
          const mapRef = this.refs.map;
          const node = ReactDOM.findDOMNode(mapRef);
    
          const mapConfig = Object.assign({}, {
            center: {lat: 0, lng: 180},
            zoom: 2,
            gestureHandling: "cooperative",
            mapTypeId: 'terrain'
          })
          
          this.map = new maps.Map(node, mapConfig);
          var heatmapData = [];
    
          this.props.tweets.map( (tweet) => {
            const marker = new google.maps.Marker({
              position: {lat: parseFloat(tweet.location.lat), lng: parseFloat(tweet.location.lng)},
              map: this.map,
              title: tweet.name,
            });
    
            const infowindow = new google.maps.InfoWindow({
              content: `<h3>${tweet.name}</h3>
              <h4>${(new Date(tweet.time)).toDateString()}</h4>
              <h4>${tweet.text}</h4>`
            });
            marker.addListener('click', function() {
              infowindow.open(this.map, marker);
            });
          })
          const heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
            radius: 40
          });
          heatmap.setMap(this.map);
        }
      }
    
      render() {
        const style = {
          width: '85vw',
          height: '75vh'
        }
    
        return (
          <div ref="map" style={style}>
            loading map...
          </div>
        )
      }
}