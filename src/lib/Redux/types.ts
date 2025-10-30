import { IMedication } from "./Medication/types";
import { IOrder } from "./Order/types";

export const SNACKBAR_SHOW 		= 'SNACKBAR_SHOW';
export const MEDICATION_UPDATE 	= 'MEDICATION_UPDATE';
export const MEDICATION_DELETE 	= 'MEDICATION_DELETE';
export const ORDER_UPDATE 		= 'ORDER_UPDATE';



export interface ISnackbarOptions {
	isOpen?: boolean,
	message: string,
	severity: 'error' | 'success' | 'info' | 'warning',
	position?: 'left' | 'right' | 'center',
	action?: any,
	isAlwaysVisible?: boolean
}

export interface IPrisonHealthMedicationState {
    Medications: IMedication[];
}

/* 
export interface IPrisonHealthOrderState {
	Orders: IOrder[];
} */



export interface MedicationUpdateAction {
	type: typeof MEDICATION_UPDATE;
	payload: IMedication[];
}

interface MedicationDeleteAction {
	type: typeof MEDICATION_DELETE;
	payload: IMedication[];
}

interface OrderUpdateAction {
	type: typeof ORDER_UPDATE;
	payload: IOrder[];
}

export type MedicationActionTypes = MedicationUpdateAction | MedicationDeleteAction;
export type OrderActionTypes = OrderUpdateAction;