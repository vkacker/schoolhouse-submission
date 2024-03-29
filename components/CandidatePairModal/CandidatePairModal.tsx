// React Imports
import React, { FC, useEffect, useState } from 'react';

// UI Imports
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Center,
	Box,
	CircularProgress,
} from '@chakra-ui/react';
import TableComponent from './TableComponent/TableComponent';

// GraphQL Imports
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Interface for Props
interface CandidatePairModalProps {
	pairsModal: boolean;
	setPairsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// Type for Pair
type Pair = {
	reviewer: string;
	reviewee: string;
	topic: string;
	validPair: boolean;
};

const CandidatePairModal: FC<CandidatePairModalProps> = ({
	pairsModal,
	setPairsModal,
}) => {
	/**
	 * State and Hook Declarations
	 */
	// State for Pairs
	const [pairs, setPairs] = useState<Pair[]>([]);

	// Obtaining candidate pairs on component load to display them
	useEffect(() => {
		// Function to allow it to work in useEffect
		const fetchData = async () => {
			const client = new ApolloClient({
				uri: 'https://polar-ravine-66624.herokuapp.com/api/graphql',
				// uri: 'http://localhost:3000/api/graphql',
				cache: new InMemoryCache(),
			});
			const { data } = await client.query({
				query: gql`
					query {
						getCandidatePairs {
							reviewer
							reviewee
							topic
							validPair
						}
					}
				`,
			});
			setPairs(data.getCandidatePairs);
		};

		// Calling said function
		fetchData();
	}, []);

	return (
		<Modal
			isOpen={pairsModal}
			onClose={() => setPairsModal(!pairsModal)}
			isCentered
			size='xl'
		>
			<ModalOverlay />
			<ModalContent maxW='800px' maxH='800px'>
				<ModalHeader fontSize='2.2rem'>
					<Center>Candidate Pairs</Center>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Center>
						<Box
							w='100%'
							borderWidth='3px'
							maxH='500px'
							borderRadius='lg'
							mt='25px'
							overflowY='scroll'
						>
							{pairs == undefined ? (
								<CircularProgress isIndeterminate color='blue.300' />
							) : (
								<TableComponent pairs={pairs} />
							)}
						</Box>
					</Center>
				</ModalBody>

				<ModalFooter></ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CandidatePairModal;
