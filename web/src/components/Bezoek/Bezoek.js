const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleDateString('default', {month: 'long'})
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Bezoek = ({bezoek}) => {
  return (
    <div>
      <h2>{bezoek.id}</h2>
      <p>{bezoek.medewerker}</p>
      <time dateTime={bezoek.start}>
        {formattedDate(bezoek.start)}
      </time>
      <br/>
      <time dateTime={bezoek.end}>
        {formattedDate(bezoek.end)}
      </time>
      <br/>
      <p>{bezoek.klant}</p>
      <p>{bezoek.medewerker}</p>
    </div>
  )
}

export default Bezoek
