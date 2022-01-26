import React from 'react';
import FinansPanel from "../finansPanel";
import CircleDiogram from "../CircleDiogram";
import BarDoigram from "../BarDoigram";
import items from '../finansPanel/CategoriesInkDb'

function Income() {
  return (<>
  <FinansPanel 
    items={items}
    url={'Income'}
  />
  <div className="grahics">
    <CircleDiogram 
     name={['Работа','Инвестиции','Проектная деятельность','Переводы','Аренда','Премия']}
     url={'Income'}
    />
    <BarDoigram 
      name={'доходы'}
      url={'Income'}
    />
  </div>
</>);
}

export default Income;
