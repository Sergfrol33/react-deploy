
    import React, {useState} from "react";
    import style from './News.module.css';
    import testPhoto from '../../assets/images/default.png'
    import Story from "./Story/Story";
    import {Preloader} from "../Common/Prealoder/Preloader";


    const News = ({profile,stories}) => {
        const [storiesOpen,setStoriesOpen] = useState(false);
        if (!profile) {
            return <Preloader/>

        }

        const openStory = () => {
            setStoriesOpen(true);
        }
        const closeStory = () => {
            setStoriesOpen(false);
        }
        return (
            <div className={style.newsContainer}>
                <div className={style.coverImageBox}>
                    <img alt={'test'}  src={profile.photos.large || testPhoto } onClick={e => openStory()}/>
                </div>

                {storiesOpen && <Story closeStory = {closeStory}
                                       profile = {profile}
                                       stories = {stories}
                />}
            </div>
        );
    }

    export default News;