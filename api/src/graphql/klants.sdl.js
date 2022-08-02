export const schema = gql`
  type Klant {
    id: Int!
    naam: String!
    adres: String!
    postcode: String!
    woonplaats: String!
    taken: [Taak]!
  }

  type Query {
    klants: [Klant!]! @requireAuth
    klant(id: Int!): Klant @requireAuth
  }

  input CreateKlantInput {
    naam: String!
    adres: String!
    postcode: String!
    woonplaats: String!
  }

  input UpdateKlantInput {
    naam: String
    adres: String
    postcode: String
    woonplaats: String
  }

  type Mutation {
    createKlant(input: CreateKlantInput!): Klant! @requireAuth
    updateKlant(id: Int!, input: UpdateKlantInput!): Klant! @requireAuth
    deleteKlant(id: Int!): Klant! @requireAuth
  }
`
