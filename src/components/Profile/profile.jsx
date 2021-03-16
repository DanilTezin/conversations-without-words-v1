import react from 'react'
import style from './profile.module.css'

const Profile = () =>{
    return(
        <div className={style.wrap}>
            <div className={style.firstName}></div>
            <div className={style.lastName}></div>
            <div className={style.avatar}></div>
        </div>
    )
}
export default Profile