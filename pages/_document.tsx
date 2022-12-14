import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Maitree:wght@400;600;700&family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400;1,600;1,900&family=Work+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
