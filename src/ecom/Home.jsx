import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";

const Home = () => {
  //get product data from api
  const [productData, setProductData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [category, setCategory] = useState([]);
  //for selected catedogry
  const [selectedCat, setSelectedCat] = useState("all");
  const getProductData = async () => {
    try {
      const resp = await axios.get(`https://fakestoreapi.com/products/`);
      const actualData = resp.data;
      setProductData(actualData);

      let catData = [];
      actualData.forEach((element) => {
        catData.push(element.category);
      });
      setCategory([...new Set(catData), "all"]);
      setIsDataLoaded(true);
    } catch (er) {
      alert(er);
    }
  };
  // console.log("cate ", category);

  useEffect(() => {
    getProductData();
  }, []);

  // const categoriesData = [
  //   ...new Set(productData.map((cdata) => cdata.category)),
  //   "all",
  // ];

  const settingCategoriesData = (catType) => {
    setSelectedCat(catType);
  };

  if (isDataLoaded === false) {
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
    <div className="container-fluid">
      <div className="row">
        <h1 className="text-info text-center">Ecommerce store</h1>

        <div className="d-flex flex-wrap justify-content-between">
          {category.map((data, i) => {
            return (
              <button
                type="button"
                key={i}
                className="btn btn-dark text-capitalize"
                onClick={(e) => settingCategoriesData(data)}
              >
                {data}
              </button>
            );
          })}
        </div>

        {productData
          .filter((data, i) => {
            if (selectedCat === "all") {
            } else if (data.category !== selectedCat) {
              return;
            }
            return data;
          })
          .map((cItem) => {
            return (
              <SingleProduct key={cItem.id} id={cItem.id} prodData={cItem} />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
