import {
	ACTION_NEW_USER,
	ACTION_EDIT_USER,
	ACTION_DELETE_USER,
	ACTION_SET_USERS,
} from "../actions/actions";

const INITIAL_STATE = {
	users: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case ACTION_NEW_USER:
			return {
				...state,
				users: [...state.users, payload],
			};
		case ACTION_EDIT_USER:
			return {
				...state,
				users: state.users.map((item) =>
					payload.id === item.id ? payload : item
				),
			};
		case ACTION_DELETE_USER:
			return {
				...state,
				users: state.users.filter((todo) => todo.id !== payload),
			};
		case ACTION_SET_USERS:
			return { users: payload };
		default:
			return state;
	}
}
