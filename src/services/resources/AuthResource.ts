import { UserCredentials } from '@supabase/supabase-js'
import { api } from '../api'
import { supabase } from '../clients/supabase'

interface User {
  id: string
  avatar: string
  cover: string
  email: string
}

class AuthResource {
  private _user!: User

  constructor() {
    supabase.auth.onAuthStateChange((e, session) => {
      if (!session) {
        return
      }
      if (session) {
        if (session.user) {
          this.findOrCreate(session.user.email as string)
        }
      }
    })
  }

  public user() {
    return this._user
  }

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

  private async findOrCreate(email: string) {
    const user = await api.user.findByEmail(email)
    if (user) {
      this._user = user
      return
    }
    if (!user) {
      await api.user.createAuth()
    }

    this._user = await api.user.findByEmail(email)
  }
}

export default new AuthResource()
