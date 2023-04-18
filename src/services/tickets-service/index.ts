import { TicketType } from '@prisma/client';
import { notFoundError } from '@/errors';
import ticketRepository from '@/repositories/ticket-repository';

async function getAllTicketsTypes(): Promise<TicketType[]> {
  const event = await ticketRepository.findAllTicketsTypes();
  if (!event) throw notFoundError();

  return event;
}

export type GetTicketTypeResult = Omit<TicketType, 'createdAt' | 'updatedAt'>;

const ticketsService = {
  getAllTicketsTypes,
};

export default ticketsService;
