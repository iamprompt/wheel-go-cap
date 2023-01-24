import './styles/globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ExplorePage from './pages/explore'
import HiPage from './pages/hi'
import ProfilePage from './pages/profile'
import ScrollToTop from './utils/scrollToTop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/hi" element={<HiPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  </React.StrictMode>
)
