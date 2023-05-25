import {
    FormControl,
    Textarea,
    FormErrorMessage,
} from '@chakra-ui/react'

export const ContentTextArea = ({isValid, value, onChange}) => {

    return (
        <FormControl isInvalid={!isValid}>
            <Textarea
                name='content'
                value={value}
                onChange={onChange}
                placeholder='Escreva seu post'
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    {/* E-mail inválido. */}
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}