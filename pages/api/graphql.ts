// GraphQL Imports
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';

// Cors Import
import Cors from 'micro-cors';

// Page Config
export const config = {
	api: {
		bodyParser: false,
	},
};

// Enabling Cors
const cors = Cors();

// Instantiating Apollo Server
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const startServer = server.start();

export default cors(async (req, res) => {
	if (req.method === 'OPTIONS') {
		res.end();
		return false;
	}

	await startServer;
	await server.createHandler({ path: '/api/graphql' })(req, res);
});
