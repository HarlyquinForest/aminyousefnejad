import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import BlogPosts from './BlogPosts'
import GridList from '../components/GridList'
import ProgressBar, { ProgressBarContainer } from '../components/ProgressBar'
import Rating, { RatingContainer } from '../components/Rating'
import Section, { Paragraph } from '../components/Section'
import UnivercityLogo from '../components/UnivercityLogo'
import Contactme from '../components/Contactme'
import Projects from './Projects'
import { prefix } from '../utils/prefix'
const Aboutme = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) control.start('visible')
    }, [control, inView])
    return (
        <div
            className="flex flex-col items-center mt-64 px-0 gap-24 md:px-32"
            id="about"
        >
            <Section title="درباره من" className="w-full lg:w-9/12">
                <div className="flex flex-col w-full lg:flex-row items-center gap-6 p-4 lg:p-0 lg:items-start justify-between  lg:w-11/12">
                    <div className="max-w-400 order-1 lg:order-2">
                        <div className="img-hover-zoom--slowmo rounded-lg">
                            <img
                                src={`${prefix}/images/avatar.jpg`}
                                alt="avatar picture"
                                className="drop-shadow-xl transition-all delay-200 cursor-none "
                            />
                        </div>
                    </div>
                    <div className="order-2 lg:order-1">
                        <Paragraph>
                            من امین یوسف نژاد هستم و از دوران نوجوانی اوقات
                            فراغت خودمو با دنیای کامپیوتر و برنامه نویسی سپری
                            کردم. مقطع کارشناسی را در رشته مهندسی تکنولوژی نرم
                            افزار پشت سر گذاشته ام. تجربه برنامه نویسی با زبان
                            های جاوا، پایتون، بش اسکریپتینگ، جاوا اسکریپت مهارت
                            کار با ابزار ورژن کنترلر git جهت مدیریت پروژه ها و
                            به مدت 7 سال تجربه کار با سیستم عامل های لینوکس را
                            دارم و در حال حاضر در حال یادگیری فریمورک Next.js و
                            React.js می باشم.
                        </Paragraph>
                        <Paragraph>
                            یادگیری تکنولوژی های جدید بخش بسیار مهمی در تولید
                            محصولات دیجیتالیه و وقتی این فرآیند به صورت
                            خودیادگیری انجام بشه می تونه تجربیات بسیار زیادی
                            برای شخص به ارمغان داشته باشه. و من خودم را فردی می
                            بینیم که توانایی و آمادگی ذهنی لازم برای یادگیری
                            چیزای جدید رو داره.
                        </Paragraph>
                        <Paragraph>
                            تعدادی از زبان های برنامه نویسی و تکنولوژی هایی که
                            اخیر باهاشون کار کردم :{' '}
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
                </div>
            </Section>
            <div className="flex flex-col items-center lg:items-start lg:flex-row w-full lg:w-9/12">
                <Section
                    title="مهارت های تخصصی"
                    className="w-11/12 lg:w-9/12 h-3/4"
                >
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
                <Section
                    title="مهارت های نرم"
                    className="w-11/12 lg:w-9/12 h-3/4"
                >
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
            <Section title="سوابق تحصیلی" className="w-11/12 mt-24 ">
                <div className="flex flex-col max-w-md xl:flex-row  items-center">
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
            <Section title="مطالب اخیر" id="blog" className="w-11/12">
                <BlogPosts />
            </Section>
            <Section title="پروژه ها" id="work" className="w-11/12">
                <Projects />
            </Section>
            <Contactme />
        </div>
    )
}
export default Aboutme
