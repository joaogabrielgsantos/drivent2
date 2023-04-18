import { Ticket, TicketType } from '@prisma/client';
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
  if (!enrollment) throw notFoundError();

  const event = await ticketRepository.findTicket(enrollment.id);
  if (!event) throw notFoundError();

  return event;
}

async function createUserTicket(userId: number, ticketTypeId: number) {
  const enrollment = await enrollmentsService.getOneWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();

  const ticketType = await ticketRepository.findTicketTypeById(ticketTypeId);
  if (!ticketType) throw notFoundError();

  const event = await ticketRepository.createTicket(enrollment.id, ticketType.id);
  if (!event) throw notFoundError();

  return event;
}

export type GetTicketTypeResult = Omit<TicketType, 'createdAt' | 'updatedAt'>;
export type createTicketWithTicketTypeId = Pick<Ticket, 'ticketTypeId'>;

const ticketsService = {
  getAllTicketsTypes,
  getTickets,
  createUserTicket,
};

export default ticketsService;
