import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMonsters = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  })

export const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    monsters: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMonsters.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchMonsters.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched monsters to the array
        state.monsters = state.monsters.concat(action.payload)
      })
      .addCase(fetchMonsters.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMonsters = (state) => state.monsters.monsters;

export default fetchSlice.reducer;
