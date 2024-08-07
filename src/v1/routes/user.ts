import express from 'express';

import { sendApiResponse } from '@/utils/web-response';
import { getUser } from '../controller/user';

const route = express.Router();

route.get('/api/v1/users', (req: express.Request, res: express.Response) => {
  const result = getUser();
  sendApiResponse(res, 'success', 200, result, null);
});

export default route;
