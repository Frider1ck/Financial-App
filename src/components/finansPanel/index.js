import React from "react";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux'

import {setLoading, setActiveCategories} from '../redux/PanelReduser'

const FinansPanel = ({items, url}) => {

  const dispach = useDispatch();

  const activeCategories = useSelector((store) => store.PanelReduser.activeCategories);
  const loading = useSelector((store) => store.PanelReduser.loading);
  

  const onSelect = (index) => {
    dispach(setActiveCategories(index));
  };

  const addSpend = (e) => {
    e.preventDefault();

    if(!e.target[0].value) {
      const Obj = {
        load: 'Добавить',
        error: 'Вы не ввели сумму'
      }
      
      dispach(setLoading(Obj))
      return;
    }

    if(!e.target[1].value) {
      const Obj = {
        load: 'Добавить',
        error: 'Вы не ввели дату'
      }
      
      dispach(setLoading(Obj))
      return;
    }
  
    dispach(setLoading({
      load: 'Добавление...'
    }))

    axios
      .post(`http://localhost:3001/${url}`, {
        id: activeCategories*(Math.random()* 1000),
        Categories: activeCategories,
        Sum: +(e.target[0].value),
        Data: e.target[1].value
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error.response.data);
      });

      dispach(setLoading({
        load: 'Добавить'
      }))
  };

  return (
    <div className="finansPanel">
      <h1>Категории</h1>
      <div className="finansPanel-categories">
        {items.map((obj, index) => {
          return (
            <div
              className={
                activeCategories === index
                  ? "finansPanel-categories__item active"
                  : "finansPanel-categories__item"
              }
              key={index}
              onClick={() => onSelect(index)}
            >
              <img src={obj.icon} alt="tag" />
              <p>{obj.text}</p>
            </div>
          );
        })}
      </div>
      <form className="finansPanel-add" onSubmit={addSpend}>
        <h2>Выберете категорию и запишите сумму</h2>
        <input
          className="finansPanel-add__input-sum"
          type="text"
          placeholder="Впишите сумму"
        />
        <input className="finansPanel-add__input-data" type="date"></input>
        <button>{loading.load}</button>
        <p>{loading.error}</p>
      </form>
    </div>
  );
};

export default FinansPanel;
