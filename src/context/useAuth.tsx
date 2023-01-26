import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useLocation } from 'react-router-dom'

import { SignInDialog } from '../components/Common/SignInDialog/SignInDialog'

type AuthContext = {
  user: any | null
  login: (email: string, password: string) => void
  loginWithGoogle: () => void
  loginWithLine: () => void
  loginWithFacebook: () => void
  loginWithApple: () => void
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
  loginWithGoogle: () => {
    throw new Error('loginWithGoogle function not implemented')
  },
  loginWithLine: () => {
    throw new Error('loginWithLine function not implemented')
  },
  loginWithFacebook: () => {
    throw new Error('loginWithFacebook function not implemented')
  },
  loginWithApple: () => {
    throw new Error('loginWithApple function not implemented')
  },
  toggleSignInDialog: () => {
    throw new Error('toggleSignInDialog function not implemented')
  },
  isShowSignInDialog: false,
}

export const authContext = createContext<AuthContext>(defaultAuthContext)
export const useAuth = () => useContext(authContext)

const defaultUser = {
  name: 'John Doe',
  email: '',
  picture: '',
}

const useAuthProvider = () => {
  const { pathname } = useLocation()
  const [isShowSignInDialog, setIsShowSignInDialog] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (isShowSignInDialog) {
      setIsShowSignInDialog(false)
    }
  }, [pathname])

  const login = (email: string, password: string) => {
    // login logic
    setUser(defaultUser)
    setIsShowSignInDialog(false)
  }

  const loginWithGoogle = () => {
    // login with google logic
    setUser(defaultUser)
    setIsShowSignInDialog(false)
  }

  const loginWithLine = () => {
    // login with line logic
    setUser(defaultUser)
    setIsShowSignInDialog(false)
  }

  const loginWithFacebook = () => {
    // login with facebook logic
    setUser(defaultUser)
    setIsShowSignInDialog(false)
  }

  const loginWithApple = () => {
    // login with apple logic
    setUser(defaultUser)
    setIsShowSignInDialog(false)
  }

  const logout = () => {
    // logout logic
    setUser(null)
  }

  const toggleSignInDialog = () => {
    setIsShowSignInDialog(!isShowSignInDialog)
  }

  return {
    user,
    login,
    loginWithGoogle,
    loginWithLine,
    loginWithFacebook,
    loginWithApple,
    logout,
    toggleSignInDialog,
    isShowSignInDialog,
  }
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
