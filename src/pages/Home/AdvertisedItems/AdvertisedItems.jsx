import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

const AdvertisedItems = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("advertisedCars.json");
      setCars(result.data);
    };
    fetchData();
  }, []);

  const openModal = (car) => {
    setSelectedCar(car);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCar(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl mb-4 font-semibold text-center">
        || Advertised Cars ||
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.slice(0, showAll ? cars.length : 3).map((car) => (
          <div
            key={car.id}
            className="border p-4 flex flex-col items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={car.img}
              alt={car.name}
              className="h-48 w-full object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
            <p className="text-lg mb-1">Price: {car.price}</p>
            <button
              onClick={() => openModal(car)}
              className="mt-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition duration-300"
            >
              Details
            </button>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2  border-0 border-b-4 border-sky-600 font-bold rounded-lg hover:bg-sky-600 transition duration-300"
          >
            See More
          </button>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Car Details"
        className="p-4 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-10"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {selectedCar && (
          <div>
            <img
              src={selectedCar.img}
              alt={selectedCar.name}
              className="h-48 w-96 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{selectedCar.name}</h3>
            <p className="text-lg mb-1">Price: {selectedCar.price}</p>
            <p className="mb-1">Location: {selectedCar.location}</p>
            <p className="mb-1">Original Price: {selectedCar.originalPrice}</p>
            <p className="mb-1">Years of Use: {selectedCar.yearsOfUse}</p>
            <p className="mb-1">Posted: {selectedCar.postedTime}</p>
            <p className="mb-1">
              Seller: {selectedCar.sellerName}{" "}
              {selectedCar.verified && <span className="text-sky-500">✔️</span>}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdvertisedItems;
