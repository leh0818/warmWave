import "./App.css";
import { Routes, Route } from "react-router-dom";
import Preloader from "./component/preloader/Preloader";
import Nav from "./component/nav/Nav";
import Home from "./component/main/home/Home";
import Footer from "./component/footer/Footer";
import ArticleList from "./component/article/list/ArticleList";
import ArticleDetails from "./component/article/detail/ArticleDetails";
import SignIn from "./component/user/signin";
import SignUp from "./component/user/signup";
import ChatMain from "./component/chat/ChatMain";

function App() {
  return (
    <div>
      <Preloader />

      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/donate" element={<ArticleList />} />
          <Route path="/donate/:articleId" element={<ArticleDetails />} />
          <Route path="/chat" element={<ChatMain />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
