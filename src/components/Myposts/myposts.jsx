import react from 'react'
import Post from './Post/post'
import style from './myposts.module.css'

const Myposts = (props) =>{
    return(
    <div className={style.Myposts}>
        <div className={style.textInput}>
            <div className={style.text}>New Post</div>
            <textarea className={style.area} placeholder="text..." name="" id="" cols="30" rows="5"></textarea>
            <button className={style.add} type="submit">Add post</button>
        </div>

    <Post name='Test post' time='9:30'/>
    <Post name='Good job man'/>
    <Post name='My salary is 300kk nanosek'/>
    
    </div>
    )
}

export default Myposts