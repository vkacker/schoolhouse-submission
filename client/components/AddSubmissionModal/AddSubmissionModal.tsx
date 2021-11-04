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
} from '@chakra-ui/react';

import { SubmissionContext } from '../../context/context';
import { topicList } from '../../utils/topicList.ts';
import { generateSubmissionID } from '../../utils/generateSubmissionID.ts';

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
const AddSubmissionModal = ({ addModal, setAddModal, subLength }) => {
	const { submissions, setSubmissions } = useContext(SubmissionContext);

	const [displayAlert, setDisplayAlert] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const [newSubmission, setNewSubmission] = useState({
		subID: `sub${submissions.length + 1}`,
		topic: '',
		sessionLink: null,
		email: null,
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

	const addNewSubmission = (values) => {
		setSubmissions((oldSubmissions) => [...oldSubmissions, newSubmission]);
		addSubmission();

		// Clearing Submissions and Closing Modal
		setNewSubmission({
			subID: `sub${submissions.length + 1}`,
			topic: '',
			sessionLink: '',
			email: '',
		});
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
											return <option value={topic}>{topic}</option>;
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
