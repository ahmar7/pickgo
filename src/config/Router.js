import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessSignUp from "../pages/BusinessSignUp";
import Home from "../pages/Home";
import SignInEmail from "../pages/SignInEmail";
import SignInOtp from "../pages/SignInOtp";
import SignInWithPhone from "../pages/SignInPhone";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="SignInWithPhone" element={<SignInWithPhone />} />
        <Route path="SignInWithEmail" element={<SignInEmail />} />
        <Route path="SignInWithOtp" element={<SignInOtp />} />
        <Route path="BusinessSignUp" element={<BusinessSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
