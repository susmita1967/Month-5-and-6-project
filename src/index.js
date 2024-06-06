import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProviderWrapper } from './apolloClient';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProviderWrapper>
      <App />
    </ApolloProviderWrapper>
  </React.StrictMode>
);
