import React from "react";
import llevarPedidos from "../assets/llevarPedidos.jpg";
import Eye from "../assets/eye.png";
import Target from "../assets/target.png";
import Heart from "../assets/heart.png";

function AboutUs() {
  return (
    <div
      className="h-screen w-screen overflow-hidden p-4 bg-neutral-700 mb:h-auto"
      id="about-us"
    >
      <div className="h-full w-[90%] mx-auto flex">
        <figure className="w-[49%] h-full overflow-hidden relative mb:hidden flex justify-center items-center">
          <img
            src={llevarPedidos}
            alt=""
            className="w-full h-full object-cover rounded-lg max-h-[700px]"
          />
        </figure>
        <div className="h-full border-r-2 border-white mx-[2%] mb:hidden"></div>
        <article className="w-[49%] text-center text-white flex justify-center items-center flex-col mb:block mb:w-full">
          <h1 className="text-5xl font-caveat">PartTEch</h1>
          <div className="mt-4">
            <article className="flex flex-col gap-2 justify-center items-start">
              <div className="text-left">
                <img src={Eye} alt="" className="h-10" />
                <h4 className="text-2xl">Vision</h4>
                <p className="text-lg text-left">
                  In our journey at PartTech, we are dedicated to the sale and
                  shipping of products. We are committed to providing the best
                  experience to contribute significantly to the community.
                </p>
              </div>
              <div className="text-left">
                <img src={Target} alt="" className="h-10" />
                <h4 className="text-2xl">Mission</h4>
                <p className="text-lg text-left">
                  We imagine a future where PartTEch stands out as a benchmark
                  in the industry. We strive to contribute positively, creating
                  a lasting and positive impact on the Customer Support.
                </p>
              </div>
              <div className="text-left w-full">
                <img src={Heart} alt="" className="h-10" />
                <h4 className="text-2xl">Values</h4>
                <ol className="text-lg flex justify-center items-center list-decimal pl-5">
                  <div className="w-1/2">
                    <li>Integrity</li>
                    <li>Innovation</li>
                    <li>Responsibility</li>
                  </div>
                  <div className="w-1/2">
                    <li>Collaboration</li>
                    <li>Quality</li>
                    <li>Respect</li>
                  </div>
                </ol>
              </div>
            </article>
          </div>
        </article>
      </div>
    </div>
  );
}

export default AboutUs;
