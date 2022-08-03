import NextLink from 'next/link'
import Button from '../components/Button'
import Logo from '../components/Logo'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useStateContext } from '../context/ContextProvider'
import useScroll from '../lib/useScroll'
import { AnimatePresence, motion } from 'framer-motion'
import NavItem from '../components/NavItem'
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
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="fixed w-full h-64 right-0 top-20 bg-secondary-dark-bg p-3 border-b-1 text-dark-gray">
                                <div className="flex flex-col text-2xl gap-4">
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
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </div>
    )
}
export default Navbar
