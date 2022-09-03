import NextLink from 'next/link'
import { VscGithubAlt } from 'react-icons/vsc'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { useStateContext } from '../../ContextProvider'
const SocialLinks = () => {
    const { mobile } = useStateContext()
    return (
        <div className="flex flex-row justify-center items-center w-full md:w-24 gap-3 relative md:fixed md:flex-col text-dark-gray left-0 bottom-0  pl-6 text-2xl">
            <div className="flex flex-row md:flex-col justify-between items-center w-72 md:w-fit md:h-52">
                <NextLink href="https://github.com/HarlyquinForest">
                    <a
                        className=" p-2 rounded-full hover:text-primary hover:-translate-y-2 transition-all"
                        target="_blank"
                    >
                        <VscGithubAlt />
                    </a>
                </NextLink>
                <NextLink href="https://instagram.com/amin_yousefnejad__">
                    <a
                        className="p-2 rounded-full hover:text-primary hover:-translate-y-2 transition-all"
                        target="_blank"
                    >
                        <AiOutlineInstagram />
                    </a>
                </NextLink>
                <NextLink href="https://t.me/amin_yousefnejad">
                    <a
                        className="p-2 rounded-full hover:text-primary hover:-translate-y-2 transition-all"
                        target="_blank"
                    >
                        <FaTelegramPlane />
                    </a>
                </NextLink>
                <NextLink href="mailto:aminyousefnejad28@gmail.com">
                    <a
                        className="p-2 rounded-full hover:text-primary hover:-translate-y-2 transition-all"
                        target="_blank"
                    >
                        <AiOutlineMail />
                    </a>
                </NextLink>
            </div>
            {mobile == false ? (
                <div className="h-32 w-0 border-r-1 border-dark-gray"></div>
            ) : (
                <></>
            )}
        </div>
    )
}
export default SocialLinks
