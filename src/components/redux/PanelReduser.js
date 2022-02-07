
const initState  = {
    activeCategories: 10,
    loading: {
        load: 'Добавить',
        error:''
      }
}

const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_LOADING = 'SET_LOADING';




export const PanelReduser = (state = initState, action) => {

    
    switch(action.type) {

        case SET_CATEGORIES: {
            debugger;
            return {...state , activeCategories: action.payload }
        }

        case SET_LOADING: {
            return {...state , loading: {...action.payload} }
        }

        default: 
            return state;
            
    }
}



export const setActiveCategories = (payload) => {
    return {
        type: SET_CATEGORIES,
        payload
    }
}



export const setLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload
    }
}

