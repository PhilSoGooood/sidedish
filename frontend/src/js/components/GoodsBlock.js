import React from 'react';
import {eventLabelIcon, launchingLabelIcon} from '../constants/iconPath.js';
import '../../css/GoodsBlock.css';

function GoodsBlock(props) {
  const [discountedPrice, regularPrice] = props.price.map(element => element.price);
  const [eventLabel, launchingLabel] = props.label.map(element => element.exist);
  const eventLabelElement = eventLabel ? (
    <img className="eventLabel" src={eventLabelIcon} alt="eventLabelIcon"></img>
  ) : (
    <></>
  );
  const launchingLabelElement = launchingLabel ? (
    <img className="launchingLabel" src={launchingLabelIcon} alt="launchingLabelIcon"></img>
  ) : (
    <></>
  );

  return (
    <div className="goodsBlock">
      <img className="thumb" src={props.thumb} alt="thumb"></img>
      <section className="info">
        <h4 className="name"> {props.name}</h4>
        <p className="description">{props.description}</p>
        <div className="price">
          <p className="discountedPrice">{Number(discountedPrice).toLocaleString('en') + '원'}</p>
          <p className="regularPrice">{Number(regularPrice).toLocaleString('en') + '원'}</p>
        </div>
      </section>
      <div className="label">
        {eventLabelElement}
        {launchingLabelElement}
      </div>
    </div>
  );
}

export {GoodsBlock};
