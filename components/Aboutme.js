import { animate, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import BlogPosts from './BlogPosts'
import GridList from './GridList'
import ProgressBar, { ProgressBarContainer } from './ProgressBar'
import Rating, { RatingContainer } from './Rating'
import Section, { Paragraph } from './Section'
import UnivercityLogo from './UnivercityLogo'
import Contactme from './Contactme'
import Projects from './Projects'
import { prefix } from '../utils/prefix'
const Aboutme = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) control.start('visible')
    }, [control, inView])
    return (
        <div className="flex flex-col items-center mt-64  md:px-32" id="about">
            <Section title="درباره من" image={`${prefix}/images/avatar.jpg`}>
                <div className="w-full lg:w-9/12">
                    <Paragraph>
                        من امین یوسف نژاد هستم و از دوران نوجوانی اوقات فراغت
                        خودمو با دنیای کامپیوتر و برنامه نویسی سپری کردم. مقطع
                        کارشناسی را در رشته مهندسی تکنولوژی نرم افزار پشت سر
                        گذاشته ام. تجربه برنامه نویسی با زبان های جاوا، پایتون،
                        بش اسکریپتینگ، جاوا اسکریپت مهارت کار با ابزار ورژن
                        کنترلر git جهت مدیریت پروژه ها و به مدت 7 سال تجربه کار
                        با سیستم عامل های لینوکس را دارم و در حال حاضر در حال
                        یادگیری فریمورک Next.js و React.js می باشم.
                    </Paragraph>
                    <Paragraph>
                        یادگیری تکنولوژی های جدید بخش بسیار مهمی در تولید
                        محصولات دیجیتالیه و وقتی این فرآیند به صورت خودیادگیری
                        انجام بشه می تونه تجربیات بسیار زیادی برای شخص به ارمغان
                        داشته باشه. و من خودم را فردی می بینیم که توانایی و
                        آمادگی ذهنی لازم برای یادگیری چیزای جدید رو داره.
                    </Paragraph>
                    <Paragraph>
                        تعدادی از زبان های برنامه نویسی و تکنولوژی هایی که اخیر
                        باهاشون کار کردم :{' '}
                    </Paragraph>
                    <GridList
                        list={[
                            'React.js',
                            'Next.js',
                            'Syncfusion',
                            'Tailwindcss',
                            'Python'
                        ]}
                    />
                </div>
            </Section>
            <div className="flex flex-col items-center lg:items-start lg:flex-row w-full lg:w-9/12">
                <Section title="مهارت های تخصصی" className="h-3/4">
                    <ProgressBarContainer>
                        <ProgressBar
                            progress="90%"
                            label="HTML"
                            animate={control}
                            view={ref}
                        />
                        <ProgressBar
                            progress="80%"
                            label="CSS"
                            animate={control}
                            view={ref}
                        />
                        <ProgressBar
                            progress="80%"
                            label="JAVASCRIPT"
                            animate={control}
                            view={ref}
                        />
                        <ProgressBar
                            progress="70%"
                            label="PYTHON"
                            animate={control}
                            view={ref}
                        />
                        <ProgressBar
                            progress="70%"
                            label="JAVA"
                            animate={control}
                            view={ref}
                        />
                        <ProgressBar
                            progress="80%"
                            label="BASH"
                            animate={control}
                            view={ref}
                        />
                    </ProgressBarContainer>
                </Section>
                <Section title="مهارت های نرم" className="h-3/4">
                    <RatingContainer>
                        <Rating
                            score={5}
                            label="مدیریت زمان"
                            delay={0.1}
                            animate={control}
                            view={ref}
                        />
                        <Rating
                            score={5}
                            label="پشتکار"
                            delay={0.2}
                            animate={control}
                            view={ref}
                        />
                        <Rating
                            score={5}
                            label="گزارش نویسی"
                            delay={0.3}
                            animate={control}
                            view={ref}
                        />
                        <Rating
                            score={5}
                            label="رقابت جویی"
                            delay={0.4}
                            animate={control}
                            view={ref}
                        />
                        <Rating
                            score={4}
                            label="آموزش دادن"
                            delay={0.5}
                            animate={control}
                            view={ref}
                        />
                        <Rating
                            score={4}
                            label="شنونده خوب"
                            delay={0.6}
                            animate={control}
                            view={ref}
                        />
                        <Rating
                            score={4}
                            label="مسئولیت پذیری"
                            delay={0.7}
                            animate={control}
                            view={ref}
                        />
                        <Rating
                            score={4}
                            label="کار تیمی"
                            delay={0.8}
                            animate={control}
                            view={ref}
                        />
                        <Rating
                            score={4}
                            label="برنامه ریزی"
                            delay={0.9}
                            animate={control}
                            view={ref}
                        />
                    </RatingContainer>
                </Section>
            </div>
            <Section title="سوابق تحصیلی" className="mt-24 ">
                <div className="flex flex-col max-w-md lg:flex-row  items-center">
                    <div className="flex flex-col min-w-full items-center m-3 gap-3 bg-half-transparent p-3 py-8 rounded-lg cursor-pointer hover:scale-105 transition-all">
                        <div className="flex flex-col items-center">
                            <UnivercityLogo
                                color="#b0b0ba"
                                width="12mm"
                                height="12mm"
                            />
                            <div className="flex flex-col order-2 m-3 divide-y-1 gap-2">
                                <p>دانشگاه فنی و حرفه ای شهید قاضی طباطبایی</p>
                                <p className="text-left text-sm text-dark-gray">
                                    Technical & Vocational Univercity
                                </p>
                            </div>
                        </div>
                        <p>مقطع کاردانی </p>
                        <p>رشته مهندسی نرم افزار </p>
                    </div>
                    <div className="flex flex-col min-w-full items-center  m-3 gap-3 bg-half-transparent p-3 py-8 rounded-lg cursor-pointer hover:scale-105 transition-all">
                        <div className="flex flex-col items-center">
                            <UnivercityLogo
                                color="#b0b0ba"
                                width="12mm"
                                height="12mm"
                            />
                            <div className="flex flex-col order-2 m-3 divide-y-1 gap-2">
                                <p>دانشگاه فنی و حرفه ای تبریز</p>
                                <p className="text-left text-sm text-dark-gray">
                                    Technical & Vocational Univercity
                                </p>
                            </div>
                        </div>
                        <p>مقطع کارشناسی </p>
                        <p>رشته مهندسی تکنولوژی نرم افزار </p>
                    </div>
                </div>
            </Section>
            <Section title="مطالب اخیر" id="blog">
                <BlogPosts />
            </Section>
            <Section title="پروژه ها" id="work">
                <Projects />
            </Section>
            <Contactme />
        </div>
    )
}
export default Aboutme
