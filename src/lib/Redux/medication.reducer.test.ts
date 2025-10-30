import { describe, expect, it } from '@jest/globals';
import reducer, { initialState } from './medicationReducer';

import { MEDICATION_UPDATE, } from './types';
import { DaysOfWeek, Frequency } from './Supply/types';
import setupMocks from '../API/mockData';
import { fetchMedications } from '../API/medicationActions';
import { mockMedications } from './Mocks/MockMedications';
import { AdminTimeRef, AdminTypeRef } from './Administration/types';


describe('PH Reducer', () => {
	it('returns the initial state when nothing is passed', () => {
		//if (process.env.REACT_APP_USE_MOCKS === 'true') {
		setupMocks();
		fetchMedications();
		//}
		const phReducer = reducer(undefined, {});
		expect(phReducer).toEqual(initialState);
	});
	it('handles updating medications', () => {
		
		// Updating medications
		const payload = [{
			UUID: "1",
			Dose: "1 a week",
			Drug: "Amoxicillin",
			StartDate: "2024-06-25T14:59:22.105Z",
			EndDate: "2024-06-25T14:59:22.105Z",
			Route: "IV",
			InPlusPack: false,
			Quantity: 30,
			RepeatUUID: "",
			Supply: {
				UUID: "1",
				Cadence: {
					DaysOfWeek: [DaysOfWeek.Monday, DaysOfWeek.Wednesday],
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
			UUID: "2",
			Dose: "1 a day",
			Drug: "Askit",
			StartDate: "2024-06-25T14:59:22.105Z",
			EndDate: "2024-06-25T14:59:22.105Z",
			Route: "IV",
			InPlusPack: true,
			Quantity: 14,
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
		}];

		const phReducer = reducer(mockMedications, { type: MEDICATION_UPDATE, payload });
		expect(phReducer).toEqual(
				[{
				UUID: "1",
				Dose: "1 a week",
				Drug: "Amoxicillin",
				StartDate: "2024-06-25T14:59:22.105Z",
				EndDate: "2024-06-25T14:59:22.105Z",
				Route: "IV",
				InPlusPack: false,
				Quantity: 30,
				RepeatUUID: "",
				Supply: {
					UUID: "1",
					Cadence: {
						DaysOfWeek: [DaysOfWeek.Monday, DaysOfWeek.Wednesday],
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
				UUID: "2",
				Dose: "1 a day",
				Drug: "Askit",
				StartDate: "2024-06-25T14:59:22.105Z",
				EndDate: "2024-06-25T14:59:22.105Z",
				Route: "IV",
				InPlusPack: true,
				Quantity: 14,
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
			}]);
	});
});
