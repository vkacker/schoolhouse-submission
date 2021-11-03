import React, { useState, useContext } from 'react';

import {
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
} from '@chakra-ui/react';

import { SubmissionContext } from '../../context/context';
import { topicList } from '../../utils/topicList.ts';

import { gql, useMutation } from '@apollo/client';

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

const AddSubmissionModal = ({ addModal, setAddModal }) => {
	const { submissions, setSubmissions } = useContext(SubmissionContext);

	// const [addSubmission, { data, loading, error }] = useMutation(ADD_SUBMISSION);

	const [newSubmission, setNewSubmission] = useState({
		subID: `sub${submissions.length + 1}`,
		topic: '',
		sessionLink: '',
		email: '',
	});

	const [addSubmission] = useMutation(ADD_SUBMISSION, {
		variables: {
			subID: newSubmission.subID,
			topic: newSubmission.topic,
			sessionLink: newSubmission.sessionLink,
			email: newSubmission.email,
		},
	});

	const onChange = (e) => {
		setNewSubmission({ ...newSubmission, [e.target.id]: e.target.value });
	};

	const addNewSubmission = (e) => {
		e.preventDefault();
		setSubmissions((oldSubmissions) => [...oldSubmissions, newSubmission]);
		addSubmission();
		setAddModal(!addModal);
	};

	return (
		<Modal isOpen={addModal} onClose={setAddModal} isCentered>
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
									<Text fontWeight='bold'>
										We took care of Submission ID for you :)
									</Text>
									<Input
										variant='filled'
										value={newSubmission.subID}
										isDisabled
									/>
								</Box>
								<Box>
									<Text fontWeight='bold'>
										What topic is the submission for?
									</Text>
									<Select
										placeholder='Select Topic'
										onChange={onChange}
										id='topic'
									>
										{topicList.map((topic) => {
											return <option value={topic}>{topic}</option>;
										})}
									</Select>
								</Box>
								<Box>
									<Text fontWeight='bold'>What is the session link?</Text>
									<Input
										variant='outline'
										placeholder='Enter session link'
										id='sessionLink'
										value={newSubmission.sessionLink}
										onChange={onChange}
									/>
								</Box>
								<Box>
									<Text fontWeight='bold'>What is the candidate e-mail?</Text>
									<Input
										variant='outline'
										placeholder='Enter canidate e-mail'
										id='email'
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
					<Button colorScheme='green' onClick={addNewSubmission}>
						Confirm
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddSubmissionModal;
