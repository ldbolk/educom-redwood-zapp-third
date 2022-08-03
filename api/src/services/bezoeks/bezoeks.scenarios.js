export const standard = defineScenario({
  bezoek: {
    one: {
      data: {
        start: '2022-08-03T13:03:19Z',
        end: '2022-08-03T13:03:19Z',
        klant: {
          create: {
            naam: 'String',
            adres: 'String',
            postcode: 'String',
            woonplaats: 'String',
          },
        },

        medewerker: {
          create: {
            email: 'String3399827',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },

    two: {
      data: {
        start: '2022-08-03T13:03:19Z',
        end: '2022-08-03T13:03:19Z',
        klant: {
          create: {
            naam: 'String',
            adres: 'String',
            postcode: 'String',
            woonplaats: 'String',
          },
        },

        medewerker: {
          create: {
            email: 'String9666621',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
