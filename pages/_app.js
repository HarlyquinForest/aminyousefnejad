import { ContextProvider } from '../context/ContextProvider'
import '../public/styles/global.css'
import Layout from '../components/layout/Main'
import { useEffect, useState } from 'react'
import Landing from '../components/Landing'
import { useAnimation } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
    const [loading, setLoading] = useState(true)
    const [ready, setReady] = useState(false)
    const landingControl = useAnimation()
    const layoutControl = useAnimation()
    useEffect(() => {
        setTimeout(() => setLoading(false), 5000)
    }, [])
    useEffect(() => {
        if (!loading) landingControl.start('hidden')
        if (!loading) setTimeout(() => layoutControl.start('visible'), 800)
        if (!loading) setTimeout(() => setReady(true), 1500)
    }, [loading])
    return (
        <ContextProvider>
            {!ready && <Landing animate={landingControl} />}
            <Layout router={router} animate={layoutControl} ready={ready}>
                <Component {...pageProps} />
            </Layout>
        </ContextProvider>
    )
}

export default MyApp
