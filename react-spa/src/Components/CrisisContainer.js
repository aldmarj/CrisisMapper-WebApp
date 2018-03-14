import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import CrisisMap from './CrisisMap'
import { fetchTweets } from '../Services/TwitterAPI'
import { GoogleApiWrapper } from 'google-maps-react'
import MapFilters from './Map/MapFilters'

class CrisisContainer extends Component { 
    state = {
        tweets: [],
        visible: false
      }

      

      toggleVisibility = () => this.setState({ visible: !this.state.visible })

      componentDidMount = () => {
          fetchTweets()
          .then(response => this.setState({tweets: [{name: response.data[0].tweetID, text: response.data[0].tweetText, time: response.data[0].tweetTime, location: {lat: response.data[0].tweetLat, lng: response.data[0].tweetLon}}]}))
      }

      componentDidUpdate(prevProps, prevState) {
        
          this.render();
        
      }

      render() {
        const { visible } = this.state
        const { activeItem } = this.state || {}
        return (

            <div>
              <Button floated='right' onClick={this.toggleVisibility} circular icon='settings' />
              <Sidebar.Pushable as={Segment}>
                <Sidebar
                  animation='overlay'
                  width='thick'
                  direction='right'
                  visible={visible}
                  icon='labeled'
                  vertical
                  inverted
                >
                <MapFilters/>
                </Sidebar>
                <Sidebar.Pusher>
                  <Segment basic>
                    <div className="CrisisContainer">
                      <div className="wrapper">
                        <Route path="/" render={(props) => <CrisisMap google={this.props.google} tweets={this.state.tweets} {...props}/>}/>
                      </div>
                  </div>
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </div>
          
        );
      }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
    libraries: ['visualization']
  })(CrisisContainer)
  