export default {
  navbar: {
    about: 'Par mums',
    pricing: 'Cenas',
  },
  news: 'Jaunas',
  main: {
    openingHeadline: 'Rezervē seifu ar 10% atlaidi!',
    openingDescription: `Šobrīd mēs piedāvājam iespēju rezervēt seifu ar 10% atlaidi. Vienkārši izvēlieties tarifa veidu, seifa izmēru un nomas periodu - mūsu menedžeri sazināsies ar jums!`,
  },
  trustUsHeading: 'uzticies mums',
  trustUs: {
    aboutUsButton: 'Musu cenas',
  },
  // trustUsDescription:
  // 'Seifi4U ir starptautiskās organizācijas Safe Deposit Federation biedrs, kas garantē atbilstību pasaules drošības standartiem',

  trustUsCard: {
    headings: {
      safe: 'Droši',
      convenient: 'Ērtības',
      confidential: 'Konfidencialitāte',
    },

    points: {
      safe: [
        'Seifi4U ir starptautiskās seifu federācijas biedrs, kas garantē atbilstību pasaules drošības standartiem',
        'Velve ir aprīkota ar modernām drošības sistēmām un signalizāciju',
        'Diennakts bruņota apsardze',
        'Papildu drošības atbalsts no SP Legion',
        'Trīskāršs aizsardzības līmenis: piekļuve seifam ir iespējama tikai tad, ja zināt tā numuru, PIN kodu un jums ir atslēga',
      ],
      convenient: [
        'Plašs drošu izmēru un nomas periodu klāsts',
        'Ātra nomas reģistrācija',
        'Piekļuve visu diennakti pieejama pēc iepriekšēja pieraksta',
        'Klienta pārstāvji var apmeklēt seifu bez papildu dokumentiem',
        'Seifu var iznomāt jebkuras valsts iedzīvotāji, kā arī Latvijas un ārvalstu juridiskās personas',
      ],
      confidential: [
        'Atšķirībā no bankām, Seifi4U nekopīgo savu klientu datus ar valsts aģentūrām',
        'Seifi4U nepārbauda klientu seifu saturu',
        'Nereģistrētiem klientiem tiek garantēta pilnīga viņu identitātes anonimitāte',
        'Krātuvei ir atsevišķa telpa bez videonovērošanas',
        'Apmeklējot seifu, klienti netiek identificēti',
      ],
    },
  },

  descriptionCard: {
    contacts: {
      descriptionHeadline: 'Musu kontakti',
      points: [
        'Jaņa Daliņa iela 15, Rīga, LV-1029',
        '+371 28 888 030',
        'info@seifi4u.lv',
      ],
    },
    openingHours: {
      descriptionHeadline: 'Darba laiks',
      points: [
        'P-P 10.00-19.00',
        'Ārpus šiem laikiem apmeklējumi ir pieejami pēc iepriekšēja pieraksta.',
      ],
    },
  },

  openingPage: {
    headline: 'Rezervējiet savu seifu jau tagad!',
    description: `Cienījamie klienti,
      Šoziem atvērsim mūsu durvis apmeklētājiem.
      Šobrīd mēs piedāvājam iespēju rezervēt seifu ar 10% atlaidi.
      Vienkārši izvēlieties tarifa veidu, seifa izmēru un nomas periodu - mūsu menedžeri sazināsies ar jums!
      `,
  },

  aboutUsPage: {
    heading: 'Par mums',
    description:
      'SEIFI4U ir uzņēmums, kas piedāvā drošu, ērtu un konfidenciālu seifa nomu. Atšķirībā no bankas SEIFI4U nav jātērē laiks konta atvēršanai un personas identifikācijas procedūru veikšanai, un klienti var piekļūt saviem seifiem jebkurā laikā, septiņas dienas nedēļā.',
  },

  pricingPage: {
    mainHeading: 'Cenas',
    headingDetails: {
      registered: 'reģistrētiem klientiem',
      anonymous: 'anonīmiem klientiem',
    },
    pricingRegular: {
      sizes: [
        '35 x 245 x 435',
        '60 x 245 x 435',
        '110 x 245 x 435',
        '150 x 245 x 435',
        '290 x 245 x 435',
      ],
      timeRanges: [
        '30 dienas',
        '90 dienas',
        '180 dienas',
        '360 dienas',
        '720 dienas',
      ],
      prices: [
        50, 60, 70, 120, 145, 150, 170, 195, 235, 250, 275, 300, 360, 360, 420,
        480, 575, 585, 600, 670, 900, 975, 1440, 1500, 2400,
      ],

      timePriceObjs: [
        {
          time: '30 dienas',
          prices: [50, 60, 70, 150, 250],
        },
        {
          time: '90 dienas',
          prices: [120, 145, 170, 360, 600],
        },
        {
          time: '180 dienas',
          prices: [195, 235, 275, 585, 975],
        },
        {
          time: '360 dienas',
          prices: [300, 360, 420, 900, 1500],
        },
        {
          time: '720 dienas',
          prices: [480, 575, 670, 1440, 2400],
        },
      ],
    },
    additionalFeatures: {
      headline: 'Papildu pakalpojumi',
      points: [
        {
          point: 'Drošības nauda par izsniegtajām atslēgām*',
          price: '150,00 €',
        },
        {
          point:
            'Atslēgas / atslēgu pazaudēšana, atslēgas / atslēgu vai slēdzenes mehānisma bojājumi no seifa',
          price: '150,00 €',
        },
        {
          point: 'Piespiedu seifa atvēršana',
          price: '150,00 €',
        },
        {
          point: 'PIN koda maiņa',
          price: '150,00 €',
        },
        {
          point: 'Individuāla laika pasūtīšana seifa apmeklēšanai',
          price: '150,00 €',
        },
      ],
      vatInfo: 'Cenas norādītas ar PVN',
      vatInfoAsterisk: '* Šī cena ir norādīta bez PVN',
    },
    sizing: '* Seifu izmēri norādīti milimetros',
    rentLatePayment:
      'Nomas aizkavēšanās - divkāršojiet likmi darījuma noslēgšanas brīdī. Aprēķināts proporcionāli nokavētajām dienām',
  },
}
