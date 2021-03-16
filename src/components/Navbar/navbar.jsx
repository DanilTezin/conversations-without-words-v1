import react from 'react'
import style from './navbar.module.css'

const Navbar = () =>{
    return(
        <div className={style.wrap}>
            <a className={style.nav} href="">Message</a>
            <a className={style.nav} href="">Friends</a>
            <a className={style.nav} href="">Find-Users</a>
            <a className={style.nav} href="">Settings</a>
        </div>
    )
}

export default Navbar