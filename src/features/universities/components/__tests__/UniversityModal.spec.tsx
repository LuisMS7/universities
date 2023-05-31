import { render } from '@testing-library/react';
import UniversityModal from '../UniversityModal.tsx';
import { University } from '../../types/university.type.ts';
// eslint-disable-next-line max-len
import { mockUniversitiesListResponse } from '../../../../lib/__mocks__/axios-mock.ts';

describe('UniversityModal', () => {
	describe('renders', () => {
		const mockHandleClose = jest.fn();

		it('should render correctly without state province', async () => {
			const mockUniversity: University = mockUniversitiesListResponse[0];
			// eslint-disable-next-line max-len
			const mockLocation = `${mockUniversity.country} | ${mockUniversity.alpha_two_code}`;
			const { getByText } = render(
				<UniversityModal
					university={mockUniversity}
					open={true}
					handleClose={mockHandleClose}
				/>,
			);
			const universityName = getByText(mockUniversity.name);
			const location = getByText(mockLocation);
			const domains = getByText(mockUniversity.domains[0]);
			const websites = getByText(mockUniversity.web_pages[0]);
			expect(universityName).toBeDefined();
			expect(location).toBeDefined();
			expect(domains).toBeDefined();
			expect(websites).toBeDefined();
		});

		it('should render correctly with state province', () => {
			const mockUniversity: University = mockUniversitiesListResponse[1];
			// eslint-disable-next-line max-len
			const mockLocation = `${mockUniversity['state-province']}, ${mockUniversity.country} | ${mockUniversity.alpha_two_code}`;
			const { getByText } = render(
				<UniversityModal
					university={mockUniversity}
					open={true}
					handleClose={mockHandleClose}
				/>,
			);
			const universityName = getByText(mockUniversity.name);
			const location = getByText(mockLocation);
			const domains = getByText(mockUniversity.domains[0]);
			const websites = getByText(mockUniversity.web_pages[0]);
			expect(universityName).toBeDefined();
			expect(location).toBeDefined();
			expect(domains).toBeDefined();
			expect(websites).toBeDefined();
		});
	});
});
