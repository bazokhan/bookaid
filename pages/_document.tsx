// https://github.com/vercel/next.js/blob/canary/examples/with-facebook-pixel/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Bookaid help you manage your accounting books."
          />
          <meta
            name="keywords"
            content="accounting, budget, books, transactions"
          />
        </Head>
        <body className="relative">
          <div
            id="modal"
            className="fixed w-full h-full z-50 pointer-events-none"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
