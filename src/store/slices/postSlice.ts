import IPost from "@/store/models/IPost";
import postData from "../json-data/postsData";
import { createSlice } from "@reduxjs/toolkit";

interface PostState {
    posts: IPost[]
}

const initialState: PostState = {
    posts: [...postData]
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            console.log('action: ', action.payload)
            state.posts.unshift(action.payload)
        }
    }
})

export const { addPost } = postSlice.actions

export default postSlice.reducer