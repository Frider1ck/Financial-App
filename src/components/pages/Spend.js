import React from "react";
import FinansPanel from "../finansPanel";
import CircleDiogram from "../CircleDiogram";
import BarDoigram from "../BarDoigram";
import items from '../finansPanel/CategoriesDb'

function Spend() {
  return (
    <>
      <FinansPanel 
        items={items}
        url={'Spends'}
      />
      <div className="grahics">
        <CircleDiogram 
         name={["Бытовые", "Продукты", "Транспорт", "Покупки", "Услуги", "Досуг"]}
         url={'Spends'}
        />
        <BarDoigram 
         name={'траты'}
         url={'Spends'}
        />
      </div>
    </>
  );
}

export default Spend;
