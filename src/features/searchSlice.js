import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// Async thunk to search posts
export const searchPosts = createAsyncThunk(
  'search/searchPosts',
  async ({ query, posts }) => {
    return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    // Add reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPosts.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchPosts.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});

export default searchSlice.reducer;