export const toLoginPage = (navigator) => {

    navigator('/login')
}

export const toSignupPage = (navigator) => {

    navigator('/signup')
}

export const toFeedPage = (navigator) => {

    navigator('/feed')
}

export const toCommentsPage = (navigator, id) => {

    navigator(`/comments/post/${id}`)
}