import React, {useState, useEffect, useCallback} from "react";
import {fetchData, postData} from "utils/utils";
import {minusIcon, plusIcon, eventLabelIcon, launchingLabelIcon} from "constants";
import {serverURL} from "constants/urlPath";
import {
  DarkBackground,
  ModalBlock,
  CloseButton,
  InnerModalBlock,
  ProductImages,
  MainThumb,
  SubThumb,
  Product,
  ProductInfo,
  OrderButton,
  SuccessOrder,
} from "./Modal.styled";

function Modal({visible, onClose, productId}) {
  const [goodsData, setGoodsData] = useState();
  const [orderState, setOrderState] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [orderInfo, setOrderInfo] = useState({productId, quantity, price: totalPrice});

  const fetchAPI = useCallback(async () => {
    if (!productId) return;
    const data = await fetchData(`${serverURL}/${productId}`);
    setGoodsData(data);
    const price = data.price * (1 - data.discountRate);
    setPrice(price);
    setTotalPrice(price);
  }, [productId]);

  const handleOrder = () => {
    setOrderState(true);
    setOrderInfo({...orderInfo, productId, quantity, price: totalPrice});
  };

  const postAPI = useCallback(async () => {
    if (!orderState) return;
    const response = await postData(`${serverURL}/order`, orderInfo);
    setOrderSuccess(response);
    if (!response) setOrderState(false);
  }, [orderInfo, orderState]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  useEffect(() => {
    postAPI();
  }, [postAPI]);

  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [quantity]);

  if (!visible) return;
  return (
    <DarkBackground>
      <ModalBlock>
        {orderSuccess ? (
          <SuccessOrder>주문이 완료되었습니다. 잠시후 메인 페이지로 이동합니다.</SuccessOrder>
        ) : (
          goodsData && (
            <>
              <CloseButton onClick={onClose}>닫기</CloseButton>
              <InnerModalBlock>
                <ProductImages>
                  <MainThumb src={goodsData.image[0].imagePath}></MainThumb>
                  <SubThumb></SubThumb>
                </ProductImages>
                <Product>
                  <ProductInfo>
                    <p className="productName">{goodsData.productName}</p>
                    <div className="priceBox">
                      <div className="eventBadge">
                        {goodsData.eventBadge !== "none" && (
                          <img
                            className="eventBadge"
                            src={goodsData.eventBadge === "event" ? eventLabelIcon : launchingLabelIcon}
                            alt="eventBadgeIcon"
                          ></img>
                        )}
                      </div>

                      <div className="productPrice">
                        <p className="discountedPrice">
                          {Number(goodsData.price * (1 - goodsData.discountRate)).toLocaleString("en") + "원"}
                        </p>
                        {goodsData.discountRate !== 0 && (
                          <p className="regularPrice">
                            {Number(goodsData.price).toLocaleString("en") + "원"}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="orderBox">
                      <div className="orderCountBox">
                        <button>
                          <img
                            className="minusOrderIcon"
                            src={minusIcon}
                            alt="orderCountIcon"
                            onClick={() => {
                              if (quantity === 1) return;
                              setQuantity(quantity - 1);
                            }}
                          ></img>
                        </button>
                        <p className="orderCount">{quantity}</p>
                        <button>
                          <img
                            className="plusOrderIcon"
                            src={plusIcon}
                            alt="orderCountIcon"
                            onClick={() => setQuantity(quantity + 1)}
                          ></img>
                        </button>
                      </div>
                      <div className="totalPriceBox">
                        <p className="totalPriceTitle">총 주문금액</p>
                        <p className="totalPrice">{Number(totalPrice).toLocaleString("en") + "원"}</p>
                      </div>
                    </div>
                  </ProductInfo>
                  <OrderButton onClick={handleOrder}>주문하기</OrderButton>
                </Product>
              </InnerModalBlock>
            </>
          )
        )}
      </ModalBlock>
    </DarkBackground>
  );
}

export {Modal};
