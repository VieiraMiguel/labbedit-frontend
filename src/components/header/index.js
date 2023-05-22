import { HeaderStyled } from "./styled"
import { Button } from '@chakra-ui/react'


export const Header = () => {

    return (
        <HeaderStyled>
            <span>center icon</span>
            <Button variant='header'>Login</Button>
        </HeaderStyled>
    )
}