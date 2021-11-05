import { makeHttpServer } from './config';

const serverPort = process.env.PORT || 3000;

makeHttpServer().listen(serverPort, () =>
  console.log(`Server running at port: ${serverPort}`)
);
