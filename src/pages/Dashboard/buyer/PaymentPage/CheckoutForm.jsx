import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const CheckoutForm = ({ booking }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { price: priceString } = booking;
  const priceNum = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { priceNum })
      .then((res) => {
        console.log("Client secret from server:", res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {
        console.error("Error fetching client secret:", error);
      });
  }, [axiosSecure, priceNum]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment method error:", error);
      setError(error.message);
    } else {
      console.log("PaymentMethod", paymentMethod);
      setError("");
    }

    // confirm payment
    setSuccess("");

    const { paymentIntent, error: confirmError } =
      await stripe.confirmAffirmPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setSuccess("Congratulations! Your payment is complete.");
        console.log(paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div className="border mb-2 py-3 px-2 border-dotted rounded-md">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || !elements}
          className="btn btn-neutral btn-sm "
        >
          Pay
        </button>

        <p className="text-red-500 text-sm">{error}</p>
        {success && (
          <div>
            <p className="text-green-500 text-sm">{success}</p>
            <p className="text-sm ">
              Your transaction Id :
              <span className="text-green-600">{transactionId}</span>
            </p>
          </div>
        )}
      </form>
    </>
  );
};

export default CheckoutForm;
