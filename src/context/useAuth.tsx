import { createContext, FC, ReactNode, useContext, useState } from 'react'

import { SignInDialog } from '../components/Common/SignInDialog/SignInDialog'

type AuthContext = {
  user: any | null
  login: (email: string, password: string) => void
  logout: () => void
  toggleSignInDialog: () => void
  isShowSignInDialog: boolean
}

export const defaultAuthContext: AuthContext = {
  user: null,
  login: () => {
    throw new Error('login function not implemented')
  },
  logout: () => {
    throw new Error('logout function not implemented')
  },
  toggleSignInDialog: () => {
    throw new Error('toggleSignInDialog function not implemented')
  },
  isShowSignInDialog: false,
}

export const authContext = createContext<AuthContext>(defaultAuthContext)
export const useAuth = () => useContext(authContext)

const useAuthProvider = () => {
  const [isShowSignInDialog, setIsShowSignInDialog] = useState(false)
  const [user, setUser] = useState(null)

  const login = (email: string, password: string) => {
    // login logic
  }

  const logout = () => {
    // logout logic
  }

  const toggleSignInDialog = () => {
    setIsShowSignInDialog(!isShowSignInDialog)
  }

  return { user, login, logout, toggleSignInDialog, isShowSignInDialog }
}

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useAuthProvider()

  return (
    <authContext.Provider value={auth}>
      {children}
      <SignInDialog
        isOpen={auth.isShowSignInDialog}
        onClose={() => auth.toggleSignInDialog()}
      />
    </authContext.Provider>
  )
}
