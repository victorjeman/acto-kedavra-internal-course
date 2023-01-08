import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:fonts.css'

import App from './app'

import '@/common/styles/variables.scss'
import '@/common/styles/utilities.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
