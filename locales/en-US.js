export default {
  navbar: {
    about: 'About us',
    pricing: 'Prices',
  },
  news: 'News',
  main: {
    openingHeadline: 'Reserve your safe with 10% discount!',
    openingDescription: `This winter we will open our doors to visitors. And now we offer you the opportunity to reserve your safe.
    Just select the desired tariff type, the size of the safe and the rental period - our managers will contact you!`,
  },
  trustUsHeading: 'trust us',
  trustUs: {
    aboutUsButton: 'Our prices',
  },
  // trustUsDescription:
  // 'Seifi4U is a member of the international Safe Deposit Federation, which guarantees accordance with world security standards',

  trustUsCard: {
    headings: {
      safe: 'Safe',
      convenient: 'Convenient',
      confidential: 'Confidential',
    },

    points: {
      safe: [
        // 'Seifi4U is a member of the international Safe Deposit Federation, which guarantees accordance with world security standards',
        'The vault is equipped with modern security systems and alarms',
        '24-hour armed security',
        'Additional security support from SP Legion',
        'Triple level of protection: access to the safe is possible only if you know its number, pin code and have the key',
      ],
      convenient: [
        'Wide range of safe sizes and rent periods',
        'Fast rent registration',
        '24/7 access available by appointment',
        `The client's representatives can visit the safe without additional documents`,
        'The safe can be rented by residents of any country, as well as Latvian and foreign legal entities',
      ],
      confidential: [
        `Unlike banks, Seifi4U does not share its customers' data with government agencies`,
        'Seifi4U does not check the contents of client safes',
        'Unregistered clients are guaranteed complete anonymity of their identity',
        'The storage has a separate room without video surveillance',
        'Clients are not identified when visiting the safe',
      ],
    },
  },

  descriptionCard: {
    contacts: {
      descriptionHeadline: 'Our contacts',
      points: [
        'Jaņa Daliņa iela 15, Rīga, LV-1029',
        '+371 28 888 030',
        'info@seifi4u.lv',
      ],
    },
    openingHours: {
      descriptionHeadline: 'Opening hours',
      points: [
        'Mon-Fri. 10.00-19.00',
        'Outside of these hours visits are available by prior appointment.',
      ],
    },
  },

  openingPage: {
    headline: 'Reserve your safe today!',
    description:
      'This winter we will open our doors to visitors. And now we offer you the opportunity to reserve your safe. Just select the desired tariff type, the size of the safe and the rental period - our managers will contact you!',
  },

  aboutUsPage: {
    heading: 'About us',
    description:
      'SEIFI4U is a company that offers secure, convenient and confidential safe deposit box rental. Unlike a bank, at SEIFI4U one does not need to waste time opening an account and going through personal identification procedures, and the clients can access their safes at any time, seven days a week.',
  },

  pricingPage: {
    mainHeading: 'Prices',
    headingDetails: {
      registered: 'for registered clients',
      anonymous: 'for anonymous clients',
    },
    pricingRegular: {
      sizes: [
        '35 x 245 x 435',
        '60 x 245 x 435',
        '110 x 245 x 435',
        '150 x 245 x 435',
        '290 x 245 x 435',
      ],
      timeRanges: ['30 days', '90 days', '180 days', '360 days', '720 days'],
      prices: [
        50, 60, 70, 120, 145, 150, 170, 195, 235, 250, 275, 300, 360, 360, 420,
        480, 575, 585, 600, 670, 900, 975, 1440, 1500, 2400,
      ],

      timePriceObjs: [
        {
          time: '30 days',
          prices: [50, 60, 70, 150, 250],
        },
        {
          time: '90 days',
          prices: [120, 145, 170, 360, 600],
        },
        {
          time: '180 days',
          prices: [195, 235, 275, 585, 975],
        },
        {
          time: '360 days',
          prices: [300, 360, 420, 900, 1500],
        },
        {
          time: '720 days',
          prices: [480, 575, 670, 1440, 2400],
        },
      ],
    },
    additionalFeatures: {
      headline: 'Additional options',
      points: [
        {
          point: 'Security deposit for issued keys *',
          price: '150,00 €',
        },
        {
          point:
            'Loss of the key / keys, damage to the key / keys or the lock mechanism from the safe deposit box',
          price: '150,00 €',
        },
        {
          point: 'Forced opening of the safe',
          price: '150,00 €',
        },
        {
          point: 'PIN-code reset',
          price: '150,00 €',
        },
        {
          point: 'Scheduling an individual time to visit the safe',
          price: '150,00 €',
        },
      ],
      vatInfo: 'Prices include VAT',
      vatInfoAsterisk: '* This price is shown without VAT',
    },
    sizing: '* Dimensions of safes are indicated in millimeters',
    rentLatePayment:
      'Delay in the lease doubles the rate at the conclusion of the transaction. Calculated in proportion to overdue days',
  },
}
