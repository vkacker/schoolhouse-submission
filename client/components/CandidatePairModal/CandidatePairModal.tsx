import React, { useEffect, useState } from 'react';

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Center,
	Box,
	CircularProgress,
} from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const CandidatePairModal = ({ pairsModal, setPairsModal }) => {
	const [pairs, setPairs] = useState(null);

	useEffect(async () => {
		const client = new ApolloClient({
			uri: 'http://localhost:3001/graphql',
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
	}, []);
	console.log(pairs);

	return (
		<Modal isOpen={pairsModal} onClose={setPairsModal} isCentered size='xl'>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Candidate Pairs</ModalHeader>
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
							{pairs == null ? (
								<CircularProgress isIndeterminate color='blue.300' />
							) : (
								<Table variant='simple'>
									<Thead>
										<Tr>
											<Th>Reviewer</Th>
											<Th>Reviewee</Th>
											<Th>Topic</Th>
											<Th>Valid Pair</Th>
										</Tr>
									</Thead>
									<Tbody>
										{pairs.map((pair) => {
											return (
												<Tr>
													<Td>{pair.reviewer}</Td>
													<Td>{pair.reviewee}</Td>
													<Td>{pair.topic}</Td>
													<Td>{pair.validPair ? 'True' : 'False'}</Td>
												</Tr>
											);
										})}
									</Tbody>
								</Table>
							)}
						</Box>
					</Center>
				</ModalBody>

				<ModalFooter>
					<Button>Confirm</Button>
					<Button>Deny</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CandidatePairModal;
