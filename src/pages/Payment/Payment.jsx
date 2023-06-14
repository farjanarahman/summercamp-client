import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

// provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK);

const Payment = () => {
  const data = useLoaderData();
  const getPrice = Number(data.price);
  console.log(typeof data.price);
  const price = getPrice.toFixed(2);
  return (
    <div>
      <h2 className="text-xl font-semibold">This is the payment section</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} data={data} />
      </Elements>
    </div>
  );
};

export default Payment;