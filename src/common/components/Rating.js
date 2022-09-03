import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
const Star = ({ active }) => {
    return (
        <>
            {active ? (
                <span className="text-xl lg:text-2xl ">
                    <AiFillStar />
                </span>
            ) : (
                <span className="text-xl lg:text-2xl">
                    <AiOutlineStar />
                </span>
            )}
        </>
    )
}

const Rating = ({ score, label, delay, animate, view }) => {
    const stars = []
    for (var i = 0; i < 5; i++) {
        if (score > 0) stars.push(<Star active={true} key={i} />)
        else stars.push(<Star active={false} key={i} />)
        score -= 1
    }
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
    return (
        <div className=" text-primary hover:scale-110 hover:cursor-pointer transition-all">
            <motion.div
                className="flex flex-row gap-1 justify-between items-center"
                variants={variants}
                initial="hidden"
                animate={animate}
                ref={view}
                transition={{ transition: 0.2, delay }}
            >
                <p className="text-light-gray text-lg">{label}</p>
                <div className="flex  flex-row-reverse gap-1">{stars}</div>
            </motion.div>
        </div>
    )
}
export const RatingContainer = ({ children }) => {
    return <div className="flex flex-col gap-3 w-full">{children}</div>
}

export default Rating
