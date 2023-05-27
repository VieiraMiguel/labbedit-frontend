import {
    FormControl,
    Textarea,
    FormErrorMessage,
} from '@chakra-ui/react'

export const ContentTextArea = ({isValid, value, onChange}) => {

    return (
        <FormControl isInvalid={!isValid}>
            <textarea
                name='content'
                value={value}
                onChange={onChange}
                placeholder='Escreva seu post...'
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    {/* E-mail inválido. */}
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}

export const ContentTextAreaComment = ({isValid, value, onChange}) => {

    return (
        <FormControl isInvalid={!isValid}>
            <textarea
                name='content'
                value={value}
                onChange={onChange}
                placeholder='Adicionar comentário'
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    {/* E-mail inválido. */}
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}