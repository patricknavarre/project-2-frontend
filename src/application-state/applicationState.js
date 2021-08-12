import axios from 'axios';

// Actions

export const ADD_NEW_APPLICANT_ACTION = 'codeImmersives/addNewApplicant'

// Action Creator

export const addNewApplicantCreator = () => (dispatch, getState) => {
	dispatch({
		type: ADD_NEW_APPLICANT_ACTION,
		payload: {
			firstName: applicant.firstName,
			lastName: applicant.lastName,
			dateOfBirth: applicant.dateOfBirth,
			city: applicant.city,
			email: applicant.email,
			phoneNumber: applicant.phoneNumber
		}
	})
}

export const initialState = {
	applications: [],
};

// Reducer

export const reducer = (state, action) => {
	if(action.type === ADD_NEW_APPLICANT_ACTION) {
		return {
			firstName: applicant.firstName,
			lastName: applicant.lastName,
			dateOfBirth: applicant.dateOfBirth,
			city: applicant.city,
			email: applicant.email,
			phoneNumber: applicant.phoneNumber
		}
	}
	if(!state) return null;
	return state;
}