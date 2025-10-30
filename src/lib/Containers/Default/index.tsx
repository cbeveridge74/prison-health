import React from 'react';
import { connect } from 'react-redux';
import { IMedication } from '../../Redux/Medication/types';
import MedicationItem from '../MedicationItem';
import { medicationUpdate, orderUpdate } from '../../Redux/actions';
import { IOrder } from '../../Redux/Order/types';
import OrderItem from '../OrderItem';


export interface IDefaultPageProps {
	medications: IMedication[];
	orders: IOrder[];
	medicationUpdate: (medications: IMedication[]) => void;
	orderUpdate: (orders: IOrder[]) => void;
}

const DefaultPage = ({
	medications, orders, medicationUpdate, orderUpdate
}: IDefaultPageProps) => {
	console.log( medications );
	console.log( orders );
	const handleMedicationChange = (medication: IMedication[]) => {
		medicationUpdate(medication);
	};
	const handleOrderChange = (order: IOrder[]) => {
		orderUpdate(order);
	};
	return (
		<div>
			{JSON.stringify(medications)}
			{JSON.stringify(orders)}
			 {medications.map((medication: IMedication) => (
				<MedicationItem 
				key={medication.UUID} 
				medication={medication} 
				onMedicationChange={handleMedicationChange} 
				/>
			))}
			{orders.map((order: IOrder) => (
				<OrderItem 
				key={order.UUID} 
				order={order} 
				onOrderChange={handleOrderChange} 
				/>
			))}
		</div>
		
	);
};

const mapStateToProps = (state: any) => ({
	medications: state.Medications,
	orders: state.Orders
});

export default connect(mapStateToProps, { medicationUpdate, orderUpdate
})(DefaultPage);

