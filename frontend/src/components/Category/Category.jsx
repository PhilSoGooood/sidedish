import styled from 'styled-components';
import {category} from 'data';

const CategoryContainer = styled.nav`
  width: 352px;
  height: 26px;
`;

const CategoryList = styled.ul`
  display: flex;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  width: 362px;
  position: absolute;
  left: 215px;
  top: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const MainCategory = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  margin: 16px 24px 0px 0px;
`;

const SubCategoryList = styled.ul`
  margin-top: 16px;
`;

const SubCategory = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin: 8px 0px;
  &:hover {
    text-decoration: underline;
    color: #ff8e14;
  }
`;

function Category({isOpen, setIsOpen}) {
  const handleMouseOver = () => {
    setIsOpen(true);
  };
  const handleMouseOut = () => {
    setIsOpen(false);
  };

  return (
    <CategoryContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <CategoryList>
        {category.map(({id, mainCategory}) => (
          <MainCategory key={id}>
            {mainCategory.title}
            <SubCategoryList>
              {isOpen &&
                mainCategory.subCategory.map(({id, title}) => <SubCategory key={id}>{title}</SubCategory>)}
            </SubCategoryList>
          </MainCategory>
        ))}
      </CategoryList>
    </CategoryContainer>
  );
}
export {Category};
