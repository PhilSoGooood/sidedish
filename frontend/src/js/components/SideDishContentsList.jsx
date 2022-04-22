import {goodsData} from '../data/goods.js';
import {SideDish} from './SideDish.jsx';
import {prevButtonIcon, nextButtonIcon} from '../constants/iconPath.js';
import '../../css/SideDishContentsList.css';

function SideDishContentsList() {
  return goodsData.map(element => (
    <li key={element.id}>
      <h3 className="sideDishCategory">{element.title}</h3>
      <div className="event-slider">
        <button className="prevButton">
          <img className="prevButtonIcon" src={prevButtonIcon} alt="prevButtonIcon"></img>
        </button>
        <button className="nextButton">
          <img className="nextButtonIcon" src={nextButtonIcon} alt="nextButtonIcon"></img>
        </button>
        <div className="sideDishContainer">
          <ul className="sideDishList">
            <SideDish type="origin" data={element.goods} />
          </ul>
        </div>
      </div>
    </li>
  ));
}
export {SideDishContentsList};
