import NextLink from 'next/link'
const Logo = () => {
    return (
        <NextLink href="/">
            <a>
                <Icon />
            </a>
        </NextLink>
    )
}

const Icon = () => (
    <p className="font-dancing text-light-gray text-xl hover:text-primary hover:underline underline-offset-8 transition-all">
        Amin Yousefnejad
    </p>
)

export default Logo
