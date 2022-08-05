import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import BezoekFormCell from 'src/components/BezoekFormCell'

const BezoekPage = () => {
  return (
    <>
      <MetaTags title="Bezoek" description="Bezoek page" />

      <h1>BezoekPage</h1>


      <BezoekFormCell/>
    </>
  )
}

export default BezoekPage
