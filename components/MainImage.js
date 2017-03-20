import React from 'react'

import styled from 'styled-components' 

const ImageWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 3%;
  margin-bottom: 3%;
  justify-content: center;

  @media screen and (max-width: 600px) {
    margin-top: 22%;
    margin-bottom: 22%;
  }

  @media screen and (max-width: 1050px) and (min-width: 601 px) {
    margin-top: 12%;
    margin-bottom: 12%;
  }

   @media screen and (max-height: 750px) and (min-width: 1000 px) {
     width: 85%;
   }

`

export default () => <ImageWrapper>
  <img 
    src="https://c1.staticflickr.com/4/3793/32672420514_5de0c70611_k.jpg" 
    width="65%" height="100%" alt="near the green room" />
  <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
</ImageWrapper>
