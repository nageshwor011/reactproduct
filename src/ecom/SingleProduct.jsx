import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const SingleProduct = ({prodData}) => {
  const { id, title, price, category, image, rating } = prodData
  return (
    <>
      <div className=" rounded col-sm-10 col-lg-3 col-md-6 gy-3 mx-auto productBox">
        <Link
          to={`/productdescription/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="">
            <img
              src={image}
              className="card-img-top "
              height="300px"
              width="200px"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              {/* <h6 className="card-text text-danger"> rat {rating.rate}</h6> */}
              <h6 className="card-title text-danger font-weight-bold">
                RS <span>{price}</span>
              </h6>
              <h6 className="card-text text-danger">
                <ReactStars
                  count={5}
                  size={30}
                  isHalf={true}
                  edit={false}
                  value={rating.rate}
                  activeColor={"orange"}
                 
                />
              </h6>
             
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleProduct;
