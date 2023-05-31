/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import './UniversitiesTable.css';
import useUniversitiesStore from '../store/universities-slice.ts';
import UniversityModal from './UniversityModal.tsx';
import { University } from '../types/university.type.ts';

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
	const [open, setOpen] = useState(false);
	const [selectedUniversity, setSelectedUniversity] =
		useState<University | null>(null);
	const universities = useUniversitiesStore((state) => state.universities);
	const fetchUniversities = useUniversitiesStore(
		(state) => state.fetchUniversities,
	);

	useEffect(() => {
		fetchUniversities();
	}, []);
	const handleRowClick = (params: GridRowParams) => {
		setSelectedUniversity(params.row);
		setOpen(true);
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
			<UniversityModal
				open={open}
				handleClose={() => setOpen(false)}
				university={selectedUniversity!}
			/>
		</div>
	);
};

export default UniversitiesTable;
