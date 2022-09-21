import { ContextProvider } from '../ContextProvider'
import '../../public/styles/global.css'
import Layout from '../common/layout/Main'

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
