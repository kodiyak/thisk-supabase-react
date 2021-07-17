declare namespace App {
  export interface Upload {
    id: string
    title: string
    type: string
    bucket: string
    path: string
  }

  export namespace Upload {
    export interface PostImage {
      upload_id: string
      post_id: string
      uploads: App.Upload
      posts: App.Post
    }
  }
}
