import { useNavigate, Link } from "react-router-dom";
import { clsx } from 'clsx';

import style from './Pictures.module.css'
import { useContext, useEffect, useState } from 'react';
import { Loader } from '../../UI/Loader/Loader';
import { PostsContext } from '../../../context/postsContext'

export const Pictures = () => {
    const { posts } = useContext(PostsContext)

    return (
        <>
            <ul className={clsx(style.pictures, style.container)}>
                {posts.map(({ url, likes, comments, id }) =>
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
        </>

    );
};
