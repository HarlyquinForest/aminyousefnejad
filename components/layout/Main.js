import Navbar from '../Navbar'
import Head from 'next/head'
import Footer from '../Footer'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Landing from '../Landing'
const Main = ({ children, router }) => {
    const [loading, setLoading] = useState(true)
    const [ready, setReady] = useState(false)
    useEffect(() => {
        setTimeout(() => setLoading(false), 5000)
    }, [])
    useEffect(() => {
        if (!loading) setTimeout(() => setReady(true), 1500)
    }, [loading])

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
                {!ready && <Landing />}
                {ready && (
                    <motion.div
                        key="main-layout"
                        initial={{ opacity: 0, display: 'none' }}
                        animate={{
                            opacity: 1,
                            display: 'block',
                            transition: { duration: 1 }
                        }}
                    >
                        <div className="bg-main-bg"></div>
                        {ready && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <Navbar path={router.asPath} />
                            </motion.div>
                        )}
                        {children}
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
export default Main
