import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./mypage/login"
import Result from "./mypage/result"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;