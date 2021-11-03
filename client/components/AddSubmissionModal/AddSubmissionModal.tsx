import React, { useState } from 'react';

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
} from '@chakra-ui/react';

const AddSubmissionModal = ({ addModal, setAddModal }) => {
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
									<Input variant='filled' value='subXYZ' isDisabled />
								</Box>
								<Box>
									<Text fontWeight='bold'>
										What topic is the submission for?
									</Text>
									<Select placeholder='Select Topic'>
										<option value='algebra 1'>Algebra 1</option>
									</Select>
								</Box>
								<Box>
									<Text fontWeight='bold'>What is the session link?</Text>
									<Input variant='outline' placeholder='Enter session link' />
								</Box>
								<Box>
									<Text fontWeight='bold'>What is the candidate e-mail?</Text>
									<Input
										variant='outline'
										placeholder='Enter canidate e-mail'
									/>
								</Box>
							</Grid>
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

export default AddSubmissionModal;
