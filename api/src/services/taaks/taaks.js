import { db } from 'src/lib/db'

export const taaks = () => {
  return db.taak.findMany()
}

export const taak = ({ id }) => {
  return db.taak.findUnique({
    where: { id },
  })
}

export const createTaak = ({ input }) => {
  return db.taak.create({
    data: input,
  })
}

export const updateTaak = ({ id, input }) => {
  return db.taak.update({
    data: input,
    where: { id },
  })
}

export const deleteTaak = ({ id }) => {
  return db.taak.delete({
    where: { id },
  })
}

export const Taak = {
  klanten: (_obj, { root }) =>
    db.taak.findUnique({ where: { id: root.id } }).klanten(),
}
