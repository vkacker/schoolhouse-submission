import React from 'react';

import { Box, Table } from '@chakra-ui/react';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';

const TableComponent = () => {
	return (
		<Box
			w='100%'
			borderWidth='3px'
			maxH='500px'
			borderRadius='lg'
			mt='25px'
			overflowY='scroll'
		>
			<Table variant='simple' size='sm'>
				<TableHeader />
				<TableBody />
			</Table>
		</Box>
	);
};

export default TableComponent;
