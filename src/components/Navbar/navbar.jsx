import react from 'react'
import style from './navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () =>{
    return(
        <div className={style.wrap}>
            <NavLink className={style.nav} activeClassName={style.active} to="/messages">Message</NavLink>
            <NavLink className={style.nav} activeClassName={style.active}  to="/profile">Profile</NavLink>
            <a className={style.nav} href="">Friends</a>
            <a className={style.nav} href="">Find-Users</a>
            <a className={style.nav} href="">Settings</a>
        </div>
    )
}

export default Navbar