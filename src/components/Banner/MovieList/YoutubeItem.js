import "./MovieList.css";
import React from "react";
import YouTube from "react-youtube";

const YoutubeItem = (props) => {
  console.log(props.posts);
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <YouTube opts={opts} videoId={props.posts.key} />
    </div>
  );
};

export default YoutubeItem;
