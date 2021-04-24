import Friend from "./Friend"
import style from './Friends.module.css'

const Friends = (props) =>{

    let friendElements = props.friend.map(friend => <Friend name={friend.name} />)

    return(
        <div className={style.wrap}>
            {friendElements}
        </div>
    )
}

export default Friends