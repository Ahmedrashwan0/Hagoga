import React from "react";
import HeroAll from "../_components/HeroAll/HeroAll";
import BtnAdd from "../_components/btn/BtnAdd";
async function menu() {
  const response = await fetch(
    "https://ahmedrashwan0.github.io/API_Restaurant/product.json"
  );
  const data = await response.json();
  const product = data.products;

  return (
    <>
     
      <HeroAll name="Menu" />
      <div className="tabs tabs-box container mt-5 m-auto bg-white ">
        <input 
          type="radio"
          name="my_tabs"
          className="tab bg-[#d07635] m-1" 
          aria-label="All Menu"
          defaultChecked
        />
        <div className="tab-content border-base-300  p-10">
          <div className=" container m-auto grid gap-4 xl:grid-cols-4 lg:grid-cols-3  mt-15 md:grid-cols-2 sm:grid-cols-1 ">
            {product.map((items) => (
              <div className="card bg-[#1d232a] w-70 shadow-sm text-[#d07635]" key={items.id}>
                <figure className="px-10 pt-10">
                  <img src={items.image} alt="Shoes" className=" rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{items.title}</h2>
                  <p>{items.price}$</p>
                  <div className="card-actions ">
                    <BtnAdd item={items} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs"
          className="tab bg-[#d07635] m-1"
          aria-label="All casseroles"
        />
        <div className="tab-content border-base-300  p-10">
          <div className=" container m-auto grid gap-4 xl:grid-cols-4 lg:grid-cols-3  mt-15 md:grid-cols-2 sm:grid-cols-1 ">
            {product.map((items) => (
              <div className="card bg-[#1d232a] w-70 shadow-sm text-[#d07635]" key={items.id}>
                <figure className="px-10 pt-10">
                  <img src={items.image} alt="Shoes" className=" rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{items.title}</h2>
                  <p>{items.price}$</p>
                  <div className="card-actions ">
                    <BtnAdd item={items} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs"
          className="tab bg-[#d07635] m-1"
          aria-label="Grilled food"
        />
        <div className="tab-content border-base-300 p-10">
          <div className=" container m-auto grid gap-4 xl:grid-cols-4 lg:grid-cols-3  mt-15 md:grid-cols-2 sm:grid-cols-1 ">
            {product.map((items) => (
              <div className="card bg-[#1d232a] w-70 shadow-sm text-[#d07635]" key={items.id}>
                <figure className="px-10 pt-10">
                  <img src={items.image} alt="Shoes" className=" rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{items.title}</h2>
                  <p>{items.price}$</p>
                  <div className="card-actions ">
                    <BtnAdd item={items} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default menu;
