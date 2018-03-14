import React, { Component } from 'react'
import { Menu, Checkbox } from 'semantic-ui-react'

export default class MapFilters extends Component {
  

  render() {
    const style = {
        width: '100%',
        height: '100%'
      }

    return (
        <div >
            <Menu style={style} vertical>
                <Menu.Item>
                    <Menu.Header>Social Media</Menu.Header>
                </Menu.Item>
                <Menu.Item>
                    <Checkbox label={{ children: 'Requests for Help' }} />
                </Menu.Item>
                <Menu.Item>
                    <Checkbox label={{ children: 'Help Offered' }} />
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Emergency Services</Menu.Header>
                </Menu.Item>
                <Menu.Item>
                    <Checkbox label={{ children: 'Hospitals' }} />
                </Menu.Item>
                <Menu.Item>
                    <Checkbox label={{ children: 'Police Stations' }} />
                </Menu.Item>
                <Menu.Item>
                    <Checkbox label={{ children: 'Shelters' }} />
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Stores</Menu.Header>
                </Menu.Item>
                <Menu.Item>
                    <Checkbox label={{ children: 'Pharmacies' }} />
                </Menu.Item>
                <Menu.Item>
                    <Checkbox label={{ children: 'Supermarkets' }} />
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Support</Menu.Header>
                </Menu.Item>
            </Menu>
      </div>
    )
  }
}