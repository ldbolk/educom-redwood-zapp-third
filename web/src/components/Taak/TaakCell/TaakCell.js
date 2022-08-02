import Taak from 'src/components/Taak/Taak'

export const QUERY = gql`
  query FindTaakById($id: Int!) {
    taak: taak(id: $id) {
      id
      taak
      extra
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Taak not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ taak }) => {
  return <Taak taak={taak} />
}
