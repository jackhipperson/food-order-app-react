import React from "react";
import headerImg from "../../assets/header.jpg";

const Header = (props) => {
  return (
    <>
      <header className="z-10 sticky top-0 left-0 w-full h-20 bg-[#8a2b06] text-white  shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-3xl font-medium">JackMeals</h1>
          <button className="rounded-lg border p-2 text-l">🛒 Cart</button>
        </div>
      </header>
      <div className="w-full z-0 overflow-hidden">
        <img
          src={headerImg}
          alt="Fresh Pizza!"
          className="w-[100%] translate-y-[-4rem] object-cover"
        />
      </div>
    </>
  );
};

export default Header;
