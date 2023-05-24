import { HeaderStyled } from "./styled"
import { Button } from '@chakra-ui/react'
import {
    toLoginPage
} from '../../routes'
import { useNavigate } from "react-router-dom"


export const Header = () => {

    const navigate = useNavigate()

    return (
        <HeaderStyled>
            <span>center icon</span>
            <Button onClick={() => toLoginPage(navigate)} variant='header'>Login</Button>
        </HeaderStyled>
    )
}