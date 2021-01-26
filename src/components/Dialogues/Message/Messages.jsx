    import React from "react";
    import classes from './../Dialogues.module.css';





    const Message = (props) => {
        return(
            <div className={classes.dialogue}>
                <p>{props.message}</p>
            </div>
        );
    }



    export default Message;