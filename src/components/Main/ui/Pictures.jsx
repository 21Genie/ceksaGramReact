import { clsx } from 'clsx';

import style from './Pictures.module.css'
import { useEffect, useState } from 'react';
import { Loader } from '../../UI/Loader/Loader';

export const Pictures = () => {

    const [pictures, setPictures] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const fetchPictures = async () => {
            try {
                setLoader(true)
                const response = await fetch('https://31.javascript.htmlacademy.pro/kekstagram/data');
                const pictures = await response.json()
                setPictures(pictures)
            } catch (e) {
                alert(e)
            } finally {
                setLoader(false)
            }
        }

        fetchPictures()
    }, [])

    return (
        <>
            {loader ? <div style={{ display: 'flex', justifyContent: 'center', margin: '50' }}><Loader /></div> :
                <ul className={clsx(style.pictures, style.container)}>
                    {pictures.map(({ url, likes, comments, id }) =>
                        <li className={style.picture} key={id}>
                            <a href="#" >
                                <img className={style.picture__img} src={`../../../${url}`} alt="asd" />
                                <p className={style.picture__info}>
                                    <span className={style.picture__comments}>{comments.length}</span>
                                    <span className={style.picture__likes}>{likes}</span>
                                </p>
                            </a>
                        </li>
                    )}
                </ul>}
        </>

    );
};
