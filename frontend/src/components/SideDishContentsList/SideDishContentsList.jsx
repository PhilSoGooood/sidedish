import {Slider} from "components";
import {mainCategory} from "data";
import "./SideDishContentsList.css";

function SideDishContentsList({openModal}) {
  return mainCategory.map(({title, subTitle}, index) => (
    <li key={index}>
      <h3 className="sideDishCategory">{subTitle}</h3>
      <Slider sideDishTitle={title} openModal={openModal} />
    </li>
  ));
}

export {SideDishContentsList};
