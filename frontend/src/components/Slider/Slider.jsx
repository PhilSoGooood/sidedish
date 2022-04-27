import React, {useState, useEffect} from "react";
import {fetchData} from "utils/utils";
import {serverURL} from "constants/urlPath";
import {prevButtonIcon, nextButtonIcon} from "constants";
import {GoodsBlock} from "components";

function Slider({sideDishTitle}) {
  const [goodsData, setGoodsData] = useState([]);
  const [sliderState, setSliderState] = useState({clickedButton: "", list: ""});
  const [position, setPosition] = useState(0);

  const fetchAPI = async () => {
    fetchData(`${serverURL}/${sideDishTitle}`).then(data => {
      setGoodsData(data);
    });
  };

  const handleClickedButton = ({target}) => {
    const current = target.closest("button").className;
    const listElement = target.closest(".event-slider").querySelector(".sideDishList");

    setSliderState({
      ...sliderState,
      clickedButton: current,
      list: listElement,
    });

    const goodBlockWidth = 326;
    setPosition(current === "nextButton" ? position - goodBlockWidth : position + goodBlockWidth);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    if (!sliderState.clickedButton) return;

    sliderState.list.style.transform = `translateX(${position}px)`;
    sliderState.list.style.transition = "0.2s ease-out";
  }, [sliderState, position]);

  return (
    <div className="event-slider">
      <button className="prevButton" onClick={handleClickedButton}>
        <img className="prevButtonIcon" src={prevButtonIcon} alt="prevButtonIcon"></img>
      </button>
      <button className="nextButton" onClick={handleClickedButton}>
        <img className="nextButtonIcon" src={nextButtonIcon} alt="nextButtonIcon"></img>
      </button>
      <div className="sideDishContainer">
        <ul className="sideDishList">
          {goodsData.map(
            ({id, image, productName, description, price, eventBadge, early_delivery, discountedRate}) => (
              <li key={id}>
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
        </ul>
      </div>
    </div>
  );
}

export {Slider};
