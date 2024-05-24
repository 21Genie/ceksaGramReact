import { useNavigate, Link } from "react-router-dom";
import { clsx } from 'clsx';

import style from './Pictures.module.css'
import { useEffect, useState } from 'react';
import { Loader } from '../../UI/Loader/Loader';
import { useFetching } from '../../../hooks/useFetching';
import { PostService } from '../../../API/PostService'

export const Pictures = () => {
    const [pictures, setPictures] = useState([])
    const [loader, setLoader] = useState(false)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getPosts()
        setPictures(posts)
    })

    let router = useNavigate();

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            {isPostsLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', margin: '50' }}><Loader /></div>
                : <ul className={clsx(style.pictures, style.container)}>
                    {pictures.map(({ url, likes, comments, id }) =>
                        <li className={style.picture} key={id}>
                            <Link to={`/post/${id}`}>
                                <img className={style.picture__img} src={`../../../${url}`} alt="asd" />
                                <p className={style.picture__info}>
                                    <span className={style.picture__comments}>{comments.length}</span>
                                    <span className={style.picture__likes}>{likes}</span>
                                </p>
                            </Link>
                        </li>
                    )}
                </ul>
            }
        </>

    );
};
