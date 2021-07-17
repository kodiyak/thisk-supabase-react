import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { supabase } from '../../services/clients/supabase'

export function useTimelinePosts() {
  const [posts, setPosts] = useState<App.Post[]>([])

  useEffect(() => {
    api.post.getLatestsPosts().then(setPosts)

    const subscription = api.post
      .from()
      .on('INSERT', async (payload) => {
        const post = await api.post.getPostById(payload.new.id)
        setPosts((oldPosts) => [post, ...oldPosts])
      })
      .subscribe()

    return () => {
      subscription.off('INSERT')
    }
  }, [])

  return { posts }
}
