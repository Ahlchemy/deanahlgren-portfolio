import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { ScrollToTop } from './components/ScrollToTop'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </HelmetProvider>
  </StrictMode>,
)
