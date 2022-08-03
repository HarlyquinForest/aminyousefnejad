import { useEffect, useState } from 'react'
import Aboutme from '../features/Aboutme'
import Footer from '../features/Footer'
import Intro from '../features/Intro'
import Navbar from '../features/Navbar'
import SocialLinks from '../components/SocialLinks'
import { useStateContext } from '../context/ContextProvider'
const Page = () => {
    const { mobile, setMobile, screenSize, setScreenSize } = useStateContext()
    const handleResize = () => setScreenSize(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        if (screenSize <= 768) setMobile(true)
        else setMobile(false)
    }, [screenSize])
    return (
        <>
            <div>
                <Intro />
                <Aboutme />
                <SocialLinks />
            </div>
        </>
    )
}
export default Page
