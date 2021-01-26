    import React from "react";
    import classes from './../Dialogues.module.css';
    import {NavLink} from "react-router-dom";


    const DialogueItems = (props) => {
        let path = '/dialogues/' + props.id;
        return (
            <div>
                <img src="https://pbs.twimg.com/media/DMqnnyjW0AAPDU3.jpg:large"/>
                <span><NavLink to={path}>{props.name}</NavLink></span>
            </div>
        );
    }


    export default DialogueItems;