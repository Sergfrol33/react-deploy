    import userPhoto from '../assets/images/kal.jpg'
    import defaultPhoto from '../assets/images/default.png'
    const SEND_MESSAGE = 'my-app/dialogue/SEND-MESSAGE';



    let initialState = {
        messages: [
            {message: 'Привет', id: 1},
                {message: 'Привет,Сергей', id: 2}
        ],
            dialogues: [
            {name: ' Сергей',surname:'Фролов', photo:userPhoto, date:'19:32', id: 1, message:'Привет'},
            {name: ' Иван Шешин',surname:'', photo:defaultPhoto, date:'0:32', id: 2, message: 'Прощай'}
        ]
    };

    const dialogueReducer = (state = initialState,action) =>{
        const randomId = () => {
            return Math.floor(Math.random() * (100-3) + 3);
        }
        switch (action.type){
            case SEND_MESSAGE: {
                return {
                    ...state,
                    messages: [...state.messages, {id: randomId(), message:  action.newMessage}]
                };
            }
            default:
                return state;
        }
    };


    export const sendMessage = (newMessage) => ({type: SEND_MESSAGE, newMessage});


    export default dialogueReducer;