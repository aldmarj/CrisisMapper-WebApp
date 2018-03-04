import React, { Component } from "react";
import { Menu, Segment, Input } from 'semantic-ui-react'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import CrisisContainer from "./CrisisContainer";
import DashboardContainer from "./DashboardContainer";
 
class Main extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
        <HashRouter>
        <div>
          <Segment inverted>
            <Menu inverted pointing secondary>
            <NavLink exact to="/"><Menu.Item name="Crisis Mapper" active={activeItem === 'home'} onClick={this.handleItemClick}></Menu.Item></NavLink>
            <Menu.Menu position='right'>
                <NavLink exact to="/"><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></NavLink>
                <NavLink to="/crisisMap"><Menu.Item name='Crisis Map' active={activeItem === 'Crisis Map'} onClick={this.handleItemClick} /></NavLink>
                <NavLink to="/dashboard"><Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick} /></NavLink>
                </Menu.Menu>
            </Menu>
          </Segment>
          <div >
            <Route exact path="/" component={Home}/>
            <Route path="/CrisisMap" component={CrisisContainer}/>
            <Route path="/dashboard" component={DashboardContainer}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;