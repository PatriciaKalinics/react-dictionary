import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState("");

  function handleResponse(response) {
    let word = response.data[0];
    console.log(word);
    alert(`${word.word} (${word.meanings[0].partOfSpeech})`);
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
    </div>
  );
}
