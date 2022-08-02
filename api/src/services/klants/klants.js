import { db } from 'src/lib/db'

export const klants = () => {
  return db.klant.findMany()
}

export const klant = ({ id }) => {
  return db.klant.findUnique({
    where: { id },
  })
}

export const createKlant = ({ input }) => {
  return db.klant.create({
    data: input,
  })
}

export const updateKlant = ({ id, input }) => {
  return db.klant.update({
    data: input,
    where: { id },
  })
}

export const deleteKlant = ({ id }) => {
  return db.klant.delete({
    where: { id },
  })
}

export const Klant = {
  taken: (_obj, { root }) =>
    db.klant.findUnique({ where: { id: root.id } }).taken(),
}
