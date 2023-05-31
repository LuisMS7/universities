import { Box, Modal, Typography } from '@mui/material';
import { University } from '../types/university.type.ts';
import { useCallback } from 'react';

type UniversityModalProps = {
	open: boolean;
	handleClose: () => void;
	university?: University;
};
const UniversityModal = ({
	open,
	handleClose,
	university,
}: UniversityModalProps) => {
	const getLocation = useCallback(() => {
		const city = university?.['state-province']
			? `${university?.['state-province']}, `
			: '';
		return `${city}${university?.country} | ${university?.alpha_two_code}`;
	}, [university]);

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={modal}>
				<Typography variant="h6" component="h2">
					{university?.name}
				</Typography>
				<Typography sx={{ mt: 2 }}>
					<b>Location: </b>
					{getLocation()}
				</Typography>
				<Typography sx={{ mt: 2 }}>
					<b>Domains: </b>
					{university?.domains.join(', ')}
				</Typography>
				<Box sx={websitesContainer}>
					<b>Websites: </b>
					<Box sx={urlContainer}>
						{university?.web_pages.map((url) => (
							<a href={url} key={url}>
								{url}
							</a>
						))}
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};

const modal = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const websitesContainer = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	marginTop: 2,
	fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
};

const urlContainer = {
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 1,
};

export default UniversityModal;
