import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* header */}
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* search bar */}
      <div className="sidebar_search"></div>
      <div className="sidebar_chats"></div>
    </div>
  );
}

export default Sidebar;