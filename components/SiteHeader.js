import React from 'react'

import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 28px;
  margin-top: 3%;

  @media screen and (max-width: 600px) {
    margin-top:12%
  }
`

const Title = styled.div`
  align-self: center;

  a {
    color: #373f51;
    text-decoration: none; 
  }

  a:visited {
    color:#373f51;
  }
`

const SubHead = styled.div`
  align-self: center;
  font-size: 18px;
  color: #2e86ab;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

export default () => <Header>
    <Title> <Link href ="/"> JACK DINGILIAN </Link> </Title>
    <SubHead> Sometimes I post code and stuff here </SubHead>
</Header>