import { FeedContainerStyled, PostCardStyled } from './styled'
import { useState } from 'react'
import { LikePost, DislikePost, PostsList } from '../../constants'
import { useNavigate } from 'react-router-dom'
import { toCommentsPage } from '../../routes'
import {
    Button,
    IconButton
} from '@chakra-ui/react'
import { ContentTextArea } from '../../components'
import { useForm, useProtectedPage } from '../../hooks'
import { AddPost } from '../../constants'
import { RxThickArrowUp, RxThickArrowDown } from 'react-icons/rx'
import { IoChatboxOutline } from 'react-icons/io5'

export const FeedPage = () => {

    const navigate = useNavigate()

    useProtectedPage(navigate)

    const [posts, setPosts] = useState([])

    PostsList()
        .then(data => {
            setPosts(data)
        })
        .catch((error) => {
            console.log(error)
        })

    const onClickPost = (id) => {

        toCommentsPage(navigate, id)
    }

    const [form, onChangeInputs] = useForm({

        content: ''
    })

    const onSubmit = async () => {

        try {

            await AddPost({

                content: form.content
            })

        } catch (error) {

            alert(error.response.data.message)
        }
    }

    const onClickLike = async (id) => {

        try {

            await LikePost(id, {

                like: true
            })

        } catch (error) {

            alert(error.response.data.message)
        }
    }

    const onClickDislike = async (id) => {

        try {

            await DislikePost(id, {

                like: false
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

            <Button id='divider' variant='formDivider'></Button>

            {posts.map((post, i) => (

                <PostCardStyled key={i} >

                    <div onClick={() => onClickPost(post.id)}>

                        <header>Enviado por: {post.creator.name}</header>

                        <main>{post.content}</main>
                    </div>

                    <footer>

                        <IconButton style={{ background: 'none', hover: 'none' }} onClick={() => onClickLike(post.id)}>
                            <RxThickArrowUp />
                        </IconButton>

                        <span>{post.likes - post.dislikes}</span>

                        <IconButton style={{ background: 'none', hover: 'none' }} onClick={() => onClickDislike(post.id)}>
                            <RxThickArrowDown />
                        </IconButton>

                        <IconButton style={{ background: 'none', hover: 'none' }} onClick={() => onClickPost(post.id)}>
                            <IoChatboxOutline />
                        </IconButton>

                        <span>{post.comments}</span>
                    </footer>

                </PostCardStyled>

            ))}
        </FeedContainerStyled>
    )
}