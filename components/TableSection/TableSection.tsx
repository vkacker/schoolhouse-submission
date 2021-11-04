// React Imports
import React, { FC } from 'react';

// UI Imports
import { Center } from '@chakra-ui/react';
import TableComponent from './TableComponent/TableComponent';

const TableSection: FC = () => {
	return (
		<Center width='73%'>
			<TableComponent />
		</Center>
	);
};

export default TableSection;
