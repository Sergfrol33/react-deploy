import React from "react";
import {CreateField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'
import style from "../../Common/FormsControls/FormControls.module.css";


    const ProfileDataForm = ({handleSubmit,error,profile,savePhoto,}) => {
        const onmMainPhotoSelected = (e) => {
            if (e.target.files.length){
                savePhoto(e.target.files[0]);
            }
        }
        return (
            <form onSubmit={handleSubmit} className={s.containerInfo}>
                 <div><button>Save</button></div>
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <b>Full name </b>: {CreateField('Full name',[],'fullName',Input)}
                </div>
                <br/>
                <div className={s.savePhoto}>
                    {<input type={"file"} onChange={onmMainPhotoSelected}/>}
                </div>
                <br/>
                <div>
                    <b>Looking for a job </b>:{CreateField('',[],'lookingForAJob',Input,{type:'checkbox'})}
                </div>

                <div>
                    <b>My professional skills</b>:
                    {CreateField('write your description',[],'lookingForAJobDescription',Textarea)}
                </div>
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}: {CreateField(key ,[],'contacts.'+ key ,Input)}</b>
                    </div>
                })}
                </div>
                <div>
                    <b>About me</b>: {CreateField('About me',[],'aboutMe',Textarea,null,null,style.textareaAboutMe)}
                </div>
            </form>
        );
    }

   const ProfileDataFormReduxForm = reduxForm({
        form:'edit-profile'
    })(ProfileDataForm)

    export default ProfileDataFormReduxForm;
