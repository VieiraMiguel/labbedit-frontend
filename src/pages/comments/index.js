import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { FeedContainerStyled, PostCardStyled } from '../feed/styled'
import { ContentTextAreaComment } from '../../components'
import {
    Button,
    IconButton
} from '@chakra-ui/react'
import { useForm, useProtectedPage } from '../../hooks'
import { AddComment, CommentsList, LikeComment, DislikeComment, DislikePost, LikePost, PostById } from '../../constants'
import { RxThickArrowUp, RxThickArrowDown } from 'react-icons/rx'
import { IoChatboxOutline } from 'react-icons/io5'


export const CommentsPage = () => {

    const navigate = useNavigate()

    useProtectedPage(navigate)

    const { id } = useParams()

    const [comments, setComments] = useState([])
    const [post, setPost] = useState([])


        CommentsList(id)
            .then(data => {
                setComments(data)
            })
            .catch((error) => {
                console.log(error)
            })

        PostById(id)
            .then(data => {
                setPost(data)
            })
            .catch((error) => {
                console.log(error)
            })

    const [form, onChangeInputs] = useForm({

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

    const onClickLikeComment = async (id) => {

        try {

            await LikeComment(id, {

                like: true
            })

        } catch (error) {

            alert(error.response.data.message)
        }
    }

    const onClickDislikeComment = async (id) => {

        try {

            await DislikeComment(id, {

                like: false
            })

        } catch (error) {

            alert(error.response.data.message)
        }
    }

    return (
        <FeedContainerStyled>

            {post.map((post, i) => (

                <PostCardStyled key={i} >

                    <div>

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

                        <IconButton style={{ background: 'none', hover: 'none' }}>
                            <IoChatboxOutline />
                        </IconButton>

                        <span>{post.comments}</span>
                    </footer>

                </PostCardStyled>

            ))}

            <form onSubmit={onSubmit}>

                <ContentTextAreaComment
                    value={form.content}
                    onChange={onChangeInputs}
                    isValid={true}
                />

                <Button type='submit' variant='formFeed'>Responder</Button>

            </form>

            <Button id='divider' variant='formDivider'></Button>

            {comments.map((comment, i) => (

                <PostCardStyled key={i} >

                    <div>

                        <header>Enviado por: {comment.creator.name}</header>

                        <main>{comment.content}</main>
                    </div>
                    
                    <footer style={{width:'30%'}}>
                        <IconButton bg='none' onClick={() => onClickLikeComment(comment.id)}>
                            <RxThickArrowUp />
                        </IconButton>

                        <span>{comment.likes - comment.dislikes}</span>

                        <IconButton bg='none' onClick={() => onClickDislikeComment(comment.id)}>
                            <RxThickArrowDown />
                        </IconButton>
                    </footer>

                </PostCardStyled>

            ))}
        </FeedContainerStyled>
    )
}