export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token: null,
	playlist: null,
	currentSong: null,
	trackUri: [],
};

const reducer = (state, action) => {
	// Action -> type, [payload]

	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SET_PLAYLIST":
			return {
				...state,
				playlist: action.playlist,
			};
		case "SET_CURRENT_PLAYBACK": {
			return {
				...state,
				currentSong: action.current_playback,
			};
		}
		case "SET_TRACK":
			return {
				...state,
				trackUri: action.trackUri,
			};
		default:
			return state;
	}
};

export default reducer;
