import React, { useContext } from "react";
import Welcome from "../assets/welcome.jpg";
import { CatalogVisibilityContext } from "../context/catalogVisibility";

function WelcomeSection() {
  const { CatalogIsVisibility } = useContext(CatalogVisibilityContext);

  return (
    <div
      className="h-screen w-screen flex justify-start items-center"
      id="home"
    >
      <div className="absolute z-20 h-screen w-screen bg-gradient-to-r from-black to-transparent"></div>

      <img
        src={Welcome}
        alt="Welcome Image"
        className="object-cover absolute z-10 brightness-95 w-screen h-screen"
      />
      <section className="relative z-30 text-white flex-col justify-center items-center w-[90%] m-auto">
        <div className="w-[50%] flex flex-col gap-3 mb:w-full">
          <strong className="text-6xl mb:text-5xl">
            You most the best products in
            <span className="font-caveat"> PartTEch</span>
          </strong>
          <p className="text-2xl font-normal text-gray-300 mb:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            assumenda temporibus fugiat doloribus aut alias vitae quisquam
            cupiditate necessitatibus corrupti.
          </p>

          <button
            className="bg-white text-black px-4 py-2 rounded font-bold text-2xl text-center hover:bg-transparent border-4 border-white hover:text-white transition-bg duration-150 mb:text-xl"
            onClick={CatalogIsVisibility}
          >
            View The New Catalog
          </button>
        </div>
      </section>
    </div>
  );
}

export default WelcomeSection;
