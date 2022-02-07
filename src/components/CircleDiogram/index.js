import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setDataName, setData} from '../redux/diogramReducer'
import {setAsyncData} from '../redux/async/asyncDiogram'

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  maintainAspectRatio: false,
};

const CircleDiogram = ({name, url}) => {
 
   const dispach = useDispatch();
   const data = useSelector((store) => store.diogramReducer)
   
   const setName = () => {
    dispach(setDataName(name));
   }

   const setDat = () => {
    dispach(setAsyncData(url))
   }

  React.useEffect(() => {
    setName();
    setDat();
    
  }, []);


  return (
    <div>
      <div className="CircleDiogram">
        <Doughnut 
        data={data} 
        options={options} 
        />
      </div>
    </div>  
  );
};

export default CircleDiogram;
