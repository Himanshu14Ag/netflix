
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        showGptSearch : false,
        gptMovies: null,
        tmdbResults:null
    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const {gptMovies, tmdbResults} = action.payload;
            state.gptMovies = gptMovies;
            state.tmdbResults = tmdbResults;
        }
    }
});


export const {toggleGptSearchView, addGptMovieResult} =gptSlice.actions;
export default gptSlice.reducer;