import { v4 as uuidv4 } from "uuid";

const fontType = {
  modern: 1,
  classic: 2,
};

const themeType = {
  one: 1,
  two: 2,
  three: 3,
};

export let events = [
  {
    id: "6bb8ffe8-6e5e-4abc-be7f-b05b749849cf",
    name: "Infant Musicality",
    series: "Bach, The Universe & Everything",
    time: "11.30",
    date: "12-12-21",
    venue: "King's Place",
    location: "London",
    imageSrc:
      "https://oae.co.uk/wp-content/uploads/2021/07/MicrosoftTeams-image-5-1250x825.jpg",
    imageAlt: "Event Poster",
    content: [
      {
        heading:
          "If this is your first Bach, the Universe & Everything (BAE), welcome!",
        text: "We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced cantatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is in the spirit that we come together for a thought-provoking cantata and a talk from a leading scientist. Professor Jon Chapman from the University of Oxford invites us to ponder the fleeting moment when sound waves reach our ears before they disappear. Using some careful calculations, Jon suggests that we might even be able to hear the shape of a drum.",
      },
      {
        heading:
          "A note from our Principal Keyboard, Steven Devine, about today's programme",
        text: "The Cantata being performed today is BWV 26 - Ach wie flüchtig, ach wie nichtig. The chorale of this name forms the linchpin of the outer movements and it is the only time Bach used this chorale in his cantatas. The melody of the chorale, written by Michael Franck in 1652, is used by others and the organ prelude today is a movement for manuals only (that is, no organ pedals!) from a set of variations on this tune by Georg Bohm (1661 - 1733), an organist whom J S Bach hugely admired and who may even have been his teacher.The irresistable combination of three oboes brought a wealth of different repertoire to mind, but I have been enjoying digging into lesser-known works by George-Philipp Telemann this season and this movement from his “Darmstadt” Ouverture (the title of which roughly translates as “boasting”!) is a witty interplay between the wind and string teams.",
      },
    ],
    schedule: [
      {
        name: "Welcome",
        title: null,
        author: null,
        description:
          "Non ad labore aliqua adipisicing et laborum exercitation. Enim consectetur aliquip eu commodo. Eiusmod ipsum anim exercitation consectetur elit amet voluptate aliquip ullamco. Duis deserunt dolore et officia ullamco voluptate culpa eiusmod cupidatat ullamco sit anim incididunt nulla. Nisi et et commodo non dolor amet aliquip exercitation. Et fugiat consequat mollit cillum anim aliquip commodo laboris enim voluptate ullamco ipsum nostrud qui. Laboris duis cillum duis aliqua cupidatat nulla.",
        alternateDescription: null,
      },
      {
        name: "Cantata",
        title: "Ach wie fluchtig, ach wie nichtig BWV 26",
        author: "JS Bach",
        description:
          "Ea ex labore est consequat adipisicing consectetur ea duis mollit duis exercitation. Eu est reprehenderit dolor aute adipisicing occaecat veniam. Fugiat id tempor dolor incididunt. Pariatur commodo irure amet cupidatat laborum sint.",
        alternateDescription: null,
      },
    ],
    theme: {
      fontType: fontType.modern,
      type: themeType.one,
    },
  },
  {
    id: "5101a840-5606-4097-9b66-a567213ae915",
    name: "Can You Hear The Shape of a Drum?",
    series: "Bach, The Universe & Everything",
    time: "11.30",
    date: "21-11-21",
    venue: "King's Place",
    location: "London",
    imageSrc:
      "https://oae.co.uk/wp-content/uploads/2021/07/Shape-of-drum-artwork-fb-event-1250x825.jpg",
    imageAlt: "Event Poster",
    featuredEvent: false,
    content: [
      {
        heading:
          "If this is your first Bach, the Universe & Everything (BAE), welcome!",
        content:
          "We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced cantatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is in the spirit that we come together for a thought-provoking cantata and a talk from a leading scientist. <br> Professor Jon Chapman from the University of Oxford invites us to ponder the fleeting moment when sound waves reach our ears before they disappear. Using some careful calculations, Jon suggests that we might even be able to hear the shape of a drum.",
      },
      {
        heading: "Can you hear the shape of a Drum?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis augue et urna volutpat aliquam quis at ipsum. ",
      },
    ],
    schedule: [
      {
        name: "Welcome",
        title: null,
        author: null,
        description: null,
        alternateDescription: null,
      },
      {
        name: "Prelude",
        title: "Ach wie fluchtig, ach wie nichtig",
        author: "Georg Bohm",
        description: null,
        alternateDescription: null,
      },
      {
        name: "Polyphony",
        title: "Haec Dies",
        author: "William Byrd",
        description: null,
        alternateDescription: null,
      },
      {
        name: "Reading",
        title: "Beat! Beat! Drums!",
        author: "Walt Whitman",
        description: null,
        alternateDescription: null,
      },
      {
        name: "Cantata",
        title: "Ach wie fluchtig, ach wie nichtig BWV 26",
        author: "JS Bach",
        description: "",
        alternateDescription: "", // This is used for any lyric translations. It will create a tab in the component that the end-user can switch between.
      },
      {
        name: "Science",
        title: "Can You Hear The Shape of a Drum?",
        author: "Professor John Chapman",
        description: null,
        alternateDescription: null,
      },
      {
        name: "Closing",
        title: null,
        author: null,
        description: null,
        alternateDescription: null,
      },
      {
        name: "Postlude",
        title: "Darmstadt Ouverture TWV55:g4 'Gasconnade'",
        author: "Telemann",
        description: null,
        alternateDescription: null,
      },
    ],
    theme: {
      fontType: fontType.classic,
      type: themeType.two,
    },
  },
];

export let orchestra = [
  {
    id: "jon_chapman",
    name: "Professor Jon Chapman",
    category: "speaker",
    thumbnailSrc: "",
    thumbnailAlt: "",
    bio: "Jon Chapman is Chair in Mathematics and its Applications at the University of Oxford. His research interests centre on mathematical modelling and asymptotic analysis, with applications in industry and the physical and biological sciences (and drums of course).",
  },
  {
    id: "lisa_becznosiuk",
    name: "Lisa Becznosiuk",
    category: "player",
    instrument: "Principal Flute",
    instrumentType: "Woodwind",
    thumbnailSrc: "images/lisa_becznosiuk.png",
    thumbnailAlt: "Lisa Becznosiuk",
    bio: "Lisa is our Principal Flute. Born in England of Ukrainian/Irish descent Lisa Beznosiuk is one of the world’s leading performers on historical flutes. In her dual capacities as solo flautist and orchestral principal, she has travelled the world playing a wide range of 18th and 19th century repertoire with some of its finest interpreters. Whilst a modern flute student at Guildhall School of Music, London, she became fascinated by the sound world and the rich repertoire of the simple, wooden baroque traverso and took lessons with Stephen Preston. She also found herself busy playing harpsichord continuo – something which has been very useful in her teaching career. Lisa regularly receives enthusiastic critiques for her live and recorded performances. Her solo recordings include the complete sonatas of Bach and Handel, concertos by Vivaldi and Mozart and several versions of Bach’s Suite in B minor and Fifth Brandenburg Concerto. Her recording of Mozart’s Flute Quartets and Beethoven’s Serenade was performed on an original Grenser 4-keyed flute. As a valued principal player in some of Europe’s best period instrument orchestras she also features prominently on many discs of orchestral music from Bach to Brahms playing original and reproduction flutes from her collection. She is proud to have been amongst the group of musicians who got together in 1986 to found the Orchestra of the Age of Enlightenment. Lisa enjoys teaching and holds an international reputation as a flute teacher and coach. Many of her former students are successful and well-known flautists.",
  },
  {
    id: "katharina_spreckelsen",
    name: "Katharina Spreckelsen",
    category: "player",
    instrument: "Principal Oboe",
    instrumentType: "Woodwind",
    thumbnailSrc: "images/katharina_spreckelsen.png",
    thumbnailAlt: "Katharina Spreckelsen",
    bio: "",
  },
  {
    id: "margaret_faultless",
    name: "Margaret Faultless",
    category: "player",
    instrument: "Director, Violin",
    instrumentType: "String",
    thumbnailSrc: "images/margaret_faultless.png",
    thumbnailAlt: "Margaret Faultless",
    bio: "",
  },
  {
    id: "dominika_feher",
    name: "Dominika Feher",
    category: "player",
    instrument: "Viola",
    instrumentType: "String",
    thumbnailSrc: null,
    thumbnailAlt: null,
    bio: null,
  },
  {
    id: "jonathan_manson",
    name: "Jonathan Manson",
    category: "player",
    instrument: "Cello",
    instrumentType: "String",
    thumbnailSrc: "images/jonathan_manson.png",
    thumbnailAlt: "Jonathan Manson",
    bio: "",
  },
  {
    id: "zoe_brookshaw",
    name: "Zoe Brookshaw",
    vocals: "Soprano",
    category: "chorus",
    thumbnailSrc: null,
    thumbnailAlt: null,
    bio: "British soprano Zoe Brookshaw read Theology at Cambridge University where she was a choral Scholar at Trinity College. She was a member of of the Monteverdi Choir Apprentice Scheme and is currently a Rising Star of the Enlightenment. Her opera engagements include Euridice and La Musica L'Orfeo with I Fagiolini; Aerial Sprit The Indian Queen with Le Concert d'Astree...",
  },
  {
    id: "amy_carson",
    name: "Amy Carson",
    vocals: "Soprano",
    category: "chorus",
    thumbnailSrc: null,
    thumbnailAlt: null,
    bio: null,
  },
  {
    id: "david_clegg",
    name: "David Clegg",
    vocals: "Alto/Choir Director",
    category: "chorus",
    thumbnailSrc: null,
    thumbnailAlt: null,
    bio: null,
  },
  {
    id: "jeremy_budd",
    name: "Jeremy Budd",
    vocals: "Tenor",
    category: "chorus",
    thumbnailSrc: null,
    thumbnailAlt: null,
    bio: null,
  },
  {
    id: "jonathan_brown",
    name: "Jonathan Brown",
    vocals: "Bass",
    category: "chorus",
    thumbnailSrc: null,
    thumbnailAlt: null,
    bio: null,
  },
];
