import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './components/UI/AppRouter'

import { PostsContext } from './context/postsContext'

import { PostService } from './API/PostService'

import { useFetching } from './hooks/useFetching';

import './App.css';


export const App = () => {
    const [isPosts, setIsPosts] = useState([])

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getPosts()
        setIsPosts(posts)
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="App">
            <PostsContext.Provider value={{ isPosts }}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </PostsContext.Provider>
        </div>
    );
};
