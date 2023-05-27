import styled from 'styled-components'

export const FeedContainerStyled = styled.div`

    display:flex;
    flex-direction: column;
    padding: 33px;
    gap: 12px;
    width:100vw;

    form{

        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    textarea{

        height: 20vh;
        padding: 16px;
        width: 100%;
        background-color: #EDEDED;
        border-radius: 12px;
    }

    #divider{

        margin-top: 22px;
        margin-bottom: 22px;
    }
`

export const PostCardStyled = styled.div`

    width: 100%;
    height: 20vh;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    background-color: #FBFBFB;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    :hover {
        cursor: pointer
    }

        header{
            font-size: x-small;
            color: #6F6F6F;

            padding: 12px;
            padding-bottom: 0;
        }

        main{
            font-size: medium;

            padding: 12px;
        }

        footer{
            font-size: x-small;
            color: #6F6F6F;
            width: 50%;

            display: flex;
            justify-content: space-between;
            align-items: center;
        }
`