import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../Redux/AuthReducer";
import {compose} from "redux";
import {getAuthorize} from "../../Redux/Selectors/auth-selector";


     const HeaderContainer = (props) =>{
        return (
            <Header {...props}/>
        )
    }

    let mapsStateToProps = (state) => ({
        isAuth: getAuthorize(state),
        login: state.auth.login

    })

    export default compose(
        connect(mapsStateToProps,
            {
                logOut
            }),
    )(HeaderContainer)