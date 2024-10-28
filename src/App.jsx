import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./mypage/login"
import Result from "./mypage/result"
import Signup from "./mypage/signup"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/result" element={<Result />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;