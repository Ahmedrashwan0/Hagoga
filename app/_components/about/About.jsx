import React from "react";

function About() {
  return (
    <div className="container m-auto min-h-screen my-15">
      <div className="grid md:grid-cols-2  gap-5">
        <div className="">
          <p className="text-[65px] font-bold text-center text-[#d07635]">
            About <br />
            Hagoga
          </p>
          <p className="text-[14px] text-[#616f7d]">
            We are here to take you on a delightful and flavorful journey into
            the world of authentic and innovative cuisine.At Hajouja Restaurant,
            we offer you a touch of home and the spirit of farmers, infused with
            creativity and innovation in every dish. <br />
            <br />
            We believe in the power of food to bring people together and
            strengthen social bonds. Through a diverse range of delicious and
            balanced dishes, we strive to satisfy all tastes and meet the
            expectations of every guest. <br />
            <br />
            Come and enjoy our cheerful and friendly atmosphere, where you can
            savor an unforgettable dining experience and exchange laughs and
            memories. We are here to make every moment you spend at Hajouja a
            unique and special experience.
          </p>
          <p className=" font-bold my-3">Reserve your spot at Hajouja now!</p>
          <p className="text-[14px] text-[#616f7d]">
            Booking Procedure on the Website: <br />
            1. Choose available days: Check
            the available dates for booking. 
           <br /> 2. Add menu items: Add your
            favorite items, including special dishes and beverages. 
           <br />3. Payonline: Proceed to checkout and pay the full amount to secure yourreservation. 
           <br/>4. Enjoy a different experience: Enjoy the unique
            dining experience with your family and friends.
          </p>
        </div>
        <img src="/about.png" alt="wd" className=" rounded-xl " />
      </div>
    </div>
  );
}

export default About;
