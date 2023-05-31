/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './UniversitiesTable.css';
import useUniversitiesStore from '../store/universities-slice.ts';

const columns: GridColDef[] = [
	{ field: 'name', headerName: 'Name', flex: 1 },
	{ field: 'country', headerName: 'Country', flex: 1 },
	{
		field: 'web_pages',
		headerName: 'Web Pages',
		flex: 1,
		renderCell: (params) => (
			<div>
				{params.value.map((item: string, index: string) => (
					<span key={index}>
						{item}
						<br />
					</span>
				))}
			</div>
		),
	},
];

const UniversitiesTable = () => {
	const universities = useUniversitiesStore((state) => state.universities);
	const fetchUniversities = useUniversitiesStore(
		(state) => state.fetchUniversities,
	);

	useEffect(() => {
		fetchUniversities();
	}, []);
	const handleRowClick = () => {
		// Handle row click event
		console.log('Row clicked:', 'h');
	};

	return (
		<div style={{ width: '100%' }}>
			<DataGrid
				rows={universities}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10, 20]}
				onRowClick={handleRowClick}
				classes={{ row: 'university-row' }}
			/>
		</div>
	);
};

export default UniversitiesTable;
