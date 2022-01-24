import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios'

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  maintainAspectRatio: false,
};

const CircleDiogram = () => {
   const [data, setData] = React.useState({
    labels: ["Бытовые", "Продукты", "Транспорт", "Покупки", "Услуги", "Досуг"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  })
   

  React.useEffect(() => {
    axios.get('http://localhost:3001/Spends').then(({data}) => {
        const Obj = {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0
        }
        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            Obj[item.Categories] = Obj[item.Categories] + item.Sum;
        }
        setData({
          labels: ["Бытовые", "Продукты", "Транспорт", "Покупки", "Услуги", "Досуг"],
          datasets: [
            {
              label: "# of Votes",
              data: [Obj[0],Obj[1],Obj[2],Obj[3],Obj[4],Obj[5]],
              fill: false,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
              ],
            },
          ],
        })
    });

    
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
