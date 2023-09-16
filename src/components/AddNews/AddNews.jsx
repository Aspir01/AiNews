import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./AddNews.module.css"

const AddNews = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className={style.news}>
            <p>Создайте <b>новость!</b></p>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Введите заголовок' />
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Введите описание'></textarea>
            <div className={style.btns}>
                <button >Сохранить</button>
                <Link to="/AiNews/">
                    <button>Отменить</button>
                </Link>
            </div>
        </div>
    )
}

export default AddNews