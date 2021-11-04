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
	Badge,
} from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { renderColor } from '../../utils/renderColor';

const CandidatePairModal = ({ pairsModal, setPairsModal }) => {
	const [pairs, setPairs] = useState(null);

	useEffect(async () => {
		const client = new ApolloClient({
			uri: 'http://localhost:3000/api/graphql',
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
			<ModalContent maxW='750px'>
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
										{pairs.map((pair) => {
											const topicColor = renderColor(pair.topic);
											const validColor = pair.validPair ? 'green' : 'red';
											return (
												<Tr>
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
