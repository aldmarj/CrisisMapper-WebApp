import React, { Component } from 'react'
import { Menu, Checkbox } from 'semantic-ui-react'

export default class MapFilters extends Component {
  
    constructor(props) {
        super(props);
        /* set the initial checkboxState to true */
        this.state = {
          checkboxState: true
        }
      }

    /* prevent form submission from reloading the page */
    onSubmit(event) {
        event.preventDefault();
    }
    /* callback to change the checkboxState to false when the checkbox is checked */
    toggle(event) {
    this.setState({
        checkboxState: !this.state.checkboxState
    });
    }

  render() {
    const style = {
        width: '100%',
        height: '100%'
      }

    const checkedOrNot = [];

    checkedOrNot.push(
      <p>{this.state.checkboxState ? 'Unchecked' : 'Checked'}</p>
    );

    return (
        <div >
            <Menu style={style} vertical>
                <Menu.Item>
                    <Menu.Header>Social Media</Menu.Header>
                </Menu.Item>
                <Menu.Item>
                    <Checkbox onClick={this.toggle.bind(this)} label={{ children: 'Requests for Help' }} />
                </Menu.Item>
                <Menu.Item>
                    <Checkbox onClick={this.toggle.bind(this)}  label={{ children: 'Help Offered' }} />
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Emergency Services</Menu.Header>
                </Menu.Item>
                <Menu.Item>
                    <Checkbox onClick={this.toggle.bind(this)} label={{ children: 'Hospitals' }} />
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
                    <Menu.Header>Return</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                    {checkedOrNot}
                </Menu.Item>

                
            </Menu>
      </div>
    )
  }
}