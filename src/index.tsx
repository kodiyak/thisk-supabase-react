import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import reportWebVitals from './reportWebVitals'
import ThemeProvider from './providers/ThemeProvider'
import { BrowserRouter as Router } from 'react-router-dom'
import './services/resources/AuthResource'
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
