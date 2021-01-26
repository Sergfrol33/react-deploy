    import React from "react";
    import {Preloader} from "../Common/Prealoder/Preloader";
    import Paginition from "../Common/Paginition/Paginition";
    import User from "./User";
    import style from './Users.module.css'

    let Users = ({currentPage,totalItemsCount,pageSize,onPageChanged,users,...props}) => {

        return (
            <div>
                {props.isFetching ? <Preloader/>: null}
                <div className={style.blockItem}>
                    <Paginition currentPage ={currentPage} totalItemsCount = {totalItemsCount}
                                pageSize = {pageSize} onPageChanged ={onPageChanged}
                    />



                    {
                        users.map(u => <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                    )
                    }

                </div>
            </div>
        );
    };

    export default Users;
