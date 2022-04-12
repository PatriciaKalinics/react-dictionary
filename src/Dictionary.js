import axios from "axios";
import React, { useState } from "react";
import Word from "./Word";
import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="enter your word..."
          onChange={updateQuery}
        ></input>
      </form>
      <Word data={result} />
    </div>
  );
}
