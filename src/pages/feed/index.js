import { FeedContainerStyled, PostCardStyled } from './styled'
import { useEffect, useState } from 'react'
import { PostsList } from '../../constants'
import { useNavigate } from 'react-router-dom'
import {
    toCommentsPage
} from '../../routes'
import { Button } from '@chakra-ui/react'


export const FeedPage = () => {

    const navigate = useNavigate()

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

    const onClickAddPost = () => {
        
    }

    return (
        <FeedContainerStyled>
            <Button onClick = {()=> onClickAddPost()} type='submit' variant='formMain'>Postar</Button>

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