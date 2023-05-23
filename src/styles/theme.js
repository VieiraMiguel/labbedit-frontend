import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({

    components: {
        Button: {
            variants: {
                header: {
                    bg: 'laranja.500'
                },
                formMain:{
                    width: '100%',
                    bg: 'laranja.500',
                    color: 'white',
                    borderRadius:'100'
                },
                formSecondary:{
                    width: '100%',
                    bg: 'white',
                    color: 'laranja.500',
                    border: '1px',
                    borderRadius:'100'
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