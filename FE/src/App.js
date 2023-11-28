import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Preloader from './component/preloader/Preloader';
import Nav from './component/nav/Nav';
import Banner from './component/main/banner/Banner';

function App() {
  return (
    <div>
      <Preloader/>
      <Nav/>
      {/* 아마 이 밑으로 라우터 들어갈거 같음. */}
      <Banner/>
    </div>
  );
}

export default App;
