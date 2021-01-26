

    import {addPost} from "../../../Redux/ProfileReducer";
    import MyPosts from "./MyPosts";
    import {connect} from "react-redux";

    let mapStateToProps = (state) => {
        return {
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText

        }
    }

    let MyPostsContainer = connect(mapStateToProps, {
            addPost
        })(MyPosts);

    export default MyPostsContainer;