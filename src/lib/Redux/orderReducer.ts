import { mockOrders } from "./Mocks/MockOrders";
import { IOrder } from "./Order/types";
import { 
	OrderActionTypes,
	ORDER_UPDATE } from "./types";

export const initialState: IOrder[] = mockOrders;


const reducer = (state = initialState, action: OrderActionTypes) => {
	
	switch (action.type) {
		case ORDER_UPDATE:
			return state.map(order => {
				const update = action.payload.find(
				  (update: IOrder) => update.UUID === order.UUID
				);
				return update ? update : order;
			  });
        default:
			return state;
	}
};

export default reducer;