import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import postsReducer from './posts';

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
