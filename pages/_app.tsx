import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { GlobalStyles } from '@/ui-kit/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/ui-kit/@themes';
import { Provider as MOBXProvider } from 'mobx-react';
import * as baseStores from '@/ui-kit/base/stores';
import { Messages } from '@/ui-kit/Message';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,200;0,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme.NFTea}>
        <MOBXProvider {...baseStores}>
          <Component {...pageProps} />
          <GlobalStyles />
          <Messages />
        </MOBXProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
