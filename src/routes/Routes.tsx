import { useMemo } from 'react'
import { useAuth } from '../contexts/AuthContext'
import AuthRoutes from './AuthRoutes'
import DefaultRoutes from './DefaultRoutes'

const Routes: React.FC = () => {
  const { isAuth } = useAuth()
  const Component = useMemo(() => {
    if (isAuth) return <AuthRoutes />
    if (!isAuth) return <DefaultRoutes />
  }, [isAuth])

  return <>{Component}</>
}

export default Routes
