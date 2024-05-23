import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeProvider } from './store/Theme.jsx'
// import { TaskProvider } from './store/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <TaskProvider> */}
      hii
         <App/>
      {/* </TaskProvider> */}
   
    </ThemeProvider>
   
  </React.StrictMode>,
)
