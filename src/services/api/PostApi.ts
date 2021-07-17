import { api } from '.'
import { supabase } from '../clients/supabase'
import AuthResource from '../resources/AuthResource'
import * as uuid from 'uuid'

export class PostApi {
  public async create(data: any, pictures: File[] = []) {
    // console.log('create post', { data })
    const user = AuthResource.user()
    if (!user) {
      return
    }
    return this.from()
      .insert({
        ...data,
        user_id: user.id,
        type: 'posts'
      })
      .then(async (res) => {
        if (!res.data) return res

        const [post] = res.data
        await this.uploadPictures(post, pictures)

        // console.log('posts', res)
      })
  }

  private async uploadPictures(post: App.Post, pictures: File[]) {
    const paths: string[] = []
    for (const picture of pictures) {
      const path = `${post.id}/${uuid.v4()}.webp`
      await api.upload.exec('project', path, picture)

      paths.push(path)
    }

    return await api.upload
      .create(
        'project',
        paths.map((path, index) => {
          return {
            path,
            type: pictures[index].type
          }
        })
      )
      .then(async (uploads) => {
        if (!uploads) return uploads
        await this.fromImages().insert(
          uploads.map((upload) => {
            return {
              post_id: post.id,
              upload_id: upload.id
            }
          })
        )

        return uploads
      })
  }

  public async getPostById(id: string) {
    const { data } = await this.selectPost().eq('id', id)
    return data?.[0] as App.Post
  }

  public async getLatestsPosts() {
    const { data } = await this.selectPost().order('created_at', {
      ascending: false
    })

    return data || []
  }

  public selectPost() {
    return this.from().select('*, users(*), posts_images(*, uploads(*))')
  }

  public from() {
    return supabase.from<App.Post>('posts')
  }

  public fromImages() {
    return supabase.from<App.Upload.PostImage>('posts_images')
  }
}
