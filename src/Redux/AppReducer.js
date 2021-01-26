import {getAuthUserData} from "./AuthReducer";

const INITIALIZED_SUCCESS = 'my-app/app/INITIALIZED_SUCCESS';

    let initialState = {
        initialized: false,
        globalError: null
    }
    const AppReducer = (state = initialState,action) => {
        switch (action.type){
            case INITIALIZED_SUCCESS:
                return{
                    ...state,
                    initialized: true
                }
            default:
                return state;
        }
    }

    const  initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

    export const initializeApp = () => {
        return (dispatch) => {
           let promise = dispatch(getAuthUserData());
           Promise.all([promise])
               .then(()=>{
               dispatch(initializedSuccess());
           })
        }
    }

    export default AppReducer;