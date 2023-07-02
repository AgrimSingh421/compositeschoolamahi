import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = ({ title, description, alt, url, link }) => {
  return (
    <div className="card">
      <img src={url} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <NavLink to={`/posts/${link}`} className="btn btn-warning">
          Read More
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
