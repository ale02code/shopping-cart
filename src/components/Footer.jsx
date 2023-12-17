import React from "react";
import PlaceUbication from "./Place-ubication";
import Facebook from "../assets/facebook.png";
import Linkedin from "../assets/linkedin.png";
import Whatsapp from "../assets/whatsapp.png";
import Youtube from "../assets/youtube.png";
import useDate from "../hooks/useDate";

function Footer() {
  const year = useDate();
  return (
    <section className="overflow-hidden bg-neutral-900" id="contact">
      <div>
        <PlaceUbication />
      </div>
      <footer className="w-full h-auto">
        <div className="w-[90%] mx-auto text-white m-4 flex mb:flex-col-reverse mb:justify-center mb:items">
          <section className="h-full w-1/2 flex flex-col justify-center items-center mb:w-full">
            <section className="border-b-2 border-white pb-4">
              <h5 className="text-5xl font-bold text-center font-caveat">
                PartTEch
              </h5>
              <p className="text-lg">
                It is a company dedicated and disciplined to delivering the best
                to the user with a quality product and a 5/5 service stars from
                their website and order in the cart to the shipping to your own
                home.
              </p>
            </section>

            <section className="flex justify-around w-full h-full text-lg mb:gap-0 text-center mt-2">
              <div className="flex flex-col gap-2 justify-center items-center">
                <strong>Social Network</strong>

                <a
                  href="https://www.facebook.com/christopher.chacon.545"
                  className="hover:underline hover:text-gray-300"
                  target="_BLANK"
                >
                  <img
                    src={Facebook}
                    alt="Social Network Icon"
                    className="h-8 hover:cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/christopher-chac%C3%B3n-97b1b725a/"
                  className="hover:underline hover:text-gray-300"
                  target="_BLANK"
                >
                  <img
                    src={Linkedin}
                    alt="Social Network Icon"
                    className="h-8 hover:cursor-pointer"
                  />
                </a>
                <a
                  href="https://wa.me/50372878961"
                  className="hover:underline hover:text-gray-300"
                  target="_BLANK"
                >
                  <img
                    src={Whatsapp}
                    alt="Social Network Icon"
                    className="h-8 hover:cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCvKCb6FdkYvpSKCpN8q2vjg"
                  className="hover:underline hover:text-gray-300"
                  target="_BLANK"
                >
                  <img
                    src={Youtube}
                    alt="Social Network Icon"
                    className="h-8 hover:cursor-pointer"
                  />
                </a>
              </div>
              <div className="flex flex-col">
                <strong>Sections</strong>
                <nav>
                  <ul>
                    <li>
                      <a
                        href="#home"
                        className="hover:underline hover:text-gray-300"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#preview-catalog"
                        className="hover:underline hover:text-gray-300"
                      >
                        Catalog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about-us"
                        className="hover:underline hover:text-gray-300"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="hover:underline hover:text-gray-300"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col">
                <strong>More About Us</strong>
                <a
                  href="https://google.com"
                  className="hover:underline hover:text-gray-300"
                  target="_BLANK"
                >
                  Terms and Conditions
                </a>
                <a
                  href="https://google.com"
                  className="hover:underline hover:text-gray-300"
                  target="_BLANK"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://google.com"
                  className="hover:underline hover:text-gray-300"
                  target="_BLANK"
                >
                  Cookies
                </a>
              </div>
            </section>
          </section>
          <form
            className="w-1/2 flex justify-center items-center mb:w-full mb:mb-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <fieldset className="border border-white flex flex-col p-3 rounded-lg w-80">
              <legend className="text-center text-xl px-1">FeedBack?</legend>
              <label htmlFor="user" className="text-lg">
                User
              </label>
              <input
                type="text"
                name="user"
                placeholder="Example@gmail.com"
                className="rounded-md py-1 px-2 text-black mb-2"
              />
              <label htmlFor="message" className="text-lg">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Contact with PartTEch?"
                className="rounded-md py-1 px-2 text-black mb-2 resize-none h-48"
              ></textarea>
              <button className="py-2 px-5 bg-white font-bold text-black rounded-md hover:bg-gray-300 active:bg-gray-500 active:text-white">
                Send
              </button>
            </fieldset>
          </form>
        </div>

        <section className="h-12 bg-zinc-700 flex justify-center items-center mb:text-center mb:h-16">
          <p className="text-white capitalize text-lg">
            designed and developed by
            <span className="ml-1"></span>
            <a
              href="https://github.com/ale02code"
              target="_blank"
              className="hover:text-gray-200"
            >
              ale02.code
            </a>{" "}
            <span className="mr-1"></span> © {year} all rights reserved
          </p>
        </section>
      </footer>
    </section>
  );
}

export default Footer;
