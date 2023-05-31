import { render } from '@testing-library/react';
import UniversitiesTable from '../UniversitiesTable.tsx';
// eslint-disable-next-line max-len
import { mockUniversitiesListResponse } from '../../../../lib/__mocks__/axios-mock.ts';
import useUniversitiesStore from '../../store/universities-slice.ts';

describe('UniversitiesTable', () => {
	beforeEach(() => {
		useUniversitiesStore.setState({
			universities: mockUniversitiesListResponse,
			fetchUniversities: jest.fn(),
		});
	});

	describe('renders', () => {
		it('should render correctly', () => {
			const { container } = render(<UniversitiesTable />);
			expect(container).toMatchSnapshot();
		});
	});
});
