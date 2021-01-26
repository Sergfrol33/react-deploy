    import React, {useState} from "react";
    import {Field, reduxForm} from "redux-form";
    import classes from "./Dialogues.module.css";
    import {Textarea} from "../Common/FormsControls/FormsControls";
    import {maxLength100, required} from "../../utility/validation/validators";
    import SendIcon from '@material-ui/icons/Send';

    const AddMessageForm = (props) => {
        const [colorMessage,setColorMessage] = useState(false);
        return (
            <form onSubmit={props.handleSubmit} >
                <div className={classes.textareaContainer}>
                    <Field component={Textarea} name={'newMessage'}
                           className={classes.textarea} placeholder= 'Enter your message'
                           validate={[required,maxLength100]}
                    />
                    <span className={classes.sendMessage}>
                    <button  onMouseOver={() =>setColorMessage(true)} onMouseOut={() =>setColorMessage(false)}>
                        {colorMessage ? <SendIcon color={'action'} fontSize={'large'}/> : <SendIcon color={'disabled'} fontSize={'large'} />}
                    </button>
                    </span>
                </div>

            </form>
        );
    }

    const AddMessageFormRedux = reduxForm({form: 'dialogueAddMessageForm'})(AddMessageForm);
    export default AddMessageFormRedux;