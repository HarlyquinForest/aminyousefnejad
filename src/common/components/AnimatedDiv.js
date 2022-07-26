import { motion } from 'framer-motion'

const AnimatedDiv = ({ children, delay, className }) => {
    return (
        <motion.div
            className={className}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedDiv
