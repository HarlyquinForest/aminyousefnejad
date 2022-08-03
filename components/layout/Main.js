import Navbar from '../Navbar'
import Head from 'next/head'
import Footer from '../Footer'
import { AnimatePresence, motion } from 'framer-motion'
const Main = ({ children, router, animate, ready }) => {
    const variants = {
        visible: {
            y: 0,
            opacity: 1,
            display: 'block',
            transition: { duration: 0.5 }
        },
        hidden: { y: 5, opacity: 0, display: 'none' }
    }

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width , initial-scale=1"
                />
                <meta name="theme-color" content="#282828"></meta>
                <link rel="shortcut icon" href="favicon.ico" />
                <title>امین یوسف نژاد-صفحه اصلی</title>
            </Head>
            <AnimatePresence>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate={animate}
                >
                    <div className="bg-main-bg"></div>
                    {ready && <Navbar path={router.asPath} />}
                    {children}
                    <Footer />
                </motion.div>
            </AnimatePresence>
        </>
    )
}
export default Main
