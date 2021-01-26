    import React from "react";
    import userPhoto from '../../assets/images/default.png';
    import style from './Users.module.css';
    import {NavLink} from "react-router-dom";
    import {Button} from "react-bootstrap";
    import 'bootstrap/dist/css/bootstrap.min.css';


    let User = ({user,followingInProgress,follow,unfollow}) => {
        return (<div>
                <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <div className={style.selectUser}>
                                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="PhotoUser"
                                             className={style.usersPhoto}/>
                                    </div>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed ? <Button variant={'outline-danger'} disabled={followingInProgress.some(id => id === user.id)}
                                                      onClick={() => {
                                                          unfollow(user.id);
                                                      }}>Unfollow</Button>
                                    : <Button variant={'outline-success'} disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id);
                                              }}>Follow</Button>}
                            </div>
                        </span>
                <span>
                <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
                </span>
                <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
                </span>
                </span>
            </div>
                );


    };

    export default User;
