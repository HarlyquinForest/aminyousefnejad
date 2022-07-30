import { AiOutlineCoffee } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="flex flex-col items-center w-full font-body gap-8 text-dark-gray py-8 px-16  mt-12 ">
            <a href="http://www.coffeete.ir/amin-yousefnejad" target="_blank">
                <div className="flex flex-row items-start gap-3 p-3 text-amber-900 font-bold rounded-lg bg-secondary hover:bg-amber-600 hover:translate-y-2 transition-all">
                    <span className="inline-block items-center font-dancing text-lg">
                        Buy Me a Coffe
                    </span>
                    <span className="text-2xl inline-block">
                        <AiOutlineCoffee />
                    </span>
                </div>
            </a>
            <p>
                طراحی و توسعه این صفحه توسط امین یوسف نژاد انجام گرفته و هرگونه
                بهره برداری مطابق لایسنس GPL بلامانع است. :)
            </p>
        </div>
    )
}
export default Footer
