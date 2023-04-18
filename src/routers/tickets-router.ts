import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getTicket, getTicketType } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken).get('/types', getTicketType).get('/', getTicket);

export { ticketsRouter };
