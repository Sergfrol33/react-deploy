
    import React from "react";
    import style from './Header.module.css';
    import {NavLink} from "react-router-dom";

    const Header = (props) => {

        return(
            <div className= {style.header}>
                <a href="#">  <img src="https://shmector.com/_ph/13/188552034.png"/></a>

               <span className={style.headerText}>REACT.JS ОБУЧЕНИЕ</span>
              {/*  <div className={style.loginBlock}>
                    { props.isAuth ?
                        <div>{props.login} - <button onClick={props.logOut}>Log out</button> </div>
                        : <NavLink to ={'/login'}>Login</NavLink>}
                </div>*/}
            </div>
        );
    }

    export default Header;