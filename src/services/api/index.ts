import { PostApi } from './PostApi'
import { UserApi } from './UserApi'

export const api = {
  post: new PostApi(),
  user: new UserApi()
}
