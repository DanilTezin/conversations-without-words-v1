import React from 'react'
import ReactDOM from 'react-dom'
import Post from './Post/post'
import style from './myposts.module.css'

const Myposts = (props) =>{

    let postElements = props.post.map( post => <Post name={post.name} time={post.time}/>)
    let postText = React.createRef()
    
    let onPostChange = () =>{
        props.updateNewPostText(postText)
    }
    

    return(
    <div className={style.Myposts}>
        <div className={style.textInput}>
            <div className={style.text}>New Post</div>
            <textarea onChange={onPostChange} ref={postText} value={props.newPostText} className={style.area} placeholder="text..." name="" id="" cols="30" rows="5"></textarea>
            <button className={style.add} onClick={() =>{props.addPost(postText.current.value, postText.current.value = '')}} type="submit">Add post</button>
        </div>
        
        {postElements}
    </div>
    )
}

export default Myposts