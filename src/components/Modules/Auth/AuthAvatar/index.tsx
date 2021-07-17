import { Avatar, AvatarProps } from '@chakra-ui/react'
import { useAuth } from '../../../../contexts/AuthContext'

interface AuthAvatarProps extends AvatarProps {}

const AuthAvatar: React.FC<AuthAvatarProps> = ({ ...rest }) => {
  const { user } = useAuth()
  return <Avatar src={user?.user_metadata.avatar_url} {...rest} />
}

export default AuthAvatar
