    import React from "react";
    import {Field, reduxForm} from "redux-form";
    import {required} from "../../../../utility/validation/validators";
    import {Textarea} from "../../../Common/FormsControls/FormsControls";

    const AddPost = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea}  name={'addPost'} placeholder={'Add post'}
                           validate={[required]}
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        );
    }

    const addPostReduxForm = reduxForm({form: 'profileAddPost'})(AddPost);

    export default addPostReduxForm;