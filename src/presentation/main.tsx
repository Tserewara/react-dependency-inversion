import React from 'react'
import ReactDOM from 'react-dom/client'
import AppDI from './AppDI.tsx'


import './index.css'
import FetchHttpClient from '../infra/FetchHttpClient.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppDI httpClient={new FetchHttpClient()} />
  </React.StrictMode>,
)
