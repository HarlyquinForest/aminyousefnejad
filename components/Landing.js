import Hello from './hello'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const Landing = ({ animate, view }) => {
    useEffect(() => {
        const addClass = () =>
            (document.getElementById('container').className = 'fin')
        setTimeout(addClass, 50)
    }, [])
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0, transition: { duration: 1 } }
    }
    return (
        <AnimatePresence>
            <motion.div variants={variants} initial="visible" animate={animate}>
                <div id="container">
                    <Hello />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
export default Landing
