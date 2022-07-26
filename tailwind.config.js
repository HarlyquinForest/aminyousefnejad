/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/common/**/*.{js,jsx,ts,tsx}'
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Open Sans', 'sans-serif'],
            body: ['Vazirmatn FD', 'sans-serif'],
            nav: ['monoscape', 'sans-serif'],
            dancing: ['Leckerli One', 'sans-serif']
        },
        extend: {
            fontSize: {
                14: '14px'
            },
            backgroundColor: {
                'main-bg': '#282828',
                'secondary-dark-bg': '#2a2a2a',
                'half-transparent': 'rgba(0, 0, 0, 0.2)'
            },
            colors: {
                primary: '#12a1ff ',
                secondary: '#ffa112',
                'light-gray': '#e3fff4',
                'dark-gray': '#a0a0a0'
            },
            borderWidth: {
                1: '1px'
            },
            borderColor: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            width: {
                100: '100px',
                200: '200px',
                400: '400px',
                640: '640px',
                760: '760px',
                780: '780px',
                800: '800px',
                1000: '1000px',
                1200: '1200px',
                1400: '1400px'
            },
            maxWidth: {
                100: '100px',
                200: '200px',
                300: '300px',
                400: '400px'
            },
            maxHeight: {
                100: '100px',
                200: '200px',
                300: '300px',
                400: '400px'
            },
            height: {
                80: '80px',
                100: '100vh'
            },
            minHeight: {
                200: '200px',
                500: '500px'
            },
            minWidth: {
                200: '200px',
                400: '400px'
            }
        }
    },
    plugins: [
        plugin(function ({ addVariant, e, postcss }) {
            addVariant('firefox', ({ container, separator }) => {
                const isFirefoxRule = postcss.atRule({
                    name: '-moz-document',
                    params: 'url-prefix()'
                })
                isFirefoxRule.append(container.nodes)
                container.append(isFirefoxRule)
                isFirefoxRule.walkRules(rule => {
                    rule.selector = `.${e(
                        `firefox${separator}${rule.selector.slice(1)}`
                    )}`
                })
            })
        })
    ]
}
