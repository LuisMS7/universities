import client from '../axios-instance.ts';
import MockAdapter from 'axios-mock-adapter';
import { API_ENDPOINTS } from '../api-constants';
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
		'state-province': null,
		domains: ['harvard.edu'],
		web_pages: ['http://www.harvard.edu/', 'http://itatti.harvard.edu/'],
	},
];

const mockClient = new MockAdapter(client);

export const mockGetUniversitiesNetworkResponse = () => {
	mockClient
		.onGet(API_ENDPOINTS.FETCH_UNIVERSITIES)
		.reply(200, mockUniversitiesListResponse);
};

export const mockGetUniversitiesNetworkBadResponse = () => {
	mockClient.onGet(API_ENDPOINTS.FETCH_UNIVERSITIES).reply(400);
};

export const resetMockClient = () => {
	mockClient.reset();
};
