import { TbError404 } from 'react-icons/tb'
import { AiOutlineHome } from 'react-icons/ai'
import Button from '../components/Button'
const NotFound = () => {
    return (
        <div className="flex flex-row items-center justify-center h-full w-full mt-64 ">
            <div className="flex  flex-col items-center font-body text-light-gray">
                <span className="text-9xl">
                    <TbError404 />
                </span>
                <h1>صفحه ای که دنبالش هستید پیدا نشد . </h1>
                <a href="/">
                    <Button
                        icon={<AiOutlineHome />}
                        text="بازگشت به صفحه اصلی "
                        borderRadius="10px"
                        color="primary"
                    />
                </a>
            </div>
        </div>
    )
}

export default NotFound
