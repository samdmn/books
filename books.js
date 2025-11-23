const books = [
    {
        id : 1,
        title : "Le Rouge et le Noir",
        author : "Stendhal",
        year : 1830,
        genre : "Roman d'apprentissage",
        cover : "https://m.media-amazon.com/images/I/71eCRmiGMwL._UF1000,1000_QL80_.jpg",
        description : "« Après trente ans de travail acharné, Stendhal est digne d'improviser ; il sait peindre d'un premier trait, d'un seul trait. Il a lentement créé cet instrument de prose rapide, qui est lui-même : son style le plus parfait est devenu sa voix naturelle. L'originalité n'est plus un but qu'il se propose : elle est en lui...La revanche imaginaire, ce rêve de compensation qui succède à la douleur de l'échec et en marque la convalescence, est un des excitants les plus forts de l'imagination créatrice. C'est sous cet aspect de revanche imaginaire qu'il faut voir la transposition de Stendhal en Julien, la beauté de Julien, sa minceur. Les souvenirs directs gardent leur accent secret et déchirant parce qu'ils sont placés parmi les enthousiasmes de la revanche imaginaires. » Jean Prévost.",
        quotes : [
            ""
        ]
    },
    {
        id : 2,
        title : "Les Fleurs du Mal",
        author : "Charles Baudelaire",
        year : 1857,
        genre : "Recueil de poésie",
        cover : "https://m.media-amazon.com/images/I/61aYXeVRjZL._UF1000,1000_QL80_.jpg",
        description : "\"Plonger au fond du gouffre, Enfer ou Ciel, qu'importe ? / Au fond de l'inconnu, pour trouver du nouveau !\" Ces vers du \"Voyage\" éclairent à eux seul l'entreprise du poète. Esprit vagabond, toujours mobile, Baudelaire explore les dédales de la conscience. Il atteint tantôt à l'extase, tantôt se perd dans les abîmes du péché. A travers ses poèmes, il nous fait partager le drame qui se joue en lui et qui n'est autre que la tragédie humaine. Baudelaire, premier poète moderne, donne à la poésie sa véritable dimension : exprimer, par-delà les mots, ce vertige absolu qui s'empare de l'âme. Tout chez lui affirme la nécessité de la souffrance, la fatalité du péché. Tout traduit une âme profondément troublée mais charitable. Baudelaire fait des Fleurs du Mal un immense poème de la vie et du monde.",
        quotes : [
            ""
        ]
    },
    {
        id : 3,
        title : "Déclaration des droits de la femme et de la citoyenne",
        author : "Olympe de Gouges",
        year : 1791,
        genre : "Philosophie politique",
        cover : "https://images.epagine.fr/556/9782073073556_1_75.jpg",
        description : "Femme de lettres et de tête, Olympe de Gouges (1748-1793) s'illustre dès les premières heures de la Révolution par ses idées de réforme. Devant l'Assemblée constituante, elle réclame l'égalité des sexes. Avec sa Déclaration des droits de la femme et de la citoyenne (1791), son œuvre la plus célèbre, cette première théoricienne du féminisme reprend point par point la Déclaration universelle des droits de l'homme de 1789 en une inversion parodique : « La femme naît libre et demeure égale à l'homme en droits ». Son texte, à l'instar de son exhortation finale, « Femme, réveille-toi », garde une étonnante actualité.",
        quotes : [
            "La femme a le droit de monter sur l'échafaud, elle doit avoir également celui de monter à la tribune."
        ]
    },
    {
        id : 4,
        title : "En finir avec Eddy Bellegueule",
        author : "Édouard Louis",
        year : 2014,
        genre : "Roman autobiographique",
        cover : "https://m.media-amazon.com/images/I/61rF-bSma8L._UF1000,1000_QL80_.jpg",
        description : "En vérité, l'insurrection contre mes parents, contre la pauvreté, contre ma classe sociale, son racisme, sa violence, ses habitudes, n'a été que seconde. Car avant de m'insurger contre le monde de mon enfance, c'est le monde de mon enfance qui s'est insurgé contre moi. Très vite j'ai été pour ma famille et les autres une source de honte, et même de dégoût. Je n'ai pas eu d'autre choix que de prendre la fuite. Ce livre est une tentative pour comprendre. Édouard Louis a 21 ans. Il a déjà publié Pierre Bourdieu: l'insoumission en héritage (PUF, 2013). En finir avec Eddy Bellegueule est son premier roman.",
        quotes : [
            ""
        ]
    },
    {
        id : 5,
        title : "Seul le silence",
        author : "R. J. Ellory",
        year : 2007,
        genre : "Roman noir",
        cover : "https://m.media-amazon.com/images/I/81PoDKTDMVL.jpg",
        description : "Joseph a douze ans lorsqu'il découvre dans son village de Géorgie le corps d'une fillette assassinée. Une des premières victimes d'une longue série de crimes. Des années plus tard, alors que l'affaire semble enfin élucidée, Joseph s'installe à New York. Mais, de nouveau, les meurtres d'enfants se multiplient… Pour exorciser ses démons, Joseph part à la recherche de ce tueur qui le hante. Avec ce récit crépusculaire à la noirceur absolue, R. J. Ellory évoque autant William Styron que Truman Capote, par la puissance de son écriture et la complexité des émotions qu'il met en jeu.",
        quotes : [
            ""
        ]
    },
    {
        id : 6,
        title : "Papillon de nuit",
        author : "R. J. Ellory",
        year : 2015,
        genre : "Roman noir",
        cover : "https://media.hachette.fr/fit-in/780x1280/imgArticle/LGFLIVREDEPOCHE/2022/9782253184423-001-X.jpeg?source=web",
        description : "Après l'assassinat de Kennedy, tout a changé aux États-Unis. La société est devenue plus violente, la musique plus forte, les drogues plus puissantes. L'Amérique a compris que si une puissance invisible pouvait éliminer leur président en plein jour, c'est qu'elle avait tous les pouvoirs. C'est dans cette Amérique en crise que Daniel Ford a grandi. Et c'est là, en Caroline du Sud, qu'il a été accusé d'avoir tué Nathan Vernet, son meilleur ami. Nous sommes maintenant en 1982 et Daniel est dans le couloir de la mort. Quelques heures avant son exécution, un prêtre vient recueillir ses dernières confessions. Bien vite, il apparaît que les choses sont loin d'être aussi simples qu'elles en ont l'air. Récit d'un meurtre, d'une passion, d'une folie, ce roman nous offre une histoire aussi agitée que les années soixante...",
        quotes : [
            ""
        ]
    },
    {
        id : 7,
        title : "L'Étranger",
        author : "Albert Camus",
        year : 1942,
        genre : "Littérature Française",
        cover : "https://m.media-amazon.com/images/I/8130inT26AL.jpg",
        description : "\"C'est alors que tout a vacillé. La mer a charrié un souffle épais et ardent. Il m'a semblé que le ciel s'ouvrait sur toute son étendue pour laisser pleuvoir du feu. Tout mon être s'est tendu et j'ai crispé ma main sur le revolver. La gâchette a cédé, j'ai touché le ventre poli de la crosse et c'est là, dans le bruit à la fois sec et assourdissant, que tout a commencé. J'ai secoué la sueur et le soleil. J'ai compris que j'avais détruit l'équilibre du jour, le silence exceptionnel d'une plage où j'avais été heureux.\" L'étranger est le premier roman d'Albert Camus.",
        quotes : [
            ""
        ]
    },
    {
        id : 8,
        title : "Et c'est ainsi que nous vivrons",
        author : "Douglas Kennedy",
        year : 2023,
        genre : "Anticipation dystopique",
        cover : "https://m.media-amazon.com/images/I/61OvazjaFiL.jpg",
        description : "2045. Les États-Unis n'existent plus, une nouvelle guerre de Sécession en a redessiné les frontières. Sur les côtes Est et Ouest, une république où la liberté de mœurs est totale mais où la surveillance est constante. Dans les États du Centre, une confédération où divorce, avortement et changement de sexe sont interdits et où les valeurs chrétiennes font loi. Les deux blocs se font face, chacun redoutant une infiltration de l'autre camp. C'est justement la mission qui attend Samantha Stengel. Agent des services secrets de la République, cette professionnelle reconnue, réputée pour son sang-froid, s'apprête à affronter l'épreuve de sa vie : passer de l'autre côté de la frontière, dans un des États confédérés les plus rigoristes, sur les traces d'une cible aussi dangereuse qu'imprévisible.Dans ces États désormais Désunis, Samantha devra puiser au plus profond de ses forces pour échapper aux mouchards de son propre camp et se confronter aux attaques de l'ennemi. Est-ce ainsi que nous vivrons ?",
        quotes : [
            ""
        ]
    },
    {
        id : 9,
        title : "Shining",
        author : "Stephen King",
        year : 1977,
        genre : "Horreur",
        cover : "https://m.media-amazon.com/images/I/81imcWAv6SL._UF1000,1000_QL80_.jpg",
        description : "Un écrivain en panne d'inspiration accepte un poste de gardien hivernal dans un hôtel isolé du Colorado, où il sombre peu à peu dans la folie.",
        quotes : [
            ""
        ]
    },
    {
        id : 10,
        title : "Dead Zone",
        author : "Stephen King",
        year : 1979,
        genre : "Fantastique",
        cover : "https://m.media-amazon.com/images/I/91nZcWxB7kL._UF1000,1000_QL80_.jpg",
        description : "Greg Stillson, candidat à la Maison-Blanche, est un fou criminel, grand admirateur de Hitler et d'autres maniaques de l'extermination. Quand il sera élu, ce sera l'Apocalypse. Un seul homme le sait : John Smith, car il est doué d'un étrange pouvoir qui lui attire pas mal d'ennuis, il devine l'avenir. Il n'y a rien de réjouissant à cela. Il peut prévoir les accidents, les catastrophes, les hécatombes. On ne le croit pas, ou alors on le croit trop. John Smith n'a encore rien dit de ses prémonitions. Pourtant, le candidat à la présidence des Etats-Unis est un dément. Que fera John Smith pour son pays ?",
        quotes : [
            ""
        ]
    },
    {
        id : 11,
        title : "Cinéma spéculations",
        author : "Quentin Tarantino",
        year : 2022,
        genre : "Autobiographie",
        cover : "https://editions.flammarion.com/media/cache/couverture_medium/flammarion_img/Couvertures/9782080419293.jpg",
        description : "Non content d'être l'un des réalisateurs les plus talentueux et adulés de sa génération, Quentin Tarantino est peut-être le cinéphile qui sait le mieux parler de films et transmettre sa passion incandescente pour le cinéma. Ayant fréquenté dès son plus jeune âge les salles obscures, c'est au Hollywood des années soixante-dix, celui de ses années décisives de formation, qu'il consacre plus particulièrement Cinéma spéculations - un director's cut aussi intellectuellement rigoureux que joyeusement exubérant. Mêlant histoire personnelle, anecdotes truculentes, analyses et critiques de films, Cinéma spéculations offre au lecteur, entraîné par la verve unique et grisante de Quentin Tarantino, une fascinante leçon de cinéma et de vie.",
        quotes : [
            ""
        ]
    },
    {
        id : 12,
        title : "L'Amour Ouf",
        author : "Neville Thompson",
        year : 2000,
        genre : "Roman de fiction",
        cover : "https://m.media-amazon.com/images/I/61jCFugRHqL.jpg",
        description : "Ils appartiennent à la même bande d'adolescents, élevés dans une cité où \"les choses ne changent jamais\". Amoureux, ils voulaient s'en sortir. Ensemble. Et ça leur semblait parti pour la vie. Jusqu'au jour où l'allumeuse du quartier entre en scène et où la réalité les rattrape : les obligations sociales, la délinquance, la prison autant d'obstacles qui finissent par les séparent et font voler l'espoir en éclat. Mais l'amour, lui, reste intact. Dans ce roman à deux voix, au style irrésistible, les mots claquent comme des coups de fusil et la vie s'écrit comme elle se parle. Chronique poignante, sur fond de réalisme social, L'Amour ouf est une tragédie moderne bouleversante.",
        quotes : [
            ""
        ]
    },
    {
        id : 13,
        title : "L'Alchimiste",
        author : "Paulo Coelho",
        year : 1988,
        genre : "Conte philosophique",
        cover : "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/11/9b/1d/1940241/1507-1/tsp20250718074139/L-Alchimiste.jpg",
        description : "Pour des millions de lecteurs dans le monde, ce livre a été une révélation : la clef d'une quête spirituelle que chacun de nous peut entreprendre, l'invitation à suivre son rêve pour y trouver sa vérité. L'histoire est celle de Santiago, jeune berger andalou parti à la recherche d'un trésor enfoui au pied des pyramides. Dans le désert, initié par l'alchimiste, il apprendra à écouter son cour et à déchiffrer les signes du destin. Merveilleux conte philosophique, souvent comparé aux classiques du genre - Le Petit Prince, Jonathan Livingstone le goéland -, ce livre, devenu un best-seller international, a valu en France le Grand Prix des lectrices de Elle à l'auteur du Pèlerin de Compostelle et de La Cinquième Montagne.",
        quotes : [
            ""
        ]
    },
    {
        id : 14,
        title : "La Vie devant soi",
        author : "Romain Gary",
        year : 1975,
        genre : "Littérature Française",
        cover : "https://m.media-amazon.com/images/I/81ZcBwoEwoL.jpg",
        description : "Signé Ajar, ce roman reçut le prix Goncourt en 1975. Histoire d'amour d'un petit garçon arabe pour une très vieille femme juive : Momo se débat contre les six étages que Madame Rosa ne veut plus monter et contre la vie parce que \"ça ne pardonne pas\" et parce qu'il n'est \"pas nécessaire d'avoir des raisons pour avoir peur\". Le petit garçon l'aidera à se cacher dans son \"trou juif\", elle n'ira pas mourir à l'hôpital et pourra ainsi bénéficier du droit sacré \"des peuples à disposer d'eux-mêmes\" qui n'est pas respecté par l'Ordre des médecins. Il lui tiendra compagnie jusqu'à ce qu'elle meure et même au-delà de la mort.",
        quotes : [
            ""
        ]
    },
    {
        id : 15,
        title : "Une vie",
        author : "Guy de Maupassant",
        year : 1883,
        genre : "Littérature Française",
        cover : "https://bloombooks.ma/storage/uploads/9782070410842-une-vie.jpeg",
        description : "Jeanne, fille unique très choyée du baron et de la baronne Le Perthuis des Vauds, avait tout pour être heureuse. Son mariage avec Julien de Lamare, rustre et avare, se révélera une catastrophe. Sa vie sera une suite d'épreuves et de désillusions. Ce roman, le premier de Guy de Maupassant, est une peinture remarquable des moeurs provinciales de la Normandie du xixe siècle : hobereaux, domestiques, paysans y sont décrits avec beaucoup de réalisme.",
        quotes : [
            ""
        ]
    },
    {
        id : 16,
        title : "Marche ou crève",
        author : "Stephen King",
        year : 1979,
        genre : "Anticiption dystopique",
        cover : "https://m.media-amazon.com/images/I/81XpYxKtnbL._UF1000,1000_QL80_.jpg",
        description : "Garraty, un jeune adolescent natif du Maine, va concourir pour \"La Longue Marche\", une compétition qui compte cent participants. Cet événement est très attendu. Il sera retransmis à la télévision, suivi par des milliers de personnes. Mais ce n'est pas une marche comme les autres, plutôt un jeu sans foi ni loi... Garraty a tout intérêt à gagner. Le contraire pourrait lui coûter cher. Très cher...",
        quotes : [
            ""
        ]
    },
    {
        id : 17,
        title : "Les amants du Lutetia",
        author : "Émilie Frèche",
        year : 2023,
        genre : "Littérature Française",
        cover : "https://www.albin-michel.fr/sites/default/files/couvertures/albin/Article/Image/2023/9782226481160-j.jpg",
        description : "Un matin, un garçon d'étage de l'hôtel Lutetia, découvre un couple d'octogénaires, main dans la main, endormis pour l'éternité. Ce geste ultime et romantique, cette liberté qu'ils n'ont pas hésité à s'offrir a certes du panache, mais Ezra et Maud ont-ils pensé à leur fille Eléonore qu'ils laissent en proie à l'incompréhension et au chagrin ? Ont-ils seulement pensé à elle en planifiant leur mort spectaculaire, leur funérailles extravagantes, le legs compliqué de leur maison des Bulles ? Ultime coup d'éclat d'un couple de publicitaires, vendeurs de rêves, incarnations vibrantes des dernières décennies euphoriques du XXe siècle ou témoignage d'amour maladroit, absurde, tapageur mais d'amour malgré tout ? C'est drôle, c'est perturbant, c'est bouleversant, et Emilie Frèche signe ici son meilleur roman.",
        quotes : [
            ""
        ]
    },
    {
        id : 18,
        title : "La collision",
        author : "Paul Gasnier",
        year : 2025,
        genre : "Littérature Française",
        cover : "https://m.media-amazon.com/images/I/81z9OCa2Y9L._AC_UF1000,1000_QL80_.jpg",
        description : "En 2012, en plein centre-ville de Lyon, une femme décède brutalement, percutée par un jeune garçon en moto cross qui fait du rodéo urbain à 80 km/h. Dix ans plus tard, son fils, qui n'a cessé d'être hanté par le drame, est devenu journaliste. Il observe la façon dont ce genre de catastrophe est utilisé quotidiennement pour fracturer la société et dresser une partie de l'opinion contre l'autre. Il décide de se replonger dans la complexité de cet accident, et de se lancer sur les traces du motard pour comprendre d'où il vient, quel a été son parcours et comment un tel événement a été rendu possible. En décortiquant ce drame familial, Paul Gasnier révèle deux destins qui s'écrivent en parallèle, dans la même ville, et qui s'ignorent jusqu'au jour où ils entrent violemment en collision. C'est aussi l'histoire de deux familles qui racontent chacune l'évolution du pays. Un récit en forme d'enquête littéraire qui explore la force de nos convictions quand le réel les met à mal, et les manquements collectifs qui créent l'irrémédiable.",
        quotes : [
            ""
        ]
    },
    {
        id : 19,
        title : "Deux milliards de battements de coeur",
        author : "Genki Kawamura",
        year : 2012,
        genre : "Littérature Japonaise",
        cover : "https://www.babelio.com/couv/CVT_Et-si-les-chats-disparaissaient-du-monde-Deux-_9418.jpg",
        description : "A 30 ans, le narrateur de ce livre apprend par son médecin qu'il est condamné. Il ne lui reste plus que quelques semaines à vivre. Aussi lorsque le Diable, cet étonnant visiteur en short, lui propose un marché, n'hésite-t-il pas longtemps. Les clauses du contrat ? Effacer, à chaque jour que Dieu fait, une chose de la surface de la Terre lui vaudra vingt-quatre heures de vie supplémentaires... Les téléphones, les montres : jusqu'ici, c'est à qui perd gagne... Mais lorsque le Diable lui propose de supprimer les chats, sa vie va basculer une deuxième fois...",
        quotes : [
            ""
        ]
    },
]