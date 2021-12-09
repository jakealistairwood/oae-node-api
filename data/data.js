import { v4 as uuidv4 } from "uuid";

export let events = [
    {
        id: 1,
        name: "Infant Musicality",
        series: "Bach, The Universe & Everything",
        time: "11.30",
        date: "12-12-21",
        location: "King's Place, London",
        imageSrc: "images/placeholder.png",
        imageAlt: "Event Poster",
        uniqueURL: "",
        featuredEvent: true,
        intro: {
            heading:
                "If this is your first Bach, the Universe & Everything (BAE), welcome!",
            content:
                "We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced cantatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is in the spirit that we come together for a thought-provoking cantata and a talk from a leading scientist. <br> Professor Jon Chapman from the University of Oxford invites us to ponder the fleeting moment when sound waves reach our ears before they disappear. Using some careful calculations, Jon suggests that we might even be able to hear the shape of a drum.",
            quote: "A note from our Principal Keyboard, Steven Devine, about today’s programme:",
            quoteCaption: null,
        },
        schedule: [
            {
                name: "Welcome",
                title: null,
                author: null,
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
        ],
        orchestra: [{}],
        theme: {
            templateTheme: "Modern", // Modern or Classic. Modern uses a sans-serif font. (Poppins and PT Sans) Classic uses a serif (Playfair Display and Lato).
            primaryColor: "#899EE2", // Represents the banner color on the website. Usually takes the dominant color present in the image poster.
            accentColor: "#3c3c3c", // Accent Colour is used to style the call-to-action buttons.
        },
    },
    {
        id: 2,
        name: "Can You Hear The Shape of a Drum?",
        series: "Bach, The Universe & Everything",
        time: "11.30",
        date: "21-11-21",
        location: "King's Place, London",
        imageSrc: "images/placeholder.png",
        imageAlt: "Event Poster",
        uniqueURL: "", // This will be the URL that the QR code will redirect to
        featuredEvent: false,
        intro: {
            heading:
                "If this is your first Bach, the Universe & Everything (BAE), welcome!",
            content:
                "We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced cantatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is in the spirit that we come together for a thought-provoking cantata and a talk from a leading scientist. <br> Professor Jon Chapman from the University of Oxford invites us to ponder the fleeting moment when sound waves reach our ears before they disappear. Using some careful calculations, Jon suggests that we might even be able to hear the shape of a drum.",
            quote: "A note from our Principal Keyboard, Steven Devine, about today’s programme:",
            quoteCaption: null,
        },
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
        eventMembers: [],
        theme: {
            templateTheme: "Modern", // Modern or Classic. Modern uses a sans-serif font. (Poppins and PT Sans) Classic uses a serif (Playfair Display and Lato).
            primaryColor: "#F2774C", // Represents the banner color on the website. Usually takes the dominant color present in the image poster.
            accentColor: "#3c3c3c", // Accent Colour is used to style the call-to-action buttons.
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
