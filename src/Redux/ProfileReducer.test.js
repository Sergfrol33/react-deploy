import profileReducer, {addPost, deletePost} from "./ProfileReducer";
import React from "react";

    let state = {
        posts: [
            {id: 1, message: ' ЗААААА', likeCounts: 25},
            {id: 2, message: ' sdsss', likeCounts: 12}
        ]
    }

    it('length of posts should be incremented', () => {
            let action = addPost('Салам пацанам');
            let newState = profileReducer(state,action);

            expect (newState.posts.length).toBe(3);
        });


    it('message should be incremented', () => {
        let action = addPost('Салам пацанам');
        let newState = profileReducer(state,action);

        expect (newState.posts[2].message).toBe('Салам пацанам');
    });

    it(`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {
        let action = deletePost(1000);
        let newState = profileReducer(state,action);

        expect (newState.posts.length).toBe(2);
    });


