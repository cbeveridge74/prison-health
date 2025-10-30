// ###  ENUMS  ###
export enum Title {
    Mr = 'Mr',
    Mrs = 'Mrs',
    Ms = 'Ms',
    Dr = 'Dr',
    Mx = 'Mx'
}

export interface IUser {
    title: Title;
    forename: string;
    surname: string;
}