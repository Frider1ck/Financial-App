
import axios from "axios";
import { setData } from "../diogramReducer";



export const setAsyncData = (url) => {
    return function(dispach) {
        axios.get(`http://localhost:3001/${url}`).then(({data}) => {
        const Obj = [0,0,0,0,0,0]
        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            Obj[item.Categories] = Obj[item.Categories] + item.Sum;
        }
        
        dispach(setData(Obj))
      })
    }
}

