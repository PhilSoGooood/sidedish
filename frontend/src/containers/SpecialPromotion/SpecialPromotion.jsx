import React, {useState} from "react";
import {
  StyledSpecialPromotion,
  SpecialPromotionIcon,
  SpecialPromotionTitle,
  Tab,
  BestSideDishContainer,
  BestSideDishList,
} from "./SpecialPromotion.styled";
import {bestGoodsData} from "data";
import {specialPromotionIcon} from "constants";
import {TabList, GoodsBlock} from "components";

function SpecialPromotion() {
  const [tabState, setTabState] = useState({category: "풍부한 고기 반찬"});
  const goodsData = bestGoodsData.filter(({tab}) => tab.title === tabState.category)[0].tab.goods;

  return (
    <StyledSpecialPromotion>
      <SpecialPromotionTitle>
        <SpecialPromotionIcon src={specialPromotionIcon} alt="specialPromotionIcon"></SpecialPromotionIcon>
        <p>한 번 주문하면 두 번 반하는 반찬</p>
      </SpecialPromotionTitle>
      <Tab>
        <ul className="tabList">
          {bestGoodsData.map(({id, tab}) => (
            <TabList key={id} tab={tab} tabState={tabState.category} setTabState={setTabState} />
          ))}
        </ul>
      </Tab>
      <BestSideDishContainer>
        <BestSideDishList>
          {goodsData.map(
            ({image, productName, description, price, eventBadge, early_delivery, discountedRate}, index) => (
              <li key={index}>
                <GoodsBlock
                  thumb={image}
                  name={productName}
                  description={description}
                  price={price}
                  eventBadge={eventBadge}
                  discountedRate={discountedRate}
                  delivery={early_delivery}
                />
              </li>
            ),
          )}
        </BestSideDishList>
      </BestSideDishContainer>
    </StyledSpecialPromotion>
  );
}

export {SpecialPromotion};
