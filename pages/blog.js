import React from 'react'

import Link from 'next/link'
import styled from 'styled-components'

import Header from '../components/Header'
import SiteHeader from '../components/SiteHeader'
import BlogPreview from '../components/BlogPreview'

const App = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: white;
`
const blogEntries = [
  {
    'title': "Making this site.",
    'date': "March 19, 2017",
    'preview': "A look into some of the awesome javascript tools that made the making of this site easy and fun.",
    'href': '/MakingOf'
  }
]

const blogComponents = blogEntries.map(entry =>
  <BlogPreview 
    title={entry.title} 
    date={entry.date}
    preview={entry.preview}
    href={'/blog' + entry.href} />
)


export default () => <App>
  <Header />
  <SiteHeader />
  { blogComponents }
</App>