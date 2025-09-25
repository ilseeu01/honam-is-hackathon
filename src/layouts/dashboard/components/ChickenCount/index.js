import React from 'react';
import { Card } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import linearGradient from 'assets/theme/functions/linearGradient';

function ChickenCount() {
	const { gradients } = colors;

	return (
		<Card
			sx={{
				height: '250px',
				background: '#ffffff',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '20px',
				boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
				borderRadius: '12px'
			}}>
			<VuiBox display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
				<VuiTypography 
					variant='button' 
					fontWeight='regular' 
					mb='10px'
					sx={{ color: '#666' }}>
					총 마리수
				</VuiTypography>
				
				<VuiTypography 
					variant='h6' 
					fontWeight='medium' 
					mb='20px'
					sx={{ color: '#333' }}>
					남은 D - 15
				</VuiTypography>
				
				<VuiBox
					display='flex'
					alignItems='center'
					justifyContent='center'
					sx={{
						width: '80px',
						height: '80px',
						backgroundColor: '#f8f8f8',
						borderRadius: '50%',
						mb: '20px'
					}}>
					<VuiTypography 
						variant='h4' 
						fontWeight='bold'
						sx={{ color: '#333' }}>
						🐓
					</VuiTypography>
				</VuiBox>
				
				<VuiTypography 
					variant='h3' 
					fontWeight='bold'
					sx={{
						fontSize: '2.5rem',
						color: '#FF6B35'
					}}>
					2500 마리
				</VuiTypography>
			</VuiBox>
		</Card>
	);
}

export default ChickenCount;