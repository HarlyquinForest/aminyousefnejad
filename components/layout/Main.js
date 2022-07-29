import Navbar from '../Navbar'
import Head from 'next/head'
import Footer from '../Footer'
const Main = ({ children, router }) => {
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
            <div className="bg-main-bg"></div>
            <Navbar path={router.asPath} />
            {children}
            <Footer />
        </>
    )
}
export default Main
