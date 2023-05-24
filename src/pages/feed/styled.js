import styled from 'styled-components'

export const FeedContainerStyled = styled.div`

    display:flex;
    flex-direction: column;
    padding: 30px;
    gap: 10px;
    width:100vw;
    align-items: center;
`

export const PostCardStyled = styled.div`

    width: 20vw;
    border: 1px solid black;
    border-radius: 12px;
    :hover {
        cursor: pointer
    }

        header{
            font-size: x-small;
        }

        main{
            font-size: medium;
        }

        footer{
            font-size: x-small;
        }
`