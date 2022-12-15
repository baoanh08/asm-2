import React, { useState, useEffect } from "react";
import "./MovieList.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YoutubeItem from "./YoutubeItem";
import MovieDetail from "./MovieDetail";

function ResultList(props) {
  const [youtube, setYoutube] = useState(null);
  const [click, setClick] = useState(false);
  const [netflixRandom, setNetflixRandom] = useState([]);
  const [title, setTittle] = useState("");
  const [overview, setOverview] = useState("");
  const [release, setRelease] = useState("");
  const [backdrop, setBackdrop] = useState("");

  useEffect(() => {
    const fetchNetflixRandom = async () => {
      try {
        const requestUrl = `https://api.themoviedb.org/3//movie/${youtube}/videos?api_key=70edd4a54dd6738217aa55c712abe4b8`;
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        console.log(responseJson);

        const data = responseJson.results;
        const find = data.find((element) => element.official === true);
        console.log(find);
        setNetflixRandom(find);
      } catch (error) {
        console.log("Fails", error.message);
      }
    };
    fetchNetflixRandom();
  }, [youtube]);
  const handleMovie = (movie) => {
    if (movie.id !== youtube) {
      setYoutube(movie.id);
      setTittle(movie.title);
      setOverview(movie.overview);
      setRelease(movie.release_date);
      setBackdrop(movie.backdrop_path);
      setClick(true);
    }
    if (movie.id === youtube) {
      setClick(false);
      setYoutube(null);
    }
  };

  return (
    <div className="Movie">
      {props.posts.map((movie, index) => {
        return (
          <img
            className="ResultList"
            key={index}
            onClick={() => handleMovie(movie)}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
        );
      })}

      {youtube && click && (
        <div className="Detail">
          <div className="DetailItem">
            <MovieDetail title={title} overview={overview} release={release} />
          </div>
          <div className="DetailYoutubeItem">
            {netflixRandom ? (
              <YoutubeItem posts={netflixRandom} />
            ) : (
              <img
                className="DetailYoutubeItem"
                src={`https://image.tmdb.org/t/p/original${backdrop}`}
                alt=""
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultList;
