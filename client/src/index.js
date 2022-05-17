import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// routes
import Signup from "./routes/signup";
import Login from "./routes/login";
import Chatroom from "./routes/chatroom";
import Userroom from "./routes/userroom";
import Settings from "./routes/settings";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/chatroom" element={<Chatroom />} />
        <Route path="/userroom" element={<Userroom />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();