import { useState } from 'react';
import styles from './Filter.module.css';
import { clsx } from 'clsx';

export const Filter = () => {
    const [active, setActive] = useState(1)

    const handleBtnClick = (evt) => {
        setActive(Number(evt.target.id))
    }

    return (
        <div className={styles.filter}>
            <button className={clsx(styles.filters__button, 1 === active && styles.filters__button__active)} onClick={handleBtnClick} id={1}>По умолчанию</button>
            <button className={clsx(styles.filters__button, 2 === active && styles.filters__button__active)} onClick={handleBtnClick} id={2}>Случайные</button>
            <button className={clsx(styles.filters__button, 3 === active && styles.filters__button__active)} onClick={handleBtnClick} id={3}>Обсуждаемые</button>
        </div>
    );
};
