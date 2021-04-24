import React from 'react'
import Message from '../Message/Message'
import style from './dialog.module.css'

const Dialog = (props) =>{ 

    let messageElements = props.dialog.map(message => <Message className={style.txt} name={message.name + ":"} time={message.time} text={message.text}/>)
    let MessageTxt = React.createRef()

    return(
        <div className={style.wrap} >
            <div className={style.scrolling}>
            {messageElements}
            </div>
            <div className={style.textInput}>
                <div className={style.text}>New Message</div>
                <textarea ref={MessageTxt} className={style.area} placeholder="text..." name="" id="" cols="30" rows="5"></textarea>
                <button onClick={() =>{props.addMessage(MessageTxt.current.value, MessageTxt.current.value = '')}} className={style.add} >Add post</button>
            </div>
        </div>
    )

}

export default Dialog