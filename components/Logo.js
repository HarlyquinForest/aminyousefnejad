import NextLink from 'next/link'
const Logo = () => {
    return (
        <div className="p-1 px-3 rounded-lg border-2 border-primary">
            <NextLink href="/">
                <a>
                    <h1 className="text-primary font-bold">A</h1>
                </a>
            </NextLink>
        </div>
    )
}
export default Logo
