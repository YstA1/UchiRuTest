import { createSlice } from "@reduxjs/toolkit"

const toolkitSlice = createSlice({
	name: 'toolkit',
	initialState: {
		favoriteCats: [],
	},
	reducers: {
		setFavoriteCat(state, action) {
			state.favoriteCats.push(action.payload)
		},
		removeFavoriteCat(state, action) {
			state.favoriteCats = state.favoriteCats.filter(cat => cat.id != action.payload.id)
		}
	},
})

export default toolkitSlice.reducer
export const {setFavoriteCat, removeFavoriteCat} = toolkitSlice.actions