import {
    FormControl,
    Input,
    FormErrorMessage,
    InputRightElement,
    InputGroup,
    IconButton,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'


export const PasswordInput = ({isValid, value, onChange}) => {

    const [showPassword, setShowPassword] = useState(false)

    const onClickShowPassword = () => {

        setShowPassword(!showPassword)
    }

    return (
        <FormControl isInvalid={!isValid}>
            <InputGroup size='md'>
                <Input
                    name='password'
                    value={value}
                    onChange={onChange}
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Senha'
                />
                <InputRightElement width='4.5rem'>
                    <IconButton h='1.75rem' size='sm' onClick={onClickShowPassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </IconButton>
                </InputRightElement>
            </InputGroup>
            {!isValid ? (
                <FormErrorMessage as='p'>
                    A senha deve conter ao menos 6 caracteres.
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}