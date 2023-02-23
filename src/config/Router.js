import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignWithInPhone from "../pages/SignInPhone";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/SignWithInPhone" element={<SignWithInPhone />} />
      </Routes>
    </BrowserRouter>
  );
}
