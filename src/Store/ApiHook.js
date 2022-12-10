import { useEffect, useState } from "react";
//set API để chuyển sang các component cần dữ liệu
const ApiHook = (requestUrl) => {
  const [netflix, setNetflix] = useState([]);
  const [xuHuong, setXuHuong] = useState([]);
  const [xepHangCao, setXepHangCao] = useState([]);
  const [hanhDong, setHanhDong] = useState([]);
  const [hai, setHai] = useState([]);
  const [kinhDi, setKinhDi] = useState([]);
  const [langMang, setLangMang] = useState([]);
  const [taiLieu, setTaiLieu] = useState([]);

  useEffect(() => {
    const fetchNetflixRandom = async () => {
      try {
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        console.log(responseJson);
        const datafull = responseJson.results;
        console.log(datafull);
        const loadedMovies = [];
        for (const key in datafull) {
          loadedMovies.push({
            key: key,
            keymovie: datafull[key].key,
            id: datafull[key].id,
            backdrop_path: datafull[key].backdrop_path,
            poster_path: datafull[key].poster_path,
            title: datafull[key].title,
            overview: datafull[key].overview,
            release_date: datafull[key].release_date,
          });
        }
        setNetflix(loadedMovies);
        setXuHuong(loadedMovies);
        setXepHangCao(loadedMovies);
        setHanhDong(loadedMovies);
        setHai(loadedMovies);
        setKinhDi(loadedMovies);
        setLangMang(loadedMovies);
        setTaiLieu(loadedMovies);
      } catch (error) {
        console.log("Fails", error.message);
      }
    };
    fetchNetflixRandom();
  }, [requestUrl]);

  return {
    netflix,
    xuHuong,
    xepHangCao,
    hanhDong,
    hai,
    kinhDi,
    langMang,
    taiLieu,
  };
};

export default ApiHook;
