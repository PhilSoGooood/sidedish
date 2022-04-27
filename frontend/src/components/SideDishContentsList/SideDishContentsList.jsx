import {Slider} from "components";
import {sideDishTitles} from "data";
import "./SideDishContentsList.css";

function SideDishContentsList() {
  return sideDishTitles.map(({title, subTitle}, index) => (
    <li key={index}>
      <h3 className="sideDishCategory">{subTitle}</h3>
      <Slider sideDishTitle={title} />
    </li>
  ));
}
export {SideDishContentsList};
