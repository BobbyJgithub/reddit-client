import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/postsSlice';
import searchReducer from './features/searchSlice';

const store = configureStore({
    reducer: {
        posts: postReducer,
        search: searchReducer
    }
})

export default store;