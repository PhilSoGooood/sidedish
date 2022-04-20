import React, { useState } from 'react';
import { eventLabelIcon, launchingLabelIcon } from '../constants/iconPath.js';
import '../../css/GoodsBlock.css';

function GoodsBlock(props) {
  const [discountedPrice, regularPrice] = props.goodsPrice.map(
    (element) => element.price
  );
  const [eventLabel, launchingLabel] = props.goodsLabel.map(
    (element) => element.exist
  );

  return (
    <div className="goodsBlock">
      <img className="goodsThumb" src={props.goodsTumb} alt="goodsThumb"></img>
      <section className="goodsInfo">
        <h4 className="goodsName"> {props.goodsName}</h4>
        <p className="goodsDescription">{props.goodsDescription}</p>
        <div className="goodsPrice">
          <p className="discountedPrice">{discountedPrice + '원'}</p>
          <p className="regularPrice">{regularPrice + '원'}</p>
        </div>
        <div className="goodsLabel">
          {eventLabel ? (
            <img
              className="eventLabel"
              src={eventLabelIcon}
              alt="eventLabelIcon"
            ></img>
          ) : (
            <></>
          )}
          {launchingLabel ? (
            <img
              className="launchingLabel"
              src={launchingLabelIcon}
              alt="launchingLabelIcon"
            ></img>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
}

export { GoodsBlock };
