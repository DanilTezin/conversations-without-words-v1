import logo from './logo.svg';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import style from './App.module.css';



function App() {
  return (
    <div className={style.wrap}>
      <Navbar className={style.navbar}/>
      <Header className={style.header}/>
    </div>
  );
}

export default App;
