
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import style from './App.module.css';
import Profile from './components/Profile/profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialog from './components/Messages/Dialog/dialog';
import { addPost } from './store/state';



const App = (props) =>{
  return (
    <BrowserRouter postData={props.postData} >
    <div className={style.wrap}>
      <Navbar className={style.navbar}/>
      <Header className={style.header}/>

      <Route path="/profile" render={() => <Profile addPost={props.addPost} post={props.state.profilePage.post}/>}/>
      <Route path="/messages" render={() => <Dialog dialog={props.state.messagePage.message}/>}></Route>
      
    </div>
    </BrowserRouter>

  );
}

export default App;
