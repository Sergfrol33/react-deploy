
    import React, {useEffect, useRef, useState} from "react";
    import './Story.css'
    import './../../../utility/landing/Landing.css'
    import testPhoto from '../../../assets/images/default.png'
    import MoreHoriz from '@material-ui/icons/MoreHoriz'
    import ChevronRight from '@material-ui/icons/ChevronRight'
    import ChevronLeft from '@material-ui/icons/ChevronLeft'

    const Story = ({closeStory,profile,stories}) => {
        const [storyPaused,setStoryPaused] = useState(false);
        const [storyIndex,setStoryIndex] =useState(0);
        const storyIndexRef = useRef(0);
        useEffect(() => {
            const video = document.getElementById('video')
            if (video){
                video.onended = (e) => {
                    if(storyIndexRef.current === stories.length-1){
                        closeStory();
                    } else {
                        setStoryIndex(value => value + 1);
                    }

                }
            }
        },[closeStory,stories.length]);
        useEffect(() => {
            storyIndexRef.current = storyIndex;
        },[storyIndex])
        const onClickStory = (element = HTMLElement) =>{
            if (element.className === 'story-container') closeStory();
        }
        useEffect(() => {
            if (storyPaused){
                document.getElementById('video').pause();
            } else {
                document.getElementById('video').play();
            }
        },[storyPaused])
        const getProgressBarClassName = (index) => {
            if (index < storyIndex){
                return 'progress-bar progress-bar-finished';
            } else if(index === storyIndex){
                return storyPaused ? "progress-bar progress-bar-active progress-bar-paused" : "progress-bar progress-bar-active"
            } else {
                return 'progress-bar'
            }
        }
        return (
            <div onClick={event => onClickStory(event.target)} className={'story-container'}>
                <div className={'story'}>
                    <div className={'title'}>
                        <img src={profile.photos.large || testPhoto} alt=""/>
                        <div className={'details'}>
                            <span>Сергей Фролов</span>
                        </div>
                        <div className={'spacer'}></div>
                        {storyPaused && <div className={'pause'}>PAUSED</div>}
                        <MoreHoriz style={{color:'white'}}/>
                    </div>
                    <div className={'progress-bars'}>
                        {stories.map((story, index) => (
                            <div className={'progress-bar-container'}>
                                <div style={{
                                    animationDuration: `${stories[0].duration}s`
                                }} className={getProgressBarClassName(index)}>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={'video'}>
                        <video onMouseDown={e => setStoryPaused(true)}
                               onMouseUp={e => setStoryPaused(false)}
                               id={'video'}  src={stories[storyIndex].video_url}
                               autoPlay
                        />
                        {storyIndex !== 0 && <ChevronLeft onClick={e => setStoryIndex((value) => value-1)}  className={'previous hover-able'}/>}
                        {storyIndex !== stories.length-1 && <ChevronRight
                            onClick={e => setStoryIndex((value) => value+1)}
                            className={'next hover-able'}/>}
                    </div>
                </div>
            </div>
        );
    }
    export default Story