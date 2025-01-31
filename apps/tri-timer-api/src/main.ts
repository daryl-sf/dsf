import CookieParser from 'cookie-parser';
import express from 'express';
import http from 'http';
import * as path from 'path';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { schema } from './schema';

const app = express();
app.use(express.json());
app.use(CookieParser());

const httpServer = http.createServer(app);

const apolloServer = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
  ]
});

await apolloServer.start();

app.use('/graphql', cors(), express.json(), expressMiddleware(apolloServer));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const port = process.env.PORT || 3333;
const server = httpServer.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/graphql`);
});

server.on('error', console.error);

