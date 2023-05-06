import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import fetchReducer from "../features/fetch/fetchSlice";

export default configureStore({
    reducer: {
        search: searchReducer,
        monsters: fetchReducer
    }
})