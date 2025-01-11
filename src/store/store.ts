import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {reduxStorage} from './storage';
import cardReducer from './features/cardsSlice';
import {pokemonApi} from '@services';

const persistConfig = {
  key: 'm4.0.2',
  storage: reduxStorage,
  blacklist: ['auth', 'sortFilter'],
};
const rootReducer = combineReducers({
  cards: cardReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(pokemonApi.middleware),
});

const persistor = persistStore(store);
// state and dispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, persistor};
