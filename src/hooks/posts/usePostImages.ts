import { useCallback, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { supabase } from '../../services/clients/supabase'

export function usePostImages(
  post: App.Post,
  initialPostImages: App.Upload.PostImage[] = []
) {
  const [postImages, setPostImages] = useState(initialPostImages)

  const addPostImage = useCallback((nextPostImage: App.Upload.PostImage[]) => {
    setPostImages((oldPostImages) => [...oldPostImages, ...nextPostImage])
  }, [])

  useEffect(() => {
    const query = `posts_images:post_id=eq.${post.id}`

    const subscriber = supabase
      .from<App.Upload.PostImage>(query)
      .on('INSERT', (payload) => {
        api.upload
          .fromPosts()
          .select('*, uploads(*)')
          .eq('post_id', post.id)
          .eq('upload_id', payload.new.upload_id)
          .then((res) => {
            if (res.data) {
              addPostImage(res.data)
            }
          })
      })
      .subscribe()

    return () => {
      subscriber.off('INSERT')
    }
  }, [])

  return { postImages }
}
