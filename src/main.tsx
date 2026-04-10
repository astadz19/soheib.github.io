import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './i18n/config'

import './styles/global.css'

document.documentElement.classList.add('js')

const baseUrl = import.meta.env.BASE_URL
const routerBasename =
  baseUrl === '/' ? '/' : baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

