/* eslint-disable */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../REDUX/products/productsSlice";
import Productcard from "../PRODUCTCARD/Productcard";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [searchTerm]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <div>
      <div className="input">
        <p className="search-title">Search below for your favorite product..</p>
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>

      <h2 className="list-heading">AVAILABLE PRODUCTS</h2>
      <div className="list-container">
        {filteredProducts.map((product) => (
          <Productcard
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
