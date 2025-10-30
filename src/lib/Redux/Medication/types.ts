import { IAdministration } from "../Administration/types";
import { ISupply } from "../Supply/types";
import { IUser } from "../User/types";

export enum MedicationStateEventStateRef {
    New                     = 'New',
    Query                   = 'Query',
    Started                 = 'Started',
    RecommendDiscontinue    = 'RecommendDiscontinue',
    Discontinued            = 'Discontinued',
    Review                  = 'Review',
    QueryRejected           = 'QueryRejected',
    QueryUpdated            = 'QueryUpdated',
}

export interface ITherapy {
    Quantity: number;
    RepeatUUID: string;
}

export interface IMedication extends ITherapy {
    UUID: string;
    Drug: string;
    Dose: string;
    StartDate: string;
    EndDate: string;
    Route: string;
    InPlusPack: boolean;
    Supply: ISupply;
    Administration: IAdministration;
    DailyQuantity?: number;
    DailyFrequency?: number;
}

export interface IPGDThirdParty extends IMedication {
    UUID: string;
    AdminReason: string;
    Furtherinformation: string;
}

export interface IMedicationStateEvent {
    UUID: string;
    State: string; // See MedicationStateEventStateRef
    Reason: string;
    EventTime: string;
    User: IUser;
    MedicationUUID: string;
}

export interface IPDD_ThirdParty {
    UUID: string;
    Reason: string;
    FurtherInformation: string;
}