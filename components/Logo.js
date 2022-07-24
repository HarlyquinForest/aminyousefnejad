import NextLink from 'next/link'
const Logo = () => {
    return (
        <NextLink href="/">
            <a>
                <div className="p-1 px-3 rounded-lg border-2 border-primary">
                    <h1 className="text-primary font-bold">A</h1>
                </div>{' '}
            </a>
        </NextLink>
    )
}
export default Logo
