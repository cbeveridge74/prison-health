import { describe, expect, it } from '@jest/globals';
import reducer, { initialState } from './orderReducer';

import { ORDER_UPDATE, } from './types';
import { OrderEventStateRef, OrderItemEventStateRef } from './Order/types';
import { Title } from './User/types';
import { mockOrders } from './Mocks/MockOrders'

describe('PH Reducer', () => {
	it('returns the initial state when nothing is passed', () => {
		const phReducer = reducer(undefined, {});
		expect(phReducer).toEqual(initialState);
	});
	it('handles updating orders', () => {
		
		// Updating order
		const payload = [{
			UUID: "1",
			OrderItems: [{
				UUID: "1",
				MedicationUUID: "1",
				PatientLocationWhenOrderSent: "B 123 54",
				OrderItemEvents: [{
					UUID: "1",
					EventTime: "2024-06-25T14:59:22.105Z",
					State: OrderItemEventStateRef.Fulfilled,
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
		}];

		const phReducer = reducer(mockOrders, { type: ORDER_UPDATE, payload });
		expect(phReducer).toEqual(
			[{
				UUID: "1",
				OrderItems: [{
					UUID: "1",
					MedicationUUID: "1",
					PatientLocationWhenOrderSent: "B 123 54",
					OrderItemEvents: [{
						UUID: "1",
						EventTime: "2024-06-25T14:59:22.105Z",
						State: OrderItemEventStateRef.Fulfilled,
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
		);
	});
});
