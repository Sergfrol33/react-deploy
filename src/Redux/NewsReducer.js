import minecraft from  '../assets/video/What How Meme in Minecraft.mp4';
import penguin from '../assets/video/Пингвин упал.mp4';
let initialState = {
    stories: [
        {id: 1,profile_name:'Sergey', video_url: minecraft, duration:'7' },
        {id: 2, profile_name:'Sergey', video_url: penguin, duration:'7'}
    ],
};
    const NewsReducer = (state = initialState,action) =>{
        switch (action.type){
            default:
                return state;
        }
    }

export default NewsReducer;