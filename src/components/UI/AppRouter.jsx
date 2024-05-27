import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import { MainPage } from '../../pages/MainPage/MainPage'
import { Post } from '../../pages/Post/Post'
import { Error } from '../../pages/Error/Error'

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}