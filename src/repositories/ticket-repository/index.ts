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

const ticketRepository = {
  findAllTicketsTypes,
  findTicket,
};

export default ticketRepository;
