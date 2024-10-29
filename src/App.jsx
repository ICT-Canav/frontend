import { Route, Routes } from "react-router-dom";
import QnAPage from "./qna/qna1";
import Home from "./home";
import Main from "./mainpage/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qna1" element={<QnAPage />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;