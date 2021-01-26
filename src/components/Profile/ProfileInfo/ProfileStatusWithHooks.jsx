    import React, {useEffect, useState} from "react";
    import style from './ProfileInfo.module.css';

    const ProfileStatus = (props) => {

        let [editMode,setEditMode] = useState(false);
        let [status,setStatus] = useState(props.status);

        useEffect(() => {
            setStatus(props.status);
        },[props.status]);

        const activeMode = () => {
            setEditMode(editMode = true);
        }

        const deactivateMode = () => {
            setEditMode(editMode = false);
            props.updateStatus(status)
        }

        const onStatusChange = (e) => {
            setStatus(e.currentTarget.value);
        }


        return (
            <div>
                { !editMode &&
                <div>
                    <b>status</b>: <span className={style.statusItem} onDoubleClick={activeMode}>{status|| '-----' }</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true} value={status}></input>
                </div>
                }
                </div>
        );
    }

    export default ProfileStatus;