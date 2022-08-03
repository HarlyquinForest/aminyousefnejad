import { GoPrimitiveDot } from 'react-icons/go'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

const Section = ({ children, title, className, id }) => {
    return (
        <AnimatePresence>
            <div className={`flex flex-col mx-2 p-4 ${className}`} id={id}>
                <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-primary ml-2">
                        <GoPrimitiveDot />
                    </span>
                    <h1 className=" text-light-gray  text-xl lg:text-2xl font-body w-max min-w-fit">
                        {title}
                    </h1>
                    <div className="h-0 border-t-1 w-full border-dark-gray mr-4"></div>
                </div>

                <div className="text-light-gray mt-6 font-body w-full  order-2 lg:order-1 ">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    )
}
export const Paragraph = ({ children }) => {
    return <p className="text-justify mt-2">{children}</p>
}
export default Section
