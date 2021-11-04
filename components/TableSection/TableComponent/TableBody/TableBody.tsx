import React, { FC, useContext, useState } from 'react';
import { Tbody } from '@chakra-ui/react';
import TableRow from './TableRow/TableRow';
import { SubmissionContext } from '../../../../context/context';

// Interface for Submissions
type Submission = {
	subID: string;
	topic: string;
	sessionLink: string;
	email: string;
};

const TableBody: FC = () => {
	// This data will be fetched from the database
	// This data needs to be typed when integrating with GraphQL
	const { submissions } = useContext<any>(SubmissionContext);

	return (
		<Tbody>
			{submissions.map(({ subID, topic, sessionLink, email }: Submission) => {
				return (
					<TableRow
						key={subID}
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
