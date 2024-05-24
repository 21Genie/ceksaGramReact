import { useState } from 'react';
import style from './Comments.module.css'
import { clsx } from 'clsx';

export const Comments = ({ comments }) => {
    const [count, setCount] = useState(1)

    return (
        <>
            {comments.length > 5 && (
                <>
                    <div className={style.social__comment_count}>
                        <span className={style.social__comment_shown_count}>{Math.min(5 * count, comments.length)} </span>
                        из
                        <span className={style.social__comment_total_count}> {comments.length} </span>
                        комментариев
                    </div>

                    <ul className={style.social__comments}>

                        {comments.slice(0, count * 5).map(post =>
                            <li className={style.social__comment} key={post.id}>
                                <img className={style.social__picture} src={`../../../../${post.avatar}`} alt="Харитон" width="35" height="35" />
                                <p className={style.social__text}>{post.message}</p>
                            </li>
                        )}
                        {count * 5 < comments.length && <button onClick={() => setCount(count + 1)} type="button" className={clsx(style.social__comments_loader, style.comments_loader)}>Загрузить еще</button>
                        }

                    </ul>
                </>
            )
            }
        </>
    )
}