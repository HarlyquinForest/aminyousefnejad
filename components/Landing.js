import Hello from './hello'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
const Landing = () => {
    useEffect(() => {
        const addClass = () =>
            (document.getElementById('container').className = 'fin')
        setTimeout(addClass, 50)
    }, [])
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0, transition: { duration: 0.5 } }
    }
    return (
        <motion.div
            key="landing-page"
            variants={variants}
            initial="visible"
            exit="hidden"
        >
            <div id="container">
                <Hello />
            </div>
        </motion.div>
    )
}
export default Landing
