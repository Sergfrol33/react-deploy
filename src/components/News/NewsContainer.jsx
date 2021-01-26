import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import News from "./News";
import {getProfile} from "../../Redux/Selectors/profile-selector";
import { getUserId} from "../../Redux/Selectors/auth-selector";
import {getStories} from "../../Redux/Selectors/news-selector";

const NewsContainer = ({profile,match,stories,authorizedUser, getUserProfile,...props}) => {

    const refreshProfile = useCallback(() => {
        let userId = match.params.userId;
        if (!userId){
            userId =  authorizedUser;
        }
        getUserProfile(userId);
    },[authorizedUser,match.params.userId,getUserProfile])

    useEffect(() => {
        refreshProfile();
    },[refreshProfile]);

    return (
        <News {...props}
              profile={profile}
              isOwner = {!match.params.userId}
              stories = {stories}
        />
    );
}
let mapStateToProps = (state) => ({
    profile: getProfile(state),
    authorizedUser :getUserId(state),
    stories: getStories(state)
})

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,{
            getUserProfile,
        }
    ))(NewsContainer);

