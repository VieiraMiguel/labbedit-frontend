import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FeedContainerStyled, PostCardStyled } from '../feed/styled'
import { ContentTextArea } from '../../components'
import { Button } from '@chakra-ui/react'
import { useForm, useProtectedPage } from '../../hooks'
import { AddComment, CommentsList, PostById } from '../../constants'

export const CommentsPage = () => {

    const navigate = useNavigate()
    
    useProtectedPage(navigate)

    const { id } = useParams()

    const [comments, setComments] = useState([])
    const [post, setPost] = useState([])

    useEffect(() => {

        CommentsList(id)
            .then(data => {
                setComments(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {

        PostById(id)
            .then(data => {
                setPost(data)
                console.log(post)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const [form, onChangeInputs, clearInputs] = useForm({

        content: '',
    })

    const onSubmit = async (e) => {

        try {

            await AddComment(id, {

                content: form.content,
            })

        } catch (error) {

            alert(error.response.data.message)
        }
    }

    return (
        <FeedContainerStyled>

            {post.map((post, i) => (

                <PostCardStyled key={i} >

                    <header>Enviado por: {post.creator.name}</header>

                    <main>{post.content}</main>

                    <footer>
                        <span>{post.likes} {post.dislikes}</span>

                        <span>{post.comments}</span>
                    </footer>

                </PostCardStyled>

            ))}

            <form onSubmit={onSubmit}>

                <ContentTextArea
                    value={form.content}
                    onChange={onChangeInputs}
                    isValid={true}
                />

                <Button type='submit' variant='formFeed'>Responder</Button>

            </form>

            <Button variant='formDivider'></Button>

            {comments.map((comment, i) => (

                <PostCardStyled key={i} >

                    <header>Enviado por: {comment.creator.name}</header>

                    <main>{comment.content}</main>

                    <footer>
                        <span>{comment.likes} {comment.dislikes}</span>
                    </footer>

                </PostCardStyled>

            ))}
        </FeedContainerStyled>
    )
}