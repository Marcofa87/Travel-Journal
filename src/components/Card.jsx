import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="container">
        <img src={props.imageUrl} />
        <div className="container-head">
          <div className="container-body">
<<<<<<< HEAD
            <img src="../../public/images/location-dot-solid.svg" alt="" />
=======
            <img src="../../images/location-dot-solid.svg" alt="" />
>>>>>>> a6776c61780ce676cd4afec8e7c8879c752fd6c0
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
