import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({

    components: {
        Button: {
            variants: {
                header: {
                    bg: 'none'
                },
                formLogin: {
                    width: '100%',
                    color: 'white',
                    bg: 'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
                    borderRadius: '100'
                },
                formSignup: {
                    width: '100%',
                    bg: 'white',
                    color: 'laranja.500',
                    border: '1px',
                    borderRadius: '100'
                },
                formFeed: {
                    width: '100%',
                    color: 'white',
                    bg: 'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
                    borderRadius: '12px'
                },
                formDivider: {
                    width: '100%',
                    height:'1px',
                    color: 'white',
                    bg: 'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
                }
            }
        }
    },
    colors: {
        laranja: {
            500: '#FE7E02'
        }
    }
})