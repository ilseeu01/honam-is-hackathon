import React from 'react';
import { Card, Divider } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import linearGradient from 'assets/theme/functions/linearGradient';

function DeadCount() {
	const { gradients } = colors;

	return (
		<Card
			sx={{
				height: '300px',
				background: '#ffffff',
				display: 'flex',
				flexDirection: 'column',
				padding: '32px',
				boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
				borderRadius: '12px'
			}}>
			<VuiBox display='flex' flexDirection='column' height='100%'>
				<VuiBox mb='20px'>
					<VuiTypography 
						variant='h5' 
						fontWeight='bold' 
						mb='10px'
						sx={{ color: '#333' }}>
						누적 폐사 수
					</VuiTypography>
					<VuiTypography 
						variant='button' 
						fontWeight='regular'
						sx={{ color: '#999' }}>
						2025. 08. 14. 13:00 기준
					</VuiTypography>
				</VuiBox>
				
				<Divider 
					sx={{ 
						backgroundColor: '#E0E0E0',
						mb: '30px',
						width: '100%'
					}} 
				/>
				
				<VuiBox 
					display='flex' 
					alignItems='center' 
					justifyContent='center'
					sx={{ flexGrow: 1 }}>
					<VuiTypography 
						variant='h2' 
						fontWeight='bold'
						sx={{
							fontSize: '3rem',
							color: '#FF6B35'
						}}>
						15마리
					</VuiTypography>
				</VuiBox>
			</VuiBox>
		</Card>
	);
}

export default DeadCount;