import axios from "axios";

// Actions

export const ADD_NEW_APPLICANT_ACTION = "codeImmersives/addNewApplicant";

// Action Creator

export const addNewApplicantCreator =
  (firstName, lastName, dateOfBirth, city, email, phoneNumber) =>
  (dispatch) => {

	try {

		let response = await axios.post(
			'http://localhost:3001/users/application',
			{
				firstName,
				lastName,
				dateOfBirth,
				city,
				email,
				phoneNumber
			}
		);

		dispatch({
		  type: ADD_NEW_APPLICANT_ACTION,
		  payload: {
			firstName: response.firstName,
			lastName: response.lastName,
			dateOfBirth: response.dateOfBirth,
			city: response.city,
			email: response.email,
			phoneNumber: response.phoneNumber,
		  },
		});
		
	} catch (error) {
		
	}

  };

export const initialState = {
  applications: [],
};

// Reducer

export const reducer = (state, action) => {
  if (action.type === ADD_NEW_APPLICANT_ACTION) {
    return {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      dateOfBirth: action.payload.dateOfBirth,
      city: action.payload.city,
      email: action.payload.email,
      phoneNumber: action.payload.phoneNumber,
    };
  }
  if (!state) return null;
  return state;
};
