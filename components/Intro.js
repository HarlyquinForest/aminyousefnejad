import Button from './Button'
import { AnimatePresence } from 'framer-motion'
import AnimatedDiv from './AnimatedDiv'
const Intro = () => {
    return (
        <AnimatePresence>
            <div className="flex justify-start items-center px-8 md:px-32 my-48">
                <div className="text-right">
                    <AnimatedDiv delay={0.3}>
                        <p className="text-primary text-lg font-body">
                            سلام، به صفحه{' '}
                        </p>
                        <p className="text-light-gray text-4xl md:text-6xl font-body mt-10">
                            امین یوسف نژاد{' '}
                            <span className="text-primary text-lg font-body">
                                خوش آمدید.
                            </span>
                        </p>
                        <p className="text-dark-gray text-2xl md:text-4xl font-body mt-10">
                            من طراح و توسعه دهنده فرانت-اند هستم.{' '}
                        </p>
                    </AnimatedDiv>
                    <AnimatedDiv delay={0.5}>
                        <p className="text-dark-gray text-xl font-body mt-10 pl-14 w-full lg:w-6/12 text-justify opacity-80">
                            از نوشتن ابزار های کوچیک که باعث میشه انجام دادن یه
                            کار آسون بشه تا نرم افزار های بسیار پیچیده بخش بزرگی
                            از علایق من در زندگی هست. در حال حاضر به صورت فری
                            لنسر کار می کنم ولی آماده دریافت پیشنهادات کاری هم
                            هستم.
                        </p>
                        <div className="mt-14 font-body font-bold text-xl">
                            <a href="#contact">
                                <Button
                                    color="primary"
                                    text="تماس با من"
                                    borderRadius="5px"
                                />
                            </a>
                        </div>
                    </AnimatedDiv>
                </div>
            </div>
        </AnimatePresence>
    )
}
export default Intro
