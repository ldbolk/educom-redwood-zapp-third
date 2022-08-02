import { Link, routes } from '@redwoodjs/router'

import Taaks from 'src/components/Taak/Taaks'

export const QUERY = gql`
  query FindTaaks {
    taaks {
      id
      taak
      extra
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No taaks yet. '}

      <Link to={routes.newTaak()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ taaks }) => {
  return <Taaks taaks={taaks} />
}
