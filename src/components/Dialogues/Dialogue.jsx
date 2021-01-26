    import React from "react";
    import classes from './Dialogues.module.css';
    import Message from "./Message/Messages";
    import cn from 'classnames';
    import AddMessageFormRedux from "./DialogueForm";
    import DialogueHeader from "./DialogueHeader/DialogueHeader";
    import DialoguePages from "./DialoguePages/DialoguePages";



    const Dialogue = (props) => {

        const addNewMessage = (values) => {
            props.sendMessage(values.newMessage);
        }


        let messagesElements = props.messages
            .map((message) => <Message message = {message.message} key ={message.id}/>)


        return (
            <div className={cn(classes.container,classes.clearfix)}>
                <DialoguePages dialog = {props.dialog}
                               message={props.messages}
                />
                <DialogueHeader/>
         <div className={classes.chatContainer}>
             <div className={classes.chatHistory}>
             {messagesElements}
             </div>
                    <div className={classes.chatInput}>
                        <AddMessageFormRedux onSubmit = {addNewMessage}/>
                    </div>
            </div>
                </div>
        );
    }


    export default Dialogue;