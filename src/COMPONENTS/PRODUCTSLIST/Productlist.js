import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts} from "../../REDUX/products/productsSlice";
import Productcard from "../PRODUCTCARD/Productcard";

const Productlist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
   const filteredProducts = products.filter((product) =>
     product.title.toLowerCase().includes(searchTerm.toLowerCase())
   );

  useEffect(() => {
    dispatch(fetchProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <h2>Available Products</h2>
      {filteredProducts.map((product) => (
        <Productcard
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};
 
export default Productlist;