import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_BEZOEK_MUTATION = gql`
  mutation DeleteBezoekMutation($id: Int!) {
    deleteBezoek(id: $id) {
      id
    }
  }
`


const Bezoek = ({ bezoek }) => {
  console.log(bezoek)
  const [deleteKlant] = useMutation(DELETE_BEZOEK_MUTATION, {
    onCompleted: () => {
      toast.success('Bezoek deleted')
      navigate(routes.home())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bezoek ' + id + '?')) {
      deleteKlant({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Bezoek nr. {bezoek.id}'s Details
          </h2>
        </header>
      </div>

    </>
  )
}

export default Bezoek
