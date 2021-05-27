import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChatList from "./SidebarChatList";
import db from "../firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
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
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Serach or start new chat" type="text" />
        </div>
      </div>

      {/* Sidebar chat */}
      <div className="sidebar_chats">
        <SidebarChatList addNewChat />
        {rooms.map((room) => (
          <SidebarChatList key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
