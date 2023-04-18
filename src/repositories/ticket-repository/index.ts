import { prisma } from '@/config';

async function findAllTicketsTypes() {
  const ticketsTypes = await prisma.ticketType.findMany();
  return ticketsTypes;
}

const ticketRepository = {
  findAllTicketsTypes,
};

export default ticketRepository;
