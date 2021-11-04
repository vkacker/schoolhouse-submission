import React, { FC, useEffect, useState } from 'react';

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
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { renderColor } from '../../utils/renderColor';

// Interface
interface CandidatePairModalProps {
	pairsModal: boolean;
	setPairsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

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
	const [pairs, setPairs] = useState<Pair[]>([]);

	useEffect(() => {
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

		fetchData();
	}, []);
	console.log(pairs);

	return (
		<Modal
			isOpen={pairsModal}
			onClose={() => setPairsModal(!pairsModal)}
			isCentered
			size='xl'
		>
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
							{pairs == undefined ? (
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
										{pairs.map((pair: any, index: number) => {
											const topicColor = renderColor(pair.topic);
											const validColor = pair.validPair ? 'green' : 'red';
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
