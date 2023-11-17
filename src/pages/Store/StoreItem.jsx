import React from "react";

const StoreItem = ({ sno, imgPath, title, price, currency }) => {
  return (
    <div
      className={`md:group cursor-pointer border-b-2 md:border-none p-2 md:-0 ${
        sno % 2 === 1 && "border-r-2"
      } ${sno <= 2 && "border-t-2"}`}
    >
      <img
        src={imgPath}
        alt={title}
        className="md:border-2 border-transparent md:group-hover:border-[#ddd]"
      />

      <h6 className="group-hover:font-bold text-xs">{title}</h6>

      <h6 className="md:group-hover:font-bold text-xs">
        {currency}
        {price.toLocaleString()}
      </h6>
    </div>
  );
};

export default StoreItem;
