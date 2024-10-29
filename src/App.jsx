import { Route, Routes } from "react-router-dom";
import QnAPage from "./qna/qna1"; // qna 폴더 안에 qna1.jsx 파일이 있다고 가정
import Home from "./home";
import Main from "./mainpage/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qna1" element={<QnAPage />} /> {/* QnAPage로 수정 */}
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;