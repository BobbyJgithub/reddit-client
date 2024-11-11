import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://www.reddit.com/r/pics.json");
  const json = await response.json();

  return json.data.children.map((post) => post.data);
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    // Add reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.posts = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default postsSlice.reducer;
