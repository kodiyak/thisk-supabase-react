declare namespace App {
  export interface Post {
    id: string
    type: 'posts'
    content: any
    user_id: string
    created_at: Date
    users: App.User
  }
}
