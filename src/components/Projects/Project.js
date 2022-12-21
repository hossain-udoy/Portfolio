import React from "react";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/sidebar.png";
import MusicApp from "../../img/musicapp.png";

const Project = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      id="projects"
    >
      {/* <div className="md:flex gap-16 justify-center mt-16 md:flex-row m-5 sm:ml-36 md:mr-36 lg:m-0 content-center flex-col"> */}
      <div className="mb-5 w-full h-full rounded-lg p-4 shadow-md shadow-yellow-500">
        <img
          alt="Home"
          src={Ecommerce}
          className="h-56 w-full rounded-md object-cover"
        />
        <div className="mt-2 text-justify text-xs">
          <dl>
            <div className="text-center text-xl font-semibold">BUY&SELL</div>
          </dl>

          <p className=" mt-6 font-medium">
            BUY&SELL is a user friendly , Mobile responsive website where you
            can buy and sell used products.Some beautiful animation is also used
            there
          </p>
          <a href="/">
            <button className=" mt-5 button bg-yellow-300">More Details</button>
          </a>
        </div>
      </div>
      <div className="mb-5 w-full h-full rounded-lg p-4 shadow-md shadow-yellow-500">
        <img
          alt="Home"
          src={HOC}
          className="h-56 w-full rounded-md object-cover"
        />
        <div className="mt-2 text-justify text-xs">
          <dl>
            <div className="text-center text-xl font-semibold">Proacademy</div>
          </dl>

          <p className=" mt-6 font-medium">
            Proacademy is a user friendly , Mobile responsive website where you
            can buy and sell used products.Some beautiful animation is also used
            there
          </p>
          <a href="/">
            <button className=" mt-5 button bg-yellow-300">More Details</button>
          </a>
        </div>
      </div>
      <div className="mb-5 w-full h-full rounded-lg p-4 shadow-md shadow-yellow-500">
        <img
          alt="Home"
          src={MusicApp}
          className="h-56 w-full rounded-md object-cover"
        />
        <div className="mt-2 text-justify text-xs">
          <dl>
            <div className="text-center text-xl font-semibold">Easy-Travel</div>
          </dl>

          <p className=" mt-6 font-medium">
            Easy-Travel is a user friendly , Mobile responsive website where you
            can buy and sell used products.Some beautiful animation is also used
            there
          </p>
          <a href="/">
            <button className=" mt-5 button bg-yellow-300">More Details</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
