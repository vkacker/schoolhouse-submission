import React, { FC } from 'react';
import {
	Flex,
	Heading,
	Text,
	Button,
	Spacer,
	Stack,
	Box,
	HStack,
	VStack,
	Container,
} from '@chakra-ui/react';
import { AddIcon, RepeatIcon } from '@chakra-ui/icons';

interface SectionHeaderProps {
	addModal: boolean;
	setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
	pairsModal: boolean;
	setPairsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SectionHeader: FC<SectionHeaderProps> = ({
	addModal,
	setAddModal,
	pairsModal,
	setPairsModal,
}) => {
	return (
		<Box direction='column' width='100%' minH='150px' bg='#f7fafc'>
			<Container minWidth='75%' py={3}>
				<Flex alignItems='center'>
					<Stack spacing='20px'>
						<Text fontSize='4xl' fontWeight='medium'>
							Candidate Submission
						</Text>
						<HStack spacing='25px'>
							<Button
								colorScheme='blue'
								leftIcon={<AddIcon />}
								onClick={() => setAddModal(!addModal)}
							>
								Add New Submission
							</Button>
							<Button
								colorScheme='green'
								leftIcon={<RepeatIcon />}
								onClick={() => setPairsModal(!pairsModal)}
							>
								Create Candidate Pairs
							</Button>
						</HStack>
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
};

export default SectionHeader;
