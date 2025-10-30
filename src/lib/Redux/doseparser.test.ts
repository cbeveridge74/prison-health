import { describe, expect, it } from '@jest/globals';
import { Parser } from './Utils/DoseParser/Parser';
import { Dose } from './Utils/DoseParser/Dose';

describe('PH Reducer', () => {
	it('returns the initial state when nothing is passed', () => {
		const parser = new Parser();
		let dose: Dose = parser.parse( "2 tablets twice a day" );
		expect(dose.Quantity).toBe(2);
		expect(dose.Frequency).toBe(2);
	});
});
