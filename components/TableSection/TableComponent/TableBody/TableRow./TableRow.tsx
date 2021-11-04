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
import { renderColor } from '../../../../../utils/renderColor';

const TableRow = ({ subID, topic, sessionLink, email }) => {
	const badgeColor = renderColor(topic);
	return (
		<Tr>
			<Td>{subID}</Td>
			<Td>
				<Badge p='2' rounded='md' fontSize='0.8rem' colorScheme={badgeColor}>
					<Text>{topic}</Text>
				</Badge>
			</Td>
			<Td>
				<Link color='blue.300' isExternal>
					{sessionLink} <ExternalLinkIcon mx='2px' />
				</Link>
			</Td>
			<Td>
				<Link color='blue.300' isExternal>
					{email} <ExternalLinkIcon mx='2px' />
				</Link>
			</Td>
		</Tr>
	);
};

export default TableRow;
