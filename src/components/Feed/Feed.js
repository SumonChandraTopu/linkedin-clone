import React, { useState } from "react";
import "./Feed.css";
import { MdCreate } from "react-icons/md";
import InputOption from "./InputOption";
import { IoMdImage } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { MdCalendarViewDay } from "react-icons/md";
import Post from "./Post";

function Feed() {

    const [posts, setPosts] = useState([])

    const sendPost = e => {
        e.preventDefault()
    }
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <MdCreate />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">Sent</button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption Icon={IoMdImage} title="Photo" color="#7085f9" />
          <InputOption Icon={MdSubscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={MdEventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={MdCalendarViewDay}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* ========== Posts =====================*/}

       {
           posts.map(post => {
               <Post />
           })
       }
      <Post
        name="Sumon Chandra"
        description="This is text"
        message="WOW this is worked"
      />
    </div>
  );
}

export default Feed;
