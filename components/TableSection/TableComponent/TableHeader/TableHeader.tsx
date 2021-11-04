import React from 'react';

import { Thead, Tr, Th, Text } from '@chakra-ui/react';

const TableHeader = () => {
	return (
		<Thead>
			<Tr>
				<Th>
					<Text fontSize='md' fontWeight='bold'>
						Submission ID
					</Text>
				</Th>
				<Th>
					<Text fontSize='md' fontWeight='bold'>
						Topic
					</Text>
				</Th>
				<Th>
					<Text fontSize='md' fontWeight='bold'>
						Session Link
					</Text>
				</Th>
				<Th>
					<Text fontSize='md' fontWeight='bold'>
						Candidate E-Mail
					</Text>
				</Th>
			</Tr>
		</Thead>
	);
};

export default TableHeader;
