
    import React from "react";
    import style from './Navbar.module.css';
    import {NavLink} from "react-router-dom";
    import {Button} from "react-bootstrap";
    import 'bootstrap/dist/css/bootstrap.min.css';

    const Navbar = (props) => {

        return(
            <nav className ={style.nav}>

                <div className={style.item}>
                        <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/dialogues'>Messages</NavLink>
                </div>

                    <div className={style.item}>
                        <NavLink to='/news' >News</NavLink>
                    </div>
                <div className={style.item}>
                        <NavLink  to ='/profile' >Music</NavLink>
                </div>
                <div className={style.item}>
                        <NavLink  to='/settings'>Settings</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/">Friends</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to ='users'>Find Users</NavLink>
                </div>
                <div className={style.loginBlock}>
                    { props.isAuth ?
                        <div>{props.login} - <Button  onClick={props.logOut}>Log out</Button> </div>
                        : <NavLink to ={'/login'}>Login</NavLink>}
                </div>
            </nav>
        );
    }

    export default Navbar;