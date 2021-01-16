import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  //   static async getInitialProps(ctx) {
  //     //para todas las paginas
  //     const initialProps = await Document.getInitialProps(ctx);
  //     return { ...initialProps };
  //   }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* favicon */}
          {/* webfont */}
          {/* stylesheet */}
          {/* script/js */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
