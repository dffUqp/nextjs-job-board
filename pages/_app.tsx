import '../assets/styles/app.css';
import type { AppProps } from 'next/app';
import { persistor, wrapper } from '../store';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Component {...props} />}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  );
}

export default App;
