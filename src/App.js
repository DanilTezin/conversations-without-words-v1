
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import style from './App.module.css';
import Profile from './components/Profile/profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialog from './components/Messages/Dialog/dialog';
import Friends from './components/Friends/Friends';

const App = (props) =>{
  
  return (
    <BrowserRouter>

    <div className={style.wrap}>
      
      <Navbar className={style.navbar}/>
      <Header className={style.header}/>
      <Route path="/profile" render={() => <Profile newPostText = {props.state.profilePage.newPostText}
                                                   profilePage={props.state.profilePage}
                                                   dispatch={props.dispatch}
                                                   />}>
                                                </Route>
      <Route path="/messages" render={() => <Dialog addMessage={props.addMessage} dialog={props.state.messagePage.message}/>}></Route>
      <Route path="/friends" render={() => <Friends friend={props.state.friendsPage.friend}/>}></Route>

      
    </div>
    </BrowserRouter>

  );
}

export default App;
