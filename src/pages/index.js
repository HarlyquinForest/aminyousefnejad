import { useEffect, useState } from 'react'
import Aboutme from '../common/modules/Aboutme'
import Footer from '../common/modules/Footer'
import Intro from '../common/modules/Intro'
import Navbar from '../common/modules/Navbar'
import SocialLinks from '../common/modules/SocialLinks'
import { useStateContext } from '../ContextProvider'
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
