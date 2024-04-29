import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CookieManagerProvider } from './context/cache.context.tsx'
import './index.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CookieManagerProvider>
     <QueryClientProvider client={queryClient} >
     {/* <ReactQueryDevtools client={queryClient} initialIsOpen={false} /> */}
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="" >
          {/* El browser router es la configurtacion de react-router-dom para manejar las rutas de la aplicacion */}
          <App />
        </NextThemesProvider>
      </NextUIProvider>
    </QueryClientProvider>
    </CookieManagerProvider>
  </React.StrictMode>,
)
