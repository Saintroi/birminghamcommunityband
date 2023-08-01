import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import config from './config';

import './index.css';

import registerServiceWorker from './serviceWorker';


const client = new ApolloClient({
  uri: config.serverUrl + '/graphql',
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers
      }
    }));
  }
});

const container = document.getElementById('root');

const root = createRoot(container);


root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
);

registerServiceWorker();
