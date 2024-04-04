/* eslint-disable react/prop-types */
import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1>All Products</h1>
      Search:{" "}
      <input type="text" list="titles" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <datalist id="titles">
        {props.products.map((product) => (
          <option key={product.id}>{product.name}</option>
        ))}
      </datalist>
      <div className="cards">
        {props.products
          .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="products card">
              <img src={product.primary_image} alt="" />
              <div className="card-body">
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <p>{product.description}</p>
              </div>
              <button onClick={() => props.onShowProduct(product)}>More Info</button>
            </div>
          ))}
      </div>
    </div>
  );
}
