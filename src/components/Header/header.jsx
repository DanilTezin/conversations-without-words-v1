import react from 'react'
import style from './header.module.css'

const Header = () =>{
    return(
    <div className={style.wrap}>
        <h1 className={style.logo}>CONVERSARIONS WITHOUT WORDS</h1>
    </div>
    )
}

export default Header