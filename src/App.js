import logo from './logo.svg';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import style from './App.module.css';
import Profile from './components/Profile/profile';



function App() {
  return (
    <div className={style.wrap}>
      <Navbar className={style.navbar}/>
      <Header className={style.header}/>
      <Profile/>
    </div>
  );
}

export default App;
