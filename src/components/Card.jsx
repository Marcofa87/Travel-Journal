import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="container">
        <img src={props.imageUrl} />
        <div className="container-head">
          <div className="container-body">
            <img
              src="/public/assets/location-dot-solid.svg"
              alt="location dot"
            />

            <h4>{props.location}</h4>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <div className="container-foot">
            <h2>{props.title}</h2>
            <p className="bold">
              {props.startDate} - {props.endDate}
            </p>
            <p className="description">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
