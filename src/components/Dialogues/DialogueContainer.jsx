    import {sendMessage} from "../../Redux/DialogueReducer";
    import Dialogue from "./Dialogue";
    import {connect} from "react-redux";
    import {withAuthRedirect} from "../../hoc/withAuthRedirect";
    import {compose} from "redux";


    let mapStateToProps = (state) =>{
        return {
            dialog:state.dialoguesPage.dialogues,
            isAuth: state.auth.isAuth,
            messages:state.dialoguesPage.messages
        };
    }

    export default compose(
        connect(mapStateToProps,{
            sendMessage
        }),
        withAuthRedirect
    )(Dialogue);