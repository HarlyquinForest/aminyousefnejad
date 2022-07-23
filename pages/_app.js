import { ContextProvider, useStateContext } from '../context/ContextProvider'
import '../public/styles/global.css'
import Layout from '../components/layout/Main'
import { useEffect } from 'react'
function MyApp({ Component, pageProps, router }) {
    return (
        <ContextProvider>
            <Layout router={router}>
                <Component {...pageProps} />
            </Layout>
        </ContextProvider>
    )
}

export default MyApp
