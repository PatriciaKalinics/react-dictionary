import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos row">
        {props.photos.map((photo, index) => {
          return (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.landscape} className="img-fluid" alt="" />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
