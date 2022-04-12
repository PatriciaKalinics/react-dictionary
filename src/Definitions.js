import React from "react";

export default function Definitions(props) {
  return (
    <div>
      {props.data.map((meaning, index) => {
        return (
          <div key={index}>
            <h3>({meaning.partOfSpeech})</h3>
            <ol>
              {meaning.definitions.map((definition, index) => {
                if (definition.example) {
                  return (
                    <li key={index}>
                      {definition.definition} <br />
                      <em>{definition.example}</em>
                    </li>
                  );
                } else {
                  return <li key={index}>{definition.definition}</li>;
                }
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}
