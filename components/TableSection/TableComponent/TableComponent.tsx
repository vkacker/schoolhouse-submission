// React Imports
import React, { FC } from 'react';

// UI Imports
import { Box, Table } from '@chakra-ui/react';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';

const TableComponent: FC = () => {
	return (
		<Box
			width='100%'
			maxH='480px'
			borderWidth='3px'
			borderRadius='lg'
			mt='25px'
			overflowY='scroll'
		>
			<Table variant='simple' size='md'>
				<TableHeader />
				<TableBody />
			</Table>
		</Box>
	);
};

export default TableComponent;
