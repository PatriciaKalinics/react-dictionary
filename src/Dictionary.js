import axios from "axios";
import React, { useState } from "react";
import Word from "./Word";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionary(response) {
    setResult(response.data[0]);
  }

  function handlePexels(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    axios.get(apiUrl).then(handleDictionary);

    let pexelsApiKey =
      "563492ad6f917000010000015c896e4811604345b9471db1586ba625";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=6`;
    let headers = { Authorization: pexelsApiKey };
    axios.get(pexelsApiUrl, { headers }).then(handlePexels);
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
      <Photos photos={photos} />
    </div>
  );
}
