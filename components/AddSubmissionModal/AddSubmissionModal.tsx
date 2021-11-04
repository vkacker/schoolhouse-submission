// React Imports
import React, { FC, useState, useContext } from 'react';

// UI Imports
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
	useToast,
	HStack,
} from '@chakra-ui/react';
import Form from './Form/Form';

// Context Imports
import { SubmissionContext } from '../../context/context';

// GraphQL Imports
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

// Interface for Props
interface AddSubmissionModalProps {
	addModal: boolean;
	setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// Type for Submission
type Submission = {
	subID: string;
	topic: string;
	sessionLink: string | number | readonly string[] | undefined;
	email: string | number | readonly string[] | undefined;
};

const AddSubmissionModal: FC<AddSubmissionModalProps> = ({
	addModal,
	setAddModal,
}) => {
	/**
	 * State and Hook Declarations
	 */

	// State for Submission
	const { submissions, setSubmissions } = useContext<any>(SubmissionContext);

	// State for New Submission
	const [newSubmission, setNewSubmission] = useState<Submission>({
		subID: `sub${submissions.length + 1}`,
		topic: '',
		sessionLink: undefined,
		email: undefined,
	});

	// Instantiating Hook for displaying error message
	const toast = useToast();

	/**
	 * GraphQL Declarations
	 */
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

	// Event Handlers
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
			<ModalContent maxW='800px' maxH='800px'>
				<ModalBody>
					<ModalHeader fontSize='2.2rem'>
						<Center>Add Submission</Center>
					</ModalHeader>
					<ModalCloseButton />
					<Center>
						<Form newSubmission={newSubmission} onChange={onChange} />
					</Center>
				</ModalBody>
				<ModalFooter>
					<HStack spacing={8}>
						<Button
							colorScheme='red'
							variant='outline'
							onClick={() => setAddModal(!addModal)}
						>
							Cancel
						</Button>
						<Button colorScheme='green' onClick={addSubmissionHandler}>
							Confirm
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddSubmissionModal;
