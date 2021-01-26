import {getAuthorize} from "../../Redux/Selectors/auth-selector";
import {compose} from "redux";
import {connect} from "react-redux";
import {logOut} from "../../Redux/AuthReducer";
import React from "react";
import Navbar from "./Navbar";

const NavbarContainer = (props) =>{
    return (
        <Navbar {...props}/>
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
)(NavbarContainer);