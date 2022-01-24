import React from 'react';
import axios from 'axios';
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


const LineDoigram = () => {
   const [data, setData] = React.useState({
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Инюнь', 'Июль','Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: [
      {
        label: 'траты',
        data: [100,200,300,400],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  })
   

  React.useEffect(() => {
    axios.get('http://localhost:3001/Spends').then(({data}) => {
      data.map(item => {
        item.Data = +(item.Data.slice(5,7));

      })
      console.log(data);
        const Obj = {
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 0,
          '11': 0,
          '12': 0
        }
        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            Obj[item.Data] = Obj[item.Data] + item.Sum;
        }
        console.log(Obj);

        setData({
          labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Инюнь', 'Июль','Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          datasets: [
            {
              label: 'траты',
              data: [Obj[1],Obj[2],Obj[3],Obj[4],Obj[5],Obj[6],Obj[7],Obj[8],Obj[9],Obj[10],Obj[11],Obj[12]],
              backgroundColor: 'rgba(255, 99, 132, 0.65)',
            }
          ],
        })

    });
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

export default LineDoigram;
