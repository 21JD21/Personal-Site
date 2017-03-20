import React from 'react'

import styled from 'styled-components'

import Header from '../components/Header'
import SiteHeader from '../components/SiteHeader'
import MainImage from '../components/MainImage'
import Nav from '../components/Nav'

const App = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

export default () => <App> 
  <Header title={"Jack Dingilian"}/> 
  <SiteHeader />
  <MainImage />
  <Nav />
</App>