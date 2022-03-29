import { Avatar } from "@material-ui/core";
import React from "react";
import InputOption from "./InputOption";
import { FiThumbsUp } from "react-icons/fi";
import {BsChatLeftText} from "react-icons/bs";
import {BsShare} from "react-icons/bs";
import {MdOutlineSend} from "react-icons/md";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={FiThumbsUp} title="Like" color="gray" />
        <InputOption Icon={BsChatLeftText} title="Comment" color="gray" />
        <InputOption Icon={BsShare} title="Share" color="gray" />
        <InputOption Icon={MdOutlineSend} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
