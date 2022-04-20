import React, { useState } from 'react';
import { specialPromotionIcon } from '../constants/iconPath.js';
import { GoodsBlock } from './GoodsBlock.js';
import { goodsData } from '../data/goods.js';
import '../../css/SpecialPromotion.css';

function SpecialPromotion() {
  const tab = '풍부한 고기 반찬';
  const bestSideDish = goodsData
    .filter((element) => element.tab.title === tab)[0]
    .tab.goods.map((element) => (
      <li key={element.id}>
        <GoodsBlock
          goodsTumb={element.thumb}
          goodsName={element.name}
          goodsDescription={element.description}
          goodsPrice={element.price}
          goodsLabel={element.label}
        />
      </li>
    ));

  return (
    <div className="specialPromotion">
      <h2 className="theme">
        <img
          className="specialPromotionIcon"
          src={specialPromotionIcon}
          alt="specialPromotionIcon"
        ></img>
        <p>한 번 주문하면 두 번 반하는 반찬</p>
      </h2>
      <h4 className="tab">
        <ul className="tabList">
          <li className="selected">풍성한 고기 반찬</li>
          <li>편리한 반찬 세트</li>
          <li>맛있는 제철 요리</li>
          <li>우리 아이 영양 반찬</li>
        </ul>
      </h4>
      <div className="bestSideDishContainer">
        <ul className="bestSideDishList">{bestSideDish}</ul>
      </div>
    </div>
  );
}

export { SpecialPromotion };
