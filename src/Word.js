import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";
import "./Word.css";

export default function Word(props) {
  if (props.data) {
    console.log(props.data);
    return (
      <div className="Word">
        <h2>{props.data.word}</h2>
        <Phonetics data={props.data.phonetics} />
        <Definitions data={props.data.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
