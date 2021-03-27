import react from 'react'
import style from './post.module.css'
import image from '../../../images/6392229375de53fb4bff04e9e3e6f324.png'

const Post = (props) =>{
    return(
    <div className={style.post}>

        <div className={style.info}>

            <div className={style.name}>
                {props.name}
            </div>
            <div className={style.time}>
               {props.time}
            </div>

        </div>

        <div className={style.wrap}>
            <img className={style.image} src={image} alt=""/>
        </div>
        <div className={style.like}>
            like:0
        </div>

    </div>
    )
}

export default Post