import styled from 'styled-components'

export const FeedContainerStyled = styled.div`

    display:flex;
    flex-direction: column;
    padding: 33px;
    gap: 10px;
    width:100vw;

    hr{

        border: 1px solid black;
        width: 50vw;
    }
`

export const PostCardStyled = styled.div`

    width: 100%;
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