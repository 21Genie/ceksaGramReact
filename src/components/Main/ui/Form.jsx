import style from './Form.module.css'
import { clsx } from 'clsx';

export const Form = () => {

    return (
        <form className={style.img_upload__form} id="upload-select-image" method="post" action="https://31.javascript.htmlacademy.pro/kekstagram" encType="multipart/form-data" autoComplete="off" noValidate>

            <fieldset className={style.img_upload__start}>
                <input type="file" id="upload-file" className={style.visually__hidden} name="filename" accept="image/*" />
                <label htmlFor="upload-file" className={style.img_upload__label}>Загрузить</label>
            </fieldset>

            <div className={clsx(style.img_upload__overlay, style.hidden)}>
                <div className={style.img_upload__wrapper}>
                    <div className={style.img_upload__preview_container}>


                        <fieldset className={clsx(style.img_upload__scale, style.scale)}>
                            <button type="button" className={clsx(style.scale__control, style.scale__control__smaller)}>Уменьшить</button>
                            <input type="text" className={clsx(style.scale__control, style.scale__control__value)} value="100%" title="Image Scale" name="scale" />
                            <button type="button" className={clsx(style.scale__control, style.scale__control__bigger)}>Увеличить</button>
                        </fieldset>


                        <div className={style.img_upload__preview}>
                            <img src="img/upload-default-image.jpg" alt="Предварительный просмотр фотографии" />
                        </div>


                        <fieldset className={clsx(style.img_upload__effect_level, style.effect_level, style.hidden)}>
                            <input className={style.effect_level__value} type="number" step="any" name="effect-level" />
                            <div className={[clsx(style.effect_level__slider, style.noUi_target, style.noUi_ltr, style.noUi_horizontal, style.noUi_txt_dir_ltr)]}>
                                <div className={[style.noUi_base]}><div className="noUi-connects">
                                    <div className={[style.noUi_connect]} style={{ transform: 'translate(0%, 0px) scale(0.1, 1)' }}>
                                    </div>
                                </div>
                                    <div className={[style.noUi_origin]} style={{ transform: 'translate(-90%, 0px)', zIndex: '4' }}>
                                        <div className={[clsx(style.noUi_handle, style.noUi_handle__lower)]} data-handle="0" tabIndex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="1.0" aria-valuenow="0.1" aria-valuetext="0.10">
                                            <div className={style.noUi_touch_area}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>


                        <button type="reset" className={clsx(style.img_upload__cancel, style.cancel)} id="upload-cancel">Закрыть</button>
                    </div>

                    <fieldset className={clsx(style.img_upload__effects, style.effects)}>
                        <ul className={style.effects__list}>
                            <li className={style.effects__item}>
                                <input type="radio" className={clsx(style.effects__radio, style.visually_hidden)} name="effect" id="effect-none" />
                                <label htmlFor="effect-none" className={style.effects__label}>
                                    <span className={clsx(style.effects__preview, style.effects__preview__none)}>Превью фото без эффекта</span>
                                    Оригинал
                                </label>
                            </li>
                            <li className={style.effects__item}>
                                <input type="radio" className={clsx(style.effects__radio, style.visually_hidden)} name="effect" id="effect-chrome" value="chrome" />
                                <label htmlFor="effect-chrome" className={style.effects__label}>
                                    <span className={clsx(style.effects__preview, style.effects__preview__chrome)}>Превью эффекта Хром</span>
                                    Хром
                                </label>
                            </li>
                            <li className={style.effects__item}>
                                <input type="radio" className={clsx(style.effects__radio, style.visually_hidden)} name="effect" id="effect-sepia" value="sepia" />
                                <label htmlFor="effect-sepia" className={style.effects__label}>
                                    <span className={clsx(style.effects__preview, style.effects__preview__sepia)}>Превью эффекта Сепия</span>
                                    Сепия
                                </label>
                            </li>
                            <li className={style.effects__item}>
                                <input type="radio" className={clsx(style.effects__radio, style.visually_hidden)} name="effect" id="effect-marvin" value="marvin" />
                                <label htmlFor="effect-marvin" className={style.effects__label}>
                                    <span className={clsx(style.effects__preview, style.effects__preview__marvin)}>Превью эффекта Марвин</span>
                                    Марвин
                                </label>
                            </li>
                            <li className={style.effects__item}>
                                <input type="radio" className={clsx(style.effects__radio, style.visually_hidden)} name="effect" id="effect-phobos" value="phobos" />
                                <label htmlFor="effect-phobos" className={style.effects__label}>
                                    <span className={clsx(style.effects__preview, style.effects__preview__phobos)}>Превью эффекта Фобос</span>
                                    Фобос
                                </label>
                            </li>
                            <li className={style.effects__item}>
                                <input type="radio" className={clsx(style.effects__radio, style.visually_hidden)} name="effect" id="effect-heat" value="heat" />
                                <label htmlFor="effect-heat" className={style.effects__label}>
                                    <span className={clsx(style.effects__preview, style.effects__preview__heat)}>Превью эффекта Зной</span>
                                    Зной
                                </label>
                            </li>
                        </ul>
                    </fieldset>

                    <fieldset className={clsx(style.img_upload__text, style.text)}>
                        <div className={style.img_upload__field_wrapper}>
                            <input className={style.text__hashtags} type='text' name="hashtags" placeholder="#ХэшТег" />
                        </div>
                        <div className={style.img_upload__field_wrapper}>
                            <textarea className={style.text__description} name="description" placeholder="Ваш комментарий..."></textarea>
                        </div>
                    </fieldset>

                    <button type="submit" className={style.img_upload__submit} id="upload-submit">Опубликовать</button>
                </div>
            </div>
        </form >

    );
};
