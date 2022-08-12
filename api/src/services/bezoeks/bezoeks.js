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
  var bezoekTaken = []
  input.taken.forEach(value => {
    bezoekTaken.push({id: parseInt(value)})
  })
  var selfInsert = {connect: bezoekTaken}
  return db.bezoek.create({
    data: {
      klantId: input.klantId,
      userId: input.userId,
      taken: selfInsert, // Creates link with taken by using the connect: {id: 1}, {id: ....}
      start: input.start,
      end: input.end
    }
  })
}

export const updateBezoekTaken = ({ id, input }) => {
  console.log(input.taken)
  return db.bezoek.update({
    where: { id },
    data: {
      taken: {connect: {id: input.taken}}
    },
  })
}

export const updateBezoekKlant = ({ id, input }) => {
  return db.bezoek.update({
    where: {id},
    data: {klantId: input.klantId}
  })
}

export const updateBezoekMedewerker = ({ id, input }) => {
  return db.bezoek.update({
    where: { id },
    data: {userId: input.userId}
  })
}

export const removeBezoekTaken = ({ id, input }) => {
  return db.bezoek.update({
    where: { id },
    data: {
      taken: {disconnect: {id: input.taken}}
    },
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
