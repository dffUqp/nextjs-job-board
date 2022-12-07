import '../assets/styles/app.css';
import type { AppProps } from 'next/app';
import { persistor, wrapper } from '../store';

import { Provider } from 'react-redux';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { PersistGate } from 'redux-persist/integration/react';
import { NextPage } from 'next';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <>
      <Head>
        <title>{'Job Board'}</title>
      </Head>
      <NextNProgress />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Component {...props} />}>
          <Component {...props} />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
