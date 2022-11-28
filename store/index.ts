import { createWrapper } from 'next-redux-wrapper';
import jobReducer from './slices/jobsSlice';
import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  Persistor,
} from 'redux-persist';

export let persistor: Persistor;

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const makeStore = () => {
  const isServer = typeof window == 'undefined';

  if (isServer) {
    return configureStore({
      reducer: { jobReducer: jobReducer },
      middleware: customizedMiddleware,
    });
  } else {
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'nextjs',
      storage,
      blacklist: ['data'],
    };

    const persistedReducer = persistReducer(persistConfig, jobReducer);

    const store = configureStore({
      reducer: { jobReducer: persistedReducer },
      middleware: customizedMiddleware,
    });

    persistor = persistStore(store);

    return store;
  }
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
