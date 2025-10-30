import { IUser } from "../User/types";


export enum AdminTypeRef {
    Supervised      = 'Supervised',
    InPossession    = 'In possession'
}

export enum AdminTimeRef {
    AM      = 'AM',
    Noon    = 'Noon',
    PM      = 'PM',
    Night   = 'Night'
}

export enum AdminRoundTimeRef {
    AdHoc = 'Ad hoc'
}

export enum AdministrationRoundStateRef { 
    Due = 'Due',
    Locked = 'Locked',
    Complete = 'Complete',
    Deleted = 'Deleted'
}

type AdminTimesRef = AdminTimeRef | AdminRoundTimeRef;

export enum AdminStateRef {
    Due = 'Due',
    Complete = 'Complete',
    Rejected = 'Rejected',
    Deleted = 'Deleted'
}

export enum AdminStateReasonRef {
    Due = 'Due',
    PatientNotInEstablishment = 'Patient not in establishment',
    PatientFailedToAppear = 'Patient failed to appear',
    PatientRefused = 'Patient refused',
    MedicationNotAvailable = 'Medication not available',
    OtherPleaseRecordNotes = 'Other (please record notes)'
}

export interface IAdministration {
    UUID: string;
    AdminType: string;
    AdminTime: string[];
}

export interface IAdministrationEvent {
    UUID: string;
    Date: Date;
    State: IAdminState;
    Medication: string;
    AdminType: string; // See AdminTypeRef.Value
    AdminTime: string; // See AdminTimeRef.Value
}
  
export interface IAdminState {
    UUID: string;
    State: string; // See AdminStateRef
    EventTime: Date;
    Reason: string;  // See AdminStateReasonRef
    ReasonNote: string;
    User: IUser;
}

export interface IAdministrationRoundEvent {
    UUID: string;
    EventTime: Date;
    State: string; // See AdministrationRoundStateRef;
}
  
export interface IAdministrationRound {
    UUID: string;
    Name: string;
    Establishment: string;
    Hall: string;
    Users: IUser[];
    AdminTime: AdminTimesRef; // This includes the Ad hoc value
    AdministrationEvents: IAdministrationEvent[];
    AdministrationRoundEvents: IAdministrationRoundEvent[];
}
