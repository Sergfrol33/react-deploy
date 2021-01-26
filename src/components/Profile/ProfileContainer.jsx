    import React, {useCallback, useEffect} from "react";
    import Profile from "./Profile";
    import {connect} from "react-redux";
    import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../Redux/ProfileReducer";
    import {withRouter} from "react-router-dom";
    import {withAuthRedirect} from "../../hoc/withAuthRedirect";
    import {compose} from "redux";
    import {getProfile, getStatus} from "../../Redux/Selectors/profile-selector";
    import {getAuthorize, getUserId} from "../../Redux/Selectors/auth-selector";

    const ProfileContainer = (props) => {


        const refreshProfile = useCallback(() => {
            let userId = props.match.params.userId;
            if (!userId){
                userId =  props.authorizedUser;
                if (!userId){
                    props.history.push('/login');
                }
            }
            props.getUserProfile(userId);
            props.getUserStatus(userId);
        },[props]);

        useEffect(() => {
            refreshProfile();
        },[props.status,refreshProfile]);

        return (
            <Profile {...props}
                     profile={props.profile}
                     status = {props.status}
                     updateStatus = {props.updateUserStatus}
                     isOwner = {!props.match.params.userId}
                     savePhoto = {props.savePhoto}

            />
        );
    }
    let mapStateToProps = (state) => ({
        profile: getProfile(state),
        status: getStatus(state),
        authorizedUser :getUserId(state),
        isAuth: getAuthorize(state)
    })
    
    export default compose(
        withAuthRedirect,
        withRouter,
        connect(mapStateToProps,{
            getUserProfile,
            getUserStatus,
            updateUserStatus,
            savePhoto,
            saveProfile
        }
        ))(ProfileContainer);



