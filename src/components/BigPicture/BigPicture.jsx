import { clsx } from 'clsx';
import style from './BigPicture.module.css'

export const BigPicture = () => {
    return (
        <section className={clsx(style.big_picture, style.overlay)}>

            <div className={style.big_picture__preview}>

                <div className={style.big_picture__img}>
                    <img src="photos/4.jpg" alt="Девушка в купальнике" width="600" height="600" />
                </div>

                <div class={clsx(style.big_picture__social, style.social)}>
                    <div className={style.social__header}>
                        <img class={style.social__picture} src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35" />
                        <p className={style.social__caption}>Норм</p>
                        <p className={style.social__likes}>Нравится <span className={style.likes_count}>6</span></p>
                    </div>

                    <div className={style.social__comment_count}>
                        <span className={style.social__comment_shown_count}>5</span>
                        из
                        <span class={style.social__comment_total_count}>16</span>
                        комментариев
                    </div>
                    <ul className={style.social__comments}>
                        <li className={style.social__comment}>
                            <img className={style.social__picture} src="img/avatar-4.svg" alt="Харитон" width="35" height="35" />
                            <p className={style.social__text}>Кадрирование просто никакое.</p>
                        </li>
                        <li className={style.social__comment}>
                            <img className={style.social__picture} src="img/avatar-5.svg" alt="Тимур" width="35" height="35" />
                            <p className={style.social__text}>Разве это композиция?! Что это за композиция?!</p>
                        </li>
                        <li className={style.social__comment}>
                            <img className={style.social__picture} src="img/avatar-3.svg" alt="Ким" width="35" height="35" />
                            <p className={style.social__text}>Всё отлично!</p>
                        </li>
                        <li className={style.social__comment}>
                            <img className={style.social__picture} src="img/avatar-6.svg" alt="Степан" width="35" height="35" />
                            <p className={style.social__text}>Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%</p>
                        </li>
                        <li className={style.social__comment}>
                            <img className={style.social__picture} src="img/avatar-2.svg" alt="Аким" width="35" height="35" />
                            <p className={style.social__text}>Нормас.</p>
                        </li>
                    </ul>

                    <button type="button" className={clsx(style.social__comments_loader, style.comments_loader)}>Загрузить еще</button>

                    <div className={style.social__footer}>
                        <img className={style.social__picture} src="img/avatar-6.svg" alt="Аватар комментатора фотографии" width="35" height="35" />
                        <input type="text" className={style.social__footer_text} placeholder="Ваш комментарий..." />
                        <button type="button" className={style.social__footer_btn} name="button">Отправить</button>
                    </div>
                </div>

                <button type="reset" className={clsx(style.big_picture__cancel, style.cancel)} id="picture-cancel">Закрыть</button>
            </div >
        </section>
    )
}