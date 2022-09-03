import { ContextProvider } from '../ContextProvider'
import '../../public/styles/global.css'
import Layout from '../common/layout/Main'

function MyApp({ Component, pageProps, router }) {
  console.log("app.js")
    return (
        <ContextProvider>
            <Layout router={router}>
                <Component {...pageProps} />
            </Layout>
        </ContextProvider>
    )
}

export default MyApp
