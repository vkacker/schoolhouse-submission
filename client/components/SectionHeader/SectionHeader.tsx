import React from 'react';
import { Flex, Heading, Text, Center, Button } from '@chakra-ui/react';
import { AddIcon, RepeatIcon } from '@chakra-ui/icons';
const SectionHeader = () => {
	return (
		<Flex direction='column' width='100%' minH='150px' bg='#E9F7FF' px={4}>
			<Flex>
				<Heading>Candidate Submissions</Heading>
			</Flex>
			<Flex>
				<Button colorScheme='blue' leftIcon={<AddIcon />}>
					Add New Submission
				</Button>
				<Button colorScheme='green' leftIcon={<RepeatIcon />}>
					Create Candidate Pairs
				</Button>
			</Flex>
		</Flex>
	);
};

export default SectionHeader;
