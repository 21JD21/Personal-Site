import React from 'react'

import Link from 'next/link'
import styled from 'styled-components'

const BioWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 3%;
  margin-bottom: 5%;
  font-size: 18px;
  line-height: 120%;

  @media screen and (max-width: 600px) {
    width: 80%;
    margin-top: 8%;
    text-align: center;
  }

  a {
    color: #999;
    text-decoration: none; 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; 
  }

  a:visited {
    color:#999;
  }

  a:hover {
    color: #2e86ab;
  }
`

export default () => 
  <BioWrapper>
    I am a professional Software Developer.  
    My professional interests include functional programming, distributed systems, and increasing my data science/math knowledge.
    I went to school at the University of Virginia, where I double majored in Computer Science and Economics. 
    This site (<Link href="https://github.com/21JD21"> src </Link>) is made with React, 
    <Link href="https://github.com/zeit/next.js/"> next.js </Link>, 
    <Link href="https://github.com/styled-components/styled-components"> styled-components </Link>, 
    and deployed with <Link href="https://zeit.co/now"> now </Link>.
    Check out my post <Link href="/blog/MakingOf">here </Link>
    for a little more about why I love these tools for quick sites like this.
  </BioWrapper>