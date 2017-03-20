import React from 'react'

import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  margin-left: 15%;
  margin-right: 15%;
`

const LinkStyle = styled.div`
  display: flex;
  flex: 1;
  font-size: 14px;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 5%; 

  a {
    display: flex;
    color: #999;
    text-decoration: none; 
  }

  a:visited {
    color:#999;
  }

  a:hover {
    color: #2e86ab;
  }

`

export default () => 
  <Nav>
    <LinkStyle> <Link prefetch href="/about"> ABOUT </Link> </LinkStyle>
    <LinkStyle> <Link href="https://github.com/21JD21"> CODE </Link> </LinkStyle>
    <LinkStyle> <Link prefetch href="/photos"> PHOTOS </Link> </LinkStyle>
    <LinkStyle> <Link prefetch href="/blog"> BLOG </Link> </LinkStyle>
  </Nav>