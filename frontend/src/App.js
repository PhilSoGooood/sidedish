import React, {useState} from "react";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import {Header, SpecialPromotion, SideDishContents} from "containers";
import {Modal} from "components";

const GlobalStyles = createGlobalStyle`
  ${reset}
  font-family: 'Noto Sans KR';
  font-style: normal;
  button:hover{
    cursor:pointer;
  }
`;

function App() {
  const [openDetail, setOpenDetail] = useState(false);

  const openModal = () => {
    setOpenDetail(true);
  };

  const closeModal = () => {
    setOpenDetail(false);
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <SpecialPromotion openModal={openModal} />
      <SideDishContents openModal={openModal} />
      <Modal visible={openDetail} onClose={closeModal} />
    </div>
  );
}

export default App;
