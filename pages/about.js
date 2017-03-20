import React from 'react'

import styled from 'styled-components'

import Header from '../components/Header'
import SiteHeader from '../components/SiteHeader'
import Bio from '../components/Bio'
import ProfilePicture from '../components/ProfilePicture'


const App = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: white;
`

export default () => <App>
  <Header />
  <SiteHeader />
  <ProfilePicture />
  <Bio />
</App>