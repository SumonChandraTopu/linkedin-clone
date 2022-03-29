import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://i.ibb.co/cXhN19C/2.png" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Sumon Chandra</h2>
        <h4>sumon.chandra@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,233</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,277</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("softwareDevelopment")}
        {recentItem("webDevelopment")}
        {recentItem("programming")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
