import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* <h1>Let's build a whatsapp app</h1> */}

      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />

        {/* chat */}
      </div>
    </div>
  );
}

export default App;
