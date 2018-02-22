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
 
class Main extends Component {

  state = { activeItem: 'Crisis Mapping' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
        <HashRouter>
        <div>
          <h1>Crisis Mapper</h1>
          <Menu pointing secondary>
          <Menu.Item exact to="/" name='Home' active={activeItem === 'Crisis Mapping'} onClick={this.handleItemClick}/>
          <Menu.Item to="/crisisMap" name='Crisis Map' active={activeItem === 'Crisis Map'} onClick={this.handleItemClick} />
          <Menu.Item to="/dashboard" name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search Location...' />
              </Menu.Item>
          </Menu.Menu>
          </Menu>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/CrisisMap" component={CrisisContainer}/>
            <Route path="/dashboard" component={Contact}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;