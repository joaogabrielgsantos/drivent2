import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getTicketType } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken).get('/types', getTicketType);

export { ticketsRouter };
