import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './components/UI/AppRouter'
import { PostsContext } from './context/postsContext'
import { PostService } from './API/PostService'
import { useFetching } from './hooks/useFetching';

import './App.css';


export const App = () => {
    const [posts, setPosts] = useState([])

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const fetchedPosts = await PostService.getPosts()
        setPosts(fetchedPosts)
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <PostsContext.Provider value={{ posts, setPosts }}>
                    <AppRouter />
                </PostsContext.Provider>
            </BrowserRouter>
        </div>
    );
};
