import { describe, expect, it } from '@jest/globals';
import { Parser } from './Utils/DoseParser/Parser';
import { Dose } from './Utils/DoseParser/Dose';

describe('PH Reducer', () => {
	it('returns the initial state when nothing is passed', () => {
		const parser = new Parser();
		//let dose: Dose = null as any;
		parser.parse( "2 tablets thrice a day" ).then( (dose: Dose) => {
			expect(dose.Quantity).toBe(2);
			expect(dose.Frequency).toBe(3);
		} );
		
	});
});
