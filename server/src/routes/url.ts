import { Router } from 'express';
import * as URL from '../controllers/url';

const router = Router();

router.post('/parse', URL.parse);

export default router;
