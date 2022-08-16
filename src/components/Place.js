import React from "react";
import "../styles/Place.css";


export const Place = ({id,title,location,maps,startDate,endDate,description,img}) => {
    return(
        <article>
            <div className="img"> <img src={img} /> </div>
            <div className="text-content">
                <div className="first-line"> <i className="fa-solid fa-location-dot"></i> <span className="country"> {location} </span> <a  href={maps} > View on Google Maps </a> </div>
                <h1> {title} </h1>
                <p className="date"> <strong> {`${startDate} - ${endDate}`} </strong> </p>
                <p className="description"> {description} </p>
            </div>
        </article>
    )
}