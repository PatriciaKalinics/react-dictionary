import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <small className="Synonyms">
        <br />
        Synonyms: <em>{props.synonyms.join(", ")}</em>
      </small>
    );
  } else {
    return null;
  }
}
