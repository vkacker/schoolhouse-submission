import React, { useState, useContext, useEffect } from 'react';

import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Center,
	Box,
	Grid,
	Text,
	Input,
	Select,
	Spacer,
	useToast,
} from '@chakra-ui/react';

import { SubmissionContext } from '../../context/context';
import { topicList } from '../../utils/topicList';

import { gql, useMutation } from '@apollo/client';
import { NextPage } from 'next';

const ADD_SUBMISSION = gql`
	mutation AddSubmissionMutation(
		$subID: String!
		$topic: String!
		$sessionLink: String!
		$email: String!
	) {
		addSubmission(
			subID: $subID
			topic: $topic
			sessionLink: $sessionLink
			email: $email
		) {
			subID
			topic
			sessionLink
			email
		}
	}
`;

// Interface
interface AddSubmissionModalProps {
	addModal: boolean;
	setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// Interface for Submissions
interface Submission {
	subID: string;
	topic: string;
	sessionLink: string | number | readonly string[] | undefined;
	email: string | number | readonly string[] | undefined;
}

// Interface

const AddSubmissionModal: NextPage<AddSubmissionModalProps> = ({
	addModal,
	setAddModal,
}) => {
	const { submissions, setSubmissions } = useContext<any>(SubmissionContext);

	const [newSubmission, setNewSubmission] = useState<Submission>({
		subID: `sub${submissions.length + 1}`,
		topic: '',
		sessionLink: undefined,
		email: undefined,
	});

	const toast = useToast();

	const [addSubmission] = useMutation(ADD_SUBMISSION, {
		variables: {
			subID: `sub${submissions.length + 1}`,
			topic: newSubmission.topic,
			sessionLink: newSubmission.sessionLink,
			email: newSubmission.email,
		},
		onCompleted({ addSubmission }) {
			const submissionObject = {
				subID: addSubmission.subID,
				topic: addSubmission.topic,
				sessionLink: addSubmission.sessionLink,
				email: addSubmission.email,
			};

			setSubmissions([...submissions, submissionObject]);

			setNewSubmission;

			setAddModal(!addModal);
		},
		onError(error) {
			toast({
				title: 'Error',
				description: 'Please complete all fields',
				status: 'error',
				duration: 2500,
				isClosable: true,
			});
		},
	});

	const onChange = (e: any) => {
		setNewSubmission({ ...newSubmission, [e.target.id]: e.target.value });
	};

	const addSubmissionHandler = (e: any) => {
		e.preventDefault();

		if (newSubmission.topic === '') {
			toast({
				title: 'Error',
				description: 'Please complete all fields',
				status: 'error',
				duration: 2500,
				isClosable: true,
			});
		} else {
			addSubmission();
		}
	};

	return (
		<Modal isOpen={addModal} onClose={() => setAddModal(!addModal)} isCentered>
			<ModalOverlay />
			<ModalContent maxW='750px'>
				<ModalBody>
					<ModalHeader>Add Submission</ModalHeader>
					<ModalCloseButton />
					<Center>
						<Box
							w='100%'
							borderWidth='3px'
							maxH='500px'
							borderRadius='lg'
							mt='25px'
						>
							<Grid templateColumns='repeat(2, 2fr)' gap={6} p={4} py={8}>
								<Box>
									<Text fontWeight='bold'>Submission ID</Text>
									<Input
										variant='filled'
										value={newSubmission.subID}
										isDisabled
									/>
								</Box>
								<Box>
									<Text fontWeight='bold'>Topic</Text>
									<Select
										placeholder='Select Topic'
										onChange={onChange}
										id='topic'
									>
										{topicList.map((topic) => {
											return (
												<option key={topic} value={topic}>
													{topic}
												</option>
											);
										})}
									</Select>
								</Box>
								<Box>
									<Text fontWeight='bold'>Session Link</Text>
									<Input
										variant='outline'
										placeholder='Enter session link'
										id='sessionLink'
										value={newSubmission.sessionLink}
										onChange={onChange}
									/>
								</Box>
								<Box>
									<Text fontWeight='bold'>Candidate E-Mail</Text>
									<Input
										variant='outline'
										placeholder='Enter canidate e-mail'
										id='email'
										type='text'
										value={newSubmission.email}
										onChange={onChange}
									/>
								</Box>
							</Grid>
						</Box>
					</Center>
				</ModalBody>
				<ModalFooter>
					<Button colorScheme='red' variant='outline'>
						Cancel
					</Button>
					<Spacer />
					<Button colorScheme='green' onClick={addSubmissionHandler}>
						Confirm
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddSubmissionModal;
