const initialState = {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Инюнь', 'Июль','Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: [
      {
        label: '',
        data: [100,200,300,400],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  }

const SET_DATA_BAR = 'SET_DATA_BAR';
const SET_LABEL = 'SET_LABEL';

export const barReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case SET_DATA_BAR: {

            let datasets = [...state.datasets]
            datasets[0].data = action.payload;
            return {...state, datasets:datasets}
            
        }

        case SET_LABEL: {
            let datasets = [...state.datasets]
            datasets[0].label = action.payload;
            return {...state, datasets:datasets}
        }

        default: 
            return state;
            
    }
}

export const setLabel = (payload) => {
    return {
        type: SET_LABEL,
        payload
    }
}

export const setDataBar = (payload) => {
    return {
        type: SET_DATA_BAR,
        payload
    }
}

