import React, { useState } from 'react';
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
import TableRow from './TableRow./TableRow';

const TableBody = () => {
	// This data will be fetched from the database
	// This data needs to be typed when integrating with GraphQL
	const [data, setData] = useState([
		{
			subID: 'sub1',
			topic: 'Algebra 1',
			sessionLink: 'loom.com/a',
			email: 'a@gmail.com',
			badgeColor: 'blue',
		},
		{
			subID: 'sub2',
			topic: 'Algebra 1',
			sessionLink: 'loom.com/a',
			email: 'a@gmail.com',
			badgeColor: 'blue',
		},
		{
			subID: 'sub3',
			topic: 'Algebra 1',
			sessionLink: 'loom.com/a',
			email: 'a@gmail.com',
			badgeColor: 'blue',
		},
		{
			subID: 'sub4',
			topic: 'Calculus',
			sessionLink: 'loom.com/a',
			email: 'a@gmail.com',
			badgeColor: 'purple',
		},
	]);
	return (
		<Tbody>
			{data.map(({ subID, topic, sessionLink, email }) => {
				return (
					<TableRow
						subID={subID}
						topic={topic}
						sessionLink={sessionLink}
						email={email}
					/>
				);
			})}
		</Tbody>
	);
};

export default TableBody;
