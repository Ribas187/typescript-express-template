import { createServer as createHttpServer } from 'http';
import { app } from '.';

const makeHttpServer = () => createHttpServer(app);

export { makeHttpServer };
