import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	# Creating a type "Submission"
	type Submission {
		subID: String!
		topic: String!
		sessionLink: String!
		email: String!
	}

	# Queries - All the queries we want to make to this type
	type Query {
		getAllSubmissions: [Submission!]!
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
