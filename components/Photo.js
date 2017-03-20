import React from 'react'

import styled from 'styled-components'

const Frame = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  margin-bottom: 7%;
  margin-top: 3%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`

const ImageWrapper = styled.div`
  margin: 0 auto;
`

const Location = styled.div`
  color: #373f51;
  display: flex;
  margin-left: 0.5%;
`

const Date = styled.div`
  color: #2e86ab;
  margin-left: 5%;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  margin-left: 15%;
  margin-right:15%;
  margin-top: 0.5%;

  @media screen and (max-width: 600px) {
    margin-left: 7.5%;
    margin-right: 7.5%;
  }
`

export default ({src, width, location, date}) => 
  <Frame>
    <Row>
      <ImageWrapper>
        <img
          src={ src }
          width={ width } 
          height="100%" />
      </ImageWrapper>
    </Row>
    <Row>
      <Location> { location } </Location>
      <Date> { date } </Date>
    </Row>
  </Frame>