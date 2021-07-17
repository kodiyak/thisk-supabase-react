import { useCallback, useEffect, useMemo, useState } from 'react'

export function useIncrementIndex(startIndex: number, max: number, delay = 1000) {
  const [currentIndex, setCurrentIndex] = useState(startIndex)
  const [interval, setIntervalState] = useState(setInterval(() => {}, 0))

  const addIndex = useCallback(() => {
    setCurrentIndex((oldIndex) => {
      return oldIndex + 1
    })
  }, [])

  const start = useCallback(() => {
    if (max > 0 && startIndex < max) {
      clearInterval(interval)
      setIntervalState(
        setInterval(() => {
          addIndex()
        }, delay)
      )
    }
  }, [startIndex, max, delay])

  useEffect(() => {
    if (currentIndex >= max) {
      clearInterval(interval)
    }
  }, [currentIndex])

  return { currentIndex, start }
}
