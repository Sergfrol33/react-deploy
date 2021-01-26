
    import React, { useState} from "react";
    import {Preloader} from "../../Common/Prealoder/Preloader";
    import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
    import userPhoto from '../../../assets/images/default.png'
    import style from './ProfileInfo.module.css'
    import ProfileDataFormReduxForm from "./ProfileDataForm";





    const ProfileInfo = (props) => {
        const [editMode,setEditMode] = useState(false);

        if (!props.profile) {
            return <Preloader/>

        }

        const onSubmit = (formData) => {
            props.saveProfile(formData).then(()=>{
                setEditMode(false);
            })
        }
        return (
            <div>
                    <figure>
                        <div className={style.containerMain}>
                            <img src={props.profile.photos.large || userPhoto } alt = 'userPhoto' className={style.mainPhoto}/>
                            <div className={style.pageName}>
                                 <h1>{props.profile.fullName}</h1>
                            </div>
                            <div className={style.profileStatus}>
                                <ProfileStatusWithHooks status = {props.status} updateStatus={props.updateStatus}/>
                            </div>
                        </div>
                        {editMode
                            ? <ProfileDataFormReduxForm initialValues={props.profile}
                                                        profile = {props.profile}
                                                        onSubmit = {onSubmit}
                                                        savePhoto = {props.savePhoto}
                            />
                            : <ProfileData profile = {props.profile}
                                           isOwner = {props.isOwner}
                                           goToEditMode = {() => {setEditMode(true)}}
                            />}
                    </figure>
            </div>
        );
    }

    const ProfileData = (props) => {
        return (
            <div className={style.containerInfo}>
                {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
                <div className={style.block}>
                    <b>Looking for a job </b>: {props.profile.lookingForAJob ? 'yes': 'no'}
                </div>
                { props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                </div>
                }
                <div>
                    <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                    return <Contact contactTitle={key}
                                    contactValue={props.profile.contacts[key]}
                                    key = {key}
                    />
                })}
                </div>
                <div className={style.aboutMe}>
                    <b>About me</b>: {props.profile.aboutMe}
                </div>
            </div>
        );
    }

    export const Contact = ({contactTitle, contactValue}) => {
        return <div className={style.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    }

    export default ProfileInfo  ;