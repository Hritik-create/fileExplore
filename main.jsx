import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Preview from './components/preview'
import Error from './components/error'

import {Provider} from 'react-redux'
import { persistor, store } from './util/appStore.js';
import { PersistGate } from 'redux-persist/integration/react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Explore from './components/explore/index.jsx'

const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
      children: [
          {
              path: "/explore",
              element: <Explore/>
          },
      ]
  }, 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={appRouter} />
    </PersistGate>
    </Provider>
  </StrictMode>,
)