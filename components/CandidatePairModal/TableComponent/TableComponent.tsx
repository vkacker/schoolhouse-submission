import React, { FC } from 'react';

import { Table, Thead, Tbody, Tr, Th, Td, Badge } from '@chakra-ui/react';
import { renderColor } from '../../../utils/renderColor';

type Pair = {
	reviewer: string;
	reviewee: string;
	topic: string;
	validPair: boolean;
};

interface TableComponentProps {
	pairs: Pair[];
}

const TableComponent: FC<TableComponentProps> = ({ pairs }) => {
	return (
		<Table variant='simple' size='sm'>
			<Thead>
				<Tr>
					<Th>Reviewer</Th>
					<Th>Reviewee</Th>
					<Th>Topic</Th>
					<Th>Valid Pair</Th>
				</Tr>
			</Thead>
			<Tbody>
				{pairs.map((pair: any, index: number) => {
					const topicColor: string = renderColor(pair.topic);
					const validColor: string = pair.validPair ? 'green' : 'red';
					return (
						<Tr key={index}>
							<Td>{pair.reviewer}</Td>
							<Td>{pair.reviewee}</Td>
							<Td>
								<Badge
									p='2'
									rounded='md'
									fontSize='0.8rem'
									colorScheme={topicColor}
								>
									{pair.topic}
								</Badge>
							</Td>
							<Td>
								<Badge
									p='2'
									rounded='md'
									fontSize='0.8rem'
									colorScheme={validColor}
								>
									{pair.validPair ? 'True' : 'False'}
								</Badge>
							</Td>
						</Tr>
					);
				})}
			</Tbody>
		</Table>
	);
};

export default TableComponent;
