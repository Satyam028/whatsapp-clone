import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      {/* <h1>Let's build a whatsapp app</h1> */}

      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />

        {/* chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
