import React from "react";
import { Link } from "react-router-dom";

const Productcard = (props) => {
     const {
    id, title, price, image,
  } = props;
  return (
    <Link to={`/products/${id}`}>
        <div id={id}>
        <div>
            <h1>{title}</h1>
            <p>{price}</p>
            <img src={image} width="200px" height="200px"/>
        </div>
        </div>
    </Link>
  );
};

 
export default Productcard;