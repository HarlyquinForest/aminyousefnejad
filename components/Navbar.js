import NextLink from 'next/link'
import Button from './Button'
import Logo from './Logo'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useStateContext } from '../context/ContextProvider'
import useScroll from '../lib/useScroll'
import { AnimatePresence, motion } from 'framer-motion'
const NavItem = ({ title, path }) => {
    return (
        <NextLink href={path} key={title}>
            <a className="text-light-gray p-2 font-ligth hover:text-primary hover:underline underline-offset-8 inline-block">
                {title}
            </a>
        </NextLink>
    )
}
const styles = {
    active: {
        visibility: 'visible',
        transition: 'all 0.5s'
    },
    hidden: {
        visibility: 'hidden',
        transition: 'all 0.5s',
        transform: 'translateY(-100%)'
    }
}
const Navbar = path => {
    const { mobile, setMobile, screenSize, setScreenSize } = useStateContext()
    const { y, x, scrollDirection } = useScroll()
    const [navStyle, setNavStyle] = useState(styles.active)
    const [activeMenu, setActiveMenu] = useState(false)

    useEffect(() => {
        if (scrollDirection === 'down' || scrollDirection === undefined)
            setNavStyle(styles.active)
        else setNavStyle(styles.hidden)
    }, [scrollDirection])

    const handleMobileMenu = () => {
        setActiveMenu(!activeMenu)
    }
    return (
        <div
            className="flex justify-between items-center fixed top-0 w-full py-5 px-10 font-body z-10 bg-half-transparent backdrop-blur-lg firefox:bg-main-bg firefox:bg-opacity-75"
            style={navStyle}
        >
            <Logo />
            <div className="flex flex-row justify-between items-center">
                {mobile ? (
                    <Button
                        icon={
                            activeMenu ? <AiOutlineClose /> : <AiOutlineMenu />
                        }
                        bgColor="transparent"
                        color="primary"
                        borderRadius="5px"
                        clickHandler={handleMobileMenu}
                    />
                ) : (
                    <div className="flex flex-row justify-between w-400 ">
                        <NavItem title="درباره من" path="/#about" />
                        <NavItem title="بلاگ" path="/#blog" />
                        <NavItem title="رزومه" path="https://quera.org/qcv/" />
                        <NavItem title="پروژه ها " path="/#work" />
                        <span className="">
                            <a href="/#contact">
                                <Button
                                    bgColor="primary"
                                    color="primary"
                                    size="sm"
                                    borderRadius="5px"
                                    key="contact"
                                    text="تماس با من"
                                />
                            </a>
                        </span>
                    </div>
                )}
                {activeMenu && (
                    <AnimatePresence>
                        <div className="absolute w-full h-screen left-0 top-20 bg-[#282828] p-3 text-dark-gray">
                            <motion.div
                                initial={{ width: 0, x: -1, opacity: 0 }}
                                animate={{
                                    width: '100%',
                                    x: 0,
                                    opacity: 1,
                                    transition: 0.5
                                }}
                            >
                                <div className="flex flex-col divide-y-1 divide-dark-gray">
                                    <NextLink href="/#about">
                                        <a className="py-2">درباره من </a>
                                    </NextLink>
                                    <NextLink href="/#blog">
                                        <a className="py-2">بلاگ</a>
                                    </NextLink>
                                    <NextLink href="https://quera.org/qcv/">
                                        <a className="py-2">رزومه</a>
                                    </NextLink>
                                    <NextLink href="/#work">
                                        <a className="py-2">پروژه ها</a>
                                    </NextLink>
                                </div>
                            </motion.div>
                        </div>
                    </AnimatePresence>
                )}
            </div>
        </div>
    )
}
export default Navbar
