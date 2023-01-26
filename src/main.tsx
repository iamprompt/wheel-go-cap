import './styles/globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/useAuth'
import AuthRegisterPage from './pages/auth/register'
import SuccessRegisterPage from './pages/auth/register-success'
import ExplorePage from './pages/explore'
import PolicyPage from './pages/policy'
import ProfilePage from './pages/profile'
import RecordsPage from './pages/records'
import ScrollToTop from './utils/scrollToTop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<ExplorePage />} />
            <Route path="/records" element={<RecordsPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="/register" element={<AuthRegisterPage />} />
            <Route path="/register/success" element={<SuccessRegisterPage />} />
            <Route path="/policy" element={<PolicyPage />} />
          </Routes>
        </ScrollToTop>
      </AuthProvider>
    </Router>
  </React.StrictMode>
)
