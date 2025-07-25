"use client";

import toast from "react-hot-toast";



function BtnAdd({ item }) {
  const addToCart = (product) => {
    toast.success('Add To Cart!');

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...existingCart, product];
   

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <>
    
    <button className="btn bg-[#d07635] hover:bg-orange-500 text-white rounded-xl border-none" onClick={() => addToCart(item)}>
      Add to Cart
    </button>
    
    </>
  );
}

export default BtnAdd;
