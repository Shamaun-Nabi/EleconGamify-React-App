import React from "react";
import Headphone from "../../assets/Images/headphones_b_4.webp";
import { useState } from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
export default function SingleProduct() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4  ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          {/* <!-- Description Div --> */}
          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col gap-4">
            <div className=" w-full lg:w-auto bg-gray-100 flex justify-center items-end">
              <div>
                <img src={Headphone} />
              </div>
            </div>
          </div>
          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
              Wooden Stool
            </h2>
            <p className="mt-3">
            Categorey:  <span className="text-gray-500">Headphone</span> 
            </p>

            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using. Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
              $ 790.89
            </p>

            <div className="lg:mt-11 mt-10">
              <div className="flex flex-row justify-between">
                <p className=" font-medium text-base leading-4 text-gray-600">
                  Select quantity
                </p>
                <div className="flex">
                  <span
                    onClick={minusCount}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                  >
                    -
                  </span>
                  <input
                    id="counter"
                    aria-label="input"
                    className="border border-gray-300 h-full text-center w-14 pb-1"
                    type="text"
                    value={count}
                    onChange={(e) => e.target.value}
                  />
                  <span
                    onClick={addCount}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                  >
                    +
                  </span>
                </div>
              </div>
            </div>

            <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
              Add to shopping bag
            </button>
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}
        </div>
      </div>

      <RelatedProducts/>
    </>
  );
}
