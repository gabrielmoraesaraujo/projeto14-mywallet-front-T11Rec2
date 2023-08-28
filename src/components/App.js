import {BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";


export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState({});

  return (
    <BrowserRouter>
    <TokenContext.Provider value={{token, setToken, usuarioLogado, setUsuarioLogado}}>
    <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/MyWallet" element={<MyWallet/>}></Route>
        <Route path="/NewIn" element={<NewIn/>}></Route>
        <Route path="/NewOut" element={<NewOut/>}></Route>
    </Routes>
    </TokenContext.Provider>
    </BrowserRouter>
  );
}