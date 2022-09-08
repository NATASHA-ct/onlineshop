/* eslint-disable */
import { Link } from "react-router-dom";

const Productcard= (props) => {
  const { id, title, price, image} = props;
  return (
    <Link to={`/product/${id}`}>
      <div className="card" id={id}>
        <div className="card-container">
          <img className="card-img" src={image} width="200px" height="200px" />
          <div className="card-details">
            <h1 className="card-title">{title}</h1>
            <p className="card-price">$ {price}</p>
          </div>
          
       </div>
      </div>
    </Link>
  );
};

export default Productcard;
