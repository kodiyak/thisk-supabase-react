import { PostApi } from './PostApi'
import { UploadApi } from './UploadApi'
import { UserApi } from './UserApi'

export const api = {
  post: new PostApi(),
  user: new UserApi(),
  upload: new UploadApi()
}
