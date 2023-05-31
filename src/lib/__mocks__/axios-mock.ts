// eslint-disable-next-line max-len
import { University } from '../../features/universities/types/university.type.ts';

export const mockUniversitiesListResponse: University[] = [
	{
		id: '',
		country: 'Turkey',
		alpha_two_code: 'TR',
		name: 'Middle East Technical University',
		'state-province': null,
		domains: ['metu.edu.tr'],
		web_pages: ['http://www.metu.edu.tr/'],
	},
	{
		id: '',
		country: 'United States',
		alpha_two_code: 'US',
		name: 'Harvard',
		'state-province': 'Florida',
		domains: ['harvard.edu'],
		web_pages: ['http://www.harvard.edu/', 'http://itatti.harvard.edu/'],
	},
];
