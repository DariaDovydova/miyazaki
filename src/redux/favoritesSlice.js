import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'favorites',
    initialState: {
        favoritesItems: []
},
    reducers: {
        addItemToFavorites: (state, action) => {
            const timeId = new Date().getTime()
            state.favoritesItems.push({
                id: timeId,
                movieId: action.payload.movie.id,
                
            })
        },

        removeItemFromFav: (state, action) => {
            state.favoritesItems = state.favoritesItems.filter(
                favoritesItem => favoritesItem.id !== action.payload.favoritesItemId
            )
        }
}
})


export const getFavoritesItems = state => state.favorites.favoritesItems;
export const { addItemToFavorites, removeItemFromFav } = slice.actions;
export default slice.reducer;
