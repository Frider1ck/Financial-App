import axios from "axios";
import { setDataBar } from "../barReducer";

export const setAsyncBarData = (url) => {
    return function(dispach) {
        axios.get(`http://localhost:3001/${url}`).then(({data}) => {
      data.map(item => {
        item.Data = +(item.Data.slice(5,7));

      })
        const Obj = [0,0,0,0,0,0,0,0,0,0,0,0]


        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            Obj[item.Data - 1] = Obj[item.Data - 1] + item.Sum;
        }

        dispach(setDataBar(Obj))
    });
    }
}