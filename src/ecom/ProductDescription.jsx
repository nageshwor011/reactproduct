import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductDescription = () => {
  const history = useHistory();
  const { id } = useParams();
  const [productData, setproductData] = useState();
  const [isAllDataLoading, setIsAllDataLoading] = useState(false);

  const setData = async () => {
    try {
      const resp = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const actualData = resp.data;
      setproductData(resp.data);
      setIsAllDataLoading(true)
      // console.log("resp data", actualData);
    } catch (err) {
      alert("smth wrong", err);
    }
  };

  useEffect(() => {
    setData();
  }, [id]);
  console.log(productData);
  
    if (isAllDataLoading === false) {
       return (
        <div className="text-center mt-5">
        <div class="spinner-border text-primary " role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <h1>Loading...</h1>
      </div>
       );
    }
 
  
  return (
    <>
      <div className="container-fluid">
        <div className="row  mt-3 mx-auto">
          <h1 className="text-center text-muted">Description of product</h1>
          <div className=" ms-4" >
            <button className="btn " onClick={()=>history.push("/")}><i class="fas fa-arrow-left"></i> <span>continue shoping</span></button>
            {/* <hr  width="90%" style={{marginLeft:'180px', marginTop:'-20px'}}/> */}
          </div>
          <div className=" col-10 m-5">
           
            <div className="card mb-3 shadow" style={{maxWidth: "100%"}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={productData && productData.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">
                      {productData && productData.title}
                    </h3>
                    <h5 className="card-title text-danger">
                      {productData && productData.category}
                    </h5>
                    <h6 className="card-title">
                     
                      <ReactStars
                       count={5}
                       size={30}
                      //  color={"white"}
                       isHalf={true}
                       edit={false}
                       value ={productData? productData.rating.rate: 0}
                       activeColor={'orange'}
                       
                      
                      />
                    </h6>
                    <h6 className="card-title font-weight-bold">
                      RS <span>
                      {productData && productData.price}
                      </span>
                    </h6>
                    <p className="card-text">
                     {productData && productData.description}
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
