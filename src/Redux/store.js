import profileReducer from "./ProfileReducer";
import dialogueReducer from "./DialogueReducer";


    let store = {
            _state: {
                profilePage: {
                    posts: [
                        {id: 1, message: ' ЗААААА', likeCounts: 25},
                        {id: 2, message: ' sdsss', likeCounts: 12}
                    ],
                    newPostText: 'текст',
                },

                dialoguesPage: {
                    messages: [
                        {message: 'Hi', id: 1},
                        {message: 'Fuck you', id: 2}
                    ],
                    dialogues: [
                        {name: ' Sergey', id: 1},
                        {name: ' Andrey', id: 2}
                    ],
                    newMessageBody:' ',
                },
                sidebar: [
                    {name: ' Sergey', id: 1},
                    {name: ' Andrey', id: 2}
                ]
            },
            _callSubscriber(){
                console.log();
            },

            dispatch(action){
                this._state.profilePage = profileReducer(this._state.profilePage,action);
                this._state.dialoguesPage = dialogueReducer(this._state.dialoguesPage,action);
                this._callSubscriber(this._state);
            },

            getState() {
                return this._state;
            },
            subscribe(observer) {
                this._callSubscriber = observer;

            },

        };



    export default store;
    window.store = store;
