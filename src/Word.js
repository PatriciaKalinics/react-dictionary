import React from "react";
import Definitions from "./Definitions";
import "./Word.css";

export default function Word(props) {
  if (props.data) {
    console.log(props.data);
    return (
      <div className="Word">
        <h2>{props.data.word}</h2>
        <span>{props.data.phonetic ?? ""}</span>
        <Definitions data={props.data.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
