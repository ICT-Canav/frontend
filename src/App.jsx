import { Route, Routes } from "react-router-dom";
import QnAPage from "./qna/qna1";
import Home from "./home";
import Login from "./mypage/login"
import Result from "./mypage/result"
import Signup from "./mypage/signup"
import Main from "./mainpage/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/result" element={<Result />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/qna1" element={<QnAPage />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;