// @flow

import React from 'react'
import { Grid, Menu, Segment, Sidebar } from 'semantic-ui-react'

import MeshContainer from './MeshContainer'
import MeshDetailsContainer from './MeshDetailsContainer'
import MapContainer from './MapContainer'

const App = () =>
  <div style={{ height: '100%' }}>
    <Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} width="wide" visible icon="labeled" vertical inverted>
        <Menu.Item name="waffleMap">
          Waffle Map
        </Menu.Item>
        <Menu.Item name="meshInput">
          <MeshContainer />
        </Menu.Item>
        <Menu.Item name="meshDetails">
          <MeshDetailsContainer />
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
        <MapContainer />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>

export default App
