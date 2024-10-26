import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Main from "./mainpage/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;