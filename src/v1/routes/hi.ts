import express from 'express';
import { sayHi } from '../controller/hi';
import { sendApiResponse } from '@/utils/web-response';

const route = express.Router();

route.get('/api/v1/hi', (req: express.Request, res: express.Response) => {
  const result = sayHi('CookyNdi');
  sendApiResponse(res, 'success', 200, result, null);
});

export default route;
