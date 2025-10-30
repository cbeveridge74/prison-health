import { IMedication } from "../../Medication/types";
import { mockOrders } from "../../Mocks/MockOrders";
import { IOrder, IOrderItem } from "../../Order/types";

export const calculateIntervalQuantity = ( medication : IMedication) : number => {
    return ( medication.DailyQuantity as number ) * ( medication.DailyFrequency as number ) * (medication.Supply.Cadence.Frequency * medication.Supply.Cadence.Interval);
};

export const findOrdersAssociatedWithMedication = (medication: IMedication) : IOrderItem => {
    const order: IOrder = mockOrders[0]; // Swap this out!

    return order.OrderItems.find(
        (orderItem: IOrderItem) => orderItem.MedicationUUID === medication.UUID
    ) as IOrderItem; // This should be an array
};

export const retrieveActualQuantityReceivedForMedicationOnThisOrderItem = ( orderItem : IOrderItem ) => {
    return orderItem ? orderItem.ActualQuantityReceived : 0;
};


