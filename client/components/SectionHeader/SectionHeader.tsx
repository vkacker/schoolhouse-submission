import React from 'react';
import { Flex, Heading, Text, Center, Button } from '@chakra-ui/react';

const SectionHeader = () => {
	return (
		<Flex direction='column' width='100%' minH='150px' bg='#E9F7FF' px={4}>
			<Flex>
				<Heading>Candidate Submissions</Heading>
			</Flex>
			<Flex>
				<Button bg='#2A84EE' color='white'>
					Add New Submission
				</Button>
				<Button bg='#40C846' color='white'>
					Create Candidate Pairs
				</Button>
			</Flex>
		</Flex>
	);
};

export default SectionHeader;
