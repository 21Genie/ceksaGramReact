import styles from './Error.module.css'

export const Error = () => {
    return (
        <a className={styles.link_error} href="/">
            <h1 className={styles.title_error}>Страница не найдена</h1>
        </a>
    )
}