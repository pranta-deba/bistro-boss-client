import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/Routers'
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast'
import AuthProvider from './provider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-2xl mx-auto'>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
          <Toaster />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
