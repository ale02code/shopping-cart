import React, { useContext } from "react";
import { CatalogVisibilityContext } from "../context/catalogVisibility";

function Catalog() {
  const { catalogIsVisibility } = useContext(CatalogVisibilityContext);

  return (
    <main className="w-screen bg-zinc-800">
      <div className="flex flex-col gap-2 justify-center items-center w-full h-full">
        <div
          className="h-[670px] w-[90%] bg-white grid grid-cols-3 grid-rows-2 rounded-lg overflow-hidden gap-3 mt-16 mb-2 p-3 font-caveat font-bold mb:grid-row-3 mb:grid-cols-4"
          id="preview-catalog"
        >
          <div className="col-span-2 overflow-hidden relative mb:col-span-4">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-150 cursor-pointer rounded-md"
              draggable="false"
              src="https://resource.logitech.com/w_880,h_495,c_lfill,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/product-grid/desktop_grey-mice-and-keyboards.png?v=1"
              alt=""
              onClick={catalogIsVisibility}
            />
            <p className="absolute right-0 left-0 bottom-3 z-20 text-center text-4xl">
              Keyboard And Mouse
            </p>
          </div>
          <div
            className="row-span-2 overflow-hidden relative mb:col-span-2 mb:h-56"
            onClick={catalogIsVisibility}
          >
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-150 hover:cursor-pointer rounded-md"
              draggable="false"
              src="https://resource.logitech.com/w_440,h_743,c_lfill,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/product-grid/desktop_grey-headsets.png?v=1"
              alt=""
            />
            <p className="text-center bottom-32 absolute z-20 w-full text-4xl mb:bottom-12">
              Headset
            </p>
          </div>
          <div
            className="col-span-1 overflow-hidden relative  mb:col-span-2 mb:h-56"
            onClick={catalogIsVisibility}
          >
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-150 hover:cursor-pointer rounded-md"
              draggable="false"
              src="https://resource.logitech.com/w_440,h_248,c_lfill,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/product-grid/desktop_grey-mobile-devices.png?v=1"
              alt=""
            />
            <p className="text-center bottom-8 absolute z-20 w-full text-4xl">
              Tablet
            </p>
          </div>
          <div
            className="col-span-1 overflow-hidden relative  mb:col-span-4"
            onClick={catalogIsVisibility}
          >
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-150 hover:cursor-pointer rounded-md shadow-2xl shadow-black mb:h-44"
              draggable="false"
              src="https://resource.logitech.com/w_440,h_248,c_lfill,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/product-grid/desktop_grey-streaming.png?v=1"
              alt=""
            />
            <p className="text-center top-8 absolute z-20 w-full text-4xl">
              WebCam
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Catalog;
