import { HeaderStyled } from "./styled"
import { Button } from '@chakra-ui/react'
import {
    toFeedPage,
    toLoginPage
} from '../../routes'
import { useLocation, useNavigate, useParams } from "react-router-dom"
import headerLogo from '../../assets/header-logo.png'

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {

    const location = useLocation()

    const navigate = useNavigate()

    const buttonAction = () => {

        if (isLoggedIn) {

            localStorage.removeItem('labeddit.token')

            setIsLoggedIn(false)

        }
        toLoginPage(navigate)
    }

    const buttonText = isLoggedIn ? 'Logout' : 'Login'

    const renderHeader = () => {

        switch (location.pathname) {

            case '/login':
                return undefined

            case `/comments/post/`:
                return (
                    <>
                        <Button onClick={() => toFeedPage(navigate)} variant='header'>X</Button>
                        <img src={headerLogo} />
                        <Button onClick={buttonAction} variant='header'>{buttonText}</Button>
                    </>
                )

            default:
                return (
                    <>
                        <img src={headerLogo} />
                        <Button onClick={buttonAction} variant='header'>{buttonText}</Button>
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