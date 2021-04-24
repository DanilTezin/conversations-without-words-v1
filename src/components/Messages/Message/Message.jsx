import style from './Message.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Message = (props) =>{
    AOS.init()

    return(
        <div data-aos='zoom-in' className={style.wrap}>
            {props.name} {props.text}
        </div>
    )
}

export default Message