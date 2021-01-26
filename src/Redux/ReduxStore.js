    import {applyMiddleware, combineReducers, compose, createStore} from "redux";
    import profileReducer from "./ProfileReducer";
    import dialogueReducer from "./DialogueReducer";
    import usersReducer from "./UsersReducer";
    import AuthReducer from "./AuthReducer";
    import thunkMiddleware  from 'redux-thunk';
    import { reducer as formReducer } from 'redux-form';
    import AppReducer from "./AppReducer";
    import NewsReducer from "./NewsReducer";


    let reducers = combineReducers({
        profilePage:profileReducer,
        dialoguesPage: dialogueReducer,
        usersPage : usersReducer,
        auth: AuthReducer,
        app: AppReducer,
        news: NewsReducer,
        form: formReducer
    });

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
    
    export default store;
