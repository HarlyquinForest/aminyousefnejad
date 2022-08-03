import NextLink from 'next/link'
const NavItem = ({ title, path }) => {
    return (
        <NextLink href={path} key={title}>
            <a className="text-light-gray p-2 font-light hover:text-primary hover:underline underline-offset-8 inline-block">
                {title}
            </a>
        </NextLink>
    )
}

export default NavItem
