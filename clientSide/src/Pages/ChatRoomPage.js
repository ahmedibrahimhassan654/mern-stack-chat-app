import React from "react";
import io from "socket.io-client";

const ChatroomPage = ({ match }) => {
  const chatroomId = match.params.id;


  return <div>Chatroom Page</div>;
};

export default ChatroomPage;