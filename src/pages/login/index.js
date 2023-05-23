import { useForm } from '../../hooks'
import { useState } from 'react'
import { validateEmail, validatePassword } from '../../constants/url'
import {
    CenteredPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput
} from '../../components'
import { Button } from '@chakra-ui/react'
import loginLogo from '../../assets/login-logo.png'

export const LoginPage = () => {

    const [form, onChangeInputs, clearInputs] = useForm({

        email: '',
        password: ''
    })

    const [isEmailValid, setIsEmailValid] = useState(true)

    const [isPasswordValid, setIsPasswordValid] = useState(true)


    const onSubmit = (e) => {

        e.preventDefault()
        console.log(form)
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))
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

                    <Button type='submit' variant='formMain'>Continuar</Button>
                    <Button type='submit' variant='formSecondary'>Crie uma conta!</Button>
                </form>
            </FormContainer>
        </CenteredPageContainer>
    )
}