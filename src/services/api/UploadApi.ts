import { supabase } from '../clients/supabase'

type Bucket = 'project'

export class UploadApi {
  public async exec(bucket: Bucket, path: string, file: File) {
    return this.fromBucket(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false
      })
      .then((res) => {
        // console.log('res', res)
        return res
      })
  }

  public async create(bucket: Bucket, upload: Partial<App.Upload>[]) {
    const { data } = await this.from().insert(
      upload.map((item) => {
        return {
          ...item,
          bucket
        }
      })
    )

    if (!data) return
    return data
  }

  public fromBucket(bucket: Bucket) {
    return supabase.storage.from(bucket)
  }

  public async getPostPictures(post: App.Post) {
    const { data } = await this.fromPosts()
      .select('*, uploads(*)')
      .eq('post_id', post.id)
    if (!data) return

    return data
  }

  public from() {
    return supabase.from<App.Upload>('uploads')
  }

  public fromPosts() {
    return supabase.from<App.Upload.PostImage>('posts_images')
  }
}
