import React from "react";
import "./MovieList.css";
import Original from "./Original";
import XuHuong from "./XuHuong";
const MovieList = (props) => {
  return (
    <div className="MovieListAdmin">
      <XuHuong posts={props.posts} />
      <Original posts={props.posts} />
    </div>
  );
};

export default MovieList;
