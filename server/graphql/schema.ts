import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from './TypeDefs';
import { resolver } from './Resolver';

export const schema = makeExecutableSchema({
	typeDefs: typeDefs,
	resolvers: resolver,
});
