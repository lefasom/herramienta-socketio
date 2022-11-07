import { BrowserRouter, Routes, Route } from "react-router-dom"


import Layout from "./Layout.jsx";
import SectionOff from "./SectionOff.jsx";
import Chat from '../Pages/chat/Chat.jsx'
import Login from '../Pages/login/Login.jsx'
import Logout from '../Pages/logout/Logout.jsx'
import NewUser from '../Pages/newUser/NewUser.jsx'





const Router = () => {

  

  return (
    <>
      <BrowserRouter>
      
        <Routes>
                <Route path="/Login" element={<Login />}></Route>
                <Route path='/' element={<SectionOff />}>
                    <Route path="/NewUser" element={<NewUser />}></Route>
                </Route>
                <Route path='/' element={<Layout />}>
                    <Route path="/Chat" element={<Chat />}></Route>
                    <Route path="*" element={<h1>404</h1>}></Route>
                </Route>
                <Route path="/Logout" element={<Login />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default Router;