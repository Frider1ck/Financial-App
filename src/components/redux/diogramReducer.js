const initialState = {
    labels: [],
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
  }

const SET_DATA = 'SET_DATA';
const SET_DATA_NAME = 'SET_DATA_NAME';

export const diogramReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case SET_DATA: {

            let datasets = [...state.datasets]
            datasets[0].data = action.payload;
            return {...state, datasets:datasets}
            
        }

        case SET_DATA_NAME: {
            return {...state , labels: action.payload }
        }

        default: 
            return state;
            
    }
}

export const setDataName = (payload) => {
    return {
        type: SET_DATA_NAME,
        payload
    }
}

export const setData = (payload) => {
    return {
        type: SET_DATA,
        payload
    }
}

