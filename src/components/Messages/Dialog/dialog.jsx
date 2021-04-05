import React from 'react'
import Message from '../Message/Message'
import style from './dialog.module.css'


const Dialog = (props) =>{
    let messageElements = props.dialog.map(message => <Message name={message.name + ":"} time={message.time} text={message.text}/>)
 
    return(
        <div className={style.wrap} >
            {messageElements}
            <div className={style.textInput}>
                <div className={style.text}>New Message</div>
                <textarea className={style.area} placeholder="text..." name="" id="" cols="30" rows="5"></textarea>
                <button className={style.add} >Add post</button>
            </div>
        </div>
    )

}

export default Dialog