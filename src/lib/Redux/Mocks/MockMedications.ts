import { AdminTimeRef, AdminTypeRef } from "../Administration/types";
import { IMedication } from "../Medication/types";
import { DaysOfWeek, Frequency } from "../Supply/types";

export const mockMedications: IMedication[] = [{
	UUID: "1",
	Dose: "1 tablets 1 time a day",
	Drug: "Amoxicillin",
	StartDate: "2024-06-25T14:59:22.105Z",
	EndDate: "2024-06-25T14:59:22.105Z",
	Route: "Oral",
	InPlusPack: false,
	Quantity: 30,
	RepeatUUID: "",
	Supply: {
		UUID: "1",
		Cadence: {
			DaysOfWeek: [],
			EndTime: "2024-06-25T14:59:22.105Z",
			Exclusions: [],
			UUID: "",
			Frequency: Frequency.weekly,
			Interval: 1,
			MonthsOfYear: [],
			StartTime: "2024-06-25T14:59:22.105Z"
		}
	},
	Administration: {
		AdminTime: [AdminTimeRef.AM],
		AdminType: AdminTypeRef.Supervised,
		UUID: "1",
	}
},{
	UUID: "2",
	Dose: "2 capsules once a week",
	Drug: "Askit",
	StartDate: "2024-06-25T14:59:22.105Z",
	EndDate: "2024-06-25T14:59:22.105Z",
	Route: "IV",
	InPlusPack: true,
	Quantity: 28,
	RepeatUUID: "",
	Supply: {
		UUID: "1",
		Cadence: {
			DaysOfWeek: [DaysOfWeek.Monday, DaysOfWeek.Tuesday],
			EndTime: "2024-06-25T14:59:22.105Z",
			Exclusions: [],
			UUID: "",
			Frequency: Frequency.daily,
			Interval: 1,
			MonthsOfYear: [],
			StartTime: "2024-06-25T14:59:22.105Z"
		}
	},
	Administration: {
		AdminTime: [AdminTimeRef.AM],
		AdminType: AdminTypeRef.InPossession,
		UUID: "1",
	}
},{
	UUID: "3",
	Dose: "2 tabs 4 times a day",
	Drug: "Ibuprofen",
	StartDate: "2024-06-25T14:59:22.105Z",
	EndDate: "2024-06-25T14:59:22.105Z",
	Route: "Aural",
	InPlusPack: false,
	Quantity: 14,
	RepeatUUID: "",
	Supply: {
		UUID: "1",
		Cadence: {
			DaysOfWeek: [],
			EndTime: "2024-06-25T14:59:22.105Z",
			Exclusions: [],
			UUID: "",
			Frequency: Frequency.daily,
			Interval: 2,
			MonthsOfYear: [],
			StartTime: "2024-06-25T14:59:22.105Z"
		}
	},
	Administration: {
		AdminTime: [AdminTimeRef.AM],
		AdminType: AdminTypeRef.InPossession,
		UUID: "1",
	}
}]