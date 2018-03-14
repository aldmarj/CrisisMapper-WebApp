import React from 'react'
import { Grid, Segment, Header, Icon, Image, Input} from 'semantic-ui-react'
import NewsFeed from './Dashboard/NewsFeed'
import Weather from './Dashboard/Weather'
import Traffic from './Dashboard/Traffic'
const Dashboard = () => (
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>
        <Header as='h2' icon textAlign='center'>
          <Header.Content>
            News Feed
          </Header.Content>
        </Header>
          <NewsFeed/>
          </Segment>
      </Grid.Column>
      <Grid.Column >
        <Input icon='search' placeholder='Search...' />
        <Weather/>
        <Traffic/>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Dashboard
