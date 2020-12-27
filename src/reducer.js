export default (state, action) => {
	switch (action.type) {
		case 'JOINED':
			return {
				...state,
				joined: true,
				userName: action.payload.userName,
				roomId: action.payload.roomId
			}
			break;
		case 'SET_DATA':
			return {
				...state,
				users: action.payload.users,
				messages: action.payload.messages
			};
			break;
		case 'SET_USERS':
			return {
				...state,
				users: action.payload
			};
			break;
		case 'NEW_MESSAGE':
			return {
				...state,
				messages: [...state.messages, action.payload]
			};
			break;			
		default:
			return state;
	}
}