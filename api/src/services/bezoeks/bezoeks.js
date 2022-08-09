import { db } from 'src/lib/db'

export const bezoeks = () => {
  return db.bezoek.findMany(
    {
      include: {taken: true}
    }
  )
}

export const bezoek = ({ id }) => {
  return db.bezoek.findUnique({
    where: { id },
    include: {taken: true}
  })
}

export const createBezoek = ({ input }) => {
  return db.bezoek.create({
    data: input
  })
}

export const deleteBezoek = ({ id }) => {
  return db.bezoek.delete({
    where: { id }
  })
}

export const Bezoek = {
  klant: (_obj, { root }) =>
    db.bezoek.findUnique({ where: { id: root.id } }).klant(),
  medewerker: (_obj, { root }) =>
    db.bezoek.findUnique({ where: { id: root.id } }).medewerker(),
}
