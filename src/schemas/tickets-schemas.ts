import Joi from 'joi';
import { createTicketWithTicketTypeId } from '@/services/tickets-service';

export const createTicketSchema = Joi.object<createTicketWithTicketTypeId>({
  ticketTypeId: Joi.number().min(3).required(),
});
