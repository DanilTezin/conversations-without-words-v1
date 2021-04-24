import React from 'react'
import style from './Friend.module.css'


const Friend = (props) =>{
    return(

    <div className={style.wrap}> 
        <div className={style.avatar}></div>
        <div className={style.name}>{props.name}</div>
    </div>

    )
}

export default Friend