import { useForm } from '../../hooks'
import { useState } from 'react'
import { validateName, validateEmail, validatePassword } from '../../constants'
import {
    CenteredPageContainer,
    FormContainer,
    NameInput,
    EmailInput,
    PasswordInput
} from '../../components'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { toFeedPage } from '../../routes'
import { Signup } from '../../constants'

export const SignupPage = () => {

    const navigate = useNavigate()

    const [form, onChangeInputs] = useForm({

        name: '',
        email: '',
        password: ''
    })

    const [isNameValid, setIsNameValid] = useState(true)

    const [isEmailValid, setIsEmailValid] = useState(true)

    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const onSubmit = async (e) => {

        e.preventDefault()
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))
        setIsNameValid(validateName(form.name))

        try {

            const { token } = isNameValid && isEmailValid && isPasswordValid && await Signup({
                name: form.name,
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

                    <div id='title'>

                        <h2 id='signup' >{'Olá, boas vindas ao LabEddit ;)'}</h2>

                    </div>

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                    <div>

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

                    </div>


                    <div>

                        <span>Ao continuar, você concorda com o noso Contrato de usuário e nossa Política de Privacidade</span>

                        <span>Eu concordo em receber emails sobre coisas legais no Labeddit</span>

                    </div>


                    <Button type='submit' variant='formLogin'>Cadastrar</Button>

                </form>
            </FormContainer>
        </CenteredPageContainer>
    )
}