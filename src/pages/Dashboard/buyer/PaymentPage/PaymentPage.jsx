import React from "react";
import { useParams } from "react-router-dom";

const PaymentPage = () => {
  const { id } = useParams();
//   console.log(id);

  return (
    <div>
      <h2>Pay</h2>
    </div>
  );
};

export default PaymentPage;
