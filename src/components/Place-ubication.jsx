import React from "react";

function PlaceUbication() {
  return (
    <div className="overflow-x-hidden w-screen h-56 mb:h-60">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.26255590340392!2d-89.21170286663231!3d13.706279301765512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63312cffdc0e23%3A0xfd208b3a87cfb4d9!2sMetrocentro%20San%20Salvador!5e0!3m2!1ses-419!2ssv!4v1702136229197!5m2!1ses-419!2ssv"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default PlaceUbication;
