import { FeedContainerStyled, PostCardStyled } from './styled'
import { useEffect, useState } from 'react'
import { PostsList } from '../../constants'
import { useNavigate } from 'react-router-dom'
import { toCommentsPage } from '../../routes'
import {
    Button,
} from '@chakra-ui/react'
import { ContentTextArea } from '../../components'
import { useForm, useProtectedPage } from '../../hooks'
import { AddPost } from '../../constants'


export const FeedPage = () => {

    const navigate = useNavigate()
    
    useProtectedPage(navigate)

    const [posts, setPosts] = useState([])

    useEffect(() => {

        PostsList()
            .then(data => {
                setPosts(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const onClickPost = (id) => {
        console.log(id)
        toCommentsPage(navigate, id)
    }

    const [form, onChangeInputs, clearInputs] = useForm({

        content: ''
    })

    const onSubmit = async (e) => {

        try {

            await AddPost({

                content: form.content
            })

        } catch (error) {

            alert(error.response.data.message)
        }
    }

    return (
        <FeedContainerStyled>

            <form onSubmit={onSubmit}>

                <ContentTextArea
                    value={form.content}
                    onChange={onChangeInputs}
                    isValid={true}
                />

                <Button type='submit' variant='formFeed'>Postar</Button>

            </form>

            <Button variant='formDivider'></Button>

            {posts.map((post, i) => (

                <PostCardStyled key={i} onClick={() => onClickPost(post.id)}>

                    <header>Enviado por: {post.creator.name}</header>

                    <main>{post.content}</main>

                    <footer>
                        <span>{post.likes} {post.dislikes}</span>

                        <span>{post.comments}</span>
                    </footer>

                </PostCardStyled>

            ))}
        </FeedContainerStyled>
    )
}