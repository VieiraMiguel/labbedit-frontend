import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
    LoginPage,
    SignupPage,
    FeedPage,
    CommentsPage
} from "../pages"
import { TopBar, BottomBar, Header } from "../components"
import { useState } from 'react'


export const Router = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <BrowserRouter>
            <TopBar />
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/comments/post/:id' element={<CommentsPage />} />
            </Routes>
            <BottomBar />
        </BrowserRouter>
    )
}