import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import { PostsContext } from '../../context/postsContext'

import { MainPage } from '../../pages/MainPage/MainPage'
import { Post } from '../../pages/Post/Post'
import { Error } from '../../pages/Error/Error'

export const AppRouter = () => {
    const { isPosts } = useContext(PostsContext)

    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="post/:id" element={<Post posts={isPosts} />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}