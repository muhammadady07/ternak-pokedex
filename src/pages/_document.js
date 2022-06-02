import Document, { Html, Head, Main, NextScript } from 'next/document';
import { renderStatic } from '../lib/emotion/index';
import { Fragment } from 'react';

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { css, ids } = await renderStatic(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </Fragment>
      ),
    };
  }

  render() {
    <Html lang="id">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}
