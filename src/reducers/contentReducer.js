import { contentConstants } from '../actions/contentActions';

const CONTENT_INITIAL = {
  contents: null,
  isGettingContents: false,
};

export const contentReducer = (state = CONTENT_INITIAL, action) => {
	switch (action.type) {
		case contentConstants.GET_CONTENTS_REQUEST:
		return {
				...state,
				isGettingContents: true,
		};
		case contentConstants.GET_CONTENTS_SUCCESS:
		return {
				...state,
				contents: action.payload,
				isGettingContents: false,
		};
		case contentConstants.GET_CONTENTS_FAILURE:
		return {
				...state,
				contents: null,
				isGettingContents: false,
		};
		default:
			return state;
	}
}  
