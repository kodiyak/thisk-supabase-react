import { UserCredentials } from '@supabase/supabase-js'
import { supabase } from '../clients/supabase'

class AuthResource {
  constructor() {}

  public async login(credentials: UserCredentials) {
    const { error, user, session } = await supabase.auth.signIn({
      provider: 'github',
      ...credentials
    })

    if (error) {
      console.log('error', error)
      return
    }

    console.log({
      user,
      session
    })
  }

  public async logout() {
    return supabase.auth.signOut()
  }
}

export default new AuthResource()
