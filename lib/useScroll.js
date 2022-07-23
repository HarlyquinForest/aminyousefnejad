import { useState, useEffect } from 'react'

const useScroll = () => {
    // storing this to get the scroll direction
    const [lastScrollTop, setLastScrollTop] = useState(0)
    // the offset of the window.body
    const [bodyOffset, setBodyOffset] = useState(undefined)
    // the vertical direction
    const [scrollY, setScrollY] = useState()
    // the horizontal direction
    const [scrollX, setScrollX] = useState()
    // scroll direction would be either up or down
    const [scrollDirection, setScrollDirection] = useState()

    useEffect(() => {
        const listener = e => {
            setBodyOffset(document.body.getBoundingClientRect())
            if (bodyOffset == undefined) return
            setScrollY(-bodyOffset.top)
            setScrollX(bodyOffset.left)
            setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up')
            setLastScrollTop(-bodyOffset.top)
        }
        window.addEventListener('scroll', listener)
        return () => {
            window.removeEventListener('scroll', listener)
        }
    })

    return {
        scrollY,
        scrollX,
        scrollDirection
    }
}
export default useScroll
