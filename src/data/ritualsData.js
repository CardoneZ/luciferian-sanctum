// Comprehensive Ritual Data from Michael W. Ford's "Apotheosis: The Ultimate Beginner's Guide to Luciferianism"

export const RITUALS = [
  {
    id: "self_illumination_9_steps",
    title: "Solitary Self-Illumination Ceremony",
    subtitle: "The 9 Steps of Luciferian Self-Dedication",
    category: "Initiation & Dedication",
    description: "A foundational self-dedication ceremony to formally declare intention to seek Power, Balance, Wisdom and Strength upon the Left-Hand Path by way of the Triad of the Morning Star.",
    defaultSigil: "sigil_lucifer",
    requiredTools: [
      { id: "candles", name: "5 Candles (2 Black, 1 Red, 1 White, 1 Blue)" },
      { id: "bell", name: "Hand Bell" },
      { id: "athame", name: "Dagger / Athame" },
      { id: "chalice", name: "Chalice with Elixir" },
      { id: "incense", name: "Dragon's Blood Incense" },
      { id: "oil", name: "Anointing Oil / Water" },
      { id: "sigil", name: "Sigil of Lucifer / ALB" }
    ],
    steps: [
      {
        index: 1,
        title: "Step 1: Light Incense & Candles",
        phase: "Preparation & Fire",
        actionType: "interactive_light",
        targetItems: ["incense", "candle_black_1", "candle_red", "candle_blue", "candle_white"],
        instruction: "Light the Dragon's Blood incense and the first 4 candles upon the altar (1 Black, 1 Red, 1 Blue, and 1 White). Reserve the second Black candle for Step 5 (representing the Black Flame of consciousness).",
        guidance: "Feel the scent of the incense permeating your space, separating this sanctum from the mundane world."
      },
      {
        index: 2,
        title: "Step 2: Ring Bell",
        phase: "Crossroads Consecration",
        actionType: "ring_bell",
        target: "bell",
        requiredRings: 12,
        quarters: ["North (3x)", "East (3x)", "South (3x)", "West (3x)"],
        instruction: "Ring the bell 3 times for each cardinal quarter (North, East, South, West) to establish yourself as the living center of the Crossroads.",
        guidance: "With each triple strike, proclaim internally that you are the nexus where the material and spiritual cross."
      },
      {
        index: 3,
        title: "Step 3: Announce Intent",
        phase: "Proclamation of Free Will",
        actionType: "recite",
        instruction: "Stand resolute before the altar. With steady voice and unbroken focus, recite your declaration of free will:",
        recitation: `I am formally and with my own free will announcing and affirming my intent and dedication to my self-initiation as a Luciferian. I invoke here the inner spark which ignites the Black Flame, affirming my will to a journey of awakening and actualization of inner power, knowledge and possibility.

I am aware that to become powerful and wise in this world, I must first break the chains of slave-mentality and superstitious religions. I am alone on this journey, as I am responsible for the heights I shall attain and the depths which I plant my foundations.

I will challenge myself in rejecting lies taught as vague truths and burn away the false safety-net of illusion and religion. I must seek insight from experience, applying knowledge I attain to then accumulate the inner and outer power I seek.

I will first begin to remove the weight of religious guilt, seeking the answers to questions long pondered and have the strength in mind to ascend to my attainable heights. I will honestly confront my fears, weaknesses and test my strengths consistently, this is the path to illumination.

I Awaken, Rise and Ascend!`,
        guidance: "Breathe deeply after the final utterance. Feel the resolve settle into your bones."
      },
      {
        index: 4,
        title: "Step 4: Oath of Self-Dedication",
        phase: "The Sacred Oath",
        actionType: "focus_sigil_recite",
        target: "sigil_lucifer",
        instruction: "Gaze directly into the Sigil of Lucifer, the ALB symbol, or your reflection in a ritual mirror. Recite the solemn oath:",
        recitation: `I stand before the symbol of the Forbidden Knowledge of Liberation, Illumination and Apotheosis. I enter this sacred brother and sisterhood of my own free will, strong of mind and prepared for the path.

I am aware that I must endeavor to Know Myself and accept the responsibility of the sacred gift of consciousness, called the Black Flame. I shall by solemn oath seek my own Liberation, confronting and overcoming weaknesses to then come into being bearing my own Black Light. In Illumination I shall open the gates of my inner depths of darkness, gathering the primal desires and passions which shall be balanced by my conscious mind. By the path of Liberation and Illumination, the fiery essence shall blaze with a Black Light and I will shape my Apotheosis.

The symbol of the Circle is the Ouroboros center of my Living Temple of Mind, Body and Spirit. I am the center of the Crossroads, X, around me the swirling chaos and darkness which all originates from. My substance is encircled by the abyssic dragon-serpent, Ouroboros. In the name of Leviathan, I command the dark waters and darkness to take form from my desire. I am not blind in the darkness, the torch I ignite shines upon the path I create before me. Every experience brings insight, knowledge transforms into wisdom and power.

The Forbidden Knowledge of the Empyrean, Chthonic and Infernal will be opened to me, may I have the wisdom to Know Myself through these ciphers and tests.

May I have the courage to reject religious and monotheistic chains of spirit and the words of the slave-masters of this world!

The Black Flame will blaze brighter for the thoughts, words and deeds which manifest my desires. I accept this responsibility and along with other Luciferians beside me, I stand alone and strong as the god (or goddess) of my own world. I will consciously build my temple of mind-body-spirit well in un-shakable foundations. Hail the Triad of the Morning Star, the path to be conquered in my Apotheosis.`,
        guidance: "Visualize the Ouroboros dragon forming a boundary of pure energy around you."
      },
      {
        index: 5,
        title: "Step 5: The Ceremony of Illumination",
        phase: "Ignition of the Black Flame",
        actionType: "light_from_white",
        targetItems: ["candle_black_flame"],
        instruction: "Take the second Black Candle and light its wick directly from the flame of the White Candle. Face the Sigil and proclaim the awakening of the Black Flame:",
        recitation: `In honor of the Eosphoros and Hesperos, the very Morning and Evening Star whose torch blazes in the darkness. I invoke the fire of Hecate Phosphorus, Shamsiel, Amon-Ra, Sathariel, Astarte, Sariel, Hauron, Azazel, Lilith, Set, Lucifer, Thoth, Shemiyaza, Aset, Asbeel, and Samael!

By the secret utterance of the Name of Power which is the Ram of Mendes, Banebdjedet (pronounced: BANE-da-jet), the spark of the forge begets light! Like the blood-stained fire of the Black Flame so ignited by Qayin I too open my eyes anew! May the host and legion of the angels of darkness and bringers of light be friendly unto me, for I proudly join in brotherhood with the radiance of the Morning Star!

Like Baal and Melqart I die and, in this moment, awaken reborn as a Luciferian radiating the divine luminous fire of the Black Flame!

In honor of the Morning and Evening Star, the Deific Mask of both Light and Darkness, I dedicate myself to my Liberation, Illumination and Apotheosis!

I shall strive to seek deeper beyond myth and symbol to understand the potential of divine and infernal power! The Black Flame shines a terrible and beautiful light from within! I bow to no one!

I stand before the Threshold and dare to step forward into the great doors of the Morning and Evening Star! Let the Torch between the Two Horns of Power, immortal Black Flame, shine forth from the Center of the Crossroad to the path I create before me. I am aware I create my own path and course in this life.

I seek to harness all my strengths and improve upon the weaknesses of my mind, body and spirit. I seek to gain the knowledge to establish a balance between my carnal lusts and spiritual aims from this moment forward.

I accept the responsibility in knowing that I alone am to honor for my victories and to blame for my future failures. I will seek to apply the knowledge and experience to attain new heights of wisdom, strength and mastery in this life.

With my thoughts, words and actions here and now will shape the world according to my desire.

I call forth the five elements: Air, Water, Fire, Earth and Spirit. I invoke the energy inherent in nature, within my subconscious mind to manifest as power in my earthly body. In Alchemical Union the Heavens and Chthonic realms of the Earth are joined, the spark of consciousness is illuminated, and we can become as gods. These elements are symbolic and literal tools in which I radiate and expand my influence and will in this life, both carnal and spiritual.`,
        guidance: "Notice how the black candle now bears light transferred from the white, unifying dark and light."
      },
      {
        index: 6,
        title: "Step 6: Anoint to Initiate",
        phase: "The Mark of the Crossroads",
        actionType: "draw_cross",
        instruction: "Dip your left hand into the oil or water and trace the cross 'X' upon your brow:",
        recitation: `This mark upon the brow is the symbol of freedom from restrictive belief, a mark of the crossroads of self-illumination. I stand in the Threshold of the Blazing Light of the Morning Star and the Black Light of the Evening Star.`,
        guidance: "Feel the cooling touch upon your forehead as an indelible seal of independence."
      },
      {
        index: 7,
        title: "Step 7: Recite & Drink",
        phase: "The Elixir of Apotheosis",
        actionType: "drink_chalice",
        target: "chalice",
        instruction: "Raise the Chalice containing your chosen elixir (water, wine, or juice) to eye level, recite, and drink deeply:",
        recitation: `Behold, the Chalice of Samael and Lilith, the elixir to honor and nourish my body as a vessel of my Spirit. I drink in honor of my courage and desire towards Apotheosis and to Shine outward the Illumination of the Black Flame. Hail the Adversary and my personal Daemon!`,
        guidance: "Drink until empty or satisfied. Savor the sensation flowing down into your physical temple."
      },
      {
        index: 8,
        title: "Step 8: Point the Athame",
        phase: "Proclamation of Sovereignty",
        actionType: "point_athame",
        target: "sigil_lucifer",
        instruction: "Grip the Athame firmly and point the tip of the blade directly toward the center of the Sigil of Lucifer:",
        recitation: `I stand here to proclaim my Coming into Being like Khepri, for I reject the servile religions long-mildewed in the decay of rancid superstition. The gift of luminous fire of forbidden knowledge passed to me from Azazel, Shemyaza, Prometheus, Asbeel, Kokabiel, Sathariel, Lilith, Penemue, Yequn, Samael, Hecate and Lucifer. Like Qayin I am mighty in my Black Flame and shall master my own Forge of Apotheosis.

I shall not accept the consensus of the herd and fall prey to the weakness of blind faith.

I will seek to be free from self-loathing by gaining the insight of how I may deny the guilt of the slave-mentality.

On the Four Pillars rests the arcane knowledge of the Luciferian: Power – Balance – Wisdom – Strength.

I am the living Temple of Lucifer, for I behold the Blazing Torch and cast the shadow of influence to those around me. The Light is within me. I shall use the 11 Points of Power as a foundation to attain heights of wisdom, power and joy to my life here and now!

Liberation, Illumination, Apotheosis!`,
        guidance: "Project your focused intent straight through the blade into the sigil's nexus."
      },
      {
        index: 9,
        title: "Step 9: Close & Ring Bell",
        phase: "Sealing the Rite",
        actionType: "close_ritual",
        requiredRings: 3,
        instruction: "Ring the hand bell 3 times toward the Sigil of Lucifer. Extinguish the candles in reverse order. Ground yourself with a meal or serene reflection.",
        guidance: "The ceremony is complete. You are awakened, illuminated, and self-consecrated."
      }
    ]
  },
  {
    id: "shadow_of_cain",
    title: "Casting the Shadow of Cain",
    subtitle: "A Ritual of Initiation & Witch-Father Assumption",
    category: "Cain Rites & Witchcraft",
    description: "Designed to imbibe the sorcerer with a focused current of being, a dedication to the path of Cainite Antinomianism and Self-Deification through the mask of Cain the Blacksmith.",
    defaultSigil: "circle_grand_luciferian",
    requiredTools: [
      { id: "candles", name: "3 Candles (Red center, Black on both sides)" },
      { id: "athame", name: "Athame" },
      { id: "circle", name: "Grand Luciferian Circle (Altar facing North)" }
    ],
    steps: [
      {
        index: 1,
        title: "Altar Orientation & Lighting",
        phase: "Setting the Northern Compass",
        actionType: "interactive_light",
        instruction: "Face North, the direction sacred to Cain, Ahriman, and Lilith. Light 3 candles on the altar: Red in the center, Black on both sides (representing the Trinity: Samael – Lilith – Cain).",
        guidance: "Stand inside the Grand Luciferian Circle with the apex pointing North."
      },
      {
        index: 2,
        title: "Quarters Invocation: North (Cain)",
        phase: "The Forge of Cain",
        actionType: "point_athame",
        direction: "North",
        recitation: `I call forth the infernal shadows which nourish my body and soul;
I invoke the circle which empowers my form of being,
From the North, I invoke the force of Cain, being my shadow of self
Let the Blackened Flame illuminate from this very Forge!`,
        guidance: "Point Athame to the North. Visualize the sparks of the ancient anvil."
      },
      {
        index: 3,
        title: "Quarters Invocation: West (Anubis)",
        phase: "Opener of the Way",
        actionType: "point_athame",
        direction: "West",
        recitation: `From the West, I invoke the force of Anubis, the Opener of the Way
Let the Violet Light of the Dead empower my Spirit!`,
        guidance: "Turn Athame to the West. Envision the violet spectral luminescence of the underworld."
      },
      {
        index: 4,
        title: "Quarters Invocation: South (Thoth)",
        phase: "Lamp of Wisdom",
        actionType: "point_athame",
        direction: "South",
        recitation: `From the South, I invoke the force of Thoth, whose lamp illuminates my path
Let the Fires of Wisdom and Self-Discovery Guide my path!`,
        guidance: "Turn Athame to the South. Envision the burning lantern of ancient intellect."
      },
      {
        index: 5,
        title: "Quarters Invocation: East (Set / Azal'ucel)",
        phase: "Fiery Djinn of Rebellion",
        actionType: "point_athame",
        direction: "East",
        recitation: `From the East, I invoke Set, being the fire and strength of spirit
Reveal thy essence as Azal’ucel, the Fiery Djinn of Change and Rebellion!`,
        guidance: "Turn Athame to the East. Feel the howling desert wind and solar lightning."
      },
      {
        index: 6,
        title: "Formula of Becoming (Facing North)",
        phase: "Assumption of the Witch-Father",
        actionType: "recite",
        instruction: "Face North again, standing firm as the living incarnation of Cain:",
        recitation: `Cain, bringer of the cauldron of change and self-transformation do protect my very being of self, that I may grow and ascend in our family born of Witch Blood pure.

I seek the coils of Leviathan, The Darkened Grave earth of Ahriman and the Dream plane of Lucifer. Allow the gates to open before me!

I encircle myself in the Dragon’s coils; the Beast of my father arises within!

I hold the Skull of Abel, being the vessel of my Familiar!
I hold the Hammer of the Forge, which I spark the Cunning Fire of Becoming!
My eyes hold the desert tales of ages forgotten; while my flesh fades my spirit is immortal!
I wear the crimson caul of my mother, Lilith, who speaks with me through dreams!
I carry the serpent’s skin of Azal’ucel, my Holy Spirit!
I am Cain, loner and Witch Soul of the Immortal Fire!

So it is done!`,
        guidance: "Feel the clay of the uninitiated shed away, replaced by the cunning fire of the blacksmith."
      }
    ]
  },
  {
    id: "summoning_cain_5_parts",
    title: "The Ritual of Summoning Cain",
    subtitle: "5-Part Evocation & Antinomian Transvaluation",
    category: "Cain Rites & Witchcraft",
    description: "The complete 5-part Rite of Summoning Cain: Opening the Gates of Hell, The Lord's Prayer Reversed, Enfleshing the Daemonic & Divine, The Mark of Cain, and The Embodiment of Cain.",
    defaultSigil: "circle_grand_luciferian",
    requiredTools: [
      { id: "circle", name: "Grand Luciferian Circle" },
      { id: "black_candle", name: "1 Center Black Flame Candle" },
      { id: "athame", name: "Athame" },
      { id: "chalice", name: "Chalice with symbolic Blood of Abel" }
    ],
    steps: [
      {
        index: 1,
        title: "Part One: Announcing & Opening the Gates of Hell",
        phase: "Opening the Threshold",
        actionType: "light_and_recite",
        instruction: "Light the Black Candle in the center of the altar. Hold the Athame blade toward the altar and proclaim:",
        recitation: `Hekas, Hekas, Este Bebeloi!
Zazas Zazas Nasatanada Zazas!
In the Circle of Cain does the Devil take flesh
By the Hammer, Skull-fetish and Forked-Stave do I affirm my path!
Weave thy magick in the Sun and the Moon, both shadows shall cast
With thy bride are Dragon-Children Born
When Lilith spreads her bloodstained legs,
In Samael’s Spirit, unite in Lilith’s Nocturnal Spirit,
Eternal in Lucifer’s Illuminated Essence, Blazing Angel and Deity shone!
Leviathan’s abyssic darkness gives rise to the Eyelids of Dawn!`,
        phonetics: "Hekas, Hekas, Este Bebeloi: 'HEH-kas, HEH-kas, ES-teh beh-beh-LOY' (Away, away, ye profane!)",
        guidance: "Feel the threshold of the Abyss creak open wide."
      },
      {
        index: 2,
        title: "Part Two: The Lord's Prayer Reversed",
        phase: "Antinomian Overturning",
        actionType: "recite_phonetic",
        instruction: "Intone phonetically backwards with slow, hypnotic cadence, visualizing the embodiment of the Adversary rising within you:",
        recitation: `Nema! Livee morf su revilled tub
Noishaytpmet ootni ton suh deel
Suh tshaiga sapsert tath yeth
Vigrawf eu za sesapsert rua suh vigrawf.
Derb ilaid rua yed sith suh vig
Neveh ni si za thre ni
Nud eeb liw eyth
Muck mod-ngik eyth
Main eyth eeb dwohlah
Neveh ni tra chioo
Rertharf rua!`,
        phonetics: "Recite slowly, rolling every syllable to unravel the psychological programming of dogma.",
        guidance: "This ancient antinomian formula reverses psychic conditioning, setting the conscious will free."
      },
      {
        index: 3,
        title: "Part Three: Enfleshing the Daemonic & Divine",
        phase: "The 7 Watchers & Elphame Shadows",
        actionType: "recite_vibrate",
        instruction: "Summon the spirit born of fire and darkness, calling upon the Watchers of the Forge:",
        recitation: `Tubal-Cain, Forge of Blackened Fire
AZAZEL AZZA UZZA!
O’ Cain, spirit born of fire and darkness, shadowed initiator!
O’ Cain, who wanders the earth from deserts to forests –
Brought forth from the womb, flesh-born son of the Dragon and the Harlot Goddess, mother of Witch Blood.
Spirit and Lord of the Blackened Fires of the Forge, who tasted the blood mark as an X upon the brow, whose mark is also the darkened ink of the well of the Peacocks scribe.
O’ Cain, who was awakened by the Skull bearing Omen of Abel!
Lord of Beasts and initiator of sorcerous fire, werewolf – shapeshifter!
Let me see within and beyond the Caul of Lilith’s veil!
Father and brother of the caves wherein are ancient shades,
Who hold the book of dreaming which is the primal word of the serpent-Cain, Lord of Beasts and transformation,
I summon thee, invocate thee within –
Shall your lightning strike upon the forge and illuminate my spirit!
SHEMYAZA, SHAMSIEL, KOKABIEL, ARMAROS, ARAQIEL, GADREEL, SARIEL!
Horned God bring Elphame Shadows before me!`,
        guidance: "Envision the lightning bolt striking the anvil in your heart."
      },
      {
        index: 4,
        title: "Part Four: The Mark of Cain",
        phase: "The Covenant & Brow Mark",
        actionType: "draw_cross",
        instruction: "Take your left hand; mark an 'X' for the crossroads upon your forehead with oil, water, or symbolic blood. Proclaim the Medieval Witch Oath:",
        recitation: `I deny God and all Religion
I curse, blaspheme, and provoke God with all despite
I give my faith to the Devel, and my worship and offer sacrifice to him
I do solemnly vow and promise all my progeny unto the Devel
I swear to the Devel to bring as many into his society as I can
I will always swear in the name of the Devel.
My brow marked in blood, horned walker of worlds!
Strike now with thy hammer, shall the Eye of the Serpent open forth!
Unveiled in the Nightside do I come forth!
That I walk the path of Dragon born,
Caster of the first circle of emerald and crimson flame.
Gatekeeper and Horned shape shifter – open forth the fiery path!
Illuminate the blackened flame!
Shall I awake the serpent born in the Devil’s Skin –
CAIN I SUMMON THEE!`,
        guidance: "The word 'Devel' is the archaic middle English witch spelling, evoking primal folklore."
      },
      {
        index: 5,
        title: "Part Five: The Formula of the Embodiment of Cain",
        phase: "Drinking the Elixir & Awakening",
        actionType: "drink_chalice",
        instruction: "Raise the chalice of elixir (symbolic of the blood of Abel), recite the climax, and drink deeply:",
        recitation: `Tubal - Cain, horned lord and first of witches’ blood
O Cain, who with the hands of the devil do bless
The bone charms under the moon
Nomadic daemon that as first born is illuminated
With the fire of Samael, thy father
From the forge does the spark rise!
Those who dream unto thy path may become through it
Thy bloodletter, which struck the flesh clay of Abel
Is blessed with the blood dripping kiss of the serpent's tongue
The skull in thy hands a place of dwelling
From where the shades of the tomb do gather
In the Devil's name I conjure thee:
Tubal-Cain, Azazel, Gadreel, Uzza, Lilith, Naamah!
From the deserts, from the forests, shall I become in your name...
I drink in honor of the Horned One
I drink the blood of Abel
I become as the Beast on earth
Hail thou self, O Cain awakened!`,
        guidance: "Drink from the chalice. You have transformed from the clay of Abel into the immortal spark of Cain."
      }
    ]
  },
  {
    id: "circle_adversary",
    title: "Casting the Circle of the Adversary",
    subtitle: "Invoking the 8 Demon Kings of the Directions",
    category: "Circle Castings",
    description: "A comprehensive circle casting invoking the demon kings of the grimoire traditions across the 8 directions of space, culminating in the Azothoz formula.",
    defaultSigil: "circle_adversary",
    requiredTools: [
      { id: "athame", name: "Athame" },
      { id: "altar", name: "Altar with 4 Inner Kings" }
    ],
    steps: [
      {
        index: 1,
        title: "Opening the Circle (Facing North-West)",
        phase: "North-West: Lilith",
        actionType: "point_athame",
        direction: "North-West",
        recitation: `Hail forces of darkness and spirits dwelling in Tartarus!
I cast now the circle of my fiery design as Azazel brings the creative and destructive fires of Hell unto where he goes forth.
To the North-West I summon ancient goddess Lilith, elder mother of horrors!`,
        guidance: "Point Athame NW. Feel the chilling wind of the mother of nocturnal spirits."
      },
      {
        index: 2,
        title: "The West: Leviathan, Azhael, Ariton",
        phase: "West: Leviathan",
        actionType: "point_athame",
        direction: "West",
        recitation: `To the West I summon you Leviathan, Azhael, Ariton.`,
        guidance: "Point Athame West. Feel the dark oceanic abyss and primordial waters."
      },
      {
        index: 3,
        title: "The South-West: Aggereth",
        phase: "South-West: Aggereth",
        actionType: "point_athame",
        direction: "South-West",
        recitation: `To the South-West I summon you Aggereth, Daughter of Machaloth.`,
        guidance: "Point Athame SW. Call upon the dancing night shadows."
      },
      {
        index: 4,
        title: "The South: Shaitan, Azhazael, Paimon",
        phase: "South: Shaitan",
        actionType: "point_athame",
        direction: "South",
        recitation: `To the South I summon you Shaitan, named Satan, Great Adversary!
I summon Azhazael and Paimon, King who answers to Lucifer’s call!`,
        guidance: "Point Athame South. The blistering desert heat and solar fire ignite."
      },
      {
        index: 5,
        title: "The South-East: Abaddon (Apollyon)",
        phase: "South-East: Abaddon",
        actionType: "point_athame",
        direction: "South-East",
        recitation: `To the South-East I summon Abaddon, named Apollyon, the Ruler of the Bottomless Pit who is the Unnamable One sending forth locust-devils to destroy our enemies!`,
        guidance: "Point Athame SE. The deep roar of the bottomless vortex awakens."
      },
      {
        index: 6,
        title: "The East: Lucifer, Samael, Oriens",
        phase: "East: Lucifer-Ashtar",
        actionType: "point_athame",
        direction: "East",
        recitation: `To the East I summon Lucifer, named Ashtar, Bringer of Light; I summon forth Samael and Oriens: Great and Terrible Demon-Kings who inspire the strong and cunning and curse the weak and ignorant!
May I rise as the brightest star in the heavens!`,
        guidance: "Point Athame East. The dawn star bursts with electric black-gold radiance."
      },
      {
        index: 7,
        title: "The North-East: Lilith / Asmodai",
        phase: "North-East: Lilith & Asmodai",
        actionType: "point_athame",
        direction: "North-East",
        recitation: `To the North-East I summon Lilith, wife of Asmodai; night-spirit and wind-demon who is both beautiful and deadly!`,
        guidance: "Point Athame NE. The whirlwind of passion and serpentine mastery."
      },
      {
        index: 8,
        title: "The North: Amaymon, Mahazhael, Belial",
        phase: "North: Belial & Amaymon",
        actionType: "point_athame",
        direction: "North",
        recitation: `To the North I summon forth Amaymon, Terrible King of dark spirits, devouring one of Blackened Flame!
I summon forth Mahazhael and Belial, the Lord of the Earth!`,
        guidance: "Point Athame North. The unyielding mountain of terrestrial dominion."
      },
      {
        index: 9,
        title: "Elevating the Circle & Azothoz",
        phase: "The Center Pandemonium",
        actionType: "recite_climax",
        recitation: `In the circle of shadows, I awaken with the fiery essence of Samael and Asmodai, conquering Kings of old!
Let my circle be thrice-elevated in the Infernal and Empyrean realms!

Pandemonium has Risen within My Kingdom!
Ouroboros is Complete, Azothoz I utter as a Name of Power!`,
        guidance: "The 8-fold circle is fully sealed. You stand as the Sovereign Emperor within your temple."
      }
    ]
  },
  {
    id: "algol_azhdeha",
    title: "The Algol Ritual of Azhdeha",
    subtitle: "Raising the 7 Heads of the Primal Dragon & the 8th Aeshma",
    category: "Chaos & Persian Sorcery",
    description: "A potent ceremony utilizing the 8-pointed Algol Chaos Star with the Inverted Pentagram to invoke the ArchDaevas of Ahriman and the 8th power Aeshma.",
    defaultSigil: "sigil_algol",
    requiredTools: [
      { id: "sigil_algol", name: "Algol Chaos Tapestry / Sigil" },
      { id: "athame", name: "Athame" }
    ],
    steps: [
      {
        index: 1,
        title: "Vibration of Algol",
        phase: "The Demon's Head",
        actionType: "vibrate_chant",
        vibrationsCount: 1,
        instruction: "Face the Algol Star. Vibrate with low resonant force:",
        recitation: `Al-Ghul-Rosh-ha-Satan, ALGOL!`,
        phonetics: "Al-Ghul-Rosh-ha-Satan: 'AHL-ghool ROHSH hah sah-TAHN, ahl-GOHL'",
        guidance: "Envision the violent, pulsing binary star flashing between blood red and violet in deep space."
      },
      {
        index: 2,
        title: "Summoning the ArchDaevas of Dozak",
        phase: "The 7 Heads of the Dragon",
        actionType: "recite",
        recitation: `May the 7 Heads of Azhdeha, Primal Dragon encircle my essence!
I summon the ArchDaevas of Angra Mainyu, Ahriman the Darkness personified!

Taprev, Zairich, Naonghaitha, Indra, Savar, Akoman and Ahriman stir from the infernal depths of Dozak, rise in me and open your eyes from my purified vessel as AZOTHOZ!

With the Mask of Aeshma, the 8th shall guide my powers within this world! Behold! The blazing torches of stellar and fallen light which flash as fires become as my eyes which hold vision beyond the veil of this fleshly life, so may the shades of the dead and flying shadows be known to me!`,
        guidance: "Each point of the Chaos Star represents a Fallen Angel or ArchDaeva uniting inside your body."
      },
      {
        index: 3,
        title: "The 5 Points of the Inverted Pentagram",
        phase: "The Pentagram Formula",
        actionType: "point_5_points",
        instruction: "Turn Athame to the 5 points: North-West, South-West, South, South-East, North-East. Vibrate the sacred formula:",
        recitation: `SAMAEL - LILITH - MAHAZAEL - AZAZEL - BELIAL

By the Lightning Bolt from which Great Power and Knowledge was passed down, may the Stars open the Gates to the Deified Dead and the Corpse-Ruler of Sheol; may the Stars ignite the Black Flame and the Apotheosis of the Devil Made Flesh and as Helios-Oriens be made manifest within my sacred temple of Mind-Body-Spirit!`,
        guidance: "Visualize the inverted pentagram blazing at the core of the 8-pointed star."
      },
      {
        index: 4,
        title: "The Great Dragon Gochihr & Aeshma",
        phase: "Directing the Powers of Darkness",
        actionType: "recite_climax",
        recitation: `Hail to you Gochihr-Azhdeha, great Dragon who eclipses the light, encircle me in shadow and timeless being.
By the Mountains of the North, from where the Daevas fly forth, bestow your powers unto me!

Taprev, Zairich, Naonghaitha, Indra, Savar, Akoman and Ahriman!
Into the Sigil of Adversarial Darkness and Black Flame I draw out and send forth the energy of your Abyss!

Aeshma I invoke, to wield and direct the 7 Powers of Darkness!
So it is done!`,
        guidance: "Raise the Athame from the earth to the heavens. The rite of Azhdeha is accomplished."
      }
    ]
  },
  {
    id: "circle_dekadarchs",
    title: "Casting the Circle of the Dekadarchs",
    subtitle: "Summoning Forth the Fiery Irin We-Qadishin (The Watchers)",
    category: "High Luciferian Magick",
    description: "One of the most powerful and intense formulas for Higher Luciferian Magick and Apotheosis, summoning the 200 Fallen Angels of Mount Hermon.",
    defaultSigil: "circle_dekadarchs",
    requiredTools: [
      { id: "circle", name: "Circle of the Dekadarchs (12 points)" },
      { id: "incense", name: "Incense for Fumigation" },
      { id: "chalice", name: "Chalice of Envenomed Elixir" },
      { id: "athame", name: "Athame" }
    ],
    steps: [
      {
        index: 1,
        title: "Calling the Irin We-Qadishin",
        phase: "The Oath of Mount Hermon",
        actionType: "recite",
        recitation: `In the name of those who by the Oath of Power, descended to Mount Hermon and fiery spirit congealed into fleshly form, I summon the mighty rebel angels of ancient lore. This very Circle is my foundation, of Hermon; the forbidden Temple and Altar of the Watchers. Let this Holy Rite begin!

I invoke and summon forth the Dekadarchs, hear me O luminous angels, the Irin we-qadishin. I lift my voice to the heights beyond the limits of cosmos and time, with honor and the Names of Power to the Celestial Spirits! I invoke and call you forth, Irin we-qadishin whose Cult of Fallen Angels is alive in me! Hear my words and mighty voice which with respect transcends the earthly barriers into the fiery Celestial abodes wherein the cycles of time do not restrict or decay!

From Dudael to Mountains and to the heights of the Kingdom of Air, Watchers and Mighty Ones, rise and encircle me in convocation of the Temple of Flesh, Mind and Spirit. May my Daemon have silent communion with the fiery Watchers of vast power.

I summon and invoke the Dekadarchs, illustrious Irin we-qadishin!`,
        guidance: "Hear the beating of celestial wings of fire over Mount Hermon."
      },
      {
        index: 2,
        title: "The 19 Names of the Dekadarch Chiefs",
        phase: "The Chiefs of the Watchers",
        actionType: "recite",
        recitation: `Hear the Names:
Armaros, Turel, Zaqiel, Batarel, Asael, Satarel, Baraqijal, Ezeqeel, Danel, Ananel, Ramiel, Jomjael, Tamiel, Samsapeel, Kokabiel, Sariel, Rameel, Arakiba, Semiazaz!

By the Ouroboros Circle of eternity, Leviathan’s Scales and Twisting Spears I so walk.

AZAZEL, by your Sacred and affable Name, Strong and Powerful deity of many faces, be the vanguard of your blessings of forbidden knowledge and your gift of the Black Flame!`,
        guidance: "Vibrate each name with reverence as a brother and sister in the Black Flame."
      },
      {
        index: 3,
        title: "The 20 Words of Power (Vibrate 7 Times)",
        phase: "The 7 Vibrations of the Bene Elohim",
        actionType: "vibrate_chant",
        vibrationsCount: 7,
        instruction: "Vibrate 7 times, feeling the vibration echo through your subtle body:",
        recitation: `SEMHAZAH, AR’TEQIF, RAMT’EL, KOKAB’EL, UR’EL, RA’M’EL, DAN’EL, ZIQ’EL, BARAQ’EL, ASA’EL, HERMONI, MATR’EL, ANAN’EL, SITHWA’EL, SIMS’EL, SAHR’EL, TAMM’EL, TUR’EL, YAMM’EL, ZEHOR’EL!`,
        guidance: "Feel the Nephilim giant spirit awakening within your earthly clay."
      },
      {
        index: 4,
        title: "Fumigations to the Teachers of Forbidden Arts",
        phase: "Fumigation & Offerings",
        actionType: "incense_chalice",
        recitation: `Fumigation to Asbeel, whose plan guided the Watchers to the Left-Hand Path, that you joined your Spirits with the daughters of men.

Fumigation to Gadreel, who showed the weapons of death to the children of men: the shield, the breastplate and the sword for slaughter! Hail Gadreel, who gave the knowledge of all the weapons of death to us!

Fumigation to Penume, who taught us the bitter and the sweet, showing us all the forbidden secrets of knowledge and the Power in the Utterance of Names! Penume who taught the art of writing with ink and paper, that we may scribe our desires and visions to become manifest in this world!

I drink from the Chalice of the Envenomed Elixir of the Serpent; may I have the courage to the Black Light of Self-Immolation in Divine Flame and Radiance!
By the Path of the Angels descend as gift-bringers and illuminators of humanity!`,
        guidance: "Drink from the Chalice. Point Athame to North, East, South, and West to seal."
      }
    ]
  },
  {
    id: "infernal_union",
    title: "Ritual of Infernal Union",
    subtitle: "The Alchemical Conjunction of Samael & Lilith as Baphomet",
    category: "Alchemical & High Theurgy",
    description: "A solitary ceremony of the union of opposites: uniting the solar fire of Samael and lunar water of Lilith within oneself to be reborn as Baphomet.",
    defaultSigil: "circle_grand_luciferian",
    requiredTools: [
      { id: "black_robe", name: "Black Robe" },
      { id: "candles", name: "2 Candles (Black & Red)" },
      { id: "chalice", name: "Chalice" },
      { id: "athame", name: "Athame & Wand" }
    ],
    steps: [
      {
        index: 1,
        title: "Statement of Intent & Hellmouth Vibration",
        phase: "Opening the Mouth of Hell",
        actionType: "vibrate_chant",
        vibrationsCount: 9,
        instruction: "Vibrate 9 times facing the altar while visualizing the Mouth of Hell opening forth:",
        recitation: `It is my Will to invoke the Black Fires of Samael and Lilith, so that by union of Both within myself, I shall become reborn as Baphomet.

Zazas, Zazas, Nasatanada Zazas! (Vibrate 9x)`,
        guidance: "Feel the vibrations shaking the foundations of the astral realm."
      },
      {
        index: 2,
        title: "Calling the 4 Elemental Towers",
        phase: "The 4 Towers",
        actionType: "point_athame",
        instruction: "Call upon the Four Towers in each direction:",
        recitation: `[Facing South]:
Samael, Lord of the Southern Tower, Djinn Father of fire and desert sands, I do summon thee forth to witness my rites of awakening and union. I command the fires of the Abyss to protect my circle, let the gates be opened!

[Facing East]:
Lucifer-Phosphorus, Lord of the Eastern Tower, bearer of the black flame, lord of light and Promethean flame, I do summon thee forth to witness my rites of awakening and union. I command the forces of Air and the astral plane send thy Luciferian elementals to guard this circle.

[Facing West]:
Leviathan-Ourabouris, Lord of the Western Tower, who beholds the Black Flame hidden in the depths! Great encircling one, who holds the keys to immortality! I summon the forces of Water and the Sea to witness my rites of awakening and union. Be watchful and protect this circle!

[Facing North]:
Belial, Lord of the Northern Tower, who fell from heaven to be as God itself, who accepts no master - I do summon thee forth to witness my rites of awakening and union. I command the forces of the earth to protect this circle!`,
        guidance: "Envision each force standing guard at the perimeter of your temple."
      },
      {
        index: 3,
        title: "Invocation of Samael (Solar Force)",
        phase: "Solar Fire of the Beast 666",
        actionType: "point_athame",
        instruction: "Take the Athame, envision the radiant solar dragon-angel Samael, and recite:",
        recitation: `Solar force of fire and inspiration, which from all life emerges as its own being; I do summon thee, Samael from the depths of my soul, my very being, to emerge in my consciousness as life and solar force!

Do manifest and hear my words, which are meant as an invocation of Sorath, the Beast 666 which is your secret name. Samael, Satan do manifest unto me. Let me guide the union of opposites!`,
        guidance: "Allow the fiery gold-crimson solar energy to intertwine with your conscious mind."
      },
      {
        index: 4,
        title: "Invocation of Lilith (Lunar Force)",
        phase: "The Lunar Blood of Babalon",
        actionType: "drink_chalice",
        instruction: "Take the Cup and drink deeply. Hold the Wand, face the altar, and call Lilith:",
        recitation: `Lunar force of water and dream walking, which you shall manifest my consciousness from the desert caves of the Red Sea, I do summon you, invoke you within me. Bring unto me your mysteries of your children, the Lilitu, that I may hold the arcana of sexual union and vampiric manifestation. Enter me, mother of the path of the wise; reveal your bestial and angelic essence to me. Do manifest through me now, join in union with your mate, Samael. Join through me the union of Opposites!

She howls upon the desert winds, as the moon brings the cloak of Darkness. The shadows radiate her essence, blood drinker, devouress of the sleeping, fornicate in the spilt veins of those who come to you!

Lilith, LA-KAL-IL-LI-KA, I invoke thee by your sacred names:
Abeko, Batna, Abito, Eilo, Amizo, Ita, Izorpo, Kali, Kea, Kokos, Odam, Patrota, Podo, Partasah, Satrina, Talto, Lilith!

And by your other names of calling:
Abyzu, Ailo, Alu, Abro, Amiz, Amizu, Ardad lili, Avitu, Bituah, Gelou, Gallu, Gilou, Ik, Kalee, Ils, Kakash, Lamassu, Kema, Partashah, Petrota, Pods, Raphi, Satrinah, Thiltho, Zahriel, Zefonith, Lilith!

By the words of Power:
BABALON-BAL-BIN-ABRAFT, ASAL-ON-AI, ATHOR-E-BAL-O, ERESHKIGAL!

I offer my essence as sacrifice, a drop of my blood. Witch Queen of the infernal Sabbat! I do invoke thee, horned moon which spills and drinks the lunar blood, she who fornicates with Daemons, I do seek your kiss, I give you substance now from which you shall enter me! Lilith, beautiful mother, giver of life and desire, I do summon thee forth!`,
        guidance: "Feel the silvery cold nocturnal current mingling with the solar fire inside your heart."
      },
      {
        index: 5,
        title: "Samael's Words of Power & The Leviathan Unsealing",
        phase: "MRIODOM & Alchemical Conjunction",
        actionType: "recite_climax",
        recitation: `Face now the Altar, envision the Red Dragon who changes into the form of the fallen Seraphim, Samael:
Whom fell from heavenly sunlight to have knowledge of the darkness, fallen seraph of fire and the sun, I do invoke thee, Samael. To you, who has walked the earth for thousands of years, from body to body, now shall you spread your light unto humanity.
Angel, known as Shemna’il, who is Nasiru’d-Din, I do invoke thee, solar force, known as Sorath, Beast whose number is of the Sun itself, I do summon thee forth! Serpent Angel, who came by the astral plane with Melek Taaus, known as Shaitan, Lucifer – the Brothers of Light. Come forth now through me, manifest in my being, we shall join as one.

By the names of power:
AR-O-GO-GO-RU-ABRAO, PUR, IAFTH, OO, AR, THIAF, A-THELE-BER-SET, PHITHETA-SOE!!
I summon thee, revealed as Set, whom is the sun and darkness in union!

[Focus upon Dragon-Angel Leviathan]:
Force of the Subconscious, whom I call the outside, I do summon thee to bring The Sun and the Moon, Samael and Lilith, in glorious union! I do Will this union within myself, that I may speak the words unheard from the profane, and my Will manifest through the gates of Apep!

Hear the word of power:
MRIODOM!!

Ya! Zat-I Shaitan! So it is done.`,
        guidance: "The fire and water unite. You are crowned as Baphomet, the Living Temple of the Adversary."
      }
    ]
  }
];

export const POINTS_OF_POWER = [
  {
    number: 1,
    title: "Light of Intellect & Wisdom",
    axiom: "Lucifer represents the light of intellect, wisdom and power unique to the individual with the courage to ascend to this responsibility.",
    commentary: "As individuals, we are accountable for all our actions. Our thoughts, words and actions have consequences and Luciferians strive to make good choices which support the goals we design. Responsibility begins and ends with the individual alone."
  },
  {
    number: 2,
    title: "The Adversary as Spiritual Rebel",
    axiom: "The symbol of the Adversary is that of the self-liberator and spiritual rebel who inspires self-evolution.",
    commentary: "The Luciferian seeks to master this life and find not only pleasure and enjoyment here and now, but also to continually evolve and refine consciousness. We recognize that one must know both creative and destructive aspects in nature."
  },
  {
    number: 3,
    title: "Balanced Torch Bearer of Venus",
    axiom: "Lucifer represents the balanced torch bearer of Venus: The Light Bringer as the Morning Star and the Night Bringer as the Evening Star.",
    commentary: "Venus has two specific phases: Eosphoros (Dawn Bringer) and Hesperos (Dusk/Night Bringer). Lucifer unites love and war, creation and destruction, bringing self-knowledge to govern impulses with balance."
  },
  {
    number: 4,
    title: "Spark of Consciousness & Accountability",
    axiom: "The Adversary symbolizes the spark of consciousness which questions everything, manifesting the individualistic path with accountability only to the self.",
    commentary: "Luciferians reject blind faith. The 'spark' of divine consciousness is the beginning of the Black Flame. We do not surrender our minds to dogmas; we test, validate, and shape reality by willed focus."
  },
  {
    number: 5,
    title: "Mastering the Darkness Within",
    axiom: "The fall of Lucifer symbolizes the liberation of the mind from the slave-mentality and the courage to explore and master the darkness within. One may not offer the illumination of the Morning Star without the wisdom of the darkness within.",
    commentary: "Humans evolved from primal predators. Our dark and primal instincts are the seat of our passions, which must be guided and balanced by our thoughtful, articulate minds."
  },
  {
    number: 6,
    title: "Rebellion with Purpose",
    axiom: "The Adversary represents rebellion with purpose: wisdom, strength and power.",
    commentary: "Do not blindly rebel against structures just to be chaotic. Use the laws and culture of your land to your strategic advantage, achieving mastery and creating change from within."
  },
  {
    number: 7,
    title: "Healthy Self-Love & The Living Temple",
    axiom: "Lucifer represents the courage and fortitude to acquire healthy self-love, leading to the responsibility of honoring your temple of mind, body and spirit.",
    commentary: "Becoming your own god is to recognize that you are the most important entity in your life. Respect your mind and body; avoid chemicals or toxic emotions that induce decay and weakness."
  },
  {
    number: 8,
    title: "Self-Deification & Living Beyond Mortality",
    axiom: "To become your own god you must have the wisdom and strength to govern and guide your life as if your mind is to survive beyond the mortal body.",
    commentary: "Live and continually seek self-development. A strong, crystallized mind has the greatest potential to leave an indelible mark on reality and transcend physical limitations."
  },
  {
    number: 9,
    title: "Indulgence with Restraint",
    axiom: "Indulgence with restraint, love for the deserving and disdain for those undeserving.",
    commentary: "Control your empathy; do not squander it on ungrateful parasites. Reserve true love, compassion, and loyalty for those who earn it and honor the mutual balance of respect."
  },
  {
    number: 10,
    title: "Awareness of Natural Selfishness",
    axiom: "Lucifer represents the insight that every act, no matter if perceived as selfless, is at core a selfish act.",
    commentary: "Even acts of benevolence yield psychological rewards. Accept this truth without hypocritical delusion, and make conscious choices that empower both yourself and your chosen allies."
  },
  {
    number: 11,
    title: "Illuminating Self-Determined Potential",
    axiom: "To become a god is to fully understand that you possess the power to create and sustain your path in life and illuminate the light of self-determined potential.",
    commentary: "If you don't take responsibility for yourself, no external god or demon will. You are the architect of your own destiny, the living flame of Apotheosis."
  }
];

export const FOUR_PILLARS = [
  {
    id: "power",
    title: "Power",
    subtitle: "Command of Will & Energy",
    description: "The willed direction of thought, word, and action to compel meaningful change in both the subjective and objective realms."
  },
  {
    id: "balance",
    title: "Balance",
    subtitle: "Union of Darkness & Light",
    description: "The equilibrium between the primal, subterranean instincts of the beast and the articulated, enlightened intellect of the divine."
  },
  {
    id: "wisdom",
    title: "Wisdom",
    subtitle: "Insight Gained Through Ordeals",
    description: "Knowledge transformed through personal trial, observation, and validation into unshakeable self-sovereignty."
  },
  {
    id: "strength",
    title: "Strength",
    subtitle: "Fortitude of the Autonomous Spirit",
    description: "The iron resolve that refuses victimhood, overcomes obstacles, and commands self-excellence."
  }
];

export const TRIAD_MORNING_STAR = [
  {
    id: "liberation",
    title: "Liberation",
    symbol: "Broken Chain",
    description: "The conscious act of identifying and shattering restrictive dogmas, guilt-complexes, and herd-mentality."
  },
  {
    id: "illumination",
    title: "Illumination",
    symbol: "The Blazing Torch",
    description: "The awakening of the inner Black Flame through the synthesis of Will, Desire, and Belief with strategic knowledge."
  },
  {
    id: "apotheosis",
    title: "Apotheosis",
    symbol: "The Awakened Eye",
    description: "The ongoing, perpetual deification of the individual—becoming the sovereign god or goddess of one's own world."
  }
];

export const GLOSSARY_TERMS = [
  { term: "Adversary", definition: "The motivating force which causes nature and humanity to adapt, evolve and either survive or perish. A powerful current of initiatory energy within the unconscious." },
  { term: "Ahrimanic Yoga", definition: "A meditation and energy focusing of each Chakra Point to achieve mastery over the body and disunion with the herd, establishing absolute personal sovereignty." },
  { term: "Algol", definition: "Derived from Arabic 'Al Ra's al Ghul' (The Demon's Head) or Hebrew 'Rosh ha Shaitan'. An 8-pointed Chaos Star with an Inverted Pentagram at the center, representing the acasual abyss and the eye of Set/Ahriman." },
  { term: "Apomeilixis", definition: "Greek method of appeasing deities and demons by burning incense during the night hours or astrological moments of goetic summoning." },
  { term: "Athame", definition: "From Arabic 'adhdhame' (blood-letter). The ritual dagger used to direct will, shape astral currents, and cast circles; sacred to Azazel and Tubal-Cain." },
  { term: "Azothoz", definition: "Reversal of Azoth (Alpha & Omega), a word-sigil signifying self-initiation, the complete essence of the Luciferian, and the awakening of the Black Flame within the Ouroboros circle." },
  { term: "Baphomet", definition: "From 'abufihamat' meaning 'The Father of Understanding' (FHM root = black/understanding). The divine composite archetype of the fully initiated Black Adept." },
  { term: "Black Flame", definition: "The spark of divine consciousness, individual self-awareness, and willpower gifted to humanity by the fallen angels (Lucifer, Azazel, Samael)." },
  { term: "Deific Mask", definition: "A deity, demon, or mythological spirit viewed as a packaged symbol or archetypal current of specific primal or cosmic energy to be invoked by the adept." },
  { term: "Evocation", definition: "Calling and encircling an external spirit or energy into a defined boundary (such as the Triangle of Evocation) to bind it to an object or command a specific task." },
  { term: "Invocation", definition: "The act of calling upwards energies, spirits, or Deific Masks into one's own consciousness, body, and spirit to assume the divine god-form." },
  { term: "Melammu", definition: "Akkadian term for the aura of 'terrifying radiance' emanated by a god, demon, or accomplished sorcerer whose Black Flame is ignited." },
  { term: "Nexion", definition: "A living gateway or bridge through which acasual (timeless chaos) energies can manifest into the casual (physical) world through the adept." },
  { term: "Qutaru / Fumigation", definition: "Babylonian and classical ceremonial rite of burning resinous incense (such as Dragon's Blood) to honor Deific Masks and condition the ritual atmosphere." },
  { term: "Widdershins", definition: "Moving or pacing in an anti-clockwise direction, counter to the solar path, symbolically rebelling against static order to summon change and unlock subconscious depths." },
  { term: "Zisurru", definition: "Ancient Sumerian circle of boundary (traditionally drawn with flour or chalk) marking the circumference of the sorcerer's sacred workspace." }
];
