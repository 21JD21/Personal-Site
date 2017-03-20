import Head from 'next/head'

export default ({title}) => (
  <Head>
    <title>{title}</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <style>{globalStyle}</style>
  </Head>
);

const globalStyle = `
  html {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }
`
