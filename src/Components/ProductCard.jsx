import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductCard = ({ products }) => {

  const dispatch = useDispatch()

  function handleAddToCart(product){
    dispatch( {type: "ADD_TO_CART", payload: product})
  }

  return (
    <div className="row g-3">
      {products.map((product) => {
      
        return <div key={product.id} className="col-md-6 col-lg-3">
          <div className="card overflow-hidden p-3" aria-hidden="true">
            <img
              src={product.image}
              alt={product.title}
              className="card-image-top placeholder-card-img"
            />
            <div className="card-body">
              <h5 className="card-title text-truncate">{product.title}</h5>
              <p className="card-text">
                <span className="d-flex justify-content-between align-items-center">
                  <span className="text-danger">${product.price}</span>
                  <span className="">
                    <i className="fa-solid fa-star text-warning"></i>
                    {product.rating.rate} / {product.rating.count}
                  </span>
                </span>
                <span className="product-description my-3">
                    {product.description}
                </span>
              </p>
            </div>
            <div className="row p-2 ">
              <Link
                to={`/details/${product.id}`}
                className="btn btn-primary col-6 d-block">
                Read More
              </Link>

              <button onClick={() => handleAddToCart(product)} className="btn btn-success col-6 d-block">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      })}
    </div>
  );
};

export default ProductCard;
