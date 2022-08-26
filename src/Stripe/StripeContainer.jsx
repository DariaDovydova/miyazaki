import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LZbpFGtaTcfqFoRqxpiHgVa5og606OIfJkTmpQtoMqeZaztDnpAYIyH6yuNd6AeeoLjsyNYn7oPCm6goextyGuX00x9Aa2xzU";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeContainer;