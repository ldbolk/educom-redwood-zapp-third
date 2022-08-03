import { db } from 'src/lib/db'

export const bezoeks = () => {
  return db.bezoek.findMany()
}

export const bezoek = ({ id }) => {
  return db.bezoek.findUnique({
    where: { id },
  })
}

export const Bezoek = {
  klant: (_obj, { root }) =>
    db.bezoek.findUnique({ where: { id: root.id } }).klant(),
  medewerker: (_obj, { root }) =>
    db.bezoek.findUnique({ where: { id: root.id } }).medewerker(),
}
