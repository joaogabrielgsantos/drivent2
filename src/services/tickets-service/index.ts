import { TicketType } from '@prisma/client';
import enrollmentsService from '../enrollments-service';
import { notFoundError } from '@/errors';
import ticketRepository from '@/repositories/ticket-repository';

async function getAllTicketsTypes(): Promise<TicketType[]> {
  const event = await ticketRepository.findAllTicketsTypes();
  if (!event) throw notFoundError();

  return event;
}

async function getTickets(userId: number) {
  const enrollment = await enrollmentsService.getOneWithAddressByUserId(userId);

  const event = await ticketRepository.findTicket(enrollment.id);

  console.log(event.id);
  if (!event) throw notFoundError();

  return event;
}

export type GetTicketTypeResult = Omit<TicketType, 'createdAt' | 'updatedAt'>;

const ticketsService = {
  getAllTicketsTypes,
  getTickets,
};

export default ticketsService;
