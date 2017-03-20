import React from 'react'

import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  margin-top: 5%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

 @media screen and (max-width: 600px) {
    width: 80%;
  }

`

const BlogTitle = styled.div`
  color: #373f51;
  font-size: 18px;
  width: 100%;
  a {
    color: #373f51;
    text-decoration: none; 
  }

  a:hover {  
    text-decoration: underline; 
  }

  a:visited {
    color:#373f51;
  }
`
const Date = styled.div`
  color: #2e86ab;
  font-size: 14px;
`
const Preview = styled.div`
  width: 75%
  font-size: 16px;
`
const LeftCol = styled.div`
  width: 25%
  display: flex;
  flex-flow: row wrap;
`

// TODO fix this:
// I'm hardcoding the title for now bc for some reason if i try to give Link and <a>
// or { title } it throws: 
// Invariant Violation: React.Children.only expected to receive a single React element child.
// even though it only has one child
export default ({ title, date, preview, href }) =>
  <Wrapper>
    <LeftCol>
      <BlogTitle> <Link prefetch href={href}> Making this site </Link> </BlogTitle>
      <Date> { date } </Date>
    </LeftCol>
    <Preview> { preview } </Preview>
  </Wrapper>
