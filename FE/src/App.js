import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Preloader from './component/preloader/Preloader';
import Nav from './component/nav/Nav';
import Home from './component/main/home/Home';
import Footer from './component/footer/Footer';
import ArticleList from './component/article/list/ArticleList';
import ArticleDetails from './component/article/detail/ArticleDetails';
import User from "./component/user/user";
import Login from './component/user/login';
import SignUp from './component/user/signup';

// import User from './component/user/user';

function App() {
    return (
        <div>
            <Preloader/>

            <Routes>
                <Route path="/" element={<Nav/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/donate" element={<ArticleList/>}/>
                    <Route path="/donate/:articleId" element={<ArticleDetails/>}/>
                    <Route path="/user" element={<User/>}/>
                </Route>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/user/login" element={<Login/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
