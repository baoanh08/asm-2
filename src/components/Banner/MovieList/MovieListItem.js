import React, { useEffect, useState } from "react";
import "./MovieList.css";
import MovieDetail from "./MovieDetail";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YoutubeItem from "./YoutubeItem";
const MovieListItem = (props) => {
  const [youtube, setYoutube] = useState(null);
  const [click, setClick] = useState(false);
  const [netflixRandom, setNetflixRandom] = useState([]);
  const [title, setTittle] = useState("");
  const [overview, setOverview] = useState("");
  const [release, setRelease] = useState("");
  const [backdrop, setBackdrop] = useState("");
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5
  };
  useEffect(() => {
    const fetchNetflixRandom = async () => {
      try {
        const apiKey = "0cf6418c47e9ffd90270922737ebdff6";
        const requestUrl = `https://api.themoviedb.org/3//movie/${youtube}/videos?api_key=${apiKey}`;
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
      <Slider {...settings}>
        {props.posts.map((movie, index) => {
          return (
            <img
              className="sliderArrow"
              key={index}
              onClick={() => handleMovie(movie)}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt=""
            />
          );
        })}
      </Slider>
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
};

export default MovieListItem;
