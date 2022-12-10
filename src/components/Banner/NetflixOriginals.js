import React from "react";

import "./Banner.css";
const NetflixOriginals = (props) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${props.posts.backdrop_path}`;

  return (
    <div className="">
      <img className="img" src={imageUrl} alt="" />
      <h1 className="title">{props.posts.title}</h1>
      <div className="info">
        <button className="play">
          <span>Play</span>
        </button>
        <button className="MyList">
          <span>MyList</span>
        </button>
      </div>
      <p className="overview">{props.posts.overview}</p>
    </div>
  );
};

export default NetflixOriginals;
