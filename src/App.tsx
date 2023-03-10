import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/useAuth'
import { GeolocationProvider } from './context/useGeolocation'
import AuthRegisterPage from './pages/auth/register'
import SuccessRegisterPage from './pages/auth/register-success'
import AuthSignInPage from './pages/auth/signin'
import ExplorePage from './pages/explore'
import SearchHomePage from './pages/explore/searchHome'
import FaqPage from './pages/faq'
import PolicyPage from './pages/policy'
import EditProfilePage from './pages/profile/edit-profile'
import ProfilePage from './pages/profile/profile'
import SelectDisplayNamePage from './pages/profile/select-display-name'
import RecordsPage from './pages/records'
import ConfirmDeletePage from './pages/settings/confirm-delete'
import SelectLanguagesPage from './pages/settings/languages'
import SettingsPage from './pages/settings/settings'
import ScrollToTop from './utils/scrollToTop'

const App = () => {
  return (
    <Router>
      <GeolocationProvider>
        <AuthProvider>
          <ScrollToTop>
            <Routes>
              <Route index element={<ExplorePage />} />

              <Route path="explore">
                <Route path="search" element={<SearchHomePage />} />
              </Route>

              <Route path="records" element={<RecordsPage />} />
              <Route path="profile">
                <Route index element={<ProfilePage />} />
                <Route path="edit">
                  <Route index element={<EditProfilePage />} />
                  <Route
                    path="display-name"
                    element={<SelectDisplayNamePage />}
                  />
                </Route>
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

              <Route path="settings">
                <Route index element={<SettingsPage />} />
                <Route path="languages" element={<SelectLanguagesPage />} />
                <Route path="delete-account" element={<ConfirmDeletePage />} />
              </Route>

              <Route path="faq" element={<FaqPage />} />

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
      </GeolocationProvider>
    </Router>
  )
}

export default App
