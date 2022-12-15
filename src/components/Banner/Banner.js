import React, { useEffect, useState } from "react";
import "./Banner.css";
import NetflixOriginals from "./NetflixOriginals";
import Original from "./MovieList/Original";

import MovieListItem from "./MovieList/MovieListItem";
import ApiHook from "../../Store/ApiHook";

const Banner = (props) => {
  const [netflixRandom, setNetflixRandom] = useState([]);
  const { netflix } = ApiHook(
    "https://api.themoviedb.org/3/discover/tv?api_key=70edd4a54dd6738217aa55c712abe4b8&language=en"
  );
  const { xuHuong } = ApiHook(
    "https://api.themoviedb.org/3/trending/all/day?api_key=70edd4a54dd6738217aa55c712abe4b8&language=en-US"
  );
  const { xepHangCao } = ApiHook(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=70edd4a54dd6738217aa55c712abe4b8&language=en-US"
  );
  const { hanhDong } = ApiHook(
    "https://api.themoviedb.org/3/discover/movie?api_key=70edd4a54dd6738217aa55c712abe4b8&with_genres=28"
  );
  const { hai } = ApiHook(
    "https://api.themoviedb.org/3/discover/movie?api_key=70edd4a54dd6738217aa55c712abe4b8&with_genres=35" //Gọi API theo tùng danh mục
  );
  const { kinhDi } = ApiHook(
    "https://api.themoviedb.org/3/discover/movie?api_key=70edd4a54dd6738217aa55c712abe4b8&with_genres=27"
  );
  const { langMang } = ApiHook(
    "https://api.themoviedb.org/3/discover/movie?api_key=70edd4a54dd6738217aa55c712abe4b8&with_genres=10749"
  );
  const { taiLieu } = ApiHook(
    "https://api.themoviedb.org/3/discover/movie?api_key=70edd4a54dd6738217aa55c712abe4b8&with_genres=99"
  );

  useEffect(() => {
    const fetchNetflixRandom = async () => {
      try {
        const requestUrl =
          "https://api.themoviedb.org/3/discover/movie?api_key=70edd4a54dd6738217aa55c712abe4b8&language=en-";
        const response = await fetch(requestUrl);
        const responseJson = await response.json();

        const Random = Math.floor(
          Math.random() * responseJson.results.length - 1
        );
        const data = responseJson.results[Random];

        setNetflixRandom(data);
      } catch (error) {
        console.log("Fails", error.message);
      }
    };
    fetchNetflixRandom();
  }, []);

  return (
    <div className="Banner">
      <NetflixOriginals posts={netflixRandom} />
      <h3>Original</h3>
      <Original posts={netflix} />

      <h3>Xu Hướng</h3>
      <MovieListItem posts={xuHuong} />
      <h3>Xếp Hạng Cao</h3>
      <MovieListItem posts={xepHangCao} />
      <h3>Hành Động</h3>
      <MovieListItem posts={hanhDong} />
      <h3>Hài</h3>
      <MovieListItem posts={hai} />
      <h3>Kinh Dị</h3>
      <MovieListItem posts={kinhDi} />
      <h3>Lãng Mạng</h3>
      <MovieListItem posts={langMang} />
      <h3>Tài Liệu</h3>
      <MovieListItem posts={taiLieu} />
    </div>
  );
};
export default Banner;
