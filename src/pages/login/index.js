import { useForm } from '../../hooks'

export const LoginPage = () => {

    const [form, onChangeInputs, clearInputs] = useForm({

        email:'',
        password:''
    })

    return (
        <h1>Login</h1>
    )
}