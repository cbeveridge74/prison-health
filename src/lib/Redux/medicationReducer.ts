import { IMedication } from "./Medication/types";
import { mockMedications } from "./Mocks/MockMedications";
import {  
	MEDICATION_UPDATE,
	MedicationActionTypes} from "./types";

export const initialState: IMedication[] = mockMedications;


const reducer = (state = initialState, action: MedicationActionTypes) => {
	
	switch (action.type) {
		case MEDICATION_UPDATE:
			return state.map(medication => {
				const update = action.payload.find(
				  (update: IMedication) => update.UUID === medication.UUID
				);
				return update ? update : medication;
			  });
        default:
			return state;
	}
};

export default reducer;