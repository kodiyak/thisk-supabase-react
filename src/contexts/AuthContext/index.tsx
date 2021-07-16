import { User } from '@supabase/supabase-js'
import { useMemo, useEffect, useState, createContext, useContext } from 'react'

import { supabase } from '../../services/clients/supabase'

interface AuthContextProps {
  user: User | undefined
  isAuth: boolean
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>()
  const isAuth = useMemo(() => !!user, [user])

  useEffect(() => {
    const currentSession = supabase.auth.session()
    if (currentSession && currentSession.user) {
      setUser(currentSession.user)
    }

    const { data } = supabase.auth.onAuthStateChange((e, session) => {
      if (!session) {
        setUser(undefined)
        return
      }
      if (session) {
        console.log({ session })
        if (session.user) {
          setUser(session.user)
        }
      }
    })

    return () => {
      data?.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
