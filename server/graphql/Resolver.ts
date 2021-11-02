import { ApolloError } from 'apollo-server-express';
import { submissionData } from '../database/submissions';

export const resolver = {
	Query: {
		getAllSubmissions: async (_: any, args: any) => {
			return submissionData;
		},
	},

	Mutation: {
		addSubmission: (parent: any, args: any) => {
			const newSubmission = args;

			submissionData.push(newSubmission);

			return newSubmission;
		},
	},
};
