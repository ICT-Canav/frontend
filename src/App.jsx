import { Route, Routes } from "react-router-dom";
import Home from "./Home"; // Home 컴포넌트 import 추가
import QnAPage from "./qna/qna1"; // qna 폴더 안에 qna1.jsx 파일이 있다고 가정

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qna1" element={<QnAPage />} /> {/* QnAPage로 수정 */}
    </Routes>
  );
}

export default App;
