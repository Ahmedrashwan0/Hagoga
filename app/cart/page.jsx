"use client";
import React, { useEffect, useState } from "react";
import BtnDelete from "../_components/btn/BtnDelete";
import HeroAll from "../_components/HeroAll/HeroAll";
import Link from "next/link";


export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
    
      <HeroAll name="Cart" />
      <div className="p-4">
        {cart.length === 0 ? (
          <div className="w-full text-center">
            <Link href={"/menu"} className="btn bg-[#d07635] hover:bg-orange-500   border-none rounded-md"> Back to Menu</Link>
          </div>
        ) : (
          <>
            <div className="container m-auto grid gap-4 xl:grid-cols-4 lg:grid-cols-3  mt-15 md:grid-cols-2 sm:grid-cols-1">
              {cart.map((item, index) => (
                <div className="card bg-base-100 shadow-md" key={index}>
                  <figure className="px-4 pt-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.price}$</p>
                  <div className="card-actions m-auto ">
                    <BtnDelete item={item} onDelete={deleteItem} />
                  </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-4xl font-semibold">
              Total:{" "}
              {cart.reduce((total, item) => total + (item.price || 0), 0)} $
            </div>
          </>
        )}
      </div>
    </>
  );
}
