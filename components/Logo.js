import NextLink from 'next/link'
const Logo = () => {
    return (
        <NextLink href="/">
            <a>
                <SvgComponent />
            </a>
        </NextLink>
    )
}
import * as React from 'react'

const SvgComponent = props => (
    <svg
        width="31px"
        height="31px"
        viewBox="0 0 62 62"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <defs>
            <path id="b" d="M249.627 339.868h128.441v181.555H249.627z" />
            <path id="a" d="M238.866 348.729H384.84v163.003H238.866z" />
        </defs>
        <g transform="translate(-51.73 -82.965)">
            <circle
                style={{
                    fill: '#0a192f',
                    fillOpacity: 1,
                    stroke: '#12ffa1',
                    strokeWidth: 2,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeDasharray: 'none',
                    strokeDashoffset: 14.345,
                    strokeOpacity: 1,
                    paintOrder: 'fill markers stroke'
                }}
                cx={82.73}
                cy={113.965}
                r={30}
            />
            <text
                xmlSpace="preserve"
                transform="matrix(.26458 0 0 .26458 3.127 .458)"
                style={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: 160,
                    lineHeight: 1.25,
                    fontFamily: 'sans-serif',
                    whiteSpace: 'pre',
                    shapeInside: 'url(#b)',
                    fill: '#12ffa1',
                    fillOpacity: 1,
                    stroke: 'none'
                }}
            >
                <tspan x={350.0} y={485.0}>
                    {'A'}
                </tspan>
            </text>
        </g>
    </svg>
)

export default Logo
