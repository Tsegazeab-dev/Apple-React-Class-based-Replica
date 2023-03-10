import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Products() {
  const[product, setProduct] = useState([]);
    const{id} = useParams();
    useEffect(() => {
        fetch("http://localhost:1224/iphones")
          .then((res) => res.json())
          .then((data) => {
           const productsList = data.products;
           const singleProduct = productsList.filter(
            (x)=> x.product_url === id
            );
           setProduct(singleProduct)
            })
          },[id]);
  return (
    <div>
        {product?.map((info) => (
            <div key={info.product_id} className="bottom-100">
            <div className="row justify-content-center text-center mt-5 pt-3">
              <div className="col-12">
                <div className="title-wraper bold">{info.product_name}</div>
                <div className="brief-description">{info.product_brief_description}</div>
              </div>
            </div>

            <div className="row justify-content-center text-center product-holder h-10">
              <div className={`col-sm-12 col-md-6 my-auto`}>
                <div className="starting-price">
                  {`Starting at ${info.starting_price}`}
                </div>
                <div className="monthly-price">{info.price_range}</div>
                <div className="product-details">{info.product_description}</div>
              </div>

              <div className={`col-sm-12 col-md-6 p-4`}>
                <div className="prodict-image">
                  <img src={info.product_img} />
                </div>
              </div>
            </div>
          </div>
        ))
        }
              
    </div>
  )
}

export default Products;