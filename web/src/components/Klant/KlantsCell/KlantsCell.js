import { Link, routes } from '@redwoodjs/router'

import Klants from 'src/components/Klant/Klants'

export const QUERY = gql`
  query FindKlants {
    klants {
      id
      naam
      adres
      postcode
      woonplaats
      taken{id, taak, extra}
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No klants yet. '}

      <Link to={routes.newKlant()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ klants }) => {
  return <Klants klants={klants} />
}
