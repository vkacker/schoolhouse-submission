import React, { useContext, useState } from 'react';
import { Tbody } from '@chakra-ui/react';
import TableRow from './TableRow./TableRow';
import { SubmissionContext } from '../../../../context/context';

const TableBody = () => {
	// This data will be fetched from the database
	// This data needs to be typed when integrating with GraphQL
	const { submissions } = useContext(SubmissionContext);

	return (
		<Tbody>
			{submissions.map(({ subID, topic, sessionLink, email }) => {
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
