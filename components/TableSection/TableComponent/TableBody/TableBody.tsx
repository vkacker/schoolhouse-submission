// React Imports
import React, { FC, useContext, useState } from 'react';

// UI Imports
import { Tbody } from '@chakra-ui/react';
import TableRow from './TableRow/TableRow';

// Context Imports
import { SubmissionContext } from '../../../../context/context';

// Interface for Submissions
type Submission = {
	subID: string;
	topic: string;
	sessionLink: string;
	email: string;
};

const TableBody: FC = () => {
	// Obtaining Data from context
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
