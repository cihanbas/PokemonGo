import React from 'react';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {persistor, store} from '@store';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <MainNavigation />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
