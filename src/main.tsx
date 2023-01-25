import './styles/globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/useAuth'
import ExplorePage from './pages/explore'
import ProfilePage from './pages/profile'
import RecordsPage from './pages/records'
import ScrollToTop from './utils/scrollToTop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<ExplorePage />} />
            <Route path="/records" element={<RecordsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </AuthProvider>
  </React.StrictMode>
)
