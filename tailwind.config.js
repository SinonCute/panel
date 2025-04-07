const colors = require('tailwindcss/colors');

const gray = {
    50: 'hsl(216, 33%, 97%)',
    100: 'hsl(214, 15%, 91%)',
    200: 'hsl(210, 16%, 82%)',
    300: 'hsl(211, 13%, 65%)',
    400: 'hsl(211, 10%, 53%)',
    500: 'hsl(211, 12%, 43%)',
    600: 'hsl(209, 14%, 37%)',
    700: 'hsl(209, 18%, 30%)',
    800: 'hsl(209, 20%, 25%)',
    900: 'hsl(210, 24%, 16%)',
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#131a20',
                white: '#ffffff',
                transparent: 'transparent',

                gray: {
                    50:  '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                },

                neutral: {
                    50:  '#f5f7fa',
                    100: '#e9ecf2',
                    200: '#ccd3dd',
                    300: '#aeb7c9',
                    400: '#8f9ab6',
                    500: '#6f7f9b',
                    600: '#494d64',
                    700: '#2e3249',
                    800: '#24273a',
                    900: '#1e2030',
                },

                primary: {
                    50:  '#eff6ff',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                },

                cyan: {
                    100: '#cffafe',
                    200: '#a5f3fc',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#06b6d4',
                    700: '#06b6d4',
                    800: '#155e75',
                },

                green: {
                    50:  '#f0fdf4',
                    100: '#dcfce7',
                    500: '#40a02b',
                    600: '#40a02b',
                    700: '#40a02b',
                    800: '#40a02b',
                },

                yellow: {
                    400: '#df8e1d',
                    500: '#df8e1d',
                    600: '#df8e1d',
                    800: '#df8e1d',
                    900: '#df8e1d',
                },

                red: {
                    50:  '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#d20f39',
                    600: '#d20f39',
                    700: '#d20f39',
                    800: '#d20f39',
                },
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
