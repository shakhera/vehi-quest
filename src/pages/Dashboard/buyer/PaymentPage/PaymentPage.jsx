import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY_PK);

const PaymentPage = () => {
  const booking = useLoaderData();
  // console.log(booking);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-4 ">Complete Your Purchase</h2>
          <p className="text-lg mb-6 text-gray-700">
            You're about to own the amazing{" "}
            <span className="font-semibold">{booking.itemName} </span> car !
          </p>
          <p className=" mb-6 text-gray-700">
            Please pay <span className="font-semibold">{booking.price}</span> to
            finalize your order.
          </p>
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm booking={booking}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
