import { TYPES } from './Actions';
import { AppInitState } from './StateAndProps';


export function Reducer(state = AppInitState, action): any {
	switch (action.type) {
		case TYPES.DATA_LOADED:
			state.data = action.data.data;
			state.navData = action.data.navData;
			return { ...state };
		
		case TYPES.SAVE_DATA:
			state.data = action.data;
			return { ...state };

		default:
			return state;
	}
}
