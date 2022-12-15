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
  }; //reset
  const { netflix } = ApiHook(
    `https://api.themoviedb.org/3/search/movie?api_key=70edd4a54dd6738217aa55c712abe4b8&language=en-US&query=${query}&page=1&include_adult=false`
  );
  ApiHook();

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
