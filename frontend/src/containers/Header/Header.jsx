import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {pageHeaderIcon, searchIcon, userIcon, myCartIcon} from 'constants';
import {NavIcon, Category} from 'components';

const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid;
  ${({isOpen}) => {
    return (
      isOpen &&
      css`
        height: 191px;
      `
    );
  }}
`;

const InnerHeader = styled.div`
  width: 1280px;
  height: 83px;
  display: flex;
  align-items: baseline;
  margin: 0 auto;
  position: relative;
`;

const BrandHeader = styled.h1`
  margin: 16px 40px 17px 0px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 128px;
  height: 32px;
  margin-left: auto;
`;

const navIcons = [
  {id: 1, name: 'searchIcon', src: `${searchIcon}`},
  {id: 2, name: 'userIcon', src: `${userIcon}`},
  {id: 3, name: 'myCartIcon', src: `${myCartIcon}`},
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader isOpen={isOpen}>
      <InnerHeader>
        <BrandHeader>
          <img src={pageHeaderIcon} alt="pageHeaderIcon"></img>
        </BrandHeader>
        <Category isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavBar>
          {navIcons.map(({id, name, src}) => (
            <NavIcon key={id} name={name} src={src} />
          ))}
        </NavBar>
      </InnerHeader>
    </StyledHeader>
  );
}

export {Header};
