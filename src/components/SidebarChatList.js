import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./SidebarChatList.css";

function SidebarChatList({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter new name");

    if (roomName) {
      //do some clever database stuff...
    }
  };

  return !addNewChat ? (
    <div className="sidebarChatList">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChatList_info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChatList">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChatList;
