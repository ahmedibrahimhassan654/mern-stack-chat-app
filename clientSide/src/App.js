
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardPage from "./Pages/DashbordPage";
import IndexPage from "./Pages/indexPage";
import ChatroomPage from "./Pages/ChatRoomPage";
import { io } from "socket.io-client";


function App() {
   const [socket,setSocket]=React.useState(null)
   const setupSocket=()=>{
    const toket=localStorage.getItem('CC_Token')
    if (toket.length>0&&!socket) {
      const socket = io("http://localhost:8000", {
        query: {
          token: localStorage.getItem("CC_Token"),
        },
      });
    }

    
   }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/dashboard" component={DashboardPage} exact />
        <Route path="/chatroom/:id" component={ChatroomPage} exact />
      </Switch>
    </BrowserRouter>
  );

}

export default App;
