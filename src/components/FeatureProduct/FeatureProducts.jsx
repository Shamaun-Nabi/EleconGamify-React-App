import React from "react";

export default function FeatureProducts({ categorey }) {
  return (
    <div className="mt-5">
      <h3 className="text-2xl ml-10 ">
        <span className="text-4xl text-green-500 font-semibold">C</span>
        ategories
      </h3>
      <div className=" grid grid-cols-2 md:grid-cols-4 container mx-auto gap-2  mt-4 m-3">
        {categorey?.data.map((item) => (
          <div
            key={item.id}
            className="relative hover:text-white border rounded-lg border-gray-100 "
          >
            <div>
              <p className="absolute left-[10px] top-[10px] font-semibold ">
                {item?.attributes.title}
              </p>
            </div>
            <div className="hover:bg-gray-700 rounded-lg  cursor-pointer">
              <img
                className=" rounded-md text-black transition-all ease-in-out duration-200 transform hover:scale-110"
                src={
                  import.meta.env.VITE_BASE_URL +
                  item?.attributes?.image?.data?.attributes?.url
                }
                alt={
                  import.meta.env.VITE_BASE_URL +
                  item?.attributes?.image?.data?.attributes?.name
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
