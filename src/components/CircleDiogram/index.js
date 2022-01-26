import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios'

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  maintainAspectRatio: false,
};

const CircleDiogram = ({name, url}) => {
   const [data, setData] = React.useState({
    labels: name,
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
    axios.get(`http://localhost:3001/${url}`).then(({data}) => {
        const Obj = [0,0,0,0,0,0]
        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            Obj[item.Categories] = Obj[item.Categories] + item.Sum;
        }
        setData({
          labels: name,
          datasets: [
            {
              label: "# of Votes",
              data: Obj,
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
