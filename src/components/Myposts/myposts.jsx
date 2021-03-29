import react from 'react'
import Post from './Post/post'
import style from './myposts.module.css'

const Myposts = (props) =>{

    let postElements = props.post.map( post => <Post name={post.name} time={post.time}/>)

    return(
    <div className={style.Myposts}>
        <div className={style.textInput}>
            <div className={style.text}>New Post</div>
            <textarea className={style.area} placeholder="text..." name="" id="" cols="30" rows="5"></textarea>
            <button className={style.add} type="submit">Add post</button>
        </div>
        
        {postElements}
    </div>
    )
}

export default Myposts