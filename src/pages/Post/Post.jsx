import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

import style from './Post.module.css'

import { PostsContext } from '../../context/postsContext'
import { Comments } from '../../components/Comments/Comments'

export const Post = () => {
    const { posts } = useContext(PostsContext)

    const { id } = useParams()
    const { likes, url, comments, description } = posts.find(post => post.id === Number(id))

    return (
        <section className={clsx(style.big_picture, style.overlay)}>

            <div className={style.big_picture__preview}>

                <div className={style.big_picture__img}>
                    <img src={`../../../../${url}`} alt="Девушка в купальнике" width="600" height="600" />
                </div>

                <div className={clsx(style.big_picture__social, style.social)}>
                    <div className={style.social__header}>
                        <img className={style.social__picture} src={`../../../../img/avatar-${Math.ceil(Math.random() * 6)}.svg`} alt="Аватар автора фотографии" width="35" height="35" />
                        <p className={style.social__caption}>{description}</p>
                        <p className={style.social__likes}>Нравится <span className={style.likes_count}>{likes}</span></p>
                    </div>

                    <Comments comments={comments} />

                    <div className={style.social__footer}>
                        <img className={style.social__picture} src={`../../../../img/avatar-6.svg`} alt="Аватар комментатора фотографии" width="35" height="35" />
                        <input type="text" className={style.social__footer_text} placeholder="Ваш комментарий..." />
                        <button type="button" className={style.social__footer_btn} name="button">Отправить</button>
                    </div>
                </div>

                <Link to='/' className={clsx(style.big_picture__cancel, style.cancel)} id="picture-cancel">Закрыть</Link>
            </div >
        </section>
    )
}