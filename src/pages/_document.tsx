import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    console.log('MyDocument.render()');

    return (
      <Html lang={AppConfig.locale} data-t="test">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;