import {GoodsBlock} from './GoodsBlock.jsx';

function SideDish({goods}) {
  return goods.map(element => (
    <li key={element.id}>
      <GoodsBlock
        thumb={element.thumb}
        name={element.name}
        description={element.description}
        price={element.price}
        label={element.label}
      />
    </li>
  ));
}

export {SideDish};
