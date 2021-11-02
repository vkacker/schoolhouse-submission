import React from 'react';
import { Flex, Heading, Text, Button, Spacer } from '@chakra-ui/react';
import { AddIcon, RepeatIcon } from '@chakra-ui/icons';
const SectionHeader = ({
	addModal,
	setAddModal,
	pairsModal,
	setPairsModal,
}) => {
	return (
		<Flex
			direction='column'
			width='100%'
			minH='100px'
			bg='#E9F7FF'
			px={10}
			justify='center'
			space
		>
			<Flex>
				<Heading>Candidate Submissions</Heading>
			</Flex>
			<Flex maxW='30%'>
				<Button
					colorScheme='blue'
					leftIcon={<AddIcon />}
					onClick={() => setAddModal(!addModal)}
				>
					Add New Submission
				</Button>
				<Spacer />
				<Button
					colorScheme='green'
					leftIcon={<RepeatIcon />}
					onClick={() => setPairsModal(!pairsModal)}
				>
					Create Candidate Pairs
				</Button>
			</Flex>
		</Flex>
	);
};

export default SectionHeader;
