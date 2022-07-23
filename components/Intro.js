import Button from './Button'
import { AnimatePresence } from 'framer-motion'
import AnimatedDiv from './AnimatedDiv'
const Intro = () => {
    return (
        <AnimatePresence>
            <div className="flex justify-start items-center px-8 md:px-32 my-24">
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
                            من طراح و توسعه دهنده نرم افزار های کاربردی هستم.
                        </p>
                    </AnimatedDiv>
                    <AnimatedDiv delay={0.5}>
                        <p className="text-dark-gray text-xl font-body mt-10 pl-14 lg:w-9/12 text-justify opacity-80">
                            شاید باور کردنش سخت باشه ولی از ابتدای دوران مدرن
                            سخت افزار های کامپیوتر های ما بسیار کم نسبت به نرم
                            افزار های ما پیشرفت کردن. در واقع سخت افزار های ما
                            در حد چند تا عمل ساده ریاضی باقی می موندن اگر نرم
                            افزاری نبود که روشون سوار بشه و با همون چنتا عمل
                            ساده ریاضی محاسبات پیچیده انجام بده و من عمیقا شیفته
                            این کار هستم که ماشین هارو تا نهایت حد توانشون به
                            کار بگیرم.
                        </p>
                        <div className="mt-14 font-body font-bold text-xl">
                            <Button
                                color="primary"
                                text="تماس با من"
                                borderRadius="5px"
                            />
                        </div>
                    </AnimatedDiv>
                </div>
            </div>
        </AnimatePresence>
    )
}
export default Intro
