import { useState, useCallback, useEffect } from 'react'

export function useBlobUrl(file: File) {
  let fileUrl = ''
  const [blobUrl, setBlobUrl] = useState<string>()

  const revoke = useCallback(() => {
    if (fileUrl.length > 0) {
      URL.revokeObjectURL(fileUrl)
      setBlobUrl(undefined)
      fileUrl = ''
    }
  }, [file])

  const generate = useCallback(() => {
    const url = URL.createObjectURL(file)
    fileUrl = url

    setBlobUrl(url)
  }, [blobUrl, file])

  useEffect(() => {
    generate()
    return () => {
      revoke()
    }
  }, [file])

  return { blobUrl, revoke, generate }
}
