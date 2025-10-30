import { IMedication } from './Medication/types';
import { IOrder, IOrderItem } from './Order/types';
import { calcNumAdminEvents } from './Utils/Administration/AdministrationHelper';
import { populateDailyFrequencyAndDailyQuantity } from './Utils/Medication/medicationHelper';
import { calculateIntervalQuantity, findOrdersAssociatedWithMedication, retrieveActualQuantityReceivedForMedicationOnThisOrderItem } from './Utils/Order/orderHelper';
import { MEDICATION_UPDATE, ORDER_UPDATE } from './types'

export const medicationUpdate = (medications: IMedication[]) => (dispatch: any) => {
	
	medications.forEach((medication) => {
		populateDailyFrequencyAndDailyQuantity( medication );
		
		// Working out how much to order
		const intervalQuantity: number = calculateIntervalQuantity(medication);
		const orderItem : IOrderItem = findOrdersAssociatedWithMedication( medication );
		const actualQuantity: number = retrieveActualQuantityReceivedForMedicationOnThisOrderItem( orderItem );
		const numAdminEvents = calcNumAdminEvents(medication);
		
		console.log( "medication.DailyQuantity:" + medication.DailyQuantity );
		console.log( "medication.DailyFrequency:" + medication.DailyFrequency );
		console.log( "Dose quantity:" + medication.DailyQuantity );
		console.log( "Quantity per interval: " + intervalQuantity );
		console.log( "Quantity actual: " + actualQuantity );
		console.log( "numAdminEvents: " + numAdminEvents );
	});
	
	dispatch({
		type: MEDICATION_UPDATE,
		payload: medications
	});
};

export const orderUpdate = (orders: IOrder[]) => (dispatch: any) => {
	dispatch({
		type: ORDER_UPDATE,
		payload: orders
	});
};