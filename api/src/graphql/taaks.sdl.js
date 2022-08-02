export const schema = gql`
  type Taak {
    id: Int!
    taak: String!
    extra: String
    klanten: [Klant]!
  }

  type Query {
    taaks: [Taak!]! @requireAuth
    taak(id: Int!): Taak @requireAuth
  }

  input CreateTaakInput {
    taak: String!
    extra: String
  }

  input UpdateTaakInput {
    taak: String
    extra: String
  }

  type Mutation {
    createTaak(input: CreateTaakInput!): Taak! @requireAuth
    updateTaak(id: Int!, input: UpdateTaakInput!): Taak! @requireAuth
    deleteTaak(id: Int!): Taak! @requireAuth
  }
`
