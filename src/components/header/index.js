import { HeaderStyled } from "./styled"
import { Button } from '@chakra-ui/react'
import {
    toLoginPage
} from '../../routes'
import { useLocation, useNavigate } from "react-router-dom"
import headerLogo from '../../assets/header-logo.png'

export const Header = () => {

    const location = useLocation()

    const navigate = useNavigate()

    const renderHeader = () => {

        switch (location.pathname) {

            case '/login':
                return undefined

            default:
                return (
                    <>
                        <img src={headerLogo} />
                        <Button onClick={() => toLoginPage(navigate)} variant='header'>Login</Button>
                    </>
                )
        }
    }

    return (
        <HeaderStyled>
            {renderHeader()}
        </HeaderStyled>
    )
}