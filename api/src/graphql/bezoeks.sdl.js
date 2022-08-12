export const schema = gql`
  type Bezoek {
    id: Int!
    klantId: Int!
    userId: Int!
    klant: Klant!
    medewerker: User!
    taken: [Taak]!
    start: DateTime!
    end: DateTime!
  }

  type Query {
    bezoeks: [Bezoek!]! @requireAuth
    bezoek(id: Int!): Bezoek @requireAuth
  }

  input CreateBezoekInput {
    klantId: Int!
    userId: Int!
    taken: [Int]
    start: DateTime!
    end: DateTime!
  }

  input UpdateBezoekTakenInput {
    taken: Int
  }

  input UpdateBezoekKlantInput {
    klantId: Int
  }

  input UpdateBezoekMedewerkerInput {
    userId: Int
  }

  input RemoveBezoekTakenInput {
    taken: Int
  }

  type Mutation {
    createBezoek(input: CreateBezoekInput!): Bezoek! @requireAuth
    updateBezoekTaken(id: Int!, input: UpdateBezoekTakenInput!): Bezoek! @requireAuth
    updateBezoekKlant(id: Int!, input: UpdateBezoekKlantInput!): Bezoek! @requireAuth
    updateBezoekMedewerker(id: Int!, input: UpdateBezoekMedewerkerInput!): Bezoek! @requireAuth
    removeBezoekTaken(id: Int!, input: RemoveBezoekTakenInput!): Bezoek! @requireAuth
    deleteBezoek(id: Int!): Bezoek! @requireAuth
  }
`
