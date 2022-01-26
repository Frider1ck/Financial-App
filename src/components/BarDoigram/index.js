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


const BarDoigram = ({name, url}) => {
   const [data, setData] = React.useState({
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Инюнь', 'Июль','Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: [
      {
        label: name,
        data: [100,200,300,400],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  })
   

  React.useEffect(() => {
    axios.get(`http://localhost:3001/${url}`).then(({data}) => {
      data.map(item => {
        item.Data = +(item.Data.slice(5,7));

      })
        const Obj = [0,0,0,0,0,0,0,0,0,0,0,0]


        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            Obj[item.Data - 1] = Obj[item.Data - 1] + item.Sum;
        }

        setData({
          labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Инюнь', 'Июль','Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          datasets: [
            {
              label: name,
              data: Obj,
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

export default BarDoigram;
