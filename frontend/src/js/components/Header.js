import { searchIcon, userIcon, myCartIcon } from "../constants/iconPath.js";
import { category } from "../data/category.js";

function Header() {
  const mainCategoryList = category.map((element) => <li key={element.id}>{element.mainCategory.title}</li>);
  const subCategoryList = category.map((element) => (
    <ul key={element.id}>
      {element.mainCategory.subCategory.map((element) => (
        <li key={element.id}>{element.title}</li>
      ))}
    </ul>
  ));

  return (
    <>
      <h1 className="brandHeader">Ordering</h1>
      <div className="navBar">
        <div className="navLeftBar">
          <div className="MainCategory">
            <ul>{mainCategoryList}</ul>
          </div>
          <div className="subCategory">{subCategoryList}</div>
        </div>
        <div className="navRightBar">
          <a href="#!" className="search">
            <img className="searchIcon" src={searchIcon} alt="searchIcon"></img>
          </a>
          <a href="#!" className="user">
            <img className="userIcon" src={userIcon} alt="userIcon"></img>
          </a>
          <a href="#!" className="myCart">
            <img className="myCartIcon" src={myCartIcon} alt="myCartIcon"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export { Header };
