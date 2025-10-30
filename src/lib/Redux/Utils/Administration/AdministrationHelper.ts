import { AdminTypeRef } from "../../Administration/types";
import { IMedication } from "../../Medication/types";
import { IOrderItem } from "../../Order/types";
import { calculateIntervalQuantity, findOrdersAssociatedWithMedication, retrieveActualQuantityReceivedForMedicationOnThisOrderItem } from "../Order/orderHelper";

export const calcNumAdminEvents = ( medication: IMedication ) : number => {
    const orderItem : IOrderItem = findOrdersAssociatedWithMedication( medication );
    const actualQuantity: number = retrieveActualQuantityReceivedForMedicationOnThisOrderItem( orderItem );
    const requiredQuantity : number = medication.Administration.AdminType === AdminTypeRef.InPossession ? 
    calculateIntervalQuantity(medication) :
    ( medication.DailyQuantity as number )
    return Math.ceil( actualQuantity / requiredQuantity );
};