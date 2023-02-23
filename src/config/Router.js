import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignInEmail from "../pages/SignInEmail";
import SignInOtp from "../pages/SignInOtp";
import SignWithInPhone from "../pages/SignInPhone";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="SignWithInPhone" element={<SignWithInPhone />} />
        <Route path="SignWithInEmail" element={<SignInEmail />} />
        <Route path="SignWithInOtp" element={<SignInOtp />} />
      </Routes>
    </BrowserRouter>
  );
}
