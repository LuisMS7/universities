import { University } from '../types/university.type.ts';

export const transformUniversities = (universities: University[]) => {
	return universities.map((university) => ({
		...university,
		id: university.name,
	}));
};
