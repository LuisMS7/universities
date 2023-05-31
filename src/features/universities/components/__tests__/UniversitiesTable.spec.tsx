import { render } from '@testing-library/react';
import UniversitiesTable from '../UniversitiesTable.tsx';
// eslint-disable-next-line max-len
import { mockGetUniversitiesNetworkResponse } from '../../../../lib/__mocks__/axios-mock.ts';

describe('UniversitiesTable', () => {
	describe('renders', () => {
		beforeEach(() => {
			mockGetUniversitiesNetworkResponse();
		});

		it('should render correctly', () => {
			const { container } = render(<UniversitiesTable />);
			expect(container).toMatchSnapshot();
		});
	});
});
