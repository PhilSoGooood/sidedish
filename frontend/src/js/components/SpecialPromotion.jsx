import React, {useState} from 'react';
import {specialPromotionIcon} from '../constants/iconPath.js';
import {BestSideDish} from './BestSideDish.jsx';
import {goodsData} from '../data/goods.js';
import '../../css/SpecialPromotion.css';

function SpecialPromotion() {
  const [tabState, setTabState] = useState('풍부한 고기 반찬');

  const handleTabState = ({target}) => {
    setTabState(target.title);
  };

  const tabList = goodsData.map(element => (
    <li
      className={tabState === element.tab.title ? 'selected' : ''}
      key={element.id}
      title={element.tab.title}
      onClick={handleTabState}
    >
      {element.tab.title}
    </li>
  ));

  return (
    <div className="specialPromotion">
      <div className="innerSpecialPromotion">
        <h2 className="theme">
          <img className="specialPromotionIcon" src={specialPromotionIcon} alt="specialPromotionIcon"></img>
          <p>한 번 주문하면 두 번 반하는 반찬</p>
        </h2>
        <h4 className="tab">
          <ul className="tabList">{tabList}</ul>
        </h4>
        <div className="bestSideDishContainer">
          <ul className="bestSideDishList">
            <BestSideDish tabState={tabState} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export {SpecialPromotion};
