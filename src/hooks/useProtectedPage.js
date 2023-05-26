import { useEffect } from 'react'
import { toLoginPage } from '../routes'

export const useProtectedPage = (navigate) => {

    useEffect(() => {

        const token = localStorage.getItem('labeddit.token')

        if (!token) {

            toLoginPage(navigate)
        }
    }, [navigate])
}