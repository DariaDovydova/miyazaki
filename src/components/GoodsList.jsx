import { useState } from "react";
import dataGoods from "../data/dataGoods";
import StripeContainer from "../Stripe/StripeContainer";
import { Good } from "./Good";

const GoodsList = () => {
  const [mySearch, setMySearch] = useState("");
  const [payment, setPayment] = useState(false);

  return (
    <>
      {!payment && (
        <div className="row">
          <div className="input-field col s12">
            <input
              type="search"
              id="search-field"
              placeholder="Search..."
              onChange={(e) => setMySearch(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className="list">
        {payment ? (
          <StripeContainer />
        ) : (
          dataGoods
            // eslint-disable-next-line
            .filter((good) => {
              if (mySearch === "") {
                return good;
              } else if (
                good.name.toLowerCase().includes(mySearch.toLowerCase())
              ) {
                return good;
              }
            })
            .map((good, index) => (
              <Good key={index} good={good} setPayment={setPayment} />
            ))
        )}
      </div>
    </>
  );
};

export { GoodsList };
