
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import style from './App.module.css';
import Profile from './components/Profile/profile';
import { BrowserRouter, Route } from 'react-router-dom';



const App = (props) =>{
  return (
    <BrowserRouter postData={props.postData} >
    <div className={style.wrap}>
      <Navbar className={style.navbar}/>
      <Header className={style.header}/>

      <Route path="/profile" render={() => <Profile post={props.state.profilePage.post}/>}/>
      <Route path="/messages" render={() =>  <div>sdfsdfsdf</div> }></Route>
      
    </div>
    </BrowserRouter>

  );
}

export default App;
