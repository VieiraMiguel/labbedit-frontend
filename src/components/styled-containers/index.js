import styled from 'styled-components'

export const CenteredPageContainer = styled.div`

height: 88vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`

export const FormContainer = styled.div`

min-width: 40vw;
max-width: 95vw;
display: flex;
flex-direction: column;
//justify-content: space-between;
background-color: white;
//padding: 10px;

    img{
        //display: flex;
        align-self: center;
    }

    h2{
        display: flex;
        justify-content: center;
    }

    h3{
        display: flex;
        justify-content: center;
    }

    input, p, button {
        
        margin-bottom: 10px;
    }
`