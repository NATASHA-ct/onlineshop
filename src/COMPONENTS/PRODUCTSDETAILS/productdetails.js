/* eslint-disable */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../REDUX/products/productsSlice";
import { getProductDetails } from "../../REDUX/products/productsdetailsSlice";
import "./productdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts())
      .unwrap()
      .then((result => {
        dispatch(getProductDetails({ products: result, id: Number(id) }));
      }));
  }, []);
  return (
    <div id={product.id}>
      

      <div className="product-container">
        <img className="prod-img" src={product.image} alt={product.title} />
        <h1 className="product-title">{product.title}</h1>
        <div>
          <p className="product-price">$ {product.price}</p>
        </div>
        <p className="product-descrip">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
