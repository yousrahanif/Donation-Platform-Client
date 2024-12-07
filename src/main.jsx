import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router/Router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/Authprovider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<RouterProvider router={Router} />

</AuthProvider>
  </StrictMode>,
)
