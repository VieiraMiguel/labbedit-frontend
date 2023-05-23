import {
    FormControl,
    Input,
    FormErrorMessage,
} from '@chakra-ui/react'

export const NameInput = ({isValid, value, onChange}) => {

    return (
        <FormControl isInvalid={!isValid}>
            <Input
                name='name'
                value={value}
                onChange={onChange}
                placeholder='Apelido'
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    Nome deve ter ao menos 2 caracteres.
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}