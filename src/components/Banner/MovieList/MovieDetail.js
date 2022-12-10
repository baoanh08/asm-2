import React from "react";
import "./MovieList.css";

function MovieDetail(props) {
  return (
    <div className="Detailcolor">
      <h1>{props.title}</h1>
      <h1>-----------------------------------</h1>
      <p>{props.release}</p>
      <p>{props.overview}</p>
    </div>
  );
}

export default MovieDetail;
