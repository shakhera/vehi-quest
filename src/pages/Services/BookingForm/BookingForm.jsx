import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const BookingForm = ({ item, closeModal }) => {
  const [meetingLocation, setMeetingLocation] = useState("");
  const [phone, setPhone] = useState("");
  const { name, resalePrice } = item;
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleBooking = (e) => {
    e.preventDefault();
    const bookingData = {
      itemName: name,
      price: resalePrice,
      userName: user?.displayName || "N/A",
      email: user?.email || "N/A",
      phone,
      meetingLocation,
    };
    console.log("Booking data:", bookingData);

    Swal.fire({
      title: "Do you want to book the car?",
      text: "Please confirm your booking details.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, book it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.post("/bookings", bookingData);
        console.log("confirm booking ", res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Booked!",
            text: "Your booking has been confirmed.",
            icon: "success",
            confirmButtonText: "OK",
            timer: 1500,
          });
        }
      }
    });
    setTimeout(() => closeModal(), 3000);
  };
  return (
    <div className="pt-20">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full sm:max-w-md overflow-auto max-h-[80vh] p-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              ✖
            </button>
          </div>
          <h2 className="text-xl font-bold mb-4 text-center">Book Item</h2>
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="block text-gray-700">Item Name</label>
              <input
                type="text"
                value={name}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input
                type="text"
                value={resalePrice}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">User Name</label>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="text"
                defaultValue={user?.email}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Your Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Meeting Location</label>
              <input
                type="text"
                value={meetingLocation}
                onChange={(e) => setMeetingLocation(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
