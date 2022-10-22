import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import {store, persistor} from './store/Index'
import Loader from './components/Loader';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
                <App />
            </PersistGate>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

