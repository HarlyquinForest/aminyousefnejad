import { Suspense, useEffect, useRef, useState } from 'react'
import NextLink from 'next/link'
import { useStateContext } from '../context/ContextProvider'
import { PropagateLoader } from 'react-spinners'
import wp from '../lib/wp'
import { AnimatePresence } from 'framer-motion'
import AnimatedDiv from './AnimatedDiv'
import { getValue, getImage } from '../utils/helpers'

async function fetchPosts() {
    try {
        const posts = await wp.posts().perPage(3).get()
        return posts
    } catch (e) {
        console.log(e)
        return []
    }
}
const BlogPosts = () => {
    const POSTS = useRef()
    // POSTS.current = null
    const [data, setData] = useState(null)
    const [load, setLoad] = useState()
    useEffect(() => {
        if (POSTS.current == null) {
            fetchPosts().then(res => {
                setData(res)
            })
        }
    }, [])
    useEffect(() => {
        if (data != null) {
            POSTS.current = data
            setLoad(true)
        }
    }, [data])

    return (
        <>
            {load ? (
                <AnimatePresence>
                    <div className="flex flex-col gap-3">
                        <h1>
                            یه نگاهی به پست های اخیر
                            <a
                                href="https://linux98.ir/"
                                target="_blank"
                                className="text-primary hover:underline mr-1 ml-1"
                            >
                                وبلاگ لینوکس 98
                            </a>
                            هم بندازید.
                        </h1>
                        <AnimatedDiv
                            className="flex flex-col lg:flex-row gap-6"
                            delay={0.3}
                        >
                            {POSTS.current.map((item, index) => (
                                <Post
                                    key={index}
                                    title={getValue(
                                        item.title.rendered,
                                        'No title'
                                    )}
                                    image={getImage(
                                        item.yoast_head_json.og_image[0].url
                                    )}
                                    link={getValue(item.link, '/')}
                                    date={getValue(item.date, 'Today')}
                                />
                            ))}
                        </AnimatedDiv>
                    </div>
                </AnimatePresence>
            ) : (
                <div className="flex flex-col w-full  items-center ">
                    <PropagateLoader color="#12ffa1" />
                </div>
            )}
        </>
    )
}
const Post = ({ image, title, link, date }) => {
    return (
        <div className="bg-half-transparent rounded-lg hover:scale-105 transition-all grayscale hover:grayscale-0">
            <NextLink href={link}>
                <a className="flex flex-col gap-3" target="_blank">
                    <img
                        className="w-full aspect-video min-h-200 max-h-300 rounded-t-md  transition-all"
                        alt={title}
                        src={image}
                        loading="lazy"
                    />
                    <h2 className="text-dark-gray px-3 hover:text-primary hover:underline">
                        {title}
                    </h2>
                    <p className="p-3 text-sm text-slate-600">{date}</p>
                </a>
            </NextLink>
        </div>
    )
}
export default BlogPosts
