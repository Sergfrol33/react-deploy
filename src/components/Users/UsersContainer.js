    import React, {useEffect} from "react";
    import {connect} from "react-redux";
    import {
    followSuccess,
    unfollowSuccess,
    setCurrentPage, toggleFollowingProgress, requestUsers, follow, unfollow,
} from "../../Redux/UsersReducer";
    import Users from "./Users";
    import {compose} from "redux";
    import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    } from "../../Redux/Selectors/user-selector";
    import {withAuthRedirect} from "../../hoc/withAuthRedirect";
    import {withRouter} from "react-router-dom";



    const UsersContainer = (props) => {

        const onPageChanged = (pageNumber) => {
            const {pageSize} = props;
            props.requestUsers(pageNumber, pageSize);
        }
        useEffect(() => {
            const {currentPage, pageSize} = props;
            props.requestUsers(currentPage,pageSize);

        },[]);
        return (
            <Users {...props} onPageChanged = {onPageChanged}/>
        );

    }
    let mapStateToProps = (state) => {
        return {
            users: getUsers(state),
            pageSize: getPageSize(state),
            totalItemsCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            followingInProgress: getFollowingInProgress(state),

        }
    }

    export default compose(

        withAuthRedirect,
        withRouter,
        connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers: requestUsers,
        follow,
        unfollow
    }))(UsersContainer);


