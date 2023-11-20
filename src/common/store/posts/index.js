import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  id: 1,
  title: 'Ciao',
  content: 'alè alè',
}, {
  id: 2,
  title: 'Hey',
  content: 'viva viva',
}];

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addPost } = posts.actions;

export default posts.reducer;
