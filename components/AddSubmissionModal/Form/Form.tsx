import { Input, Box, Grid, Select, Text } from '@chakra-ui/react';
import React, { FC, ChangeEventHandler } from 'react';

import { topicList } from '../../../utils/topicList';

// Type for Submission
type Submission = {
	subID: string;
	topic: string;
	sessionLink: string | number | readonly string[] | undefined;
	email: string | number | readonly string[] | undefined;
};
// Interface for Props
interface FormProps {
	newSubmission: Submission;
	onChange: any;
}

const Form: FC<FormProps> = ({ newSubmission, onChange }) => {
	return (
		<Box w='100%' borderWidth='3px' maxH='500px' borderRadius='lg' mt='25px'>
			<Grid templateColumns='repeat(2, 2fr)' gap={12} p={4} py={8}>
				<Box>
					<Text fontWeight='bold'>Submission ID</Text>
					<Input variant='filled' value={newSubmission.subID} isDisabled />
				</Box>
				<Box>
					<Text fontWeight='bold'>Topic</Text>
					<Select placeholder='Select Topic' onChange={onChange} id='topic'>
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
	);
};

export default Form;
