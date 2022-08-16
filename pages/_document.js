import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto+Slab:wght@300;400;700&display=swap" rel="stylesheet"></link>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Localizado no município de Arcos-MG, o Victor Plaza Hotel possui infra-estrutura moderna com amplas suítes, Internet Wireless, Tv a cabo, ar condicionado. É um hotel aconchegante, onde você encontra conforto, qualidade e praticidade." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
  