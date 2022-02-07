import React from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import { setLabel } from '../redux/barReducer';
import {setAsyncBarData} from '../redux/async/asyncBar'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  maintainAspectRatio: false,
};


const BarDoigram = ({name, url}) => {

  const dispach = useDispatch();
   const data = useSelector((store) => store.barReducer)
   
   const setLabels = () => {
     dispach(setLabel(name))
   }
   const setAsyncDataz = () => {
     dispach(setAsyncBarData(url))
   }

  React.useEffect(() => {
    setLabels();
    setAsyncDataz();
  }, []);


  return (
    <div className="LineDiogram">
     <Bar 
        data={data} 
        options={options} 
        />
      </div>
  )
};

export default BarDoigram;
