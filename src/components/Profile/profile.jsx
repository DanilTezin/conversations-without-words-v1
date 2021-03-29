import react from 'react'
import style from './profile.module.css'
import ava from "../../images/6392229375de53fb4bff04e9e3e6f324.png"
import Myposts from '../Myposts/myposts'
const Profile = (props) =>{
    return(
        <div>
            <div className={style.wrap}>
                <div className={style.wrapname}>
                    <div className={style.firstName}>Danil</div>
                    <div className={style.lastName}>Tezin</div>
                </div>
                <div><img className={style.avatar} src={ava} alt=""/></div>

                <div className={style.wrapinfo}>
                    <div className={style.status}>Conversation</div>
                    <div className={style.family}>Family: none</div>
                    <div className={style.find}>
                        <div className={style.findwork}>Ищет работу</div>
                    </div>
                </div>
            </div>
            <Myposts post={props.post}/>
        </div>
    )
}
export default Profile