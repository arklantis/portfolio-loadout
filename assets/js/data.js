/*
 * Portfolio facts migrated from yen-art.com and verified local source files.
 * Wix CDN URLs remain only where no matching local original is available yet.
 */
(() => {
  const local = path => `assets/media/portfolio/${path}`;
  const media = (src, caption, alt = caption) => ({ src, caption, alt });
  const list = (folder, files, captions = []) => files.map((file, index) => media(local(`${folder}/${file}`), captions[index] || file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")));

  const uiLegacyFiles = [
    "E&L Lifestyle01.jpg", "E&L Lifestyle02.jpg", "QSBY01.jpg", "QSBY02.jpg",
    "ANSIN Real Estate Management 01.jpg", "ANSIN Real Estate Management 02.jpg", "ANSIN Real Estate Management 03.jpg",
    "Ezbiz.jpg", "Ezbiz02.jpg", "Ezbiz03.jpg", "P-design01.jpg", "P-design02.jpg",
    "JJD Interiors01.jpg", "JJD Interiors02.jpg", "Sharho.jpg", "Ample Group01.jpg", "Ample Group02.jpg",
    "Taiwan Proud Chairs.jpg", "C.P.J FLAT WIRE CO., LTD.01.jpg", "C.P.J FLAT WIRE CO., LTD.02.jpg",
    "Wisdom sysrem integration co., ltd..jpg", "Mipro Shop.jpg", "Unii.jpg", "Philo.jpg",
    "Ho Jaan saw blade factory.jpg", "Sinkobe.jpg", "A-Scenic Co., Ltd..jpg", "SHU, Department of Communications Management.jpg",
    "NCTU Office Research and development.jpg", "Fine wine.jpg", "Richage.jpg", "Blue Whale Seafood.jpg",
    "Brand New ophthalmology.jpg", "Din Shuo Cretified public accountants.jpg", "Bio Genda shin care.jpg",
    "Zhao Noodle.jpg", "Jinbo-Soy.jpg", "DEF.IT01.jpg", "DEF.IT02.jpg", "Sugar melon.jpg", "Jeffs home.jpg", "PShopfasion.jpg"
  ];

  const logoCaptions = ["University of Kennedy", "Brand New", "Jeavins", "Tizokids", "Lidatiao", "Ridor's", "YL International Law Office", "BeiTang", "XO Scallops Sauce", "Corner Inn", "BianBian Inn", "Balvenie Technology", "Cauldron Chef", "Flydesign", "Seven Spirit Workshop", "Ice Summer", "Selected brand mark"];
  const cardCaptions = ["One-tip Two-leaf", "WHITE Dimension of Hair", "Lidatiao", "E&L Lifestyle", "Fly Design", "Balvenie Technology", "BeiTang", "Full Bless International"];
  const flyerCaptions = ["PENTAXYL", "3-Gates", "Unique Instruments", "One-tip Two-leaf", "WHITE Dimension of Hair"];
  const packageCaptions = ["Dr.C", "QSBY Pet Supplies", "Zammy I", "Zammy II", "Zammy III", "XO Scallops Sauce", "Original Ice Cream"];
  const catalogueCaptions = ["Pet Teepee Set", "Pet Teepee Assembly", "H&F Collection", "Butterfly Collection", "H Collection", "F Collection", "H Collection layout", "H Collection detail", "X Collection", "X Collection detail", "Classic Collection"];
  const spatialCaptions = ["WITHE exterior study I", "WITHE exterior study II", "WITHE exterior study III", "WITHE interior study", "Otsuka booth study I", "Otsuka booth study II"];
  const eventGallery = [
    media("https://static.wixstatic.com/media/e60170_c286ffebda54406396f3edb2c8275a06~mv2.jpg", "SPIEL Essen 2024 booth entrance"),
    media("https://static.wixstatic.com/media/e60170_67abdb7821d04fbd9184104863f75d2b~mv2.jpg", "Game on the Taiwan Boardgame Design display"),
    media("https://static.wixstatic.com/media/e60170_16c7488b4313458f851cf38398c0cfb2~mv2.jpg", "European demo session at SPIEL Essen"),
    media("https://static.wixstatic.com/media/e60170_66d60b0a59fa4f828eb78d5d29787a40~mv2.jpg", "Components during play"),
    media("https://static.wixstatic.com/media/e60170_6d25ec6eaa4a453da3caafdc312db3ee~mv2.jpg", "With the publishing partner at SPIEL Essen"),
    media("https://static.wixstatic.com/media/e60170_e31738adb37b4be4b24a7f3746526000~mv2.jpg", "Hegemony of FAITH on display"),
    media("https://static.wixstatic.com/media/e60170_f5fe533268fc468ea3c81e6e31f55101~mv2.jpg", "SPIEL Essen promotional poster"),
    media("https://static.wixstatic.com/media/e60170_d2e56e039ac54b1b892c0d51ecc83232~mv2.jpg", "SPIEL Essen event record"),
    media("https://static.wixstatic.com/media/e60170_d4a52513dbc94ec5adec27837440a343~mv2.jpeg", "Teaching the English edition"),
    media("https://static.wixstatic.com/media/e60170_356843fa8f0544aa90270c820de2b39f~mv2.jpeg", "Playtesting with international players"),
    media("https://static.wixstatic.com/media/e60170_c4f969686b2644dbb7b9c62522fcf82c~mv2.jpeg", "Players during a UK Games Expo demo"),
    media("https://static.wixstatic.com/media/e60170_655d82be432e4ea091f48315c6c839f6~mv2.jpg", "UK Games Expo component display"),
    media("https://static.wixstatic.com/media/e60170_e2fb1f20752240848f088ca4e20cad02~mv2.jpg", "UK Games Expo booth setup"),
    media("https://static.wixstatic.com/media/e60170_7e7d8dbd01304e8faff46818fdcb6904~mv2.jpeg", "UK Games Expo event record"),
    media("https://static.wixstatic.com/media/e60170_c7b52b8399a644809a13e773188c4d5c~mv2.jpeg", "International expansion test"),
    media("https://static.wixstatic.com/media/e60170_da754b5821d4490d8f48c15fe5315079~mv2.jpg", "Game exhibition in Daan Park"),
    media("https://static.wixstatic.com/media/e60170_3dabeffe05a345d7a704fcc45c0f37e6~mv2.jpg", "Taiwan Original Boardgame Expo"),
    media("https://static.wixstatic.com/media/e60170_33fee22ab89f4af38a3c1e27e4bebd8f~mv2.jpg", "GOKIDS CON"),
    media("https://static.wixstatic.com/media/e60170_811275d3264747cc8a522e9b283235cc~mv2.jpg", "Students after the Soochow University lecture"),
    media("https://static.wixstatic.com/media/e60170_b1137d7515b3479cb1d8b6f5f9b847cb~mv2.jpg", "Game design lecture at Soochow University"),
    media("https://static.wixstatic.com/media/e60170_eee36e16f4c74177b0ae2362a84af13e~mv2.jpg", "Chamber of Commerce game talk"),
    media("https://static.wixstatic.com/media/e60170_aa9390b8fd274fa5b832d229d2c4bac3~mv2.png", "China Times coverage"),
    media("https://static.wixstatic.com/media/e60170_69bf53dd406d4a6e90f5dfb25c3fbf97~mv2.jpg", "Industry talk session"),
    media("https://static.wixstatic.com/media/e60170_b1f7d500b7e84766ab51c08348252e92~mv2.jpg", "Community game activity in Kanding Village"),
    media("https://static.wixstatic.com/media/e60170_8bec3aa804c540f18f84a83787a5a9ba~mv2.jpg", "Players at a community event"),
    media("https://static.wixstatic.com/media/e60170_9838ce7a418a4b8ca5f239f1bf21429d~mv2.jpg", "Bookstore cultural event"),
    media("https://static.wixstatic.com/media/e60170_7c37011dc6ed4c5da8300661c6682762~mv2.jpg", "Local bookstore game activity"),
    media("https://static.wixstatic.com/media/e60170_139ee422ec5844f5bdf75dd621b1f63f~mv2.jpg", "Regional multiplayer culture event"),
    media("https://static.wixstatic.com/media/e60170_33a5c78240514de681ab8fe6fc3ca10c~mv2.jpg", "Additional community activity")
  ];

  window.PORTFOLIO_PROJECTS = [
    {
      id: "hegemony-bga",
      title: "Hegemony of FAITH",
      subtitle: "Published social card game and ongoing BGA adaptation",
      year: "2023–present",
      category: "tabletop",
      categoryLabel: "Tabletop & System Design",
      featured: true,
      size: "wide",
      image: "https://static.wixstatic.com/media/e60170_799424338d784bcea077755896c2aebc~mv2.jpg/v1/fit/w_1600,h_900,q_90/02_JPG.jpg",
      summary: "A 4–8 player party card game about belief, betrayal and control, published in Chinese and English and now being adapted for Board Game Arena.",
      role: "Lead Game Designer · Visual & Product Design · BGA Adaptation",
      tools: ["Rules design", "Tabletop prototyping", "Component design", "BGA Studio", "PHP", "JavaScript"],
      facts: [["Players", "4–8"], ["Play time", "40–60 min"], ["Published", "Chinese 2023 · English 2024"], ["Current work", "BGA private alpha"]],
      intro: "Each player leads a sect and tries to finish with the most believers. Power is unstable: leaders can surrender, merge sects, betray allies or continue as wanderers. The same system is now being translated into explicit online states and actions for a private BGA build.",
      sections: [
        {
          kicker: "01 · Game brief",
          title: "Belief is both the theme and the battlefield",
          body: ["Players draw, play and end their turn—or surrender. Mental attacks, physical attacks and strategic action cards change who controls a sect and where believers move.", "The game ends when the believer deck runs out or one sect absorbs every player. Victory still belongs to the individual with the most believers."],
          points: ["No player elimination", "Roles can change during play", "Power can be reversed from inside a sect", "Card-driven social pressure", "Dynamic sect takeovers"]
        },
        {
          kicker: "02 · Components",
          title: "Every card, token and layout was designed as one system",
          body: ["The physical edition contains 60 believer cards in five types, 78 action cards, 16 skill cards, eight leader tokens and a complete rulebook. All visual assets, component illustrations and card layouts were created by Yen."],
          media: [
            media(local("hegemony/faith01.jpg"), "Early Chinese card set"),
            media(local("hegemony/card-believer.png"), "Believer card"),
            media(local("hegemony/card-action.png"), "Action card"),
            media(local("hegemony/card-skill.png"), "Skill card")
          ]
        },
        {
          kicker: "03 · Published editions",
          title: "From Taiwan release to international demonstrations",
          body: ["The Chinese edition was published in Taiwan in 2023. The English edition followed in 2024 for the UK and EU market.", "The game has been demonstrated at UK Games Expo and SPIEL Essen, alongside events, talks and community activities in Taiwan."],
          media: [
            media("https://static.wixstatic.com/media/e60170_c4f969686b2644dbb7b9c62522fcf82c~mv2.jpeg", "Live demo at UK Games Expo"),
            media("https://static.wixstatic.com/media/e60170_e2fb1f20752240848f088ca4e20cad02~mv2.jpg", "UK Games Expo booth"),
            media("https://static.wixstatic.com/media/e60170_c286ffebda54406396f3edb2c8275a06~mv2.jpg", "SPIEL Essen 2024")
          ]
        },
        {
          kicker: "04 · Digital adaptation",
          title: "Turning table negotiation into readable online states",
          body: ["The creator-side Board Game Arena implementation is in private alpha. Actions that happen naturally around a table need explicit permissions, prompts, hidden-information handling and feedback online."],
          points: ["Mapped physical rules into states and player actions", "Implemented the creator-side private-alpha build", "Kept digital outcomes aligned with the published rules"],
          note: "Private-alpha screenshots, a state-flow diagram and one debugging example will be added when the material is ready."
        }
      ],
      collections: [
        {
          title: "Physical game & playtesting",
          intro: "Local development and playtest material retained from the previous portfolio.",
          items: [
            media(local("hegemony/faith02.jpg"), "Card artwork and printed components"),
            media(local("hegemony/playtest-table.jpg"), "Playtest session"),
            media(local("hegemony/playtest-cards.jpg"), "Cards in play"),
            media("https://static.wixstatic.com/media/e60170_274a2eec3eea4a6fbd4d09e716d91d0a~mv2.jpg", "Published game box")
          ]
        },
        {
          title: "Event evidence",
          intro: "The complete retained event gallery from SPIEL Essen, UK Games Expo, Taiwan sales events, university and industry talks, and local cultural activities.",
          items: eventGallery
        }
      ],
      links: [
        { label: "BoardGameGeek", url: "https://boardgamegeek.com/boardgame/389029/hegemony-of-faith" },
        { label: "Rulebook", url: "https://www.yen-art.com/_files/ugd/e60170_5cb3cfd96fe04066a792f1b5440767d9.pdf" },
        { label: "Sale sheet", url: "https://www.yen-art.com/_files/ugd/e60170_78b0d991e56c4fd083280ccf2c75ad3a.pdf" },
        { label: "Designer interview", url: "https://www.youtube.com/watch?v=7aBDD6dQsJg" },
        { label: "Opinionated Gamers preview", url: "https://opinionatedgamers.com/2024/10/05/dale-yu-preview-of-hegemony-of-faith/" },
        { label: "Board's Eye View", url: "https://www.boardseyeview.net/post/hegemony-of-faith" }
      ]
    },
    {
      id: "events-exhibitions",
      title: "Events & Exhibitions",
      subtitle: "Public demos, trade fairs, talks and community activities",
      year: "Event archive",
      category: "events",
      categoryLabel: "Events & Field Experience",
      image: eventGallery[0].src,
      summary: "A visual record of presenting, teaching and discussing game work across international exhibitions, Taiwan events, talks and community sessions.",
      role: "Game Designer · Exhibitor · Speaker",
      tools: ["Live game demonstration", "Rules teaching", "Event presentation", "Public communication"],
      facts: [["Archive", "29 photos"], ["Locations", "UK · Germany · Taiwan"], ["Formats", "Exhibitions · talks · community events"], ["Focus", "Public-facing game work"]],
      intro: "These photographs document the public-facing side of the work: explaining a game to new players, observing live play, representing the project at exhibitions and sharing game-design experience in educational and community settings.",
      sections: [
        {
          kicker: "01 · International exhibitions",
          title: "SPIEL Essen and UK Games Expo",
          body: ["International exhibition records include booth presentation, live teaching, player sessions and the English edition in use."],
          media: eventGallery.slice(0, 15)
        },
        {
          kicker: "02 · Taiwan exhibitions",
          title: "Board-game fairs and public showcases",
          body: ["The project also appeared at public board-game events in Taiwan, including Daan Park, Taiwan Original Boardgame Expo and GOKIDS CON."],
          media: eventGallery.slice(15, 18)
        },
        {
          kicker: "03 · Talks and education",
          title: "Sharing game-design practice",
          body: ["University and industry sessions extended the work beyond exhibition booths into discussion, teaching and media coverage."],
          media: eventGallery.slice(18, 23)
        },
        {
          kicker: "04 · Community activities",
          title: "Games in local cultural settings",
          body: ["Community and bookstore activities show the game being introduced and played in smaller public settings."],
          media: eventGallery.slice(23)
        }
      ]
    },
    {
      id: "night-thieving-rats",
      title: "Night-Thieving Rats in the Kingdom",
      subtitle: "One-night deduction built around locating the treasure",
      year: "2022",
      category: "tabletop",
      categoryLabel: "Tabletop Game Design",
      image: "https://static.wixstatic.com/media/e60170_42c4ba362d9f404688e7a2a7dd580e5b~mv2.jpg",
      summary: "A 5–8 player social-deduction game where the argument is not only who to trust, but which chest actually holds the peanuts.",
      role: "Lead Game Designer · Visual Design",
      tools: ["Hidden roles", "Social deduction", "Information design", "Physical prototyping"],
      facts: [["Players", "5–8"], ["Play time", "25–40 min"], ["Published", "Taiwan · Chinese edition"], ["Year", "2022"]],
      intro: "The King hides the peanuts, roles act in secret and the group must imprison one suspect before choosing a chest. Thieves, guards and third-party roles can all change the final result.",
      sections: [
        { kicker: "01 · Core structure", title: "Deduce a location through behaviour and action order", body: ["Each role acts during the night: chests can move, identities can be checked and traps can be set. Discussion begins only after all hidden actions are complete."], points: ["Secret roles and ordered night actions", "One group imprisonment decision", "One final chest selection", "Kingdom, thieves and rare third-party victories"] },
        { kicker: "02 · Components", title: "A compact set for a complete one-night game", body: ["The game uses nine character cards, three treasure chests, one prison card and one peanut prop."], media: [
          media("https://static.wixstatic.com/media/e60170_5d4bba80fc724a87b8eee5cbb68a1806~mv2.png", "Nine character cards"),
          media("https://static.wixstatic.com/media/e60170_88cbded28d144be99a1e68fd550aff5f~mv2.png", "Three treasure chests"),
          media("https://static.wixstatic.com/media/e60170_e7b7a8eed47c4d0d9b508ded48cb5c7e~mv2.png", "Prison card"),
          media("https://static.wixstatic.com/media/e60170_6bfdab135b7243088c0cf4fd6d13ab13~mv2.png", "Peanut prop")
        ] },
        { kicker: "03 · Status", title: "Published in Taiwan", body: ["The Chinese edition was published in Taiwan in December 2022. The original portfolio lists the game as Chinese-only."] }
      ],
      links: [{ label: "Chinese gameplay video", url: "https://www.youtube.com/watch?v=nvNp37JKRFA" }]
    },
    {
      id: "my-plates",
      title: "My Plates",
      subtitle: "Set collection with direct player disruption",
      year: "2020",
      category: "tabletop",
      categoryLabel: "Tabletop Game Design",
      image: local("boardgames/my-plates.jpg"),
      summary: "A Global Game Jam card-game prototype about repairing matching plate sets while opponents smash, steal and swap pieces.",
      role: "Game Designer · Illustrator",
      tools: ["Set collection", "Card balancing", "Illustration", "Rapid prototyping"],
      facts: [["Players", "2–4"], ["Play time", "20–30 min"], ["Origin", "Global Game Jam 2020"], ["Status", "Prototype · not published"]],
      intro: "Players score by rebuilding plates from coloured fragments. A completed plate is valuable, but it can still be broken, so every turn asks whether to build your own set or disrupt someone else's.",
      sections: [
        { kicker: "01 · Deck", title: "Ninety-two cards with flexible combination rules", body: ["The deck combines 1/6, 2/6 and wild 3/6 plate pieces with Swap, Steal, Hammer and Skip cards."], points: ["40 one-sixth pieces", "16 two-sixth pieces", "8 wild three-sixth pieces", "28 special-action cards"] },
        { kicker: "02 · Play pattern", title: "Build, watch and interfere", body: ["Matching colours restore plates. Special cards can destroy progress or move pieces, so timing and observation matter as much as collecting."], points: ["Completed plates score more", "Wild pieces create flexible combinations", "Opponent sets remain interactable", "Aggressive play is balanced against finishing your own orders"] },
        { kicker: "03 · Status", title: "A complete prototype still open to refinement", body: ["The rules and visual design were completed and playtested during Global Game Jam 2020. The project has not been published."] }
      ],
      collections: [{ title: "Card set", items: [
        media("https://static.wixstatic.com/media/e60170_4278d06b86d64fc2987b55802f3b3c79~mv2.png", "1/6 plate pieces"),
        media("https://static.wixstatic.com/media/e60170_05234981597247de8eeeb9475e2f9dbd~mv2.png", "2/6 plate pieces"),
        media("https://static.wixstatic.com/media/e60170_c585d996351e4003b0fd7c7c057cb6ce~mv2.png", "Wild 3/6 piece"),
        media("https://static.wixstatic.com/media/e60170_b1595c75535e46998e899c3c20a1c201~mv2.png", "Swap card"),
        media("https://static.wixstatic.com/media/e60170_d962a3b3f0a74dd0ad1bf68d86f0a3be~mv2.png", "Steal card"),
        media("https://static.wixstatic.com/media/e60170_d9c0ebfc4fb1464c9ef43132b49c349c~mv2.png", "Hammer card"),
        media("https://static.wixstatic.com/media/e60170_4d692507e5e1419388d7e52ad0918f4c~mv2.png", "Skip card")
      ] }],
      links: [{ label: "Global Game Jam entry", url: "https://globalgamejam.org/2020/games/my-plates-4" }]
    },
    {
      id: "spaghetti",
      title: "Spaghetti",
      subtitle: "A text-light family tile-placement prototype",
      year: "2019",
      category: "tabletop",
      categoryLabel: "Tabletop Game Design",
      image: local("boardgames/spaghetti-banner.jpg"),
      summary: "A 2–4 player family game where connected spaghetti tiles lead players toward ingredients, points and occasional trouble.",
      role: "Lead Designer · Visual & Component Design",
      tools: ["Tile placement", "Spatial recognition", "Component design", "Playtesting"],
      facts: [["Players", "2–4"], ["Play time", "15–25 min"], ["Age", "6+"], ["Status", "Complete prototype"]],
      intro: "Players extend spaghetti paths from their side of the plate. The longer path may reach more ingredients, but placement also changes what other players can reach.",
      sections: [
        { kicker: "01 · Design focus", title: "Immediate comprehension without dense text", body: ["The system uses connected shapes, visible paths and physical placement so younger and casual players can understand the board quickly."], points: ["Every tile connects", "Placement can redirect opponents", "Long tiles recover paths that leave the plate", "Ingredients change the value of a route"] },
        { kicker: "02 · Components", title: "A complete tactile prototype", body: ["The set contains one plate board, 35 square spaghetti tiles, four rectangular tiles, one scoreboard and eight player tokens."], media: list("boardgames/spaghetti", ["board.png", "square-tiles.png", "rectangle-tile.png", "scoreboard.png", "tokens.png"], ["Plate board", "Square spaghetti tiles", "Long reconnecting tile", "Scoreboard", "Player tokens"]) },
        { kicker: "03 · Status", title: "Rules, visuals and English prototype complete", body: ["The game was developed and playtested in 2019. It remains an unpublished prototype with room for further pacing adjustments."] }
      ],
      links: [
        { label: "Rulebook", url: "https://www.yen-art.com/_files/ugd/e60170_ca22d7d36acf4b4dad4b2dae6efd25c2.pdf" },
        { label: "Development log", url: "https://yensgame.wordpress.com/2019/10/11/board-game-design-2/" }
      ]
    },
    {
      id: "batch-renamer",
      title: "Batch Renamer",
      subtitle: "A practical desktop tool for repetitive file workflows",
      year: "2025",
      category: "technical",
      categoryLabel: "Technical Art · Tools",
      featured: true,
      image: "https://static.wixstatic.com/media/e60170_6e142c8626104cb5b6a7d076eb797805~mv2.png/v1/fill/w_1400,h_900,al_c,q_90/batch_renamer_ui_demo.png",
      summary: "A Python and PyQt desktop utility with custom naming rules, live preview, drag-and-drop input and a packaged Windows release.",
      role: "Tool Design · GUI · Logic · Packaging",
      tools: ["Python", "PyQt5", "Qt Designer", "Windows packaging"],
      facts: [["Format", "Desktop utility"], ["Input", "Drag and drop"], ["Safety", "Live preview"], ["Release", "Standalone .exe"]],
      intro: "The tool makes bulk file naming visible before it becomes destructive. Users can build a rule, inspect the resulting names and only then apply the change.",
      sections: [
        { kicker: "01 · Production problem", title: "A repetitive task with expensive mistakes", body: ["Renaming a whole asset folder saves time, but one incorrect rule can damage every filename. The interface keeps the source and result together so the change can be checked first."] },
        { kicker: "02 · Delivered workflow", title: "Rule input, preview and packaged use", body: ["The application supports custom naming rules, live result preview and drag-and-drop file input. It is packaged as a standalone Windows executable for users who do not run Python directly."], points: ["Custom rule building", "Before/after preview", "Drag-and-drop files", "Packaged release"] }
      ],
      links: [{ label: "GitHub", url: "https://github.com/arklantis/batch_renamer" }, { label: "Latest Windows release", url: "https://github.com/arklantis/batch_renamer/releases/latest" }]
    },
    {
      id: "slime-material",
      title: "Slime Shader",
      subtitle: "Adjustable UE5 material, deformation and early VFX study",
      year: "2025",
      category: "technical",
      categoryLabel: "Technical Art · Unreal",
      featured: true,
      image: "https://static.wixstatic.com/media/e60170_27e6c79926bd432c962a4fb4e92b7539f000.jpg/v1/fill/w_1600,h_900,al_c,q_90/e60170_27e6c79926bd432c962a4fb4e92b7539f000.jpg",
      summary: "A real-time slime material with adjustable glow, distortion, translucency, WPO deformation and Blueprint-driven squash and stretch.",
      role: "Shader Development · Parameter Design · Blueprint Prototyping",
      tools: ["Unreal Engine 5", "Material Editor", "Material Instances", "Blueprint"],
      facts: [["Engine", "Unreal Engine 5"], ["Material", "Fully parameterised"], ["Motion", "WPO + Blueprint"], ["Status", "Study · VFX in progress"]],
      intro: "The material can move between a clean translucent state and a more active wet surface. Its controls are exposed in a material instance so artists can tune the result without editing the graph.",
      sections: [
        { kicker: "01 · Surface states", title: "One material, two readable behaviours", body: ["The surface-intense variation increases normal distortion, glow and WPO movement. The cleaner state lowers the normal response for calmer moments."], videos: [
          { src: local("technical/slime/slime-main.mp4"), caption: "Surface-intense material variation" },
          { src: local("technical/slime/slime-clean.mp4"), caption: "Default clean state" }
        ] },
        { kicker: "02 · Artist controls", title: "Parameters exposed where iteration happens", body: ["Glow intensity, panning speed, normal distortion, WPO magnitude and opacity can be adjusted in real time through the material instance."], media: [media(local("technical/slime/instance-control.png"), "Material instance control panel")] },
        { kicker: "03 · Material breakdown", title: "Colour, opacity, normal, glow and position offset", body: ["The graph separates the main surface responsibilities so each behaviour can be tuned independently."], media: list("technical/slime", ["material-base.jpg", "material-opacity.jpg", "material-normal.jpg", "material-glow.jpg", "material-wpo.jpg"], ["Base colour", "Opacity", "Normal distortion", "Glow", "World-position offset"]) },
        { kicker: "04 · Blueprint motion", title: "Squash and stretch through controlled mesh scaling", body: ["A Blueprint timeline drives X, Y and Z scale values during jumps and landings."], media: [media(local("technical/slime/blueprint.jpg"), "Blueprint scale timeline")], videos: [{ src: local("technical/slime/slime-motion.mp4"), caption: "Squash-and-stretch movement test" }] },
        { kicker: "05 · In progress", title: "Trail and droplet VFX remain under refinement", body: ["A ground-hugging trail and small moving droplets are visible in the prototype. They are still being adjusted for timing, scale and fluid feel."] }
      ]
    },
    {
      id: "ui-production",
      title: "Interface & Web Production",
      subtitle: "Responsive design and front-end delivery across commercial and public projects",
      year: "Selected professional work",
      category: "ui",
      categoryLabel: "UI / UX · Front-end",
      featured: true,
      image: local("ui/baf/responsive.jpg"),
      summary: "Selected interface layouts and front-end implementation using Illustrator, HTML, CSS and jQuery, followed by a full visual archive of earlier sites.",
      role: "Visual Design · Layout · Responsive Front-end",
      tools: ["Illustrator", "HTML", "CSS", "jQuery", "Responsive layout", "Figma"],
      facts: [["Wewanted", "50+ layouts"], ["Children's culture site", "40+ templates/pages"], ["Delivery", "Design to front-end"], ["Archive", "42 retained screens"]],
      intro: "This is production work rather than a single product case. The common task was to carry a visual direction through page structure, responsive behaviour and final front-end output.",
      sections: [
        { kicker: "01 · Wewanted", title: "Vehicle purchasing platform", body: ["Designed and implemented more than 50 public and member-only interface layouts using Illustrator, HTML, CSS and jQuery. The front-end was prepared for backend integration."], points: ["Visual design and layout", "Public and signed-in flows", "Responsive front-end", "Live platform"], media: [media(local("ui/legacy/web online01.jpg"), "Wewanted interface preview")] },
        { kicker: "02 · Bio-architecture Formosana", title: "Architecture portfolio and responsive maintenance", body: ["Designed the full website hierarchy, mobile adaptation and front-end implementation, then handled content updates. A Figma homepage prototype was later reconstructed as UI practice."], media: list("ui/baf", ["index.jpg", "responsive.jpg", "project-list.jpg", "project-detail.jpg", "about.gif"], ["Homepage", "Responsive views", "Project listing", "Project detail", "About-page motion"]) },
        { kicker: "03 · Cultural platforms", title: "Responsive layouts for media preservation", body: ["iMedia and the Digital Video Preservation site required clear presentation of cultural video collections across devices. Work included visual layout, responsive CSS and jQuery interactions."], media: [media(local("ui/legacy/web online03.jpg"), "iMedia"), media(local("ui/legacy/web online04.jpg"), "Digital Video Preservation")] },
        { kicker: "04 · Ministry of Culture", title: "Children's cultural books website", body: ["Implemented more than 40 templates and pages from Illustrator files, including responsive structure, basic accessibility requirements and jQuery interactions for public-facing sections."], media: list("ui/ministry", ["overview.jpg", "home.jpg", "list.jpg", "detail.jpg"], ["Responsive overview", "Homepage", "Book listing", "Content detail"]) },
        { kicker: "05 · Hanlin Education", title: "Static educational site for early learners", body: ["Designed and built a friendly static interface in HTML and CSS, keeping the structure simple for children and parents."], media: [media(local("ui/legacy/web online05.jpg"), "Hanlin Education")] }
      ],
      collections: [{ title: "Legacy web design archive", intro: "Discontinued or redesigned sites retained as visual records of layout and front-end work.", items: uiLegacyFiles.map(file => media(local(`ui/legacy/${file}`), file.replace(/\.[^.]+$/, "").replace(/0?\d+$/, ""))) }],
      links: [
        { label: "Wewanted", url: "https://wewanted.com.tw/" },
        { label: "BAF Figma prototype", url: "https://www.figma.com/proto/9k5rgUNp0hZNVqVeoFhZfX/Bio-architecture?node-id=0-1&t=kPdTPrEspmyqRIJE-1" },
        { label: "iMedia", url: "https://imedia.culture.tw/zh_tw/index" },
        { label: "Digital Video Preservation", url: "http://imedia.culture.tw/channel/cksmh/zh_tw/index" },
        { label: "Hanlin Education", url: "https://2-6kids.com/" }
      ]
    },
    {
      id: "2d-art",
      title: "2D Art & Game Assets",
      subtitle: "Concept art, character assets and interface design",
      year: "Selected personal work",
      category: "art",
      categoryLabel: "2D Art · Game Visuals",
      image: "https://static.wixstatic.com/media/e60170_384c7588e278494ca4a379d6eea26da3~mv2.jpg",
      summary: "A complete migration of the original 2D portfolio: environments, storyboards, character sheets, props and game UI.",
      role: "Concept Art · Character & Asset Design · UI Visuals",
      tools: ["Digital painting", "2D illustration", "Character design", "Game UI", "Asset sheets"],
      facts: [["Groups", "Concept · Character · UI"], ["Focus", "Game art contexts"], ["Source", "Personal and game projects"]],
      intro: "The archive shows how visual decisions move from atmosphere and character exploration into usable game assets and interfaces.",
      sections: [
        { kicker: "01 · Concept art", title: "Environment, mood and narrative framing", body: ["Selected environments and scene illustrations from original game projects, followed by storyboard and thumbnail exploration."], media: [
          media("https://static.wixstatic.com/media/e60170_384c7588e278494ca4a379d6eea26da3~mv2.jpg", "Booboisie Village concept"),
          media("https://static.wixstatic.com/media/e60170_8dcea4b2965d4695bd971d269c935fba~mv2.jpg", "Mysterious town street"),
          media("https://static.wixstatic.com/media/e60170_10b68e020f514cb7b8ad4bda6f8e8650~mv2.jpg", "Island Survival"),
          media(local("digital/walking-day/walking-day-cover.jpg"), "Walking Day"),
          media("https://static.wixstatic.com/media/e60170_d9133768ca9348b3b033b86699519f90~mv2.jpg", "Booboisie Village storyboard"),
          media("https://static.wixstatic.com/media/e60170_a65c813facd543f19f021aa657b3b0cb~mv2.jpg", "Island Survival thumbnails")
        ] },
        { kicker: "02 · Character & assets", title: "Turnarounds, props and in-world components", body: ["Character sheets and gameplay assets designed for interaction and visual storytelling."], media: [
          media("https://static.wixstatic.com/media/e60170_59cbd433f83f4cb195bcbce10831ea84~mv2.jpg", "Booboisie Village asset sheet"),
          media("https://static.wixstatic.com/media/e60170_e9126bcffa6a46a99786d14b51430061~mv2.jpg", "Strange Things asset sheet"),
          media("https://static.wixstatic.com/media/e60170_53441ef9158749078a54faeb24f35241~mv2.jpg", "Character design: Emond"),
          media("https://static.wixstatic.com/media/e60170_1391ec12e9954a018a265f76b1acde33~mv2.jpg", "Mushroom character designs"),
          media(local("art/game-assets/Taiwan Night Market - components.jpg"), "Taiwan Night Market components"),
          media(local("art/game-assets/restaurants game03.png"), "Restaurant game components"),
          media(local("art/game-assets/restaurants game02.png"), "Restaurant game props"),
          media(local("art/game-assets/Gambling01-4.png"), "Gambling game props")
        ] },
        { kicker: "03 · Interface design", title: "Game UI across different genres", body: ["Interface mockups combine readable interaction with the tone of each game."], media: [
          media(local("digital/booboisie/booboisie03.jpg"), "Mysterious Town story UI"),
          media("https://static.wixstatic.com/media/e60170_2c8c9c4a7b384cd381b107b41cb0c1e4~mv2.jpg", "Dancing Together controls"),
          media(local("digital/walking-day/walk03.jpg"), "Walking Day UI"),
          media(local("art/game-assets/Gambling01-1.jpg"), "Gambling table UI"),
          media(local("art/game-assets/Gambling02-1.jpg"), "Slot machine UI"),
          media(local("art/game-assets/Virtual Pet Game - UI Magic.jpg"), "Magic synthesis UI"),
          media(local("art/game-assets/Virtual Pet Game - UI Scene choose.jpg"), "Magic map selection"),
          media(local("art/game-assets/Archeology game01.jpg"), "Archaeology login UI"),
          media(local("art/game-assets/Virtual Pet Game - UI Detail.jpg"), "Animal encyclopedia UI"),
          media(local("art/game-assets/Virtual Pet Game - UI Quest.jpg"), "Task book UI")
        ] }
      ]
    },
    {
      id: "visual-archive",
      title: "Visual Design Archive",
      subtitle: "Branding, print, packaging, catalogue and spatial studies",
      year: "Earlier professional work",
      category: "art",
      categoryLabel: "Visual Design Archive",
      image: local("visual/logos/Logo01.jpg"),
      summary: "Earlier visual identity and production work retained as a complete supporting archive rather than presented as current game-design case studies.",
      role: "Brand Identity · Layout · Packaging · 3D Visualisation",
      tools: ["Illustrator", "Photoshop", "Print layout", "Brand systems", "3D visualisation"],
      facts: [["Archive groups", "6"], ["Purpose", "Supporting visual range"], ["Position", "Earlier work"]],
      intro: "These pieces show the visual foundation behind later UI and game work. They are grouped by output so recruiters can inspect the range without confusing them with the main game-design portfolio.",
      collections: [
        { title: "Brand identities", items: list("visual/logos", Array.from({length:17},(_,i)=>`Logo${String(i+1).padStart(2,"0")}.jpg`), logoCaptions) },
        { title: "Business cards", items: list("visual/cards", Array.from({length:8},(_,i)=>`card${String(i+1).padStart(2,"0")}.jpg`), cardCaptions) },
        { title: "Flyers & brochures", items: list("visual/flyers", ["flyer01.jpg","flyer02.jpg","flyer03.jpg","brochure01.jpg","brochure02.jpg"], flyerCaptions) },
        { title: "Packaging", items: list("visual/packages", Array.from({length:7},(_,i)=>`package${String(i+1).padStart(2,"0")}.jpg`), packageCaptions) },
        { title: "Product catalogue", items: list("visual/catalogue", Array.from({length:11},(_,i)=>`catalogue${String(i+1).padStart(2,"0")}.jpg`), catalogueCaptions) },
        { title: "Spatial & 3D studies", items: [...list("visual/3d", Array.from({length:6},(_,i)=>`3d-${String(i+1).padStart(2,"0")}.jpg`), spatialCaptions), media(local("visual/3d/doll-design.jpg"), "Doll design")] }
      ]
    },
    {
      id: "run-ducks",
      title: "Run Ducks",
      subtitle: "A playful answer to indecision",
      year: "2022",
      category: "unity",
      categoryLabel: "Unity Prototype",
      image: "https://static.wixstatic.com/media/e60170_6afe828494554c5b870e2a1350b794d1~mv2.jpg",
      summary: "Players assign real choices to racing ducks; randomised behaviour decides the result in a repeatable one-minute loop.",
      role: "Full Game Development",
      tools: ["Unity", "C#", "Animator", "Parameter-driven behaviour"],
      facts: [["Platform", "Web game"], ["Status", "Playable prototype"], ["Release", "itch.io"]],
      intro: "Run Ducks externalises indecision. Each duck represents a player-defined option, then sprinting, fatigue and speed parameters resolve the race.",
      sections: [
        { kicker: "Core loop", title: "Input options, watch the race, accept the answer", body: ["The short loop is designed for repeat use rather than mastery."], points: ["Player-defined option labels", "Randomised duck statistics", "Animator state transitions", "Visual and behaviour variation each round"] },
        { kicker: "Prototype status", title: "A functional experiment in chance and choice", body: ["The current version is playable. Ideas such as betting logic, more duck variants and themeable tracks remain possible extensions."] }
      ],
      collections: [{ title: "Game & animation", items: [
        media("https://static.wixstatic.com/media/e60170_d474d25106044fb09e6605225f4a3d5d~mv2.jpg", "Race scene"),
        media("https://static.wixstatic.com/media/e60170_d58b41c3e99d434faff620f21c1f62da~mv2.gif", "Normal state"),
        media("https://static.wixstatic.com/media/e60170_fa470855b83745bfac0232ad214934a1~mv2.gif", "Tired state"),
        media("https://static.wixstatic.com/media/e60170_75f2d32b1b2b4e0dbb168a2fdb8f7982~mv2.gif", "Sprint state")
      ] }],
      links: [{ label: "Play on itch.io", url: "https://ual-yen.itch.io/running" }]
    },
    {
      id: "booboisie",
      title: "Booboisie Village",
      subtitle: "Political influence across twelve endings",
      year: "2021",
      category: "unity",
      categoryLabel: "Unity Narrative Prototype",
      image: local("digital/booboisie/booboisie01.jpg"),
      summary: "A non-linear strategy game where dialogue, items and voting interference reshape a village across 12 possible endings.",
      role: "Full Game Development",
      tools: ["Unity", "C#", "Branching dialogue", "State tracking", "2D art"],
      facts: [["Platform", "Web game"], ["Endings", "12"], ["Status", "First playable version"]],
      intro: "Players control Clay Gray, an outsider who can shift votes and alter the village population. Dialogue sets an initial direction, but systemic interference can reverse it.",
      sections: [
        { kicker: "Structure", title: "Political alignment followed by direct intervention", body: ["The project combines dialogue-based alignment with post-decision control over villagers and votes."], points: ["Dual-phase gameplay", "Items that alter votes", "Persistent village status", "Multi-ending event triggers", "A protagonist who changes with the political state"] },
        { kicker: "Development note", title: "A complete first version of a larger simulation idea", body: ["The prototype includes 12 endings and a full decision-feedback loop. More characters and deeper political archetypes were left as possible expansions."] }
      ],
      collections: [{ title: "Screens and systems", items: list("digital/booboisie", ["booboisie01.jpg","booboisie02.jpg","booboisie03.jpg","booboisie04.jpg","booboisie05.jpg","booboisie06.jpg"], ["Game overview", "Village politician", "Story interaction", "Village state", "Items and influence", "Clay's changes"]) }],
      links: [{ label: "Play on itch.io", url: "https://ual-yen.itch.io/booboisie" }, { label: "Development log", url: "https://yensgame.wordpress.com/2021/01/14/final-major-project-development-process/" }]
    },
    {
      id: "origami-room",
      title: "Origami Room",
      subtitle: "Physical paper folding as an AR puzzle input",
      year: "2020",
      category: "unity",
      categoryLabel: "Unity AR Prototype",
      image: "https://static.wixstatic.com/media/e60170_af5b430983f24de69b3b64fc03dddcee~mv2.jpg",
      summary: "An escape-room prototype that asks players to fold real origami pieces and show them to the camera to unlock digital progress.",
      role: "Full Game Development",
      tools: ["Unity", "C#", "Vuforia", "AR recognition", "Instruction design"],
      facts: [["Platform", "Android prototype"], ["Input", "Printed origami + camera"], ["Status", "Paused · no longer maintained"]],
      intro: "Origami Room tests whether a physical instruction, a handmade object and an AR recognition step can form one readable puzzle loop.",
      sections: [
        { kicker: "Interaction", title: "Fold an object, present it, unlock the next clue", body: ["Players print the paper, follow in-game folding guidance and use the finished object as a camera-recognised input."], points: ["Hybrid physical/digital play", "Vuforia object recognition", "Printable assets", "Instruction clarity and scan reliability"] },
        { kicker: "Status", title: "A working experiment limited by device compatibility", body: ["The Android build is no longer actively maintained. Device and Vuforia compatibility made further development impractical without a broader rebuild."] }
      ],
      collections: [{ title: "Escape-room screens", items: [
        media("https://static.wixstatic.com/media/e60170_af5b430983f24de69b3b64fc03dddcee~mv2.jpg", "Escape room"),
        media("https://static.wixstatic.com/media/e60170_be7f50e3aa2d4f9595b5ebc94caf8b2c~mv2.jpg", "Painting clue"),
        media("https://static.wixstatic.com/media/e60170_32f8a859170c4b13a9d7300143bf28ee~mv2.jpg", "Origami guide"),
        media("https://static.wixstatic.com/media/e60170_3e206ff0cdb047019d27aafdb77d88cc~mv2.jpg", "Number lock")
      ] }],
      links: [{ label: "Original itch.io page", url: "https://ual-yen.itch.io/origami" }, { label: "Development log", url: "https://yensgame.wordpress.com/2020/05/19/tech-game-develope-1/" }]
    },
    {
      id: "the-bomber",
      title: "The Bomber",
      subtitle: "A two-minute escape-room challenge",
      year: "2020",
      category: "unity",
      categoryLabel: "Unity Puzzle Game",
      image: "https://static.wixstatic.com/media/e60170_04d14890298f4920a3634afde561a413~mv2.jpg",
      summary: "A compact escape game that combines environmental clues, fragmented memory and a bomb countdown.",
      role: "Full Game Development",
      tools: ["Unity", "C#", "Environmental clues", "Timed puzzle flow"],
      facts: [["Platform", "PC"], ["Timer", "2 minutes"], ["Status", "Complete · free download"]],
      intro: "The player wakes in a locked room with no memory, a body and a bomb. The experience is deliberately short, high-pressure and designed around one answer.",
      contentWarning: "Contains themes of racism and violence.",
      sections: [
        { kicker: "Experience", title: "Observe, connect the fragments and act quickly", body: ["Objects in the room reveal clues and memory fragments. The countdown leaves no room for exhaustive searching."], points: ["One-shot escape structure", "Room-based observation", "Memory-triggered storytelling", "No margin for error"] },
        { kicker: "Status", title: "Complete and available on itch.io", body: ["The project was completed in 2020 and remains free to download."] }
      ],
      collections: [{ title: "Game screens", items: [media("https://static.wixstatic.com/media/e60170_04d14890298f4920a3634afde561a413~mv2.jpg", "Opening scene"), media("https://static.wixstatic.com/media/e60170_a950897bb2614c5c8c840e7331534798~mv2.jpg", "Room and countdown")] }],
      links: [{ label: "Download on itch.io", url: "https://ual-yen.itch.io/bomber" }, { label: "Development log", url: "https://yensgame.wordpress.com/2020/02/19/cooperate-project/" }]
    },
    {
      id: "walking-day",
      title: "Walking Day",
      subtitle: "An autobiographical fatigue simulation",
      year: "2020",
      category: "unity",
      categoryLabel: "Unity Experimental Game",
      image: local("digital/walking-day/walking-day-cover.jpg"),
      summary: "A walking simulator based on lived experience with chronic fatigue and breathing difficulty, using input rhythm and feedback to build empathy.",
      role: "Full Game Development",
      tools: ["Unity", "C#", "UI design", "Audio feedback", "Autobiographical design"],
      facts: [["Platform", "Web game"], ["Goal", "Reach the museum"], ["Status", "Complete · itch.io"]],
      intro: "The player only needs to walk from a bus stop to a museum. The difficulty comes from the body: pressing too quickly increases fatigue, while heartbeat and dialogue make the effort visible.",
      sections: [
        { kicker: "Mechanic", title: "Simple input shaped by stamina", body: ["There is no time limit and no score. The player balances pace against exhaustion until the character reaches the destination."], points: ["Based on lived experience", "Fatigue linked to input pace", "Dynamic heartbeat feedback", "Dialogue that responds to the character's condition"] },
        { kicker: "Status", title: "A complete short experience", body: ["The current version is complete and available on itch.io. The original idea left room for more autobiographical scenes."] }
      ],
      collections: [{ title: "Journey screens", items: list("digital/walking-day", ["walking-day.jpg","walk01.jpg","walk02.jpg","walk03.jpg"], ["Main game scene", "Intro", "Walking sequence", "Interface and dialogue"]) }],
      links: [{ label: "Play on itch.io", url: "https://ual-yen.itch.io/autobiographical" }, { label: "Development log", url: "https://yensgame.wordpress.com/2020/04/21/autobiographical-games/" }]
    },
    {
      id: "dancing-together",
      title: "Dancing Together",
      subtitle: "Turning a Tom Eckersley poster into motion",
      year: "2019",
      category: "unity",
      categoryLabel: "Unity Visual Prototype",
      image: "https://static.wixstatic.com/media/e60170_8b4902d6c85544d5aaa8d160a0886acc~mv2.png",
      summary: "A small dancing game that translates the couples, colours and energy of an Eckersley poster into responsive animation and unusual controls.",
      role: "Full Game Development",
      tools: ["Unity", "C#", "2D animation", "Interaction design"],
      facts: [["Platform", "Web game"], ["Status", "Complete · itch.io"], ["Year", "2019"]],
      intro: "The project began with a static social-event poster and asked how its visual rhythm could become a playable movement system.",
      sections: [
        { kicker: "Translation", title: "Preserve the poster while changing the medium", body: ["The couples and colour language were adapted into a cheerful animated scene. Controls intentionally resist familiar expectations so players discover the movement pattern through play."], points: ["Poster-derived visuals", "Nonstandard controls", "Responsive animation", "Short joyful loop"] },
        { kicker: "Status", title: "Complete and free to play", body: ["The game was completed in 2019 and remains available on itch.io."] }
      ],
      collections: [{ title: "Visual source & screens", items: [
        media("https://static.wixstatic.com/media/e60170_8b4902d6c85544d5aaa8d160a0886acc~mv2.png", "Start scene"),
        media("https://static.wixstatic.com/media/e60170_2c8c9c4a7b384cd381b107b41cb0c1e4~mv2.jpg", "Control guide"),
        media("https://static.wixstatic.com/media/e60170_916d8fae2c044577b6c3f699dbcdcb79~mv2.jpg", "Original poster reference")
      ] }],
      links: [{ label: "Play on itch.io", url: "https://ual-yen.itch.io/dancing-together" }, { label: "Development log", url: "https://yensgame.wordpress.com/2019/12/06/unity-game-develop1/" }]
    }
  ];
})();
