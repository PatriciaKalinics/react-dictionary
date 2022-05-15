import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      {props.data.map((phonetic, index) => {
        if (phonetic.audio) {
          return (
            <div key={index}>
              <a href={phonetic.audio} target="_blank" rel="noreferrer">
                {phonetic.text}
              </a>
            </div>
          );
        } else {
          return <div key={index}>{phonetic.text}</div>;
        }
      })}
    </div>
  );
}
