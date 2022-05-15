import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos row">
        {props.photos.map((photo, index) => {
          return (
            <div className="col-4" key={index}>
              <a href={photo.src.original}>
                <img src={photo.src.landscape} className="img-fluid" />
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
