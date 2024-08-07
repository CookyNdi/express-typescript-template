import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import { apiV1List } from './v1';

dotenv.config();

const app: express.Application = express();
const PORT: string = process.env.PORT ?? '5000';

app.use(cors());
app.use(helmet());

app.use(apiV1List);

app.listen(PORT, () => {
  console.log(`server up and running at http://localhost:${PORT}`);
});
