import { supabase } from '../clients/supabase'
import AuthResource from '../resources/AuthResource'

export class PostApi {
  public async create(data: any) {
    console.log('create post', { data })
    const user = AuthResource.user()
    if (!user) {
      return
    }
    return supabase
      .from('posts')
      .insert({
        ...data,
        user_id: user.id,
        type: 'posts'
      })
      .then((res) => {
        console.log('posts', res)
      })
  }

  public async getPostById(id: string) {
    const { data } = await this.from().select('*, users(*)').eq('id', id)
    return data?.[0] as App.Post
  }

  public async getLatestsPosts() {
    const { data } = await this.from()
      .select('*, users(*)')
      .order('created_at', { ascending: false })

    return data || []
  }

  public from() {
    return supabase.from<App.Post>('posts')
  }
}
