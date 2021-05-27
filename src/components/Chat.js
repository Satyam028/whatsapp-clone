import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile } from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { SearchOutlined } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import React, { useState, useEffect } from "react";
import "./Chat.css";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed in...", input);
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat_headerInfo">
          <h3>Room Name</h3>
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

      {/* chat body */}
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_receiver"}`}>
          <span className="chat_name">Satyam Bharti</span>
          Hey Guys
          <span className="chat_timestamp">10.46AM</span>
        </p>
      </div>

      {/* chat footer */}
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
