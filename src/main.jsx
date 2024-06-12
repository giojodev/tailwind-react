import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className='bg-blue-400 min-h-screen grid place-content-center'>
      <App />
    </section>
    
  </React.StrictMode>,
)
