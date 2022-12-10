import React from "react";
import Navbar from "../../components/Navbar";
import SearchForm from "../../components/Search/SearchForm";
import ResultList from "../../components/Banner/MovieList/ResultList";
import Section from "../../components/UI/Section";
import ApiHook from "../../Store/ApiHook";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const enterTaskHandler = (taget) => {
    setQuery(taget);
  }; //sét lại từ khoá để truỳen vào API theo từ khoá tiềm kiếm
  const { netflix } = ApiHook(
    `https://api.themoviedb.org/3/search/movie?api_key=0cf6418c47e9ffd90270922737ebdff6&language=en-US&query=${query}&page=1&include_adult=false`
  );
  ApiHook(); //lấy Api về
  console.log(netflix);

  return (
    <div className="app">
      <Navbar />
      <div>
        <Section>
          <SearchForm onEnterTask={enterTaskHandler} />
        </Section>
      </div>
      <ResultList posts={netflix} />
    </div>
  );
};

export default Search;
