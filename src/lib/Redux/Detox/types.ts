export interface IDetoxProgramEvent {
    UUID: string;
    DetoxProgram: IDetoxProgramRef;
    Medications: string[];
    StartLevel: string;
    StartDate: string;
    EndDate: string;
}

export interface IDetoxProgramRef {
    UUID: string;
    Name: [IMedicationDefinition][]
    Tags: string[];
}

export interface IMedicationDefinition {
    UUID: string;
    Drug: string; //This will be a drug object
    DrugClass: string;
    Dose: string;
    Frequency: string;
    Preparation: string
    Route: string;
    AdminType: string; // See AdminTypeRef;
}