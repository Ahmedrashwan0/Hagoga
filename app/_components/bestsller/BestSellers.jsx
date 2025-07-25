"use client";
import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BtnAdd from "../btn/BtnAdd";
import "./BestSellers.css"

 function BestSellers() {
 const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://ahmedrashwan0.github.io/API_Restaurant/product.json");
      const data = await res.json();
      setProducts(data.products);
    }

    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  return (
    <div className=" container m-auto  my-10">
        <p className="text-[35px] font-bold text-center text-[#d07635]">Best-selling <br />Foods</p>
           <Carousel autoPlay responsive={responsive} infinite={true} >
                        {products.map((items) => (
                          <div className="card  bg-[#1d232a] w-70 shadow-sm m-auto text-[#d07635]" key={items.id}>
                            <figure className="px-10 pt-10">
                              <img src={items.image} alt="Shoes" className=" rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                              <h2 className="card-title">{items.title}</h2>
                              <p>{items.price}$</p>
                              <div>
                                <BtnAdd item={items} />
                              </div>
                            </div>
                          </div>
                        ))}
        </Carousel>
    </div>
  );
}

export default BestSellers;
