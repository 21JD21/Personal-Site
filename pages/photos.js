import React from 'react'

import Photo from '../components/Photo'
import Header from '../components/Header'
import SiteHeader from '../components/SiteHeader'

import styled from 'styled-components'

const App = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

const images = [
  {
    'src': "https://c1.staticflickr.com/3/2879/32701619613_e8151da5f0_k.jpg",
    'location': "Central Park - New York City",
    'date': "November 19, 2016"
  },
  {
    'src': "https://c1.staticflickr.com/4/3841/33475316176_1a4a84493c_k.jpg",
    'location': "Central Park - New York City",
    'date': "November 19, 2016"
  },
  {
    'src': "https://c1.staticflickr.com/4/3754/33387704251_9e5df40422_k.jpg",
    'location': "Library of Congress",
    'date': "June 25, 2016"
  },
  {
    'src': "https://c1.staticflickr.com/4/3842/32690862024_b68d4a49cb_k.jpg",
    'location': "New York City",
    'date': "February 13, 2016"
  },
  {
    'src': "https://c1.staticflickr.com/3/2901/33387639771_18627f1d13_k.jpg",
    'location': "New Orleans",
    'date': "March 2015"
  },
  {
    'src': "https://c1.staticflickr.com/4/3793/32672420514_5de0c70611_k.jpg",
    'location': "New Orleans",
    'date': "March 2015"
  },
  {
    'src': "https://c1.staticflickr.com/3/2922/32701461203_ad9b5fc1e8_k.jpg",
    'location': "New Orleans",
    'date': "March 2015"
  },
  {
    'src': "https://c1.staticflickr.com/3/2863/33516383435_b6692af96f_k.jpg",
    'location': "Norfolk, Va",
    'date': "May 22, 2014"
  }
]

const PhotoComponents = images.map( image => 
  <Photo src={image.src} location={image.location} date={image.date} width={"100%"} />)

export default () => <App>
  <Header title={"Jack Dingilian"}/> 
  <SiteHeader />
  { PhotoComponents }
</App>