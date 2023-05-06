import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchField: "",
    },
    reducers: {
        onsearch(state, action) {
            return {
                ...state, 
                searchField: action.payload
            }
        }
    }
})


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSearchField = state => state.search.searchField;

export const {onsearch} = searchSlice.actions

export default searchSlice.reducer