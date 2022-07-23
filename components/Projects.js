import NextLink from 'next/link'
import { BsFolder } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
const Projects = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <Project
                title="پروژه"
                desc="توضیحات برای پروژه "
                link=""
                image=""
            />
            <Project
                title="پروژه"
                desc="توضیحات برای پروژه "
                link=""
                image=""
            />
            <Project
                title="پروژه"
                desc="توضیحات برای پروژه "
                link=""
                image=""
            />
            <Project
                title="پروژه"
                desc="توضیحات برای پروژه "
                link=""
                image=""
            />
        </div>
    )
}
const Project = ({ title, desc, link }) => {
    return (
        <>
            <div className="flex flex-col items-start font-body  text-right min-w-200 max-w-400 bg-half-transparent p-8 rounded-lg hover:-translate-y-1 transition-all cursor-pointer hover:text-primary">
                <NextLink href={link}>
                    <a target="_blank" className="w-full">
                        <div className="flex flex-row justify-between items-center w-full">
                            <span className="text-4xl text-primary">
                                <BsFolder />
                            </span>
                            <span className="text-light-gray text-2xl hover:text-primary">
                                <FiExternalLink />
                            </span>
                        </div>
                        <h1 className="text-xl font-bold ">{title}</h1>
                        <p className="text-light-gray text-justify mt-2">
                            {desc}
                        </p>
                    </a>
                </NextLink>
            </div>
        </>
    )
}

export default Projects
