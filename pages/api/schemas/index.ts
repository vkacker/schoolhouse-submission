// GraphQL Import
import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
	# Creating a type "Submission"
	type Submission {
		subID: String!
		topic: String!
		sessionLink: String!
		email: String!
	}

	type Pair {
		reviewer: String!
		reviewee: String!
		topic: String!
		validPair: Boolean!
	}

	# Queries - All the queries we want to make to this type
	type Query {
		getAllSubmissions: [Submission!]!
		getCandidatePairs: [Pair!]!
	}

	# Mutations - All the changes we want to make to the data
	type Mutation {
		addSubmission(
			subID: String!
			topic: String!
			sessionLink: String!
			email: String!
		): Submission!
	}
`;
