import React, {useState} from "react";

export default function shops({cart, setCart, handleClick, item}) {
    const { name, price} = item;
    console.log(cart);
  return (
    <div className="col my-4">
                    <div className="card">
                        <img className="card-img-top p-2" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        <div className="card-body m-0 pt-2">
                            <div className="text-center">
                                <h5 className="fw-bolder">{name}</h5>
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                </div>
                                <span className="text-center">Rs.{price}</span>
                            </div>
                        </div>
                        <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="#" onClick={() => handleClick(item) }>Add to Cart</button></div>
                        </div>
                    </div>
                </div>
          
  )
}