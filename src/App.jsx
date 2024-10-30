import { Route, Routes } from "react-router-dom";
import QnAPage1 from "./qna/qna1";
import QnAPage2 from "./qna/qna2";
import QnAPage3 from "./qna/qna3"; 
import Home from "./home";
import Login from "./mypage/login"
import Result from "./mypage/result"
import Signup from "./mypage/signup"
import Main from "./mainpage/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/qna1" element={<QnAPage1 />} /> {/* /qna1 경로 */}
      <Route path="/qna2" element={<QnAPage2 />} /> {/* /qna2 경로 */}
      <Route path="/qna3" element={<QnAPage3 />} /> {/* /qna3 경로 */}

      <Route path="/login" element={<Login />} />
      <Route path="/result" element={<Result />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/qna1" element={<QnAPage />} />

      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
