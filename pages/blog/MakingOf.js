import React from 'react'

import Link from 'next/link'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

import Header from '../../components/Header'
import SiteHeader from '../../components/SiteHeader'

const App = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: 5%;
`

const CodeStyle = styled.div`
  margin-top: 1%;
  margin-bottom: 1%;
`

const BlogPost = styled.div`
  line-height: 120%;
  margin-top: 3%;
  width: 60%;
  margin: 0 auto;
  
  @media screen and (max-width: 600px) {
    width: 80%;
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

const CodeBlock = ({code}) => <CodeStyle>
  <SyntaxHighlighter language='javascript' style={docco}>{code}</SyntaxHighlighter>
</CodeStyle>

const pagesStructure = 
`-pages
    -about.js
    -blog.js
    -index.js
    -photos.js
    -blog (folder)
        -MakingOf.js
    -_document.js (ignore for now)`

const SCCode = 
`import React from 'react'

import styled from 'styled-components'

const Frame = styled.div\`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  margin-bottom: 7%;
  margin-top: 3%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
\`

const Image = styled.div\`
  margin: 0 auto;
\`

const Location = styled.div\`
  color: #373f51;
  display: flex;
  margin-left: 0.5%;
\`

const DateWrapper = styled.div\`
  color: #2e86ab;
  margin-left: 5%;
\`

const Row = styled.div\`
  display: flex;
  width: 100%;
  margin-left: 15%;
  margin-right:15%;
  margin-top: 0.5%;

  @media screen and (max-width: 600px) {
    margin-left: 7.5%;
    margin-right: 7.5%;
  }
\`

export default ({src, width, location, date}) => 
  <Frame>
    <Row>
      <Image>
        <img
          src={src}
          width={width} 
          height="100%" />
      </Image>
    </Row>
    <Row>
      <Location>{location}</Location>
      <DateWrapper>{date}</DateWrapper>
    </Row>
  </Frame>`

export default () => <App> 
  <Header />
  <SiteHeader />
  <BlogPost>
    <p>
      I'm really excited about some of the tools I used to put this site together. There are three things in particular I want to talk about:
      <Link href="https://github.com/zeit/next.js/"> next.js </Link>, 
      <Link href="https://github.com/styled-components/styled-components"> styled-components </Link>, 
      and <Link href="https://zeit.co/now"> now </Link>.  
      You can view the source code 
      <Link href="https://github.com/21JD21"> here </Link>. 
    </p>
    <p>
      Next.js is a javascript framework that gives you server rendering for react apps out of the box.
      Along with <Link href="https://github.com/facebookincubator/create-react-app/"> create-react-app </Link>
      this makes it much easier to start building with react with no configuration than it was a year ago. 
      Next.js also gives you a really clean solution for routing
      straight out of the box.  It does this by using the file-system as a router, meaning every .js file in the ./pages/ directory
      in your project is returned for the route matching its filepath.  For example this is what ./pages/ looks like for this site:
      <CodeBlock code={pagesStructure} />
      So when you go to <Link href="/about"> jack.dingilian.com/about </Link> next serves you
      whatever is in ./pages/about.js.  This works for nested folders as well ie. this page lives in ./pages/blog/MakingOf.js
      There's a lot more to talk about with next, but that covers most of what this project utilized.  To learn more check out 
      its creator Guillermo Rauch's talks at
      <Link href="https://www.youtube.com/watch?v=__b6k2pR3Tg"> Nodevember </Link> and
      <Link href="https://www.youtube.com/watch?v=evaMpdSiZKk"> ReactConf </Link> or
      check out some example projects on 
       <Link href="https://github.com/zeit/next.js/tree/master/examples"> github </Link>
      (ie.  <Link href="https://github.com/zeit/next.js/tree/master/examples/with-redux"> w/ redux </Link>,
      <Link href="https://github.com/zeit/next.js/tree/master/examples/with-apollo"> w/ apollo </Link>)
    </p>
    <p>
      Another tool that helped me keep this clean was 
      <Link href="https://github.com/styled-components/styled-components"> styled-components </Link>.
      Styled-components work by letting you use css with ES6 template literals to put your styling right alongside your js in your
      React components.  This ends up looking like this:
      <CodeBlock code={SCCode} />
      As you can see this leaves you css really tightly coupled with you React components.  It also gives you really
      clean and intuitive jsx.  This project didn't even touch perhaps the most powerful aspect of styled-components - 
      the ability to reference js variable in your css since it is inside of a template literal.  I did run into a slight 
      problem with server rendering styled-components (w/ next.js). Upon the initial load the screen would flash unstyled content
      before styling itself.  This is a known issue and was solved
      <Link href="https://github.com/zeit/next.js/tree/master/examples/with-styled-components"> here </Link>.
      This is why I have the _document.js in my pages folder above. If you don't want to deal with this issue it's worth taking a
      look at <Link href="https://github.com/zeit/styled-jsx"> styled-jsx </Link>,
      a similar tool (from the creators of next) that doesn't have this problem.  One more thing: if you use styled-components
      Atom, VsCode, and Sublime have plugins that will give you the proper CSS syntax highlighting (unlike above).
    </p>
    <p>
      Finally, deploying with Now.  All you have to do is install now, npm install -g now, build your project (npm run build if 
      you have "build": "next build" in your package.json scripts as recommended), make sure your package.json has "main": "./pages/index.js",
      and then enter now in the command line.  That's it and for small projects it's free!    
    </p>
  </BlogPost>
</App>