import { useEffect, useRef } from 'react'

const useCounter = (callback: () => void, end: number, target: number, initDelay: number) => {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const delay = target > end - 10 ? 100 : initDelay
    const executeCallback = () => {
      savedCallback.current()
    }

    const timerId = setInterval(executeCallback, delay)
    if (target === end) clearInterval(timerId)

    return () => clearInterval(timerId)
  }, [end, target])
}

export default useCounter
