import axios from "axios";

export const REGISTER_USER = "REGISTER_USER";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
export const ADD_NEW_CLASS = "ADD_NEW_CLASS";
export const UPDATE_CLASS = "UPDATE_CLASS";
export const DELETE_CLASS = "DELETE_CLASS";
export const REGISTER_FOR_CLASS = "REGISTER_FOR_CLASS";
export const UNREGISTER = "UNREGISTER";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const SET_CLASSES = "SET_CLASSES";
export const SET_USERS = "SET_USERS";
export const SET_CLIENT_LIST = "SET_CLIENT_LIST";
export const SET_CLIENT_CLASSES = "SET_CLIENT_CLASSES";


export const getClasses = () => {
	return async (dispatch) => {
		try {
			dispatch(isFetchingTrue());
			const response = await axios.get(
				"https://bw-anywherefitness-3.herokuapp.com/api/classes"
			);
			dispatch(isFetchingFalse());
			console.log(response);
			dispatch(setClasses(response.data.allClasses));
		} catch (err) {
			dispatch(isFetchingFalse());
			console.log(err);
		}
	};
};

export const login = (data) => {
	return async (dispatch) => {
		try {
			dispatch(isFetchingTrue());
			const response = await axios.post(
				"https://bw-anywherefitness-3.herokuapp.com/api/auth/login",
				data
			);
			dispatch(isFetchingFalse());
			console.log(response);
			localStorage.setItem("token", response.data.token);
			// window.location.pathname = `/${data.role.toLowerCase()}`;
		} catch (err) {
			console.log(err);
		}
	};
};

export const registerUser = (data) => {
	return { type: REGISTER_USER, payload: data };
};

export const isFetchingTrue = () => {
	return { type: SET_IS_FETCHING, payload: true };
};

export const isFetchingFalse = () => {
	return { type: SET_IS_FETCHING, payload: false };
};

export const setCurrentUser = (data) => {
	return { type: SET_CURRENT_USER, payload: data };
};

export const updateCurrentUser = () => {
	return { type: UPDATE_CURRENT_USER };
};

export const addNewClass = (data) => {
	return { type: ADD_NEW_CLASS, payload: data };
};

export const updateClass = (data) => {
	return { type: UPDATE_CLASS, payload: data };
};

export const deleteClass = (data) => {
	return { type: DELETE_CLASS, payload: data };
};

export const registerClass = (data) => {
	return { type: REGISTER_FOR_CLASS, payload: data };
};

export const unregister = (data) => {
	return { type: UNREGISTER, payload: data };
};

export const setClasses = (data) => {
	return { type: SET_CLASSES, payload: data };
};

export const setUsers = (data) => {
	return { type: SET_USERS, payload: data };
};

export const setClientList = (data) => {
	return { type: SET_CLIENT_LIST, payload: data };
};

export const setClientClasses = (data) => {
	return { type: SET_CLIENT_CLASSES, payload: data };
};