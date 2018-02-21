import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CrisisMap from './CrisisMap'
import { fetchTweets } from '../Services/TwitterAPI'
import { GoogleApiWrapper } from 'google-maps-react'

class CrisisContainer extends Component { 
    state = {
        tweets: []
      }

      componentDidMount = () => {
          fetchTweets()
          .then(response => this.setState({tweets: [{name: response.data[0].tweetID, text: response.data[0].tweetText, time: response.data[0].tweetTime, location: {lat: response.data[0].tweetLat, lng: response.data[0].tweetLon}}]}))
      }

      render() {
        return (
          <div className="CrisisContainer">
            <div className="wrapper">
              <Route path="/" render={(props) => <CrisisMap google={this.props.google} tweets={this.state.tweets} {...props}/>}/>
            </div>
          </div>
        );
      }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
    libraries: ['visualization']
  })(CrisisContainer)
  