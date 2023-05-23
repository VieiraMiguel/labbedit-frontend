import { useForm } from '../../hooks'
import { useState } from 'react'
import { validateName, validateEmail, validatePassword } from '../../constants/url'
import {
    CenteredPageContainer,
    FormContainer,
    NameInput,
    EmailInput,
    PasswordInput
} from '../../components'
import { Button } from '@chakra-ui/react'
import loginLogo from '../../assets/login-logo.png'

export const SignupPage = () => {

    const [form, onChangeInputs, clearInputs] = useForm({

        name: '',
        email: '',
        password: ''
    })

    const [isNameValid, setIsNameValid] = useState(true)

    const [isEmailValid, setIsEmailValid] = useState(true)

    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const onSubmit = (e) => {

        e.preventDefault()
        console.log(form)
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))
        setIsNameValid(validateName(form.name))
    }


    return (
        <CenteredPageContainer>

            <FormContainer>

                <form onSubmit={onSubmit}>

                    <img src={loginLogo} alt='Labeddit Logo' />
                    <h2>LabEddit</h2>
                    <h3>O projeto de rede social da Labenu</h3>

                    <NameInput
                        value={form.name}
                        onChange={onChangeInputs}
                        isValid={isNameValid}
                    />

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

                    <Button type='submit' variant='formMain'>Cadastrar</Button>
                </form>
            </FormContainer>
        </CenteredPageContainer>
    )
}