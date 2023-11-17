import React from "react";
import StoreItem from "./StoreItem";

const storeItems = [
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
  {
    imgPath: "/jacket.webp",
    title: "Supreme®/BLESS Tapestry Down Puffer Jacket",
    price: 132000,
    currency: "¥",
  },
];

const Store = ({ page }) => {
  return (
    <div className="flex flex-col">
      {page && <h2 className="my-4 font-bold px-3">{page}</h2>}

      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4">
        {storeItems.map((item, index) => (
          <StoreItem key={index} sno={index + 1} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
