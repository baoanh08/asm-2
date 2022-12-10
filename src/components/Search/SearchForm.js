import { useRef } from "react";
import React from "react";

import classes from "./SearchForm.module.css";
//tạo form search
const SearchForm = (props) => {
  const searchInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = searchInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue); //truyền từ khoá vào thẻ Search
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={searchInputRef} />

      <div className={classes.button}>
        <i className={classes.buttonreset}>Reset</i>
        <button className={classes.buttonsearch} onSubmit={submitHandler}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
