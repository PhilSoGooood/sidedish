import React, {useState} from "react";
import {eventLabelIcon, launchingLabelIcon, deliveryIcon} from "constants";
import "./GoodsBlock.css";

function GoodsBlock({thumb, name, description, price, discountedRate, eventBadge}) {
  const [isHover, setIsHover] = useState(false);
  const percentage = 0.01;
  const discountedPrice = price - discountedRate * percentage * price;

  return (
    <div className="goodsBlock">
      <div
        className="thumbContainer"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <img className="thumb" src={thumb} alt="thumb"></img>
        {isHover && <img className="deliveryIcon" src={deliveryIcon} alt="deliveryIcon"></img>}
      </div>
      <section className="info">
        <h4 className="name"> {name}</h4>
        <p className="description">{description}</p>
        <div className="price">
          {price && (
            <>
              <p className="discountedPrice">{Number(discountedPrice).toLocaleString("en") + "원"}</p>
              <p className="regularPrice">{Number(price).toLocaleString("en") + "원"}</p>
            </>
          )}
        </div>
      </section>
      <div className="eventBadge">
        {eventBadge && (
          <img
            className="eventBadge"
            src={eventBadge === "event" ? eventLabelIcon : launchingLabelIcon}
            alt="eventBadgeIcon"
          ></img>
        )}
      </div>
    </div>
  );
}

export {GoodsBlock};
