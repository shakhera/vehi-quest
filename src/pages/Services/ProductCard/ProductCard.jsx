import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import BookingForm from "../BookingForm/BookingForm";

const ProductCard = ({ items }) => {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [isOpenBookFormModal, setIsOpenBookFormModal] = useState(false);

  const { name, img, resalePrice, postedTime, sellerName, verified } =
    items;

  const openDetailModal = () => setIsOpenDetailModal(true);
  const closeDetailModal = () => setIsOpenDetailModal(false);

  const openFormModal = () => setIsOpenBookFormModal(true);
  const colseFormModal = () => {
    setIsOpenBookFormModal(false);
  };


  return (
    <div>
      <div className="max-w-[350px] space-y-2 rounded-lg bg-white p-6 shadow-lg md:w-[350px] ">
        <img className="h-48 w-full object-cover mb-4" src={img} alt={name} />
        <div className="grid gap-2">
          <h1 className="text-xl font-semibold ">{name}</h1>
          <p className="text-sm text-gray-500">Resale Price: {resalePrice}</p>
          <p className="text-sm text-gray-500">Posted Time: {postedTime}</p>
          <p className="text-sm text-gray-500">
            Seller: {sellerName}
            {verified && <span className="text-blue-500">✔</span>}
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={openFormModal}
            // onClick={()=>document.getElementById("openBookFormModal").showModal()}
            className="rounded-lg bg-slate-800 px-6 py-2 border border-black font-semibold text-white duration-300 hover:bg-white hover:text-black sm:text-sm md:text-base "
          >
            Book now
          </button>
          <button
            onClick={openDetailModal}
            className="rounded-md border border-black px-4  hover:text-white hover:bg-slate-800  py-2  duration-300 "
          >
            View Details
          </button>
        </div>
      </div>

      {/*booking form in modal  */}
      {isOpenBookFormModal && (
        <BookingForm item={items} closeModal={colseFormModal} />
      )}
      {/*details in modal  */}
      {isOpenDetailModal && (
        <ProductDetails item={items} closeModal={closeDetailModal} />
      )}
    </div>
  );
};

export default ProductCard;
