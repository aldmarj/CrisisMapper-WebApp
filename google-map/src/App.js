import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer'

class App extends Component {

  constructor () {
    super()
    this.state = {
      tweet: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://localhost:3001/tweets')
    .then(response => this.setState({tweet: response.data[0].tweetText}))
  }
      
    
  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1>
        <p>ERE {this.state.tweet}</p>
        <div className='button__container'>
          <button className='button' onClick={this.handleClick}>
            Populate Markers 
          </button>
          
        </div>
        <div>
          <MapContainer google={this.props.google} />
        </div>
      </div>
    );
  }

}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB94W0BDX-9ozCc44w9fzwKavWncNBcokw',
})(App)
