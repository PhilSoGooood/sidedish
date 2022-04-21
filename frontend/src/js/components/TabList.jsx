import {goodsData} from '../data/goods.js';

function TabList({tabState, setTabState}) {
  const handleTabState = ({target}) => {
    setTabState(target.title);
  };

  return goodsData.map(element => (
    <li
      className={tabState === element.tab.title ? 'selected' : ''}
      key={element.id}
      title={element.tab.title}
      onClick={handleTabState}
    >
      {element.tab.title}
    </li>
  ));
}

export {TabList};
