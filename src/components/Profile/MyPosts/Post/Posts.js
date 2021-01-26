
    import React from "react";
    import classes from './Posts.module.css';

    const Posts = (props) => {

        return (

            <div className={classes.item}>
                <div>
                    {props.message}
                    <span> like </span> {props.likeCounts}

                </div>

            </div>


        );

    }

    export default Posts;