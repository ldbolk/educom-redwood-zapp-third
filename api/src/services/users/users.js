import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const User = {
  bezoeken: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).bezoeken(),
}
