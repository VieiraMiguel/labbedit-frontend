import axios from 'axios'


export const BASE_URL = "http://localhost:3003"

export const Login = async (body) => {

    const { data } = await axios.post(`${BASE_URL}/users/login`, body)

    return data
}

export const Signup = async (body) => {

    const { data } = await axios.post(`${BASE_URL}/users/signup`, body)

    return data
}

export const PostsList = async () => {

    const { data } = await axios.get(`${BASE_URL}/posts`,
        {
            headers: {
                Authorization: localStorage.getItem('labeddit.token')
            }
        }
    )

    return data
}

export const PostById = async (id) => {

    const { data } = await axios.get(
        `${BASE_URL}/posts/${id}`,
        {
            headers: {
                Authorization: localStorage.getItem('labeddit.token')
            }
        }
    )

    return data
}

export const AddPost = async (body) => {

    const { data } = await axios.post(
        `${BASE_URL}/posts`,
        body,
        {
            headers: {
                Authorization: localStorage.getItem('labeddit.token')
            }
        }
    )

    return data
}

export const CommentsList = async (id) => {

    const { data } = await axios.get(
        `${BASE_URL}/comments/post/${id}`,
        {
            headers: {
                Authorization: localStorage.getItem('labeddit.token')
            }
        }
    )

    return data
}

export const AddComment = async (id, body) => {

    const { data } = await axios.post(
        `${BASE_URL}/comments/post/${id}`,
        body,
        {
            headers: {
                Authorization: localStorage.getItem('labeddit.token')
            }
        }
    )

    return data
}

export const LikePost = async (id, body) => {

    const { data } = await axios.put(
        `${BASE_URL}/posts/${id}/like`,
        body,
        {
            headers: {
                Authorization: localStorage.getItem('labeddit.token')
            }
        }
    )

    return data
}

export const DislikePost = async (id, body) => {

    const { data } = await axios.put(
        `${BASE_URL}/posts/${id}/like`,
        body,
        {
            headers: {
                Authorization: localStorage.getItem('labeddit.token')
            }
        }
    )

    return data
}

export const LikeComment = async (id, body) => {

    const { data } = await axios.put(
        `${BASE_URL}/comments/${id}/like`,
        body,
        {
            headers: {
                Authorization: localStorage.getItem('labeddit.token')
            }
        }
    )

    return data
}

export const DislikeComment = async (id, body) => {

    const { data } = await axios.put(
        `${BASE_URL}/comments/${id}/like`,
        body,
        {
            headers: {
                Authorization: localStorage.getItem('labeddit.token')
            }
        }
    )

    return data
}

export const validateEmail = email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email)
export const validatePassword = password => /.{4,}/.test(password)
export const validateName = name => /.{2,}/.test(name)