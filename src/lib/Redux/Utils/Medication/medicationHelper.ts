import { IMedication } from "../../Medication/types";
import { Dose } from "../DoseParser/Dose";
import { Parser } from "../DoseParser/Parser";

export const populateDailyFrequencyAndDailyQuantity = (
    medication : IMedication
) : void => {
    const parser = new Parser();
    const dose: Dose = parser.parse( medication.Dose );
    console.log( "Dose: " + dose );
    if( dose.Weekly || dose.Monthly || dose.Yearly ){
        medication.DailyFrequency = 1 / dose.Frequency; 
    }else{
        medication.DailyFrequency = dose.Frequency;
    }
    medication.DailyQuantity = dose.Quantity;
    checkNumDailyDosesMatchNumDailyAdminTimes( medication );
};

export const checkNumDailyDosesMatchNumDailyAdminTimes = (medication : IMedication) => {
    if( medication.DailyQuantity !== (medication.Administration.AdminTime?.length * ( medication.DailyQuantity as number ))){
        console.log("Daily admin events and prescribed frequency don't match")
    } 
};