import React from 'react';

import {
	Center,
	Box,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Badge,
	Text,
	Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import TableComponent from './TableComponent/TableComponent';

const TableSection = () => {
	return (
		<Center width='70%'>
			<TableComponent />
		</Center>
	);
};

export default TableSection;
