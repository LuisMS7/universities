import './App.css';
import { Typography } from '@mui/material';
// eslint-disable-next-line max-len
import UniversitiesTable from './features/universities/components/UniversitiesTable.tsx';

function App() {
	return (
		<>
			<Typography variant="h1" component="h2">
				Universidades
			</Typography>
			<UniversitiesTable />
		</>
	);
}

export default App;
