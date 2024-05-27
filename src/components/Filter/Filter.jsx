import { useContext, useMemo, useState } from 'react';
import { clsx } from 'clsx';

import { PostsContext } from '../../context/postsContext'
import { debounce } from 'throttle-debounce'

import styles from './Filter.module.css';

export const Filter = () => {
    const { setPosts } = useContext(PostsContext)

    const [active, setActive] = useState(1)

    const handleBtnClick = debounce(200, (evt, cb) => {
        setActive(Number(evt.target.id))
        cb()
    })

    const sortByDefault = () => {
        setPosts(prevPosts => [...prevPosts].sort((a, b) => a.id - b.id))
    }

    const sortByRandom = () => {
        setPosts(prevPosts => [...prevPosts].sort(() => Math.random() - Math.random()))
    }

    const sortByComments = () => {
        setPosts(prevPosts => [...prevPosts].sort((a, b) => b.comments.length - a.comments.length))
    }

    return (
        <div className={styles.filter}>
            <button
                id={1}
                className={clsx(styles.filters__button, 1 === active && styles.filters__button__active)}
                onClick={(evt) => handleBtnClick(evt, sortByDefault)}
            >
                По умолчанию
            </button>

            <button
                id={2}
                className={clsx(styles.filters__button, 2 === active && styles.filters__button__active)}
                onClick={(evt) => handleBtnClick(evt, sortByRandom)}
            >
                Случайные
            </button>
            <button
                id={3}
                className={clsx(styles.filters__button, 3 === active && styles.filters__button__active)}
                onClick={(evt) => handleBtnClick(evt, sortByComments)}
            >
                Обсуждаемые</button>
        </div>
    );
};