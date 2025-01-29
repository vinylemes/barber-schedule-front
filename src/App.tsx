
import { Route, Routes } from "react-router-dom";
import Splash from "./pages/splash";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Subscription from "./pages/subscription";
import ForgotPassword from "./pages/forgotpassword";
import RegisterBarbershop from "./pages/registerbarbershop";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/registerbarbershop" element={<RegisterBarbershop />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>

}

export default App;
