import { Route, Routes } from "react-router-dom";
import Splash from "./pages/splash";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
