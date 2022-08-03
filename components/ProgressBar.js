import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
const ProgressBar = ({ progress, label, animate, view }) => {
    const progressVarients = {
        hidden: { width: '0%' },
        visible: { width: '100%', transition: { duration: 1 } }
    }
    const containerVarients = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    }
    return (
        <>
            <AnimatePresence>
                <div className="hover:scale-105 transition-all cursor-pointer">
                    <motion.div
                        variants={containerVarients}
                        initial="hidden"
                        animate={animate}
                        ref={view}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2
                        }}
                    >
                        <div className="flex flex-row justify-between ">
                            <span className="text-light-gray">{label}</span>
                            <span>{progress}</span>
                        </div>
                        <div className="w-full bg-dark-gray h-2 rounded ">
                            <motion.div
                                variants={progressVarients}
                                initial="hidden"
                                animate={animate}
                                ref={view}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.2
                                }}
                            >
                                <div
                                    className="bg-primary h-2 rounded "
                                    style={{ width: progress }}
                                ></div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </AnimatePresence>
        </>
    )
}
export const ProgressBarContainer = ({ children }) => {
    return <div className="flex flex-col gap-6">{children}</div>
}
export default ProgressBar
