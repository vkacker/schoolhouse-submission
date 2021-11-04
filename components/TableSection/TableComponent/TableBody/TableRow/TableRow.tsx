// React Imports
import React, { FC } from 'react';

// UI Imports
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

// Util Imports
import { renderColor } from '../../../../../utils/renderColor';

// Interface for Props
interface TableRowProps {
	subID: string;
	topic: string;
	sessionLink: string;
	email: string;
}

const TableRow: FC<TableRowProps> = ({ subID, topic, sessionLink, email }) => {
	// Obtaining badge color
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
				<Link color='blue.300' isExternal href={`https://${sessionLink}`}>
					{sessionLink} <ExternalLinkIcon mx='2px' />
				</Link>
			</Td>
			<Td>
				<Link color='blue.300' isExternal href={`mailto:${email}`}>
					{email} <ExternalLinkIcon mx='2px' />
				</Link>
			</Td>
		</Tr>
	);
};

export default TableRow;
