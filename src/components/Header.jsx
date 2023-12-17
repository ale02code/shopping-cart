import React, { useContext, useState } from "react";
import UserDefault from "../assets/userDefault.svg";
import Cart from "../assets/cart.svg";
import MenuIcon from "../assets/menuBar.svg";
import CloseIcon from "../assets/Close.svg";
import { useScrollVisibility } from "../hooks/useScrollVisibility";
import { CartVisibilityContext } from "../context/cartVisibility";

function Header() {
  const { handleCartIsVisible } = useContext(CartVisibilityContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    if (window.innerWidth < 768) {
      setShowMenu(!showMenu);
    }
  };

  useScrollVisibility();

  return (
    <header
      id="main"
      className="flex justify-center items-center w-full m-auto bg-transparent text-white min-h-[65px] dark:bg-blue-600 fixed z-50 overflow-x-hidden"
    >
      <div className="relative flex justify-center items-center w-full max-w-[90%]">
        <section
          className={showMenu ? "absolute left-2 top-2" : "absolute left-2"}
        >
          <h1>
            <a href="#home" className="font-caveat font-bold text-5xl">
              PartTEch
            </a>
          </h1>
        </section>

        <nav
          className={showMenu ? "mt-12 text-xl" : "m-none mb:hidden text-xl"}
        >
          <ul
            className={
              showMenu
                ? "grid grid-cols-1 place-items-center mb-2"
                : "flex gap-2 text-2xl"
            }
          >
            <li className="hover:underline hover:cursor-pointer py-1 px-4 mb:hover:no-underline mb:border-b-2 border-white">
              <a href="#home" onClick={handleMenuToggle}>
                Home
              </a>
            </li>
            <li className="hover:underline hover:cursor-pointer py-1 px-4 mb:hover:no-underline mb:no-underline mb:border-b-2 border-white">
              <a href="#preview-catalog" onClick={handleMenuToggle}>
                Catalog
              </a>
            </li>
            <li className="hover:underline hover:cursor-pointer py-1 px-4 mb:hover:no-underline mb:no-underline mb:border-b-2 border-white">
              <a href="#about-us" onClick={handleMenuToggle}>
                About Us
              </a>
            </li>
            <li className="hover:underline hover:cursor-pointer py-1 px-4 mb:hover:no-underline mb:no-underline mb:border-b-2 border-white">
              <a href="#contact" onClick={handleMenuToggle}>
                Contact
              </a>
            </li>
            {showMenu && (
              <li className="hover:underline hover:cursor-pointer py-1 px-4 mb:hover:no-underline mb:no-underline mb:border-b-2 border-white">
                <a href="#" onClick={handleMenuToggle}>
                  Log In
                </a>
              </li>
            )}
          </ul>
        </nav>

        <section
          className={
            showMenu
              ? "flex gap-2 absolute right-2 top-4"
              : "flex gap-2 absolute right-2"
          }
        >
          <img
            src={Cart}
            alt="Cart Icon"
            className="h-11 hover:cursor-pointer"
            draggable="false"
            onClick={handleCartIsVisible}
          />
          <img src={UserDefault} alt="User Icon" className="h-11 mb:hidden" />
          <img
            src={showMenu ? CloseIcon : MenuIcon}
            alt="Menu Responsive Icon"
            className="hover:cursor-pointer h-11 hidden mb:block"
            onClick={handleMenuToggle}
            draggable="false"
          />
        </section>
      </div>
    </header>
  );
}

export default Header;
