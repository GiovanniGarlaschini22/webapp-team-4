const users = [
  // Parigi - 8 partecipanti
  {
    id: 1,
    nome: "Marco",
    cognome: "Rossi",
    tesseraSanitaria: "RSSMRC85M15F205Z",
    telefono: "+39 347 123 4567",
    email: "marco.rossi@email.com",
    viaggioId: 1,
    destinazione: "Parigi"
  },
  {
    id: 2,
    nome: "Giulia",
    cognome: "Bianchi",
    tesseraSanitaria: "BNCGLI90F25H501W",
    telefono: "+39 335 987 6543",
    email: "giulia.bianchi@email.com",
    viaggioId: 1,
    destinazione: "Parigi"
  },
  {
    id: 3,
    nome: "Alessandro",
    cognome: "Verdi",
    tesseraSanitaria: "VRDLSN88A10L219X",
    telefono: "+39 342 555 7890",
    email: "alessandro.verdi@email.com",
    viaggioId: 1,
    destinazione: "Parigi"
  },
  {
    id: 4,
    nome: "Francesca",
    cognome: "Neri",
    tesseraSanitaria: "NRIFNC92D15A662Y",
    telefono: "+39 328 111 2233",
    email: "francesca.neri@email.com",
    viaggioId: 1,
    destinazione: "Parigi"
  },
  {
    id: 5,
    nome: "Roberto",
    cognome: "Ferrari",
    tesseraSanitaria: "FRRRBT80H20C351V",
    telefono: "+39 339 444 5566",
    email: "roberto.ferrari@email.com",
    viaggioId: 1,
    destinazione: "Parigi"
  },
  {
    id: 6,
    nome: "Elena",
    cognome: "Conti",
    tesseraSanitaria: "CNTLNE87L25D612U",
    telefono: "+39 346 777 8899",
    email: "elena.conti@email.com",
    viaggioId: 1,
    destinazione: "Parigi"
  },
  {
    id: 7,
    nome: "Davide",
    cognome: "Romano",
    tesseraSanitaria: "RMNDVD91M30H501T",
    telefono: "+39 333 222 1111",
    email: "davide.romano@email.com",
    viaggioId: 1,
    destinazione: "Parigi"
  },
  {
    id: 8,
    nome: "Sofia",
    cognome: "Marino",
    tesseraSanitaria: "MRNSFO89B15F839S",
    telefono: "+39 345 666 3333",
    email: "sofia.marino@email.com",
    viaggioId: 1,
    destinazione: "Parigi"
  },

  // New York - 10 partecipanti
  {
    id: 9,
    nome: "Matteo",
    cognome: "Colombo",
    tesseraSanitaria: "CLMMTT86T10A116R",
    telefono: "+39 347 888 9999",
    email: "matteo.colombo@email.com",
    viaggioId: 2,
    destinazione: "New York"
  },
  {
    id: 10,
    nome: "Chiara",
    cognome: "Ricci",
    tesseraSanitaria: "RCCCHI93A50D969Q",
    telefono: "+39 338 123 7890",
    email: "chiara.ricci@email.com",
    viaggioId: 2,
    destinazione: "New York"
  },
  {
    id: 11,
    nome: "Luca",
    cognome: "Galli",
    tesseraSanitaria: "GLLLCU85E15L736P",
    telefono: "+39 329 456 1234",
    email: "luca.galli@email.com",
    viaggioId: 2,
    destinazione: "New York"
  },
  {
    id: 12,
    nome: "Martina",
    cognome: "Costa",
    tesseraSanitaria: "CSTMTN90C45C351O",
    telefono: "+39 340 789 4567",
    email: "martina.costa@email.com",
    viaggioId: 2,
    destinazione: "New York"
  },
  {
    id: 13,
    nome: "Federico",
    cognome: "Pellegrini",
    tesseraSanitaria: "PLLFDR88S20G273N",
    telefono: "+39 351 234 5678",
    email: "federico.pellegrini@email.com",
    viaggioId: 2,
    destinazione: "New York"
  },
  {
    id: 14,
    nome: "Valentina",
    cognome: "De Luca",
    tesseraSanitaria: "DLCVNT92H60I483M",
    telefono: "+39 362 567 8901",
    email: "valentina.deluca@email.com",
    viaggioId: 2,
    destinazione: "New York"
  },
  {
    id: 15,
    nome: "Andrea",
    cognome: "Fontana",
    tesseraSanitaria: "FNTNDR87D25L219L",
    telefono: "+39 373 890 1234",
    email: "andrea.fontana@email.com",
    viaggioId: 2,
    destinazione: "New York"
  },
  {
    id: 16,
    nome: "Silvia",
    cognome: "Santoro",
    tesseraSanitaria: "SNTSLV91L65F205K",
    telefono: "+39 384 345 6789",
    email: "silvia.santoro@email.com",
    viaggioId: 2,
    destinazione: "New York"
  },
  {
    id: 17,
    nome: "Simone",
    cognome: "Barbieri",
    tesseraSanitaria: "BRBSMN89A10H501J",
    telefono: "+39 395 678 9012",
    email: "simone.barbieri@email.com",
    viaggioId: 2,
    destinazione: "New York"
  },
  {
    id: 18,
    nome: "Paola",
    cognome: "Caruso",
    tesseraSanitaria: "CRSPLA86T50A662I",
    telefono: "+39 306 901 2345",
    email: "paola.caruso@email.com",
    viaggioId: 2,
    destinazione: "New York"
  },

  // Tokyo - 6 partecipanti
  {
    id: 19,
    nome: "Giovanni",
    cognome: "Lombardi",
    tesseraSanitaria: "LMBGVN87S20C351F",
    telefono: "+39 339 890 1234",
    email: "giovanni.lombardi@email.com",
    viaggioId: 3,
    destinazione: "Tokyo"
  },
  {
    id: 20,
    nome: "Federica",
    cognome: "Moretti",
    tesseraSanitaria: "MRTFDR92C60G273E",
    telefono: "+39 340 123 4567",
    email: "federica.moretti@email.com",
    viaggioId: 3,
    destinazione: "Tokyo"
  },
  {
    id: 21,
    nome: "Riccardo",
    cognome: "Bruno",
    tesseraSanitaria: "BRNRCC85H25I483D",
    telefono: "+39 351 456 7890",
    email: "riccardo.bruno@email.com",
    viaggioId: 3,
    destinazione: "Tokyo"
  },
  {
    id: 22,
    nome: "Serena",
    cognome: "Esposito",
    tesseraSanitaria: "SPSRNS89L65L219C",
    telefono: "+39 362 789 0123",
    email: "serena.esposito@email.com",
    viaggioId: 3,
    destinazione: "Tokyo"
  },
  {
    id: 23,
    nome: "Fabio",
    cognome: "Mancini",
    tesseraSanitaria: "MNCFBA88A30F205B",
    telefono: "+39 373 012 3456",
    email: "fabio.mancini@email.com",
    viaggioId: 3,
    destinazione: "Tokyo"
  },
  {
    id: 24,
    nome: "Laura",
    cognome: "Russo",
    tesseraSanitaria: "RSSLRA91T70H501A",
    telefono: "+39 384 345 6789",
    email: "laura.russo@email.com",
    viaggioId: 3,
    destinazione: "Tokyo"
  },

  // Roma - 15 partecipanti
  {
    id: 25,
    nome: "Antonio",
    cognome: "Villa",
    tesseraSanitaria: "VLLNTN86D15A662Z",
    telefono: "+39 395 678 9012",
    email: "antonio.villa@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 26,
    nome: "Monica",
    cognome: "Gentile",
    tesseraSanitaria: "GNTMNC93F55L736Y",
    telefono: "+39 306 901 2345",
    email: "monica.gentile@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 27,
    nome: "Stefano",
    cognome: "Benedetti",
    tesseraSanitaria: "BNDSTF87M20D969X",
    telefono: "+39 317 234 5678",
    email: "stefano.benedetti@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 28,
    nome: "Cristina",
    cognome: "Fabbri",
    tesseraSanitaria: "FBBCRS90A60C351W",
    telefono: "+39 328 567 8901",
    email: "cristina.fabbri@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 29,
    nome: "Daniele",
    cognome: "Serra",
    tesseraSanitaria: "SRRDNL85S25G273V",
    telefono: "+39 339 890 1234",
    email: "daniele.serra@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 30,
    nome: "Roberta",
    cognome: "Gatti",
    tesseraSanitaria: "GTTRBT92L65I483U",
    telefono: "+39 340 123 4567",
    email: "roberta.gatti@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 31,
    nome: "Massimo",
    cognome: "Cattaneo",
    tesseraSanitaria: "CTTMSS89C30L219T",
    telefono: "+39 351 456 7890",
    email: "massimo.cattaneo@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 32,
    nome: "Ilaria",
    cognome: "Orlando",
    tesseraSanitaria: "RLNLRI88H70F205S",
    telefono: "+39 362 789 0123",
    email: "ilaria.orlando@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 33,
    nome: "Giorgio",
    cognome: "Messina",
    tesseraSanitaria: "MSSGRL91A15H501R",
    telefono: "+39 373 012 3456",
    email: "giorgio.messina@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 34,
    nome: "Emanuela",
    cognome: "Testa",
    tesseraSanitaria: "TSTMNL86T55A662Q",
    telefono: "+39 384 345 6789",
    email: "emanuela.testa@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 35,
    nome: "Claudio",
    cognome: "Giorgi",
    tesseraSanitaria: "GRGCLD84D20L736P",
    telefono: "+39 395 678 9012",
    email: "claudio.giorgi@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 36,
    nome: "Sabrina",
    cognome: "Leone",
    tesseraSanitaria: "LNESNR90F60D969O",
    telefono: "+39 306 901 2345",
    email: "sabrina.leone@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 37,
    nome: "Francesco",
    cognome: "Caputo",
    tesseraSanitaria: "CPTFNC87M25C351N",
    telefono: "+39 317 234 5678",
    email: "francesco.caputo@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 38,
    nome: "Diana",
    cognome: "Fiore",
    tesseraSanitaria: "FRIDNA92C65G273M",
    telefono: "+39 328 567 8901",
    email: "diana.fiore@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },
  {
    id: 39,
    nome: "Vincenzo",
    cognome: "Palumbo",
    tesseraSanitaria: "PLMVCN89S30I483L",
    telefono: "+39 339 890 1234",
    email: "vincenzo.palumbo@email.com",
    viaggioId: 4,
    destinazione: "Roma"
  },

  // Londra - 9 partecipanti
  {
    id: 40,
    nome: "Alessandra",
    cognome: "Monti",
    tesseraSanitaria: "MNTLSS85L70L219K",
    telefono: "+39 340 123 4567",
    email: "alessandra.monti@email.com",
    viaggioId: 5,
    destinazione: "Londra"
  },
  {
    id: 41,
    nome: "Emanuele",
    cognome: "De Santis",
    tesseraSanitaria: "DSTMLN88A35F205J",
    telefono: "+39 351 456 7890",
    email: "emanuele.desantis@email.com",
    viaggioId: 5,
    destinazione: "Londra"
  },
  {
    id: 42,
    nome: "Caterina",
    cognome: "Pavan",
    tesseraSanitaria: "PVNCTR91T75H501I",
    telefono: "+39 362 789 0123",
    email: "caterina.pavan@email.com",
    viaggioId: 5,
    destinazione: "Londra"
  },
  {
    id: 43,
    nome: "Lorenzo",
    cognome: "Silvestri",
    tesseraSanitaria: "SLVLRN86D40A662H",
    telefono: "+39 373 012 3456",
    email: "lorenzo.silvestri@email.com",
    viaggioId: 5,
    destinazione: "Londra"
  },
  {
    id: 44,
    nome: "Beatrice",
    cognome: "Piazza",
    tesseraSanitaria: "PZZBTR92F80L736G",
    telefono: "+39 384 345 6789",
    email: "beatrice.piazza@email.com",
    viaggioId: 5,
    destinazione: "Londra"
  },
  {
    id: 45,
    nome: "Salvatore",
    cognome: "Bianco",
    tesseraSanitaria: "BNCSLV89M45D969F",
    telefono: "+39 395 678 9012",
    email: "salvatore.bianco@email.com",
    viaggioId: 5,
    destinazione: "Londra"
  },
  {
    id: 46,
    nome: "Antonella",
    cognome: "Vitali",
    tesseraSanitaria: "VTLNTN85C85C351E",
    telefono: "+39 306 901 2345",
    email: "antonella.vitali@email.com",
    viaggioId: 5,
    destinazione: "Londra"
  },
  {
    id: 47,
    nome: "Michele",
    cognome: "Parisi",
    tesseraSanitaria: "PRSMHL88S50G273D",
    telefono: "+39 317 234 5678",
    email: "michele.parisi@email.com",
    viaggioId: 5,
    destinazione: "Londra"
  },
  {
    id: 48,
    nome: "Claudia",
    cognome: "Riva",
    tesseraSanitaria: "RVACLD91L90I483C",
    telefono: "+39 328 567 8901",
    email: "claudia.riva@email.com",
    viaggioId: 5,
    destinazione: "Londra"
  },

  // Barcellona - 7 partecipanti
  {
    id: 49,
    nome: "Edoardo",
    cognome: "Ferri",
    tesseraSanitaria: "FRRDRD86A55L219B",
    telefono: "+39 339 890 1234",
    email: "edoardo.ferri@email.com",
    viaggioId: 6,
    destinazione: "Barcellona"
  },
  {
    id: 50,
    nome: "Isabella",
    cognome: "Donati",
    tesseraSanitaria: "DNTSBLL90T95F205A",
    telefono: "+39 340 123 4567",
    email: "isabella.donati@email.com",
    viaggioId: 6,
    destinazione: "Barcellona"
  },
  {
    id: 51,
    nome: "Tommaso",
    cognome: "Bernardi",
    tesseraSanitaria: "BRNTMS87M60H501Z",
    telefono: "+39 351 456 7890",
    email: "tommaso.bernardi@email.com",
    viaggioId: 6,
    destinazione: "Barcellona"
  },
  {
    id: 52,
    nome: "Camilla",
    cognome: "Mariani",
    tesseraSanitaria: "MRNCML92C100A662Y",
    telefono: "+39 362 789 0123",
    email: "camilla.mariani@email.com",
    viaggioId: 6,
    destinazione: "Barcellona"
  },
  {
    id: 53,
    nome: "Jacopo",
    cognome: "Guerra",
    tesseraSanitaria: "GRRJCP89S65L736X",
    telefono: "+39 373 012 3456",
    email: "jacopo.guerra@email.com",
    viaggioId: 6,
    destinazione: "Barcellona"
  },
  {
    id: 54,
    nome: "Eleonora",
    cognome: "Ferretti",
    tesseraSanitaria: "FRRLNR85L105D969W",
    telefono: "+39 384 345 6789",
    email: "eleonora.ferretti@email.com",
    viaggioId: 6,
    destinazione: "Barcellona"
  },
  {
    id: 55,
    nome: "Pietro",
    cognome: "Sartori",
    tesseraSanitaria: "SRTPTR88A70C351V",
    telefono: "+39 395 678 9012",
    email: "pietro.sartori@email.com",
    viaggioId: 6,
    destinazione: "Barcellona"
  },

  // Dubai - 11 partecipanti
  {
    id: 56,
    nome: "Veronica",
    cognome: "Negri",
    tesseraSanitaria: "NGRVNC91T110G273U",
    telefono: "+39 306 901 2345",
    email: "veronica.negri@email.com",
    viaggioId: 7,
    destinazione: "Dubai"
  },
  {
    id: 57,
    nome: "Gabriele",
    cognome: "Longo",
    tesseraSanitaria: "LNGGRL86D75I483T",
    telefono: "+39 317 234 5678",
    email: "gabriele.longo@email.com",
    viaggioId: 7,
    destinazione: "Dubai"
  },
  {
    id: 58,
    nome: "Margherita",
    cognome: "Pecoraro",
    tesseraSanitaria: "PCRMRG92F115L219S",
    telefono: "+39 328 567 8901",
    email: "margherita.pecoraro@email.com",
    viaggioId: 7,
    destinazione: "Dubai"
  },
  {
    id: 59,
    nome: "Filippo",
    cognome: "Coppola",
    tesseraSanitaria: "CPPFLP89M80F205R",
    telefono: "+39 339 890 1234",
    email: "filippo.coppola@email.com",
    viaggioId: 7,
    destinazione: "Dubai"
  },
  {
    id: 60,
    nome: "Giorgia",
    cognome: "Pagano",
    tesseraSanitaria: "PGNGRL85C120H501Q",
    telefono: "+39 340 123 4567",
    email: "giorgia.pagano@email.com",
    viaggioId: 7,
    destinazione: "Dubai"
  },
  {
    id: 61,
    nome: "Mirko",
    cognome: "Martinelli",
    tesseraSanitaria: "MRTMRK88S85A662P",
    telefono: "+39 351 456 7890",
    email: "mirko.martinelli@email.com",
    viaggioId: 7,
    destinazione: "Dubai"
  },
  {
    id: 62,
    nome: "Alice",
    cognome: "Grassi",
    tesseraSanitaria: "GRSLCI91L125L736O",
    telefono: "+39 362 789 0123",
    email: "alice.grassi@email.com",
    viaggioId: 7,
    destinazione: "Dubai"
  },
  {
    id: 63,
    nome: "Mattia",
    cognome: "D'Angelo",
    tesseraSanitaria: "DNGMTT86A90D969N",
    telefono: "+39 373 012 3456",
    email: "mattia.dangelo@email.com",
    viaggioId: 7,
    destinazione: "Dubai"
  },
  {
    id: 64,
    nome: "Valeria",
    cognome: "Amato",
    tesseraSanitaria: "MTVLR92T130C351M",
    telefono: "+39 384 345 6789",
    email: "valeria.amato@email.com",
    viaggioId: 7,
    destinazione: "Dubai"
  },
  {
    id: 65,
    nome: "Enrico",
    cognome: "Sorrentino",
    tesseraSanitaria: "SRRNRC89M95G273L",
    telefono: "+39 395 678 9012",
    email: "enrico.sorrentino@email.com",
    viaggioId: 7,
    destinazione: "Dubai"
  },
  {
    id: 66,
    nome: "Arianna",
    cognome: "Milani",
    tesseraSanitaria: "MLNRNN85L135I483K",
    telefono: "+39 306 901 2345",
    email: "arianna.milani@email.com",
    viaggioId: 7,
    destinazione: "Dubai"
  },

  // Berlino - 10 partecipanti
  {
    id: 67,
    nome: "Simona",
    cognome: "Rosso",
    tesseraSanitaria: "RSSSMN88C140L219J",
    telefono: "+39 317 234 5678",
    email: "simona.rosso@email.com",
    viaggioId: 8,
    destinazione: "Berlino"
  },
  {
    id: 68,
    nome: "Dario",
    cognome: "Sala",
    tesseraSanitaria: "SLADRI91A100F205I",
    telefono: "+39 328 567 8901",
    email: "dario.sala@email.com",
    viaggioId: 8,
    destinazione: "Berlino"
  },
  {
    id: 69,
    nome: "Cecilia",
    cognome: "Basile",
    tesseraSanitaria: "BSLCCL86T145H501H",
    telefono: "+39 339 890 1234",
    email: "cecilia.basile@email.com",
    viaggioId: 8,
    destinazione: "Berlino"
  },
  {
    id: 70,
    nome: "Iacopo",
    cognome: "Giuliani",
    tesseraSanitaria: "GLNCP92D105A662G",
    telefono: "+39 340 123 4567",
    email: "iacopo.giuliani@email.com",
    viaggioId: 8,
    destinazione: "Berlino"
  },
  {
    id: 71,
    nome: "Chiara",
    cognome: "Parente",
    tesseraSanitaria: "PRNCHR89L150L736F",
    telefono: "+39 351 456 7890",
    email: "chiara.parente@email.com",
    viaggioId: 8,
    destinazione: "Berlino"
  },
  {
    id: 72,
    nome: "Fabrizio",
    cognome: "Santini",
    tesseraSanitaria: "SNTFRZ85M110D969E",
    telefono: "+39 362 789 0123",
    email: "fabrizio.santini@email.com",
    viaggioId: 8,
    destinazione: "Berlino"
  },
  {
    id: 73,
    nome: "Greta",
    cognome: "Battaglia",
    tesseraSanitaria: "BTTGRT88F155C351D",
    telefono: "+39 373 012 3456",
    email: "greta.battaglia@email.com",
    viaggioId: 8,
    destinazione: "Berlino"
  },
  {
    id: 74,
    nome: "Cristian",
    cognome: "Bellini",
    tesseraSanitaria: "BLLCRS91S115G273C",
    telefono: "+39 384 345 6789",
    email: "cristian.bellini@email.com",
    viaggioId: 8,
    destinazione: "Berlino"
  },
  {
    id: 75,
    nome: "Martina",
    cognome: "Ferraro",
    tesseraSanitaria: "FRRMTN86C160I483B",
    telefono: "+39 395 678 9012",
    email: "martina.ferraro@email.com",
    viaggioId: 8,
    destinazione: "Berlino"
  },
  {
    id: 76,
    nome: "Manuel",
    cognome: "Rinaldi",
    tesseraSanitaria: "RNDMNL92A120L219A",
    telefono: "+39 306 901 2345",
    email: "manuel.rinaldi@email.com",
    viaggioId: 8,
    destinazione: "Berlino"
  },

  // Atene - 13 partecipanti
  {
    id: 77,
    nome: "Federica",
    cognome: "Damico",
    tesseraSanitaria: "DMCFDR89T165F205Z",
    telefono: "+39 317 234 5678",
    email: "federica.damico@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 78,
    nome: "Danilo",
    cognome: "Farina",
    tesseraSanitaria: "FRNDNL85D125H501Y",
    telefono: "+39 328 567 8901",
    email: "danilo.farina@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 79,
    nome: "Giovanna",
    cognome: "Colombi",
    tesseraSanitaria: "CLMGVN92L170A662X",
    telefono: "+39 339 890 1234",
    email: "giovanna.colombi@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 80,
    nome: "Rocco",
    cognome: "Morelli",
    tesseraSanitaria: "MRLRCC88M130L736W",
    telefono: "+39 340 123 4567",
    email: "rocco.morelli@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 81,
    nome: "Sonia",
    cognome: "Carbone",
    tesseraSanitaria: "CRBSNI91F175D969V",
    telefono: "+39 351 456 7890",
    email: "sonia.carbone@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 82,
    nome: "Flavio",
    cognome: "Mazza",
    tesseraSanitaria: "MZZFLV86S135C351U",
    telefono: "+39 362 789 0123",
    email: "flavio.mazza@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 83,
    nome: "Noemi",
    cognome: "Palmieri",
    tesseraSanitaria: "PLMNMI92C180G273T",
    telefono: "+39 373 012 3456",
    email: "noemi.palmieri@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 84,
    nome: "Sergio",
    cognome: "Conti",
    tesseraSanitaria: "CNTSRG89A140I483S",
    telefono: "+39 384 345 6789",
    email: "sergio.conti@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 85,
    nome: "Ludovica",
    cognome: "Pozzi",
    tesseraSanitaria: "PZZLDV85T185L219R",
    telefono: "+39 395 678 9012",
    email: "ludovica.pozzi@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 86,
    nome: "Massimiliano",
    cognome: "Galli",
    tesseraSanitaria: "GLLMSS88D145F205Q",
    telefono: "+39 306 901 2345",
    email: "massimiliano.galli@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 87,
    nome: "Benedetta",
    cognome: "Lombardo",
    tesseraSanitaria: "LMBBND91L190H501P",
    telefono: "+39 317 234 5678",
    email: "benedetta.lombardo@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 88,
    nome: "Raffaele",
    cognome: "Rizzo",
    tesseraSanitaria: "RZZRFL86M150A662O",
    telefono: "+39 328 567 8901",
    email: "raffaele.rizzo@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },
  {
    id: 89,
    nome: "Elisa",
    cognome: "Capuano",
    tesseraSanitaria: "CPNLSE92F195L736N",
    telefono: "+39 339 890 1234",
    email: "elisa.capuano@email.com",
    viaggioId: 9,
    destinazione: "Atene"
  },

  // Reykjavík - 5 partecipanti
  { 
    id: 90,
    nome: "Bernardo",
    cognome: "Capellini",
    tesseraSanitaria: "CPLBRD89S155D969M",
    telefono: "+39 340 123 4567",
    email: "bernardo.capellini@email.com",
    viaggioId: 10,
    destinazione: "Reykjavík"
  },
  {
    id: 91,
    nome: "Ginevra",
    cognome: "Moretti",
    tesseraSanitaria: "MRTGNV85C200C351L",
    telefono: "+39 351 456 7890",
    email: "ginevra.moretti@email.com",
    viaggioId: 10,
    destinazione: "Reykjavík"
  },
  {
    id: 92,
    nome: "Emilio",
    cognome: "Benedetto",
    tesseraSanitaria: "BNDMLI88A160G273K",
    telefono: "+39 362 789 0123",
    email: "emilio.benedetto@email.com",
    viaggioId: 10,
    destinazione: "Reykjavík"
  },
  {
    id: 93,
    nome: "Viola",
    cognome: "Martinelli",
    tesseraSanitaria: "MRTVEL91T205I483J",
    telefono: "+39 373 012 3456",
    email: "viola.martinelli@email.com",
    viaggioId: 10,
    destinazione: "Reykjavík"
  },
  {
    id: 94,
    nome: "Armando",
    cognome: "Gentili",
    tesseraSanitaria: "GNTRMN86D165L219I",
    telefono: "+39 384 345 6789",
    email: "armando.gentili@email.com",
    viaggioId: 10,
    destinazione: "Reykjavík"
  }
];

export default users;