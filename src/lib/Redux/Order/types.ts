import { IUser } from "../User/types";

export enum OrderEventStateRef {
    Created     = 'Created',
    Sent        = 'Sent',
    Resent      = 'Re-sent',
    Deleted     = 'Deleted',
    Received    = 'Received'
}

export enum OrderItemEventStateRef {
    Created             = 'Created',
    Deleted             = 'Deleted',
    PartiallyReceived   = 'Partially received',
    Waste               = 'Waste',
    Fulfilled           = 'Fulfilled'
}

export interface IOrder {
    UUID: string;
    OrderItems: IOrderItem[];
    NoOfCycles: number;
    OrderEvents: IOrderEvent[];
}
  
export interface IOrderEvent {
    UUID: string;
    State: string; // see OrderEventStateRef
    EventTime: string;
    User: IUser;
}


export interface IOrderItem {
    UUID: string;
    MedicationUUID: string;
    ActualQuantityReceived: number;
    OrderItemEvents: IOrderItemEvent[];
    PatientLocationWhenOrderSent: string;
}

export interface IOrderItemEvent {
    UUID: string;
    State: string; // See OrderItemEventStateRef
    EventTime: string;
    User: IUser;
}