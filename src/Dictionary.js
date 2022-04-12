import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${query}...`);
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
