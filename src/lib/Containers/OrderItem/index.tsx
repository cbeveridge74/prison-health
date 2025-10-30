import React, { useState } from 'react';
import { IOrder } from '../../Redux/Order/types';

interface OrderItemProps {
  order: IOrder;
  onOrderChange: (orders: IOrder[]) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ order, onOrderChange }) => {
  const [updatedOrder, setUpdatedOrder] = useState(order);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNoOfCycles: number = e.target.valueAsNumber;
    setUpdatedOrder(prevOrder => ({
      ...prevOrder,
      NoOfCycles: newNoOfCycles,
    }));

    onOrderChange([{
      ...updatedOrder,
      NoOfCycles: newNoOfCycles
    }]);
  };

  return (
    <div>
      <p>
        NoOfCycles: 
        <input 
          type="number" 
          value={updatedOrder.NoOfCycles} 
          onChange={handleChange}
        />
      </p>
    </div>
  );
};

export default OrderItem;
