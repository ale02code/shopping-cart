import { useEffect } from "react";

export function useScrollVisibility() {
  let mainLocation = window.scrollY;

  const handleScroll = () => {
    let currentLocation = window.scrollY;
    let main = document.getElementById("main");

    if (mainLocation >= currentLocation) {
      main.style.top = "0px";
      main.style.transition = "top .5s";
      main.style.background = "#ffffffa0"
      main.style.backdropFilter = "blur(10px)"
      main.style.color = "#000"
      main.style.overflowX = "hidden"
    } else {
      main.style.top = "-80px";
      main.style.transition = "top .5s";
      main.style.overflowX = "hidden"
    }

    mainLocation = currentLocation;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
}