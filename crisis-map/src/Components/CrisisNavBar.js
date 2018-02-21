import React, { Component } from 'react'
import { Menu, Segment, Input } from 'semantic-ui-react'

export default class CrisisNavBar extends Component {
  state = { activeItem: 'Crisis Mapping' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Crisis Mapping' active={activeItem === 'Crisis Mapping'} onClick={this.handleItemClick} />
          <Menu.Item name='Crisis Map' active={activeItem === 'Crisis Map'} onClick={this.handleItemClick} />
          <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search Location...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
