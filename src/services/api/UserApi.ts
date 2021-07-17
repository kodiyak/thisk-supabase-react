import { supabase } from '../clients/supabase'

export class UserApi {
  public async findByEmail(email: string) {
    const { data } = await supabase.from('users').select('*').eq('email', email)
    if (data) {
      return data[0]
    }
  }

  public async findById(uuid: string) {
    const { data } = await supabase.from('users').select('*').eq('id', uuid)
    if (data) {
      return data[0]
    }
  }

  public async createAuth() {
    const user = supabase.auth.user()
    if (!user) {
      return
    }
    return supabase.from('users').insert({
      email: user.email,
      avatar: user.user_metadata.avatar_url
    })
  }
}
