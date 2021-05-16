import React from 'react'
import ReactDOM from 'react-dom'
import Post from './Post/post'
import style from './myposts.module.css'

const Myposts = (props) =>{

    let postElements = props.post.map( post => <Post name={post.name} time={post.time}/>)
    let postText = React.createRef()
    
    let onPostChange = () =>{
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', text: postText.current.value})
    }

    let addPost = () =>{
        props.dispatch({type:'ADD-POST', postMessage:postText.current.value} )
    }
    

    return(
    <div className={style.Myposts}>
        <div className={style.textInput}>
            <div className={style.text}>New Post</div>
            <textarea onChange={onPostChange} ref={postText} value={props.newPostText} className={style.area} placeholder="text..." name="" id="" cols="30" rows="5"></textarea>
            <button className={style.add} onClick={addPost} type="submit">Add post</button>
        </div>
        
        {postElements}
    </div>
    )
}

export default Myposts