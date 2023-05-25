import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
    LoginPage,
    SignupPage,
    FeedPage,
    CommentsPage
} from "../pages"
import { TopBar, BottomBar, Header } from "../components"


export const Router = () => {

    return (
        <BrowserRouter>
            <TopBar />
            <Header/>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/comments/post/:id' element={<CommentsPage />} />
            </Routes>
            <BottomBar />
        </BrowserRouter>
    )
}