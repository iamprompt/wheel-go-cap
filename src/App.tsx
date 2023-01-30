import { Capacitor } from '@capacitor/core'
import { Keyboard } from '@capacitor/keyboard'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/useAuth'
import AuthRegisterPage from './pages/auth/register'
import SuccessRegisterPage from './pages/auth/register-success'
import AuthSignInPage from './pages/auth/signin'
import ExplorePage from './pages/explore'
import PolicyPage from './pages/policy'
import EditProfilePage from './pages/profile/edit-profile'
import ProfilePage from './pages/profile/profile'
import RecordsPage from './pages/records'
import ScrollToTop from './utils/scrollToTop'

const App = () => {
  if (Capacitor.getPlatform() !== 'web') {
    Keyboard.addListener('keyboardDidShow', (info) => {
      console.log('keyboardDidShow', info)

      const rootElement = document.getElementById('root')

      if (rootElement && info.keyboardHeight) {
        rootElement.style.paddingBottom = `${info.keyboardHeight}px`
      }
    })

    Keyboard.addListener('keyboardDidHide', () => {
      console.log('keyboardDidHide')

      const rootElement = document.getElementById('root')

      if (rootElement) {
        rootElement.style.paddingBottom = '0px'
      }
    })
  }

  return (
    <Router>
      <AuthProvider>
        <ScrollToTop>
          <Routes>
            <Route index element={<ExplorePage />} />
            <Route path="records" element={<RecordsPage />} />
            <Route path="profile">
              <Route index element={<ProfilePage />} />
              <Route path="edit" element={<EditProfilePage />} />
            </Route>

            <Route path="auth">
              <Route path="login" element={<AuthSignInPage />} />
              <Route path="register">
                <Route index element={<AuthRegisterPage />} />
                <Route path="success" element={<SuccessRegisterPage />} />
              </Route>
              <Route
                path="forget-password"
                element={<div>Forget Password</div>}
              />
            </Route>
            <Route path="policy" element={<PolicyPage />} />

            {/* Fallback Path */}
            <Route
              path="*"
              element={
                <>
                  <div>404</div>
                  <div>Page not found</div>
                  <Link to="/">Go to home</Link>
                </>
              }
            />
          </Routes>
        </ScrollToTop>
      </AuthProvider>
    </Router>
  )
}

export default App
