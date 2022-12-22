import React from "react";
import Speaker from "../../assets/Images/speaker.webp";
import Powerbank from "../../assets/Images/powerbank.webp";
import Handeler from "../../assets/Images/handeler.webp";
import Headphone from "../../assets/Images/wireless headphone.webp";

export default function FeatureProducts() {
  const featureItem = [
    {
      id: 0,
      imgURL: Speaker,
      name: "SPEKAER",
    },
    {
      id: 1,
      imgURL: Handeler,
      name: "MOBILE HANDELER",
    },
    {
      id: 2,
      imgURL: Powerbank,
      name: "POWERBANK",
    },
    {
      id: 3,
      imgURL: Headphone,
      name: "HEADPHONE",
    },
  ];
  return (
    <div className="mt-5">
      <h3 className="text-2xl ml-10 ">
       
        <span className="text-4xl text-green-500 font-semibold">C</span>
        ategories
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-4 container mx-auto gap-2  mt-4 m-3">
        {featureItem.map((item) => (
          <div key={item.id} className="relative ">
            <div>
              <p className="absolute  top-[400px] left-[200px] md:top-[250px] md:left-[100px] font-semibold">
                {item.name}
              </p>
            </div>
            <div className="hover:bg-emerald-400 cursor-pointer">
              <img
                className="hover:scale-[0.85]  rounded-md text-black transition-all duration-150"
                src={item.imgURL}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
