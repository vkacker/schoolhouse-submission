import { ApolloError } from 'apollo-server-express';
import { submissionData } from '../database/submissions';
import { pairGenerator } from '../utils/pairGenerator';

export const resolver = {
	Query: {
		getAllSubmissions: async (_: any, args: any) => {
			return submissionData;
		},
		getCandidatePairs: async (_: any, args: any) => {
			return pairGenerator(submissionData);
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
