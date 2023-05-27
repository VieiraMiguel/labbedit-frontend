import { HeaderStyled } from "./styled"
import { Button } from '@chakra-ui/react'
import {
    toFeedPage,
    toLoginPage
} from '../../routes'
import { useLocation, useNavigate, useParams } from "react-router-dom"
import headerLogo from '../../assets/header-logo.png'
import { TfiClose } from 'react-icons/tfi'

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

            case '/signup':

                return (
                    <>
                        <div></div>

                        <img src={headerLogo} />

                        <Button onClick={buttonAction} variant='header'>{buttonText}</Button>
                    </>
                )

            case `/feed`:

                return (
                    <>
                        <div></div>

                        <img src={headerLogo} />

                        <Button onClick={buttonAction} variant='header'>{buttonText}</Button>
                    </>
                )

            default:

                return (
                    <>
                        <Button id="close" onClick={() => toFeedPage(navigate)} variant='header'><TfiClose /></Button>

                        <img src={headerLogo}/>

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