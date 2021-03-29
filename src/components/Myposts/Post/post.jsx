import react from 'react'
import style from './post.module.css'
import image from '../../../images/6392229375de53fb4bff04e9e3e6f324.png'
import heart from '../../../images/heart.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Post = (props) => {

    AOS.init()
    return (
        <div data-aos='fade-up' className={style.post}>

            <div className={props.info}>

                <div className={style.name}>
                    {props.name}
                </div>
                <div className={style.time}>
                    {props.time}
                </div>

            </div>

            <div className={style.wrap}>
                <img className={style.image} src={image} alt="" />
            </div>
            <div className={style.like}>
                <img className={style.heart} src={heart} alt="" />
            like:0
        </div>

        </div>
    )
}

export default Post