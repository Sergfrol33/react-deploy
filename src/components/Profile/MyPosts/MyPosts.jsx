import React from "react";
import style from './MyPosts.module.css';
import Posts from "./Post/Posts";
import AddPostReduxForm from "./Post/AddPost";


     const MyPosts = React.memo(props => {
            let postElements = props.posts
                .map( p => <div className={style.posts} key={p.id}>
                    <Posts message={p.message} likeCounts={p.likeCounts}/>
                </div>
                );

            let onAddPost = (values) => {
                props.addPost(values.addPost);
            };

            return (
                <div className={style.blockItem}>
                <div className={style.postsBlock}>
                    <h3>My posts</h3>
                    <AddPostReduxForm onSubmit={onAddPost}/>
                        {postElements}

                </div>
                </div>
            );
        })

    export default MyPosts;