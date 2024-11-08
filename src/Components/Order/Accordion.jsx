import * as React from "react";
import takeoutIcon from "../../assets/takeoutIcon.svg";
import dineinIcon from "../../assets/dineinIcon.svg";
import deliveryIcon from "../../assets/deliveryIcon.svg";

export const AccordionTransition = () => {
  return (
    <div className="modalContainer">
      <div className="modaltitle">
        <h2 className="title">What would you like?</h2>
      </div>

      <div className="modallist">
        <div className="modallist-1  ">
          <img src={dineinIcon} alt="" />
          <div className="span">
            <h4>Dine-in Pickup</h4>
            <p className="knife2">Order is served in restaurant</p>
          </div>
        </div>

        <div className="modallist-1">
          <img src={takeoutIcon} alt="" />
          <div className="span">
            <h4>Takeout</h4>
            <p className="Takeout2">Order is packed for outside</p>
          </div>
        </div>

        <div className="modallist-1">
          <img src={deliveryIcon} alt="" />
          <div className="span">
            <h4>Delivery</h4>
            <p className="delivery2">Order is delivered to you</p>
          </div>
        </div>
      </div>
    </div>
  );
};
