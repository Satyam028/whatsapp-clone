import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile } from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./Chat.css";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat_headerInfo">
          <h2>Room Name</h2>
          <p>Last seen...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            {/* <SearchOutlined /> */}
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body"></div>
      <div className="chat_footer"></div>
    </div>
  );
}

export default Chat;
