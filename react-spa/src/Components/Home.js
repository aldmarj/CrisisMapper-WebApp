import React from 'react'
import { Header, Icon, Image, Input, Grid, Segment } from 'semantic-ui-react'

const Home = () => (
  <div>
      <Grid centered columns={2}>
      <Grid.Column>
      <Grid.Row>
          <Header as='h2' icon textAlign='center'>
          <Icon name='bullhorn' circular />
          <Header.Content>
            Crisis Mapper
            <Header as='h3' textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Header>
          </Header.Content>
        </Header>
      </Grid.Row>
      </Grid.Column>
      <Grid.Row>
        <Grid.Column centered>
          <Input icon='search' placeholder='Search...' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)
 
export default Home;