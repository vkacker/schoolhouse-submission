import React from 'react';
import { Flex, Heading, Text, Center, Button, Spacer } from '@chakra-ui/react';
import { AddIcon, RepeatIcon } from '@chakra-ui/icons';
const SectionHeader = () => {
	return (
		<Flex
			direction='column'
			width='100%'
			minH='180px'
			bg='#E9F7FF'
			px={10}
			justify='center'
			space
		>
			<Flex py={3}>
				<Heading>Candidate Submissions</Heading>
			</Flex>
			<Flex py={3} maxW='30%'>
				<Button colorScheme='blue' leftIcon={<AddIcon />}>
					Add New Submission
				</Button>
				<Spacer />
				<Button colorScheme='green' leftIcon={<RepeatIcon />}>
					Create Candidate Pairs
				</Button>
			</Flex>
		</Flex>
	);
};

export default SectionHeader;
