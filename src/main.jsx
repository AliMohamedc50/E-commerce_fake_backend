import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import {persistor, store } from './Store/index.js'
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="loading" persistor={persistor}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
