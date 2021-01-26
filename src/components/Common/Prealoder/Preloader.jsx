    import React from "react";
    import {CircularProgress} from "@material-ui/core";

    export const Preloader = (props) => {
        return <div style={{
            textAlign:'center',
            top:'50%',
            position:'absolute',
            left:'50%'
        }}>
            <CircularProgress color={'secondary'}/>
        </div>
    }
