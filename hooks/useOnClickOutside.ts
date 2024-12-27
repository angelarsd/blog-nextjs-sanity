import { RefObject, useEffect } from 'react'

export default function useOnClickOutside(
  refMenu: RefObject<HTMLElement>,
  refButton: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !refMenu.current ||
        refMenu.current.contains(event.target as Node) ||
        !refButton.current ||
        refButton.current.contains(event.target as Node)
      ) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [refMenu, refButton, handler])
}
