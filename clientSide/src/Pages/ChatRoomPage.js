import React from "react";
import { withRouter } from "react-router-dom";
import io from "socket.io-client";

const ChatroomPage = ({ match ,socket}) => {
  const chatroomId = match.params.id;


  return <div className='chatroomPage'>
      <div className="chatroomSection">
        <div className="cardHeader">
            Chat Room Name
        </div>
        <div className="chatroomContent">
            <div className="message">
              <span className="otherMessage"> Kit :</span> Hello I'm Kit
            </div>
            <div className="message">
              <span className="ownMessage"> Ahmed :</span> Hello I'm Ahmed
            </div>
        </div>
        <div className="chatroomActions">
        <div >
          <input type="text" name="message" placeholder="say somthing" />
          </div>
          <div>
            <button className="join">
                  send
            </button>
          </div>
        </div>
       
      </div>  

  </div>;
};

export default withRouter( ChatroomPage);