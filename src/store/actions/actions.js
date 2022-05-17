import api from "../../api/api";

import { API_URL } from "../../constants/index";

export const ACTION_NEW_USER = "ACTION_NEW_USER";
export const ACTION_EDIT_USER = "ACTION_EDIT_USER";
export const ACTION_DELETE_USER = "ACTION_DELETE_USER";
export const ACTION_SET_USERS = "ACTION_SET_USERS";

export const fetchUsers = () => {
	return (dispatch) => {
		api.get(API_URL).then(({ data }) => {
			dispatch({
				type: ACTION_SET_USERS,
				payload: data,
			});
		});
	};
};

export const deleteUser = (id) => {
	return (dispatch) => {
		api.delete(API_URL + "/" + id);
		dispatch({
			type: ACTION_DELETE_USER,
			payload: id,
		});
	};
};

export const saveUser = (user) => {
	return (dispatch) => {
		if (user.id) {
			api.put(API_URL + user.id, user).then(({ data }) => {
				dispatch({
					type: ACTION_EDIT_USER,
					payload: data,
				});
			});
		} else {
			api.post(API_URL, user).then(({ data }) => {
				dispatch({
					type: ACTION_NEW_USER,
					payload: data,
				});
			});
		}
	};
};

export const setUsers = (payload) => ({ type: ACTION_SET_USERS, payload });
