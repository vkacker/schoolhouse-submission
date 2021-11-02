// Library Imports
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import { schema } from './graphql/schema';

// Initialize Express App
const app = express();
app.use('*', cors());

// Instantiate Apollo Server
let apolloServer = null;
async function startServer() {
	apolloServer = new ApolloServer({
		schema,
	});
	await apolloServer.start();
	apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({ port: 3001 }, () => {
	console.log('SERVER RUNNING ON PORT 3001');
});
