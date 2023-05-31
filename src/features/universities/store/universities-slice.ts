import { create } from 'zustand';
// eslint-disable-next-line max-len
import { University } from '../types/university.type.ts';
import { transformUniversities } from '../utils/transform-universities.ts';
import axiosInstance from '../../../lib/axios-instance.ts';
import { API_ENDPOINTS } from '../../../lib/api-constants.ts';

const fetchUniversities = (country = 'United States') => {
	const params = {
		country: country,
	};
	return axiosInstance.get<University[]>(API_ENDPOINTS.FETCH_UNIVERSITIES, {
		params: params,
	});
};

type State = {
	universities: University[];
	fetchUniversities: () => void;
};

const useUniversitiesStore = create<State>((set) => ({
	universities: [],
	fetchUniversities: async () => {
		const universitiesResponse = await fetchUniversities();
		const universitiesTransformed = transformUniversities(
			universitiesResponse.data,
		);
		set({ universities: universitiesTransformed });
	},
}));

export default useUniversitiesStore;
