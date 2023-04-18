import { prisma } from '@/config';

async function findAllTicketsTypes() {
  const ticketsTypes = await prisma.ticketType.findMany();
  return ticketsTypes;
}

async function findTicket(enrollmentId: number) {
  const ticket = await prisma.ticket.findFirst({
    where: {
      enrollmentId: enrollmentId,
    },
    select: {
      id: true,
      status: true,
      ticketTypeId: true,
      enrollmentId: true,
      TicketType: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return ticket;
}

async function findTicketTypeById(ticketTypeId: number) {
  const ticketType = await prisma.ticketType.findFirst({
    where: {
      id: ticketTypeId,
    },
  });
  return ticketType;
}

async function createTicket(enrollmentId: number, ticketTypeId: number) {
  const ticket = await prisma.ticket.create({
    data: {
      status: 'RESERVED' || 'PAID',
      ticketTypeId: ticketTypeId,
      enrollmentId: enrollmentId,
    },
    include: {
      TicketType: true,
    },
  });

  return ticket;
}

const ticketRepository = {
  findAllTicketsTypes,
  findTicket,
  findTicketTypeById,
  createTicket,
};

export default ticketRepository;
