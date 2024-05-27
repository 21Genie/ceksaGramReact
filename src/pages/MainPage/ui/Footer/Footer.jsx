import style from './Footer.module.css'
import { clsx } from 'clsx';

export const Footer = () => {

    return (
        <footer className={clsx(style.page_footer, style.container)}>
            <div className={style.page_footer__wrapper}>
                <div className={clsx(style.page_footer__copyright, style.copyright)}>
                    <a className={clsx(style.copyright__link, style.copyright__link__image)} href="https://htmlacademy.ru/intensive/javascript"><img src="img/htmla-logo.svg" width="130" height="45" alt="HTML Academy" /></a>
                    <p>Сделано в <a className={clsx(style.copyright__link, style.copyright__link__text)} href="https://htmlacademy.ru/intensive/javascript">HTML Academy</a></p>
                </div>
                <ul className={clsx(style.page_footer__contacts, style.contacts)}>
                    <li><a href="https://twitter.com/htmlacademy_ru" className={clsx(style.contacts__link, style.contacts__link__twitter)}>Twitter</a>
                    </li>
                    <li><a href="https://vk.com/htmlacademy" className={clsx(style.contacts__link, style.contacts__link__vk)}>VK</a></li>
                </ul>
            </div>
        </footer >
    );
};
