import { IOrder, OrderEventStateRef, OrderItemEventStateRef } from "../Order/types";
import { Title } from "../User/types";

export const mockOrders: IOrder[] = [{
	UUID: "1",
	OrderItems: [{
		UUID: "1",
		MedicationUUID: "1",
		PatientLocationWhenOrderSent: "B 123 54",
		ActualQuantityReceived: 112,
		OrderItemEvents: [{
			UUID: "1",
			EventTime: "2024-06-25T14:59:22.105Z",
			State: OrderItemEventStateRef.Created,
			User: {
				forename: "David",
				surname: "West",
				title: Title.Mr
			}
		}]
	},{
		UUID: "2",
		MedicationUUID: "2",
		PatientLocationWhenOrderSent: "B 123 54",
		ActualQuantityReceived: 112,
		OrderItemEvents: [{
			UUID: "1",
			EventTime: "2024-06-25T14:59:22.105Z",
			State: OrderItemEventStateRef.Created,
			User: {
				forename: "David",
				surname: "West",
				title: Title.Mr
			}
		}]
	},{
		UUID: "3",
		MedicationUUID: "3",
		PatientLocationWhenOrderSent: "B 123 54",
		ActualQuantityReceived: 112,
		OrderItemEvents: [{
			UUID: "1",
			EventTime: "2024-06-25T14:59:22.105Z",
			State: OrderItemEventStateRef.Created,
			User: {
				forename: "David",
				surname: "West",
				title: Title.Mr
			}
		}]
	}],
	NoOfCycles: 1,
	OrderEvents: [{
		UUID: "1",
		State: OrderEventStateRef.Created,
		EventTime: "2024-06-25T14:59:22.105Z",
		User: {
			forename: "Andrew",
			surname: "Behn",
			title: Title.Dr
		} 
	}]
}]
	

