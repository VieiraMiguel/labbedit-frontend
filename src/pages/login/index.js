import { useForm } from '../../hooks'
import { useState } from 'react'
import { validateEmail, validatePassword } from '../../constants'
import {
    CenteredPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput
} from '../../components'
import { Button } from '@chakra-ui/react'
import loginLogo from '../../assets/login-logo.png'
import { useNavigate } from 'react-router-dom'
import {
    toSignupPage,
    toFeedPage
} from '../../routes'
import { Login } from '../../constants'


export const LoginPage = () => {

    const navigate = useNavigate()

    const [form, onChangeInputs, clearInputs] = useForm({

        email: '',
        password: ''
    })

    const [isEmailValid, setIsEmailValid] = useState(true)

    const [isPasswordValid, setIsPasswordValid] = useState(true)


    const onSubmit = async (e) => {

        e.preventDefault()
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))

        try {

            const { token } = isEmailValid && isPasswordValid && await Login({
                email: form.email,
                password: form.password
            })

            localStorage.setItem('labeddit.token', token)

            toFeedPage(navigate)

        } catch (error) {

            alert(error.response.data.message)
        }
    }


    return (
        <CenteredPageContainer>

            <FormContainer>

                <form onSubmit={onSubmit}>

                    <img src={loginLogo} alt='Labeddit Logo' />
                    <h2>LabEddit</h2>
                    <h3>O projeto de rede social da Labenu</h3>

                    <EmailInput
                        value={form.email}
                        onChange={onChangeInputs}
                        isValid={isEmailValid}
                    />

                    <PasswordInput
                        value={form.password}
                        onChange={onChangeInputs}
                        isValid={isPasswordValid}
                    />

                    <Button type='submit' variant='formLogin'>Continuar</Button>
                    <Button onClick={() => toSignupPage(navigate)} type='submit' variant='formSignup'>Crie uma conta!</Button>
                </form>
            </FormContainer>
        </CenteredPageContainer>
    )
}