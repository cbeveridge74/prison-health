import { IUser } from "../User/types";

export enum MedicationReviewEventStateRef {
    Due         = 'Due',
    Complete    = 'Complete'
}

export interface IMedicationReviewEvent {
    UUID: string;
    State: string; // See MedicationReviewEventStateRef
    User: IUser;
    EventTime: string;
    MedicationUUID: string;
}