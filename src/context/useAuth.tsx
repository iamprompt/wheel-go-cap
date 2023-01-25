import { createContext, FC, ReactNode, useContext, useState } from 'react'

type AuthContext = {
  user: any | null
  login: (email: string, password: string) => void
  logout: () => void
}

export const defaultAuthContext: AuthContext = {
  user: null,
  login: () => {
    throw new Error('login function not implemented')
  },
  logout: () => {
    throw new Error('logout function not implemented')
  },
}

export const authContext = createContext<AuthContext>(defaultAuthContext)
export const useAuth = () => useContext(authContext)

const useAuthProvider = () => {
  const [user, setUser] = useState(null)

  const login = (email: string, password: string) => {
    // login logic
  }

  const logout = () => {
    // logout logic
  }

  return { user, login, logout }
}

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useAuthProvider()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
