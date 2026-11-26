import type { BookData } from '../types/book';

export const cm1LeMysterieuxCasier: BookData = {
  "id": "cm1-le-mysterieux-casier",
  "title": "Le mystérieux casier",
  "subtitle": "Une aventure interactive dont tu es le héros !",
  "grade": "CM1",
  "section": "primaire",
  "cycleLabel": "Cycle 3",
  "ageRange": "9-10 ans",
  "theme": "Intimidation répétée, preuves & entraide",
  "howToPlay": "Lis attentivement chaque paragraphe. À la fin de chaque section, trois choix s'offrent à toi. Choisis la réaction qui te semble la plus juste, puis rends-toi directement au numéro indiqué en gras. Ne lis pas le livre page par page : saute d'un numéro à l'autre selon tes décisions !",
  "introduction": [
    "Bienvenue à l'École élémentaire des Érables !",
    "Bienvenue dans la classe de CM1 de Mme Girault. Dans le couloir, juste devant la porte de la classe, chaque élève possède un petit casier en bois muni d'une fente. On y glisse d'ordinaire des mots d'amitié, des dessins ou les cahiers oubliés.",
    "Mais depuis le début de la semaine, une ombre plane sur le couloir. Inès, une élève plutôt réservée qui porte de grandes lunettes rondes et passe toutes ses récréations à dessiner de magnifiques créatures dans son carnet, retrouve chaque matin un petit billet anonyme plié en quatre dans son casier.",
    "Au départ, certains camarades ont dit que ce n'était « juste pour rigoler ». Mais les jours passent, les messages se répètent et les mots deviennent de plus en plus vilains et blessants. Inès perd son sourire et n'ose plus ouvrir son casier.",
    "Dans ce livre, tu es l'enquêteur. Tu vas devoir observer ce qui se passe, faire les bons choix pour comprendre la différence entre une simple plaisanterie et des moqueries répétées, et agir de la meilleure façon possible."
  ],
  "paragraphs": {
    "1": {
      "id": 1,
      "text": "C'est un lundi matin ordinaire à l'école des Érables. Tu viens d'accrocher ton manteau au porte-manteau du couloir quand tu remarques Inès immobile devant son casier en bois. Ses mains tremblent légèrement. Elle retire un petit papier plié en quatre glissé dans la fente. En le dépliant, ses yeux se remplissent de larmes. Léo, le bavard de la classe, passe à côté d'elle, jette un coup d'œil par-dessus son épaule et s'exclame en rigolant : « Oh, encore un billet doux ! Arrête de faire cette tête Inès, c'est bon, c'est juste une farce ! » Inès baisse la tête sans répondre et chiffonne le papier dans sa paume. Tu sens que quelque chose ne va pas.",
      "choices": [
        {
          "text": "Si tu t'approches doucement d'Inès pour lui demander calmement ce qui est écrit sur ce papier, rends-toi au 4.",
          "target": 4
        },
        {
          "text": "Si tu te moques aussi en disant à Inès de ne pas en faire toute une montagne pour un simple papier, rends-toi au 8.",
          "target": 8
        },
        {
          "text": "Si tu te précipites sur Léo en l'accusant d'être l'auteur du billet et en lui criant dessus devant tout le monde, rends-toi au 12.",
          "target": 12
        }
      ],
      "isEnding": false
    },
    "2": {
      "id": 2,
      "text": "Tu décides d'ignorer la mine triste d'Inès et tu te diriges vers ton propre casier pour y poser ton agenda. Après tout, s'amuser un peu n'a jamais fait de mal à personne, penses-tu. Mais lorsque tu te retournes, tu vois qu'Inès a laissé tomber son carnet de dessins par terre tant elle est troublée. Personne ne l'aide à le ramasser. Un sentiment d'inconfort s'installe en toi : est-ce vraiment juste une plaisanterie si elle semble si triste ?",
      "choices": [
        {
          "text": "Si tu rattrapes ton désintérêt en allant l'aider à ramasser ses affaires et en lui proposant d'en parler, rends-toi au 7.",
          "target": 7
        },
        {
          "text": "Si tu continues à penser que c'est une exagération d'Inès et que tu rentres en classe en rigolant avec les autres, rends-toi au 15.",
          "target": 15
        },
        {
          "text": "Si tu accuses soudainement Thomas, qui passe par là, en lui disant de rendre le carnet d'Inès, rends-toi au 19.",
          "target": 19
        }
      ],
      "isEnding": false
    },
    "3": {
      "id": 3,
      "text": "Tu attrapes le bras de Thomas dans le couloir et tu t'écries : « C'est toi, j'en suis sûr ! Tu étais près des casiers hier soir ! » Thomas devient tout rouge, surpris et vexé. « Mais n'importe quoi ! Je rangeais mes affaires d'EPS ! » s'indigne-t-il. Ton intervention brutale crée un rassemblement bruyant. Mme Girault sort de la classe, le sourcil froncé. Tu as accusé un camarade au hasard, sans aucune preuve, et le mystère reste entier.",
      "choices": [
        {
          "text": "Si tu profites de la présence de Mme Girault pour lui expliquer calmement la situation des billets d'Inès, rends-toi au 9.",
          "target": 9
        },
        {
          "text": "Si tu insistes lourdement en fouillant le sac de Thomas sans son autorisation pour chercher d'autres papiers, rends-toi au 21.",
          "target": 21
        },
        {
          "text": "Si tu te rends compte de ton erreur et rigoles pour faire croire que c'était une blague, rends-toi au 13.",
          "target": 13
        }
      ],
      "isEnding": false
    },
    "4": {
      "id": 4,
      "text": "Tu t'approches d'Inès et tu lui dis à voix basse : « Ça va ? Qu'est-ce qu'il y a sur ce mot ? » Inès te regarde, hésitante, puis te montre le papier chiffonné. Tu lis une phrase écrite en lettres capitales déformées : « Tu dessines comme une fille de maternelle, tes lunettes sont moches. » Tu te souviens qu'hier, elle avait déjà reçu un mot disant qu'elle n'avait rien à faire dans cette école. La répétition commence à te sauter aux yeux.",
      "choices": [
        {
          "text": "Si tu conseilles à Inès de garder ce papier précieusement comme preuve pour le montrer à Mme Girault, rends-toi au 10.",
          "target": 10
        },
        {
          "text": "Si tu lui dis que ce n'est pas bien grave et que c'est sans doute un compliment maladroit, rends-toi au 17.",
          "target": 17
        },
        {
          "text": "Si tu attrapes brusquement le mot des mains d'Inès pour courir le plaquer sur le visage de Léo en l'accusant, rends-toi au 23.",
          "target": 23
        }
      ],
      "isEnding": false
    },
    "5": {
      "id": 5,
      "text": "Dans le couloir, tu remarques la silhouette de Jules qui traîne près des casiers d'un air mystérieux. Il regarde à gauche et à droite. Tu te dis qu'il prépare sûrement un mauvais coup. Au lieu de l'observer discrètement pour comprendre ce qu'il fait, tu bondis derrière lui et tu lui arraches son sac des mains en criant : « Attrapé ! C'est toi le corbeau ! » Des affaires s'éparpillent par terre. Jules te regarde, stupéfait et en colère.",
      "choices": [
        {
          "text": "Si tu t'excuses immédiatement auprès de Jules et lui demandes s'il a vu quelqu'un glisser un mot, rends-toi au 14.",
          "target": 14
        },
        {
          "text": "Si tu rigoles de la tête de Jules en disant que c'était une super farce de ta part, rends-toi au 20.",
          "target": 20
        },
        {
          "text": "Si tu refuses de t'excuser et fouilles dans ses cahiers pour chercher une écriture similaire, rends-toi au 28.",
          "target": 28
        }
      ],
      "isEnding": false
    },
    "6": {
      "id": 6,
      "text": "La cloche sonne. La rangée se forme dans le couloir. Tu te retrouves juste derrière Inès. Elle regarde fixement le sol et semble absente. À côté d'elle, deux élèves chuchotent en la regardant et rient sous cape. Tu réalises qu'une moquerie isolée est embêtante, mais que la répétition quotidienne isole complètement la personne qui la subit. Il faut agir intelligemment.",
      "choices": [
        {
          "text": "Si tu te rapproches d'Inès pour lui proposer de te mettre à côté d'elle en classe pour la réconforter, rends-toi au 11.",
          "target": 11
        },
        {
          "text": "Si tu te mets à rire avec les deux élèves pour ne pas te faire remarquer, rends-toi au 18.",
          "target": 18
        },
        {
          "text": "Si tu te retournes et accuses brutalement les deux élèves d'être les coupables des billets, rends-toi au 25.",
          "target": 25
        }
      ],
      "isEnding": false
    },
    "7": {
      "id": 7,
      "text": "Tu te baisses pour ramasser le carnet de dessin d'Inès et tu le lui tends avec un sourire bienveillant. « Merci... » murmure-t-elle doucement. Tu lui chuchotes : « Ce mot dans ton casier, ce n'est pas la première fois, n'est-ce pas ? » Elle hoche la tête, les larmes aux yeux : « C'est tous les jours depuis lundi... » Tu comprends alors la différence : une vanne une seule fois peut être une blague mauvaise, mais tous les jours, c'est de l'intimidation.",
      "choices": [
        {
          "text": "Si tu lui proposes d'aller ensemble voir Mme Girault avant le début du cours, rends-toi au 9.",
          "target": 9
        },
        {
          "text": "Si tu lui dis de laisser tomber parce que les mots finissent toujours par s'envoler tout seuls, rends-toi au 17.",
          "target": 17
        },
        {
          "text": "Si tu décides d'aller ouvrir tous les casiers du couloir un par un pour trouver des preuves, rends-toi au 24.",
          "target": 24
        }
      ],
      "isEnding": false
    },
    "8": {
      "id": 8,
      "text": "« Allez Inès, arrête de bouder ! » lances-tu en haussant les épaules. « Léo a raison, c'est juste un mot rigolo ! Faut savoir rire un peu ! » Inès se renfrogne, remet le mot dans son casier et s'éloigne sans dire un mot. Tu te sens fier de ton trait d'esprit, mais en entrant en classe, tu remarques qu'Inès s'assoit tout au fond, isolée et silencieuse. As-tu vraiment aidé la situation ?",
      "choices": [
        {
          "text": "Si tu réfléchis à ta réaction et décides de lui envoyer un petit mot gentil pendant le cours d'écriture, rends-toi au 16.",
          "target": 16
        },
        {
          "text": "Si tu continues à faire des blagues sur les lunettes d'Inès avec ton voisin de table, rends-toi au 22.",
          "target": 22
        },
        {
          "text": "Si tu te lèves brusquement en plein cours pour crier qui a écrit le billet, rends-toi au 29.",
          "target": 29
        }
      ],
      "isEnding": false
    },
    "9": {
      "id": 9,
      "text": "Tu accompagnes Inès auprès de Mme Girault, qui range des livres sur son bureau. Tu expliques avec calme : « Madame, Inès trouve des mots blessants dans son casier chaque matin depuis le début de la semaine. Ça la rend très triste. » Mme Girault prend un air très sérieux et écoute attentivement Inès. Elle félicite votre démarche. « Vous avez très bien fait de venir me voir. La répétition de moqueries n'est jamais un jeu », dit-elle.",
      "choices": [
        {
          "text": "Si tu proposes à Mme Girault d'animer une discussion sur le respect durant le cours de civisme ce matin, rends-toi au 11.",
          "target": 11
        },
        {
          "text": "Si tu dis à la maîtresse que finalement ce n'était pas si grave et que vous avez exagéré, rends-toi au 18.",
          "target": 18
        },
        {
          "text": "Si tu donnes à la maîtresse une liste de suspects au hasard inventée sur le moment, rends-toi au 27.",
          "target": 27
        }
      ],
      "isEnding": false
    },
    "10": {
      "id": 10,
      "text": "« Garde bien ce mot, Inès », lui dis-tu d'un ton d'enquêteur avisé. « Pour prouver qu'il y a un problème répété, il faut garder les preuves. On va noter la date et l'heure sur ce papier. » Inès semble rassurée par ton calme et ton organisation. Elle glisse la preuve dans sa trousse. Vous sentez que vous avez un vrai premier indice pour comprendre ce qui se passe.",
      "choices": [
        {
          "text": "Si tu profites du cours de français pour observer l'écriture de tous tes camarades au tableau, rends-toi au 16.",
          "target": 16
        },
        {
          "text": "Si tu te moques finalement du petit papier en disant qu'il est mal écrit et plein de fautes, rends-toi au 22.",
          "target": 22
        },
        {
          "text": "Si tu vas secouer le sac d'un élève au hasard pour voir si des stylos identiques en sortent, rends-toi au 30.",
          "target": 30
        }
      ],
      "isEnding": false
    },
    "11": {
      "id": 11,
      "text": "Pendant la distribution des cahiers du matin, tu t'assures d'être d'un soutien sans faille pour Inès. Mme Girault prend la parole devant la classe pour aborder un sujet important : « Les enfants, ce matin, nous allons parler de la frontière entre rigoler ensemble et se moquer de quelqu'un. » La classe devient très attentive. Tu remarques que certains élèves baissent la tête, mal à l'aise.",
      "choices": [
        {
          "text": "Si tu écoutes attentivement le cours pour repérer les réactions suspectes autour de toi, rends-toi au 26.",
          "target": 26
        },
        {
          "text": "Si tu lèves la main pour dire en rigolant que c'est Inès qui ne comprend jamais les blagues, rends-toi au 22.",
          "target": 22
        },
        {
          "text": "Si tu désignes du doigt trois camarades au hasard en hurlant qu'ils sont coupables, rends-toi au 29.",
          "target": 29
        }
      ],
      "isEnding": false
    },
    "12": {
      "id": 12,
      "text": "« C'est toi, Léo ! » réponds-tu en le pointant du doigt. « Tu es toujours en train de te moquer des autres ! » Léo s'énerve immédiatement : « Quoi ? Mais je viens d'arriver ! Tu m'accuses n'importe comment ! » Une dispute éclate dans le couloir, des bousculades manquent de faire tomber les manteaux. Inès, effrayée par ce tapage, se recroqueville encore plus. Tu as créé du conflit sans rien résoudre.",
      "choices": [
        {
          "text": "Si tu te calmes, t'excuses auprès de Léo et recentres ton attention sur la protection d'Inès, rends-toi au 4.",
          "target": 4
        },
        {
          "text": "Si tu rigoles de la colère de Léo en disant que c'était amusant de le faire énerver, rends-toi au 13.",
          "target": 13
        },
        {
          "text": "Si tu attrapes la trousse de Léo pour la vider par terre à la recherche de papiers similaires, rends-toi au 21.",
          "target": 21
        }
      ],
      "isEnding": false
    },
    "13": {
      "id": 13,
      "text": "Tu penses que détendre l'atmosphère par de la rigolade est la meilleure option. Tu éclates de rire : « Mais non, je rigolais ! Vous tombez tous dans le panneau ! » Léo lève les yeux au ciel et Inès te regarde avec déception. En minimisant l'événement, tu laisses le champ libre à la personne qui écrit ces billets anonymes. Le problème n'est toujours pas pris au sérieux.",
      "choices": [
        {
          "text": "Si tu te rattrapes en allant parler en privé à Inès à la récréation, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu continues à faire le clown pendant toute la matinée pour amuser la galerie, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu t'amuses à cacher les affaires d'un autre élève pour créer encore plus d'agitation, rends-toi au 38.",
          "target": 38
        }
      ],
      "isEnding": false
    },
    "14": {
      "id": 14,
      "text": "Tu comprends vite ton erreur et tu t'excuses poliment auprès de Jules. « Désolé Jules, je suis un peu tendu avec cette histoire de billets contre Inès. Tu n'aurais rien vu ce matin ? » Jules se frotte l'épaule et réfléchit : « Écoute, quand je suis arrivé, la porte du couloir était ouverte et j'ai vu quelqu'un glisser un papier avant de courir vers la cour... mais je n'ai pas vu son visage. » Un indice précieux !",
      "choices": [
        {
          "text": "Si tu notes cet horaire précis dans ton carnet pour poursuivre ton enquête à la récréation, rends-toi au 31.",
          "target": 31
        },
        {
          "text": "Si tu dis à Jules que c'est sûrement une invention et que tu te moques de son témoignage, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu cours accuser le premier élève que tu croises aux toilettes sur la base de ce detail, rends-toi au 41.",
          "target": 41
        }
      ],
      "isEnding": false
    },
    "15": {
      "id": 15,
      "text": "En classe, tu t'assois à ta place et tu lances à ton voisin : « Inès en fait toujours des tonnes. Un petit mot dans un casier et elle pleure ! » Ton voisin rigole. Mais durant la leçon de mathématiques, tu vois Inès qui n'arrive pas à se concentrer. Elle essuie discrètement une larme. Tu réalises soudain que ce n'est pas qu'un « simple jeu » quand la victime souffre au quotidien.",
      "choices": [
        {
          "text": "Si tu regrettes ton attitude et décides de lui passer un mot d'encouragement discret, rends-toi au 16.",
          "target": 16
        },
        {
          "text": "Si tu continues de te moquer d'elle pendant qu'elle passe au tableau résoudre un problème, rends-toi au 34.",
          "target": 34
        },
        {
          "text": "Si tu lances un effaceur sur le bureau du voisin en criant que c'est lui le corbeau, rends-toi au 40.",
          "target": 40
        }
      ],
      "isEnding": false
    },
    "16": {
      "id": 16,
      "text": "Discrètement, pendant que Mme Girault écrit des exercices de grammaire au tableau, tu déchires un morceau de papier propre. Tu y écris : « Courage Inès, tes dessins sont super. Tu n'es pas seule. » Tu le penses vraiment. Tu plies le mot et tu le lui fais passer de main en main. Lorsqu'elle le lit, elle se retourne vers toi et un petit sourire réapparaît enfin sur son visage.",
      "choices": [
        {
          "text": "Si tu poursuis ton plan en observant les comportements de la classe durant la récréation, rends-toi au 31.",
          "target": 31
        },
        {
          "text": "Si tu penses que ce mot gentil suffit et que tu te mets à rigoler de sa réponse avec ton voisin, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu profites du cours pour fouiller dans le casier de ton voisin sous prétexte de chercher un stylo, rends-toi au 39.",
          "target": 39
        }
      ],
      "isEnding": false
    },
    "17": {
      "id": 17,
      "text": "« Mais non, c'est rien ! » répètes-tu à Inès. « Si tu n'y prêtes pas attention, la personne va se lasser ! » Mais Inès secoue la tête : « Ça fait quatre jours... Ça commence dès le lundi matin et ça continue. » Tu découvres une règle essentielle : ignorer l'intimidation ne la fait pas toujours disparaître, cela risque parfois de laisser l'auteur continuer sans être inquiété.",
      "choices": [
        {
          "text": "Si tu révises ton jugement et décides d'en parler à un adulte à la récréation du matin, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu lui répètes brutalement de s'endurcir et de ne pas jouer les victimes, rends-toi au 34.",
          "target": 34
        },
        {
          "text": "Si tu vas accuser la maîtresse de ne rien surveiller dans le couloir, rends-toi au 42.",
          "target": 42
        }
      ],
      "isEnding": false
    },
    "18": {
      "id": 18,
      "text": "Tu décides d'adopter l'attitude de la majorité : tu rigoles doucement avec les deux élèves qui chuchotent. Tu te dis que c'est plus facile d'être du côté de ceux qui rient. Mais toute la matinée, tu te sens mal à l'aise. En restant spectateur passif ou en riant aux moqueries, tu réalises que tu encourages sans le vouloir l'auteur des billets.",
      "choices": [
        {
          "text": "Si tu décides d'arrêter d'être complice et d'aller soutenir Inès dès la sonnerie de la récréation, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu persistes dans cette voie et ajoutes ta propre moquerie sur le cahier d'Inès, rends-toi au 34.",
          "target": 34
        },
        {
          "text": "Si tu bouscules un élève au hasard dans les rangs pour rejeter la faute sur lui, rends-toi au 37.",
          "target": 37
        }
      ],
      "isEnding": false
    },
    "19": {
      "id": 19,
      "text": "« Hey Thomas ! Rends le carnet d'Inès ! C'est sûrement toi qui mets les mots aussi ! » lances-tu à haute voix. Thomas s'arrête net, abasourdi. « Mais je n'ai rien fait ! Je ramassais ma règle ! » La classe commence à s'agiter autour de vous. Accuser sans savoir crée de l'injustice et complique la recherche de la vérité.",
      "choices": [
        {
          "text": "Si tu t'excuses auprès de Thomas et proposes de reprendre l'enquête calmement, rends-toi au 10.",
          "target": 10
        },
        {
          "text": "Si tu rigoles de sa surprise et lui dis que c'était une plaisanterie, rends-toi au 13.",
          "target": 13
        },
        {
          "text": "Si tu attrapes son cartable pour le vider au milieu du couloir, rends-toi au 21.",
          "target": 21
        }
      ],
      "isEnding": false
    },
    "20": {
      "id": 20,
      "text": "Tu te mets à rire fortement : « Regardez la tête de Jules ! On dirait qu'il a vu un fantôme ! » La cour et le couloir résonnent de tes éclats de voix. Mais personne ne rit avec toi. Jules ramasse ses affaires d'un air sombre, et Inès s'est éloignée, déçue. En transformant tout en plaisanterie douteuse, tu perds la confiance de tes camarades.",
      "choices": [
        {
          "text": "Si tu t'excuses sérieusement et cherches à comprendre qui embête Inès, rends-toi au 31.",
          "target": 31
        },
        {
          "text": "Si tu continues de faire de l'humour lourd pendant le cours de géographie, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu provoques une bagarre avec Jules pour montrer que tu es le plus fort, rends-toi au 37.",
          "target": 37
        }
      ],
      "isEnding": false
    },
    "21": {
      "id": 21,
      "text": "Tu attrapes le sac de ton camarade et tu le secoues au-dessus du sol. Des stylos, des cahiers et une trousse s'éparpillent dans un grand fracas. Mme Girault arrive immédiatement, la voix ferme : « Ça suffit ! Qu'est-ce qui se passe ici ? » Tu te retrouves puni pour ton comportement agressif, alors que tu voulais à l'origine résoudre le mystère du casier.",
      "choices": [
        {
          "text": "Si tu profites de l'explication avec Mme Girault pour lui raconter tout sur les billets d'Inès, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu réponds à la maîtresse que c'est une farce et que tout le monde s'amuse bien, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu accuses un autre élève d'avoir fait tomber le sac à ta place, rends-toi au 43.",
          "target": 43
        }
      ],
      "isEnding": false
    },
    "22": {
      "id": 22,
      "text": "Pendant la leçon, tu continues à faire des blagues chuchotées sur les lunettes ou les dessins d'Inès pour faire rire tes voisins. Tu vois bien qu'Inès baisse les épaules et essaie de se faire toute petite. Tu deviens toi-même un acteur de l'intimidation répétée en participant aux moqueries.",
      "choices": [
        {
          "text": "Si tu prends conscience du mal que tu fais et décides d'aller lui présenter tes excuses à la récréation, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu trouves cela très amusant et prévois de glisser toi aussi un mot moqueur à midi, rends-toi au 34.",
          "target": 34
        },
        {
          "text": "Si tu interromps la maîtresse en disant que c'est Inès qui perturbe le cours avec ses larmes, rends-toi au 44.",
          "target": 44
        }
      ],
      "isEnding": false
    },
    "23": {
      "id": 23,
      "text": "Tu arraches le mot des mains d'Inès et tu te précipites sur Léo. Tu lui plaques le papier contre la veste : « Regarde ce que tu as fait ! Tu es démasqué ! » Léo te repousse d'un bond : « Mais ça ne va pas ? Je n'ai même pas de stylo rouge ! » En agissant avec violence et précipitation, tu n'as rien résolu et tu as abîmé la seule preuve disponible.",
      "choices": [
        {
          "text": "Si tu lisses le papier abîmé et décides de l'apporter calmement à la maîtresse, rends-toi au 9.",
          "target": 9
        },
        {
          "text": "Si tu rigoles en disant que c'était un test de réflexes pour Léo, rends-toi au 13.",
          "target": 13
        },
        {
          "text": "Si tu te mets à fouiller la trousse de Léo de force pour trouver le stylo rouge, rends-toi au 21.",
          "target": 21
        }
      ],
      "isEnding": false
    },
    "24": {
      "id": 24,
      "text": "Tu décides de te prendre pour un détective de film : tu te mets à ouvrir grand tous les casiers en bois du couloir, l'un après l'autre, en cherchant des indices. Plusieurs élèves crient : « Hey ! C'est privé ! Touche pas à mes affaires ! » Mme Girault sort de la classe et te demande de t'arrêter immédiatement. Ton manque d'égards pour les autres se retourne contre toi.",
      "choices": [
        {
          "text": "Si tu lui expliques ta démarche d'enquête pour protéger Inès contre le harcèlement, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu prétends que tu cherchais simplement ta propre gomme perdue, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu accuses ton voisin d'avoir ouvert les casiers avant toi, rends-toi au 43.",
          "target": 43
        }
      ],
      "isEnding": false
    },
    "25": {
      "id": 25,
      "text": "Tu te retournes brusquement vers les deux élèves dans le rang et tu leur cries : « C'est vous ! Je sais que c'est vous deux qui écrivez des bêtises à Inès ! » Les deux élèves tombent des nues : « Mais n'importe quoi, on parlait du dessin animé d'hier soir ! » Mme Girault te demande de vous calmer et de vous ranger en silence. Accuser sans preuves fragilise ton action.",
      "choices": [
        {
          "text": "Si tu restes attentif durant la matinée et décides d'en parler calmement après la classe, rends-toi au 31.",
          "target": 31
        },
        {
          "text": "Si tu rigoles pour faire croire que tu blaguais, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu bouscules les deux élèves pour entrer le premier dans la classe, rends-toi au 37.",
          "target": 37
        }
      ],
      "isEnding": false
    },
    "26": {
      "id": 26,
      "text": "Pendant la discussion menée par Mme Girault sur le respect et la définition du harcèlement (des actes ou mots blessants répétitifs), tu observes la classe. Tu remarques que la petite Sarah se dandine sur sa chaise et regarde souvent en direction du casier d'Inès avec un air très inquiet. Sarah semble savoir quelque chose ou regretter une action.",
      "choices": [
        {
          "text": "Si tu décides d'aller parler gentiment à Sarah à la récréation de 10h pour en savoir plus, rends-toi au 31.",
          "target": 31
        },
        {
          "text": "Si tu te mets à rire en la pointant du doigt devant toute la classe, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu te lèves et vas fouiller le sac de Sarah au fond de la classe sans rien demander, rends-toi au 39.",
          "target": 39
        }
      ],
      "isEnding": false
    },
    "27": {
      "id": 27,
      "text": "Tu donnes à Mme Girault une liste de trois noms choisis complètement au hasard : « Je pense que c'est Paul, Maxime ou Sarah ! » Mme Girault te regarde avec sévérité : « On ne donne pas des noms au hasard sans preuves, c'est de la diffamation et c'est aussi très grave. » Tu t'es décrédibilisé auprès de l'adulte de confiance.",
      "choices": [
        {
          "text": "Si tu t'excuses et reconnais que tu voulais aller trop vite, puis lui montres le mot d'Inès, rends-toi au 10.",
          "target": 10
        },
        {
          "text": "Si tu rigoles en disant que c'était juste un jeu pour voir sa réaction, rends-toi au 13.",
          "target": 13
        },
        {
          "text": "Si tu insistes en inventant des fausses preuves contre Paul, rends-toi au 45.",
          "target": 45
        }
      ],
      "isEnding": false
    },
    "28": {
      "id": 28,
      "text": "Tu te mets à fouiller dans le sac de Jules malgré ses protestations. « Laisse mes affaires ! » crie-t-il. Il essaie de reprendre son sac et le cahier d'activités se déchire en deux. Mme Girault intervient sur-le-champ. Te voilà convoqué dans le bureau de la direction pendant la récréation pour détérioration de matériel, loin de pouvoir aider Inès.",
      "choices": [
        {
          "text": "Si tu profites de cet entretien avec la directrice pour expliquer les billets répétés envers Inès, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu dis à la directrice que c'était une blague amusante qui a mal tourné, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu accuses Jules d'avoir déchiré son propre cahier tout seul, rends-toi au 43.",
          "target": 43
        }
      ],
      "isEnding": false
    },
    "29": {
      "id": 29,
      "text": "Au milieu du cours de calcul, tu te lèves sur ta chaise et tu hurles : « Arrêtez tous d'écrire des mots dans le casier d'Inès ! Je sais qu'il y a un coupable ici ! » Toute la classe éclate de rire, sauf Inès qui se cache le visage dans les mains, morte de honte. Mme Girault te demande de te rasseoir immédiatement. Ta réaction spectaculaire n'a fait qu'empirer la gêne d'Inès.",
      "choices": [
        {
          "text": "Si tu demandes à parler à Mme Girault à la fin de l'heure pour t'expliquer avec calme, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu te mets à faire des grimaces pour continuer à faire rire les autres, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu accuses ton voisin de chaise en disant qu'il t'a poussé à crier, rends-toi au 40.",
          "target": 40
        }
      ],
      "isEnding": false
    },
    "30": {
      "id": 30,
      "text": "Tu te précipites sur le sac d'un élève au hasard et tu le secoues violemment. Des stylos feutres roulent sur le sol du couloir. Tu ramasses un feutre rouge : « Ha ! Du feutre rouge ! Comme sur le mot ! » L'élève te regarde avec des yeux écarquillés : « Mais tout le monde a un feutre rouge dans sa trousse en CM1 ! » Tu te rends compte du ridicule de ta méthode.",
      "choices": [
        {
          "text": "Si tu ramasses les stylos, t'excuses et décides de mener une vraie enquête par l'observation, rends-toi au 31.",
          "target": 31
        },
        {
          "text": "Si tu rigoles de la situation en lançant les stylos en l'air, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu accuses cet élève encore plus fort malgré l'absence de preuve valable, rends-toi au 45.",
          "target": 45
        }
      ],
      "isEnding": false
    },
    "31": {
      "id": 31,
      "text": "À la récréation de 10h, tu observes discrètement le couloir et la cour. Tu te rapproches de Sarah pour discuter calmement avec elle. Intimidée, elle finit par te confier à voix basse : « J'ai vu Maxime déchirer une page de son cahier de brouillon violet ce matin... et l'écriture sur le billet ressemble à la sienne. » Tu tiens un indice concret !",
      "choices": [
        {
          "text": "Si tu vas parler calmement à Inès pour partager cette découverte, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu te précipites sur Maxime à la cantine en lui hurlant dessus devant tout le monde, rends-toi au 37.",
          "target": 37
        },
        {
          "text": "Si tu vas voir Mme Girault avec Inès pour lui transmettre cette information, rends-toi au 33.",
          "target": 33
        }
      ],
      "isEnding": false
    },
    "32": {
      "id": 32,
      "text": "Pendant la pause, tu rejoins Inès assise seule sur un banc. Tu lui proposes d'échanger des dessins et de jouer au morpion. Un grand sourire illumine son visage. En brisant son isolement, tu lui montres qu'elle n'est pas seule face à ces attaques répétées.",
      "choices": [
        {
          "text": "Si tu lui proposes d'informer la maîtresse avant le déjeuner, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu lui dis soudain que ses lunettes sont quand même drôles pour rigoler avec les autres, rends-toi au 34.",
          "target": 34
        },
        {
          "text": "Si tu décides de fouiller le sac de Maxime pour trouver son cahier violet, rends-toi au 39.",
          "target": 39
        }
      ],
      "isEnding": false
    },
    "33": {
      "id": 33,
      "text": "Tu demandes un entretien discret avec Mme Girault. Tu lui expliques avec clarté la répétition des messages moqueurs dans le casier d'Inès. La maîtresse prend l'affaire très au sérieux : « Merci d'être venu me voir. Le harcèlement commence souvent par ce qu'on croit être des petites blagues. Je vais surveiller le couloir. »",
      "choices": [
        {
          "text": "Si tu rejoins Inès à la cantine pour la rassurer, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu crie haut et fort dans le couloir que la maîtresse va punir tout le monde, rends-toi au 37.",
          "target": 37
        },
        {
          "text": "Si tu minimises soudain tes propos devant tes camarades en disant que c'était une blague, rends-toi au 35.",
          "target": 35
        }
      ],
      "isEnding": false
    },
    "34": {
      "id": 34,
      "text": "À la récréation, tu lances des réflexions moqueuses sur Inès avec un groupe d'élèves. Inès baisse les yeux et s'éloigne, les larmes aux joues. En agissant ainsi, tu aggraves sa souffrance et tu encourages l'auteur des billets.",
      "choices": [
        {
          "text": "Si tu regrettes ton comportement et décides de rejoindre Inès pour lui présenter des excuses sincères, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu pousses la moquerie en cachant le carnet d'Inès dans le couloir, rends-toi au 38.",
          "target": 38
        },
        {
          "text": "Si tu continues à faire le clown auprès des autres élèves à la cantine, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "35": {
      "id": 35,
      "text": "Tu répètes à qui veut l'entendre que toute cette histoire n'est qu'une plaisanterie sans importance. Les élèves rigolent, mais l'auteur anonyme en profite pour continuer ses agissements à l'abri des regards.",
      "choices": [
        {
          "text": "Si tu te rends compte de la gravité des faits et vas en parler à Mme Girault, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu décides de fouiller dans les casiers pendant que le couloir est vide, rends-toi au 39.",
          "target": 39
        },
        {
          "text": "Si tu continues à faire des blagues bruyantes sur le plateau du repas à la cantine, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "36": {
      "id": 36,
      "text": "Surpris près des casiers, tu bafouilles devant Mme Girault que tu cherchais simplement ta gomme tombée au sol. La maîtresse te dévisage d'un air dubitatif et te demande de regagner ta place. Tu évites une punition mais tu n'as rien découvert.",
      "choices": [
        {
          "text": "Si tu décides d'adopter une méthode plus honnête en allant soutenir Inès, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu accuses un camarade qui passe par là pour détourner l'attention, rends-toi au 41.",
          "target": 41
        },
        {
          "text": "Si tu persistes à faire l'intéressant pendant le cours en perturbant la classe, rends-toi au 44.",
          "target": 44
        }
      ],
      "isEnding": false
    },
    "37": {
      "id": 37,
      "text": "Dans un moment d'énervement, tu provoques une altercation avec Maxime au milieu du couloir. Les surveillants accourent et séparent le groupe. Tu te fais réprimander pour ton agressivité, tandis que le vrai coupable court toujours.",
      "choices": [
        {
          "text": "Si tu t'excuses auprès de Maxime et expliques posément ton inquiétude aux surveillants, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu rejettes la faute sur un innocent pour échapper à la punition, rends-toi au 43.",
          "target": 43
        },
        {
          "text": "Si tu t'en vas en rigolant d'un air arrogant, rends-toi au 35.",
          "target": 35
        }
      ],
      "isEnding": false
    },
    "38": {
      "id": 38,
      "text": "Pour faire une plaisanterie, tu dissimules la trousse d'un camarade sous un meuble. La perte déclenche un tumulte général dans la classe et retarde le début de la leçon. Ton geste apporte inutilement du désordre.",
      "choices": [
        {
          "text": "Si tu avoues ta bêtise et remets rapidement la trousse à son propriétaire, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu accuses un élève au hasard pour ne pas être démasqué, rends-toi au 40.",
          "target": 40
        },
        {
          "text": "Si tu te moques ouvertement du désarroi de ton camarade, rends-toi au 34.",
          "target": 34
        }
      ],
      "isEnding": false
    },
    "39": {
      "id": 39,
      "text": "Tu profites d'un moment d'inattention pour ouvrir sans permission le cartable de Maxime. Manque de chance, un élève te voit et t'interpelle à haute voix. Tu te retrouves piégé en situation d'indiscrétion totale.",
      "choices": [
        {
          "text": "Si tu expliques poliment ta recherche de preuves à la maîtresse, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu affirmes sans preuve que Maxime est le corbeau pour te justifier, rends-toi au 45.",
          "target": 45
        },
        {
          "text": "Si tu prétends qu'il s'agissait d'une simple farce sans gravité, rends-toi au 35.",
          "target": 35
        }
      ],
      "isEnding": false
    },
    "40": {
      "id": 40,
      "text": "Pour éviter d'être réprimandé pour ton agitation, tu désignes ton voisin de table comme l'auteur du bruit. Celui-ci se défend vivement. Cette fausse accusation détériore tes relations dans la classe.",
      "choices": [
        {
          "text": "Si tu regrettes tes propos et t'excuses immédiatement auprès de ton voisin, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu insistes lourdement en maintenant ton mensonge, rends-toi au 45.",
          "target": 45
        },
        {
          "text": "Si tu te mets à rigoler en déclarant que tout cela n'est qu'un jeu, rends-toi au 35.",
          "target": 35
        }
      ],
      "isEnding": false
    },
    "41": {
      "id": 41,
      "text": "Dans les couloirs près des sanitaires, tu accostes brusquement un camarade qui passe par là et tu l'accuses de rédiger les mots anonymes. Surpris et blessé, l'élève dément vigoureusement. Tu as agi sans aucun fondement.",
      "choices": [
        {
          "text": "Si tu reconnais ton erreur et présentes des excuses courtoises, rends-toi au 31.",
          "target": 31
        },
        {
          "text": "Si tu vas fouiller les affaires de cet élève sans son accord, rends-toi au 39.",
          "target": 39
        },
        {
          "text": "Si tu tournes l'explication en dérision avant de t'enfuir, rends-toi au 35.",
          "target": 35
        }
      ],
      "isEnding": false
    },
    "42": {
      "id": 42,
      "text": "Tu t'adresses à Mme Girault sur un ton reprocheur en affirmant que le couloir manque de surveillance. La maîtresse recadre poliment la discussion en rappelant l'importance du respect mutuel et de la responsabilité collective.",
      "choices": [
        {
          "text": "Si tu comprends le message et proposes ton aide pour écouter Inès, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu hausses les épaules en prétendant que ce n'est qu'un détail amusant, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu provoques un échange houleux avec un camarade dans le couloir, rends-toi au 37.",
          "target": 37
        }
      ],
      "isEnding": false
    },
    "43": {
      "id": 43,
      "text": "Interrogé par l'enseignante après une bousculade, tu indiques du doigt un autre élève en affirmant qu'il a renversé le matériel. Mme Girault, qui a assisté à la scène, désapprouve vivement ton manque de sincérité.",
      "choices": [
        {
          "text": "Si tu rectifies immédiatement la vérité et t'excuses, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu cherches à cacher les affaires d'un témoin de la scène, rends-toi au 38.",
          "target": 38
        },
        {
          "text": "Si tu te mets à rire d'un air narquois face à la situation, rends-toi au 35.",
          "target": 35
        }
      ],
      "isEnding": false
    },
    "44": {
      "id": 44,
      "text": "Pendant la leçon, tu coupes la parole à l'enseignante en prétendant qu'Inès dérange le cours avec ses larmes. La jeune fille se renfrogne, profondément blessée par ta remarque insensible.",
      "choices": [
        {
          "text": "Si tu regrettes ta phrase et vas réconforter Inès à la pause, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu en rajoutes une couche en ricanant avec tes voisins de table, rends-toi au 34.",
          "target": 34
        },
        {
          "text": "Si tu contestes la décision de la maîtresse en haussant le ton, rends-toi au 42.",
          "target": 42
        }
      ],
      "isEnding": false
    },
    "45": {
      "id": 45,
      "text": "Tu affirmes devant plusieurs camarades que Paul est l'auteur des petits billets, en fabriquant de faux arguments. La supercherie est rapidement découverte et tu perds toute crédibilité aux yeux du groupe.",
      "choices": [
        {
          "text": "Si tu reconnais tes mensonges et présentes tes excuses à Paul et Inès, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu vas fouiller les affaires de Paul pour tenter d'y placer un faux indice, rends-toi au 39.",
          "target": 39
        },
        {
          "text": "Si tu minimises l'affaire en déclarant que tout cela n'est qu'un jeu d'enfant, rends-toi au 35.",
          "target": 35
        }
      ],
      "isEnding": false
    },
    "46": {
      "id": 46,
      "text": "À 12h, dans la cantine des Érables, tu t'installes à la même table qu'Inès. Tu partages un moment convivial et tu l'écoutes raconter ses créations. Elle te confie discrètement que le dernier billet glissé dans son casier utilisait une encre violette très particulière.",
      "choices": [
        {
          "text": "Si tu notes soigneusement ce nouvel indice sur le papier pour l'après-midi, rends-toi au 49.",
          "target": 49
        },
        {
          "text": "Si tu attrapes la trousse du voisin de table pour vérifier la couleur de ses stylos, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu te moques de l'encre violette en rigolant fort devant les autres tables, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "47": {
      "id": 47,
      "text": "Pendant le repas du midi, tu fais le pitre en jetant des morceaux de pain et en plaisantant sur les billets anonymes. Le personnel de cantine intervient pour te réprimander. Tu n'as pas du tout fait avancer la situation.",
      "choices": [
        {
          "text": "Si tu t'excuses et retournes discuter calmement avec Inès, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu profites du désordre pour fouiller dans le sac d'un camarade sous la table, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu continues tes moqueries pendant la récréation du midi dans la cour, rends-toi au 48.",
          "target": 48
        }
      ],
      "isEnding": false
    },
    "48": {
      "id": 48,
      "text": "Dans la grande cour pendant la pause de mi-journée, tu participes à un groupe qui lance des moqueries en direction d'Inès. Isolée près des marronniers, la jeune fille ravale ses larmes. Ton attitude renforce l'intimidation.",
      "choices": [
        {
          "text": "Si tu prends conscience de ta méchanceté et cours t'excuser auprès d'Inès, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu bouscules un camarade pour lui accorder la responsabilité des billets, rends-toi au 51.",
          "target": 51
        },
        {
          "text": "Si tu prétends à tue-tête que ce ne sont que des blagues inoffensives, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "49": {
      "id": 49,
      "text": "De retour dans le couloir avant la reprise de 13h30, tu jettes un coup d'œil attentif vers les casiers. Tu repères un petit papier quadrillé tombé juste sous le casier d'Inès. En le ramassant, tu remarques qu'il comporte deux mots écrits en violet : « Encore raté ».",
      "choices": [
        {
          "text": "Si tu conserves précieusement cet indice pour informer la maîtresse, rends-toi au 52.",
          "target": 52
        },
        {
          "text": "Si tu interpelles violemment le premier élève entrant dans la classe, rends-toi au 51.",
          "target": 51
        },
        {
          "text": "Si tu chiffonnes le papier en disant en rigolant que ça ne vaut rien, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "50": {
      "id": 50,
      "text": "Sans rien demander, tu ouvres la trousse de ton voisin à la cantine pour vérifier la présence d'un feutre violet. Le ton monte rapidement et un surveillant s'approche pour rétablir le calme. Ton manque de courtoisie se retourne contre toi.",
      "choices": [
        {
          "text": "Si tu t'excuses sincèrement et expliques posément ton geste, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu inventes de toutes pièces qu'il avait volé ton feutre, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu prétends que c'était une plaisanterie pour rigoler avec la table, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "51": {
      "id": 51,
      "text": "Au moment de se ranger pour remonter en classe à 13h30, tu bouscules un camarade en le désignant publiquement comme l'auteur du billet violet. Une bousculade générale s'ensuit. Mme Girault intervient et te réprime pour ton impulsivité.",
      "choices": [
        {
          "text": "Si tu t'excuses et lui présentes le papier trouvé au sol avec retenue, rends-toi au 52.",
          "target": 52
        },
        {
          "text": "Si tu persistes à accuser des élèves sans preuve, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu fais de l'esprit pour tourner la punition en dérision, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "52": {
      "id": 52,
      "text": "En début d'après-midi, tu profites du temps calme pour confier le billet quadrillé à encre violette à Mme Girault. Celle-ci observe attentivement le papier : « C'est un extrait d'un carnet spécifique. Très bien observé ! » La maîtresse renforce sa vigilance discrète.",
      "choices": [
        {
          "text": "Si tu restes attentif pendant le cours d'histoire pour repérer ce type de carnet, rends-toi au 54.",
          "target": 54
        },
        {
          "text": "Si tu te lèves brusquement pour fouiller les bureaux de tes voisins, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu déclares devant la classe que ce n'est qu'un jeu d'écriture sans importance, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "53": {
      "id": 53,
      "text": "Tu affirmes avec aplomb que plusieurs camarades se sont rassemblés pour rédiger les billets moqueurs. Privée de preuves tangibles, Mme Girault t'avertit sévèrement contre les fausses rumeurs qui perturbent le climat de classe.",
      "choices": [
        {
          "text": "Si tu reconnais tes imprudences et décides de soutenir Inès avec bienveillance, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu cherches à prendre des affaires sur le bureau du voisin sans son accord, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu plaisantes sur la situation en minimisant les propos blessants, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "54": {
      "id": 54,
      "text": "Durant le cours d'histoire de 14h30, tu gardes l'œil ouvert tout en restant concentré. Tu aperçois Maxime sortir de son cartable un petit carnet de brouillon violet à petits carreaux, exactement identique au morceau de papier retrouvé dans le couloir.",
      "choices": [
        {
          "text": "Si tu décides de noter cette information pour en parler à la maîtresse à la fin du cours, rends-toi au 57.",
          "target": 57
        },
        {
          "text": "Si tu bondis de ta chaise pour arracher le carnet des mains de Maxime en plein cours, rends-toi au 55.",
          "target": 55
        },
        {
          "text": "Si tu te moques de l'écriture de Maxime en ricanant avec ton voisin, rends-toi au 56.",
          "target": 56
        }
      ],
      "isEnding": false
    },
    "55": {
      "id": 55,
      "text": "Pris d'emportement, tu te lèves brusquement pour saisir le carnet de Maxime. Les affaires glissent au sol avec fracas. Mme Girault s'interrompt et te demande fermement de te rasseoir. Ton geste précipité gâche une observation utile.",
      "choices": [
        {
          "text": "Si tu présentes des excuses et expliques ton geste au calme à 16h30, rends-toi au 57.",
          "target": 57
        },
        {
          "text": "Si tu inventes une fausse justification en accusant Maxime d'agression, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu prétends que c'était un jeu pour détendre l'atmosphère de la classe, rends-toi au 56.",
          "target": 56
        }
      ],
      "isEnding": false
    },
    "56": {
      "id": 56,
      "text": "Jusqu'à la fin de l'après-midi, tu multiplies les blagues et minimises l'angoisse d'Inès. En quittant la classe à 16h30, tu constates qu'Inès s'en va la tête basse, sans avoir trouvé de soutien réconfortant. Tu as manqué une occasion d'agir positivement.",
      "choices": [
        {
          "text": "Si tu décides d'attendre Inès devant l'école pour lui proposer de rentrer ensemble, rends-toi au 58.",
          "target": 58
        },
        {
          "text": "Si tu fouilles à nouveau dans les casiers déserts après la sortie des classes, rends-toi au 59.",
          "target": 59
        },
        {
          "text": "Si tu t'en vas en riant avec ceux qui ont ignoré la situation toute la journée, rends-toi au 60.",
          "target": 60
        }
      ],
      "isEnding": false
    },
    "57": {
      "id": 57,
      "text": "À la sonnerie de 16h30, tu t'entretiens tranquillement avec Mme Girault pour lui indiquer la présence du carnet violet chez Maxime. L'enseignante note précieusement ton observation et te remercie pour ta démarche responsable et réfléchie.",
      "choices": [
        {
          "text": "Si tu accompagnes Inès à la sortie pour la rassurer sur les progrès de l'enquête, rends-toi au 58.",
          "target": 58
        },
        {
          "text": "Si tu vas interpeller Maxime brutalement devant les grilles de l'école, rends-toi au 59.",
          "target": 59
        },
        {
          "text": "Si tu dis à Inès que tout est réglé et qu'il n'y a plus besoin d'en parler, rends-toi au 60.",
          "target": 60
        }
      ],
      "isEnding": false
    },
    "58": {
      "id": 58,
      "text": "À la sortie des classes à 16h30, tu rejoins Inès devant le portail de l'école des Érables. Vous marchez côte à côte sur le chemin du retour. Elle retrouve le sourire en sentant qu'elle peut compter sur un vrai camarade. Le Jour 1 s'achève sur une note d'espoir.",
      "choices": [
        {
          "text": "Si tu décides d'arriver tôt le mardi matin (Jour 2) pour surveiller le couloir avant les cours, rends-toi au 61.",
          "target": 61
        },
        {
          "text": "Si tu préfères préparer une surprise bienveillante dans le casier d'Inès avec l'aide d'autres élèves, rends-toi au 62.",
          "target": 62
        },
        {
          "text": "Si tu choisis d'attendre la maîtresse dès l'ouverture des grilles pour faire le point avec elle, rends-toi au 63.",
          "target": 63
        }
      ],
      "isEnding": false
    },
    "59": {
      "id": 59,
      "text": "Devant les grilles de l'école à 16h30, tu hausses le ton en accusant des camarades à la vue des parents d'élèves. La confusion s'installe et la sortie de classe devient chaotique. Tu as manqué de discernement dans ta manière d'intervenir.",
      "choices": [
        {
          "text": "Si tu t'excuses de ton emportement et décides de repartir sur de bonnes bases pour le Jour 2, rends-toi au 61.",
          "target": 61
        },
        {
          "text": "Si tu poursuis la dispute sur le chemin du retour en insistant sans preuve, rends-toi au 64.",
          "target": 64
        },
        {
          "text": "Si tu rentres chez toi en prétendant que tout n'était qu'un jeu d'enfant sans importance, rends-toi au 65.",
          "target": 65
        }
      ],
      "isEnding": false
    },
    "60": {
      "id": 60,
      "text": "Tu rentres chez toi à 16h30 après avoir passé la journée à faire le clown ou à ignorer la détresse d'Inès. En chemin, tu sens un pincement au cœur : tu sais au fond de toi qu'ignorer les moqueries répétées équivaut à laisser le harcèlement s'installer.",
      "choices": [
        {
          "text": "Si tu prends la ferme résolution de changer d'attitude et d'aider Inès dès le mardi matin (Jour 2), rends-toi au 61.",
          "target": 61
        },
        {
          "text": "Si tu penses continuer à rigoler avec ceux qui lancent des moqueries, rends-toi au 65.",
          "target": 65
        },
        {
          "text": "Si tu envisages de mener une action de recherche téméraire sans prévenir les adultes, rends-toi au 64.",
          "target": 64
        }
      ],
      "isEnding": false
    },
    "61": {
      "id": 61,
      "text": "Le mardi matin, tu arrives à l'école dès l'ouverture des grilles à 8h20. Le couloir est encore presque vide et silencieux. Tu te postes discrètement au coin du mur près des casiers en bois pour observer la porte d'entrée. Quelques instants plus tard, une silhouette se glisse doucement dans le couloir, un papier plié à la main.",
      "choices": [
        {
          "text": "Si tu restes caché pour observer attentivement qui s'approche du casier d'Inès, rends-toi au 66.",
          "target": 66
        },
        {
          "text": "Si tu surgis brusquement en hurlant pour effrayer la personne, rends-toi au 67.",
          "target": 67
        },
        {
          "text": "Si tu te dis que tu devrais plutôt aller raconter une blague aux camarades dans la cour, rends-toi au 68.",
          "target": 68
        }
      ],
      "isEnding": false
    },
    "62": {
      "id": 62,
      "text": "Devant le portail, tu retrouves Sarah et deux autres camarades bienveillants. Ensemble, vous avez dessiné de superbes créatures fantastiques et rédigé des mots chaleureux pour réconforter Inès. Vous profitez du couloir encore calme pour glisser toutes ces belles surprises dans son casier.",
      "choices": [
        {
          "text": "Si tu te places un peu plus loin avec tes camarades pour apprécier la réaction d'Inès à son arrivée, rends-toi au 69.",
          "target": 69
        },
        {
          "text": "Si tu vas inventer à Mme Girault que quelqu'un vandalise les casiers, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu t'en vas en rigolant en disant que vos dessins sont très moches, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "63": {
      "id": 63,
      "text": "Dès que le portail s'ouvre, tu te diriges vers la classe de CM1. Mme Girault est déjà à son bureau en train de préparer le matériel de géométrie. Tu frappes doucement à la porte et tu lui fais le résumé exact de tes découvertes de la veille avec calme et clarté.",
      "choices": [
        {
          "text": "Si tu rigoles en disant que ce n'est pas bien grave si Inès pleure un peu, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu proposes à la maîtresse d'attendre ensemble discrètement près des casiers, rends-toi au 72.",
          "target": 72
        },
        {
          "text": "Si tu donnes le nom d'un élève pris au hasard pour faire accuser quelqu'un au plus vite, rends-toi au 70.",
          "target": 70
        }
      ],
      "isEnding": false
    },
    "64": {
      "id": 64,
      "text": "Convaincu que tu peux résoudre l'énigme tout seul comme un détective de film, tu t'infiltres dans le couloir sans prévenir personne. Tu vois un élève de loin près des casiers et tu décides de lui bondir dessus pour lui attraper les poignets et le plaquer contre le mur.",
      "choices": [
        {
          "text": "Si tu relâches aussitôt l'élève en réalisant que c'est un élève de CE2 qui s'est trompé de casier, rends-toi au 73.",
          "target": 73
        },
        {
          "text": "Si tu te mets à rigoler fort de sa peur en prétendant que c'était une blague, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu insistes en fouillant son sac par la force, rends-toi au 74.",
          "target": 74
        }
      ],
      "isEnding": false
    },
    "65": {
      "id": 65,
      "text": "Mardi matin, tu retrouves un petit groupe devant les grilles. Tu te mets à faire le pitre et à répéter que les billets anonymes sont très drôles et qu'Inès exagère. Inès passe à côté de vous, baisse la tête et presse le pas vers le couloir, manifestement blessée.",
      "choices": [
        {
          "text": "Si tu réalises ton erreur et la rattrapes pour lui demander pardon, rends-toi au 75.",
          "target": 75
        },
        {
          "text": "Si tu pousses l'un de tes camarades en disant qu'il t'a forcé à dire cela, rends-toi au 74.",
          "target": 74
        },
        {
          "text": "Si tu continues à rire encore plus fort avec le groupe, rends-toi au 68.",
          "target": 68
        }
      ],
      "isEnding": false
    },
    "66": {
      "id": 66,
      "text": "Depuis ta cachette, tu vois Maxime s'avancer sur la pointe des pieds. Il sort un papier violet plié de sa poche et le glisse avec précaution dans la fente du casier d'Inès. Il se retourne en souriant d'un air satisfait. Tu as vu toute la scène avec précision.",
      "choices": [
        {
          "text": "Si tu t'avances calmement vers Maxime pour lui dire que tu l'as vu et l'inviter à s'expliquer, rends-toi au 76.",
          "target": 76
        },
        {
          "text": "Si tu te mets à lui crier des insultes à travers tout le couloir, rends-toi au 77.",
          "target": 77
        },
        {
          "text": "Si tu éclates de rire en lui disant qu'il a fait un super coup, rends-toi au 68.",
          "target": 68
        }
      ],
      "isEnding": false
    },
    "67": {
      "id": 67,
      "text": "Tu jaillis de ta cachette en poussant un grand cri ! Maxime fait un bond de trois mètres en arrière et laisse tomber son rouleau de scotch et son mot. La bousculade fait un bruit assourdissant dans le couloir vide. Mme Girault sort aussitôt de sa classe, les sourcils froncés.",
      "choices": [
        {
          "text": "Si tu profites de l'occasion pour présenter poliment le mot trouvé au sol à Mme Girault, rends-toi au 72.",
          "target": 72
        },
        {
          "text": "Si tu prétends que tu voulais simplement faire une farce pour faire peur à tout le monde, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu accuses Maxime d'avoir essayé de te frapper, rends-toi au 70.",
          "target": 70
        }
      ],
      "isEnding": false
    },
    "68": {
      "id": 68,
      "text": "Tu abandonnes toute réflexion et tu te mets à plaisanter sur la situation avec deux camarades. Pendant ce temps, l'auteur des mots anonymes continue d'agir sans être dérangé. Inès entre dans le couloir, s'approche de son casier et y découvre un nouveau billet moqueur.",
      "choices": [
        {
          "text": "Si tu regrettes ton désintérêt et cours réconforter Inès, rends-toi au 75.",
          "target": 75
        },
        {
          "text": "Si tu vas bousculer un élève innocent pour faire le clown devant les grilles, rends-toi au 74.",
          "target": 74
        },
        {
          "text": "Si tu répètes que les pleurs d'Inès sont ridicules, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "69": {
      "id": 69,
      "text": "Inès arrive devant son casier, l'air anxieux. Lorsqu'elle l'ouvre, de magnifiques dessins colorés et des mots d'encouragement en jaillissent. Un immense sourire illumine son visage et elle baisse les yeux, très émue. Tes camarades et toi vous approchez gentiment.",
      "choices": [
        {
          "text": "Si tu lui proposes d'aller montrer ces beaux messages à Mme Girault, rends-toi au 78.",
          "target": 78
        },
        {
          "text": "Si tu te moques soudain de tes propres dessins en disant qu'ils sont laids, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu t'en vas accuser Maxime d'être un monstre devant tout le monde, rends-toi au 77.",
          "target": 77
        }
      ],
      "isEnding": false
    },
    "70": {
      "id": 70,
      "text": "Tu accuses un élève au hasard devant Mme Girault sans détenir la moindre preuve. La maîtresse fronce les sourcils et te rappelle fermement qu'accuser à tort est une faute grave qui crée du conflit inutile dans la classe.",
      "choices": [
        {
          "text": "Si tu reconnais ton erreur et présentes tes excuses avec sincérité, rends-toi au 72.",
          "target": 72
        },
        {
          "text": "Si tu hausses les épaules en rigolant d'un air arrogant, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu vas fouiller la trousse d'un autre élève pour tenter d'inventer des preuves, rends-toi au 74.",
          "target": 74
        }
      ],
      "isEnding": false
    },
    "71": {
      "id": 71,
      "text": "Tu répètes à plusieurs élèves que toute cette histoire est insignifiante. En minimisant continuellement la détresse d'Inès, tu favorises l'isolement de ta camarade et permets aux mauvaises habitudes de s'installer.",
      "choices": [
        {
          "text": "Si tu doutes enfin de ton attitude et décides de rejoindre Inès pour l'écouter, rends-toi au 75.",
          "target": 75
        },
        {
          "text": "Si tu continues d'inciter tes voisins à rire des gens tristes, rends-toi au 79.",
          "target": 79
        },
        {
          "text": "Si tu provoques une bousculade dans les rangs pour te faire remarquer, rends-toi au 74.",
          "target": 74
        }
      ],
      "isEnding": false
    },
    "72": {
      "id": 72,
      "text": "Mme Girault t'écoute attentivement dans le couloir calme. Tu lui montres le mot violet récupéré la veille et lui expliques tes remarques. Ensemble, vous voyez Maxime s'approcher du casier d'Inès. La maîtresse intervient alors avec douceur et fermeté.",
      "choices": [
        {
          "text": "Si tu assistes calmement à la discussion pour comprendre ce qui s'est passé, rends-toi au 80.",
          "target": 80
        },
        {
          "text": "Si tu te moques de Maxime dès que la maîtresse lui parle, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu bondis sur Maxime pour lui donner un coup d'épaule, rends-toi au 77.",
          "target": 77
        }
      ],
      "isEnding": false
    },
    "73": {
      "id": 73,
      "text": "Tu lâches l'élève de CE2 et t'excuses immédiatement. « Pardon, je me suis trompé, je cherchais quelqu'un d'autre ! » L'enfant repart rassuré. Tu réalises à quel point agir sous le coup de l'impulsivité peut conduire à de tristes erreurs.",
      "choices": [
        {
          "text": "Si tu reprends une attitude réfléchie et vas trouver Mme Girault, rends-toi au 72.",
          "target": 72
        },
        {
          "text": "Si tu tournes l'erreur en ridicule en faisant le pitre devant les grilles, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu poursuis ton enquête brusquement en attrapant un autre élève au hasard, rends-toi au 74.",
          "target": 74
        }
      ],
      "isEnding": false
    },
    "74": {
      "id": 74,
      "text": "Tu attrapes le cartable d'un élève et le secoues violemment. Des fournitures tombent au sol dans un grand fracas. Un surveillant accourt et te conduit directement dans le bureau de la direction pour comportement agressif.",
      "choices": [
        {
          "text": "Si tu t'excuses sincèrement auprès du surveillant et expliques tes inquiétudes pour Inès, rends-toi au 78.",
          "target": 78
        },
        {
          "text": "Si tu prétends que c'est l'autre élève qui s'est jeté sur toi, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu rigoles devant le surveillant en minimisant tes actes, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "75": {
      "id": 75,
      "text": "Tu vas trouver Inès avant la sonnerie de 8h30. Tu lui dis avec franchise : « Je suis désolé si j'ai manqué de délicatesse hier. Je veux vraiment t'aider à faire cesser ces billets. » Inès te regarde avec un grand soulagement et accepte ton soutien.",
      "choices": [
        {
          "text": "Si tu l'accompagnes pour parler posément à Mme Girault, rends-toi au 78.",
          "target": 78
        },
        {
          "text": "Si tu vas hurler sur tous les élèves du couloir pour faire tes preuves, rends-toi au 77.",
          "target": 77
        },
        {
          "text": "Si tu renonces aussitôt en repartant faire des blagues, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "76": {
      "id": 76,
      "text": "Tu t'avances vers Maxime et lui dis calmement : « Maxime, je viens de te voir glisser ce mot. Pourquoi fais-tu cela tous les jours ? » Maxime rougit brusquement, embarrassé. Il baisse les yeux : « Je... je voulais juste faire le malin devant les autres, je ne pensais pas que ça lui faisait si mal. »",
      "choices": [
        {
          "text": "Si tu lui réexpliques calmement la différence entre une farce d'un jour et des moqueries répétées, rends-toi au 80.",
          "target": 80
        },
        {
          "text": "Si tu te mets à l'insulter copieusement et à le menacer, rends-toi au 77.",
          "target": 77
        },
        {
          "text": "Si tu rigoles en lui disant d'aller plutôt s'en prendre à un autre élève, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "77": {
      "id": 77,
      "text": "Tu t'emportes et te mets à crier sur Maxime au milieu du couloir : « Espèce de méchant ! Tu es un monstre ! » Maxime s'énerve à son tour et le ton monte très fort. Des élèves s'attroupent. Mme Girault intervient immédiatement pour mettre fin au scandale.",
      "choices": [
        {
          "text": "Si tu retrouves ton calme et expliques posément les faits à l'enseignante, rends-toi au 80.",
          "target": 80
        },
        {
          "text": "Si tu prétends que tu faisais une blague théâtrale pour faire rire la classe, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu tentes de donner une gifle à Maxime devant la maîtresse, rends-toi au 74.",
          "target": 74
        }
      ],
      "isEnding": false
    },
    "78": {
      "id": 78,
      "text": "Tu accompagnes Inès auprès de Mme Girault dans la classe. La maîtresse vous écoute attentivement et félicite votre maturité. « C'est très bien d'en parler. L'entraide entre élèves est indispensable pour que chacun se sente bien à l'école », affirme-t-elle.",
      "choices": [
        {
          "text": "Si tu proposes d'aborder le sujet du respect en classe lors du cours de civisme de la matinée, rends-toi au 81.",
          "target": 81
        },
        {
          "text": "Si tu te mets à rigoler en disant que les adultes ne comprennent jamais rien, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu inventes des histoires exagérées sur d'autres élèves pour créer de la panique, rends-toi au 70.",
          "target": 70
        }
      ],
      "isEnding": false
    },
    "79": {
      "id": 79,
      "text": "En classe pendant la première heure de cours, tu persistes à chuchoter des moqueries et à ricaner. Mme Girault s'interrompt et te réprimande sévèrement. Inès est très mal à l'aise et tes camarades commencent à te trouver particulièrement désagréable.",
      "choices": [
        {
          "text": "Si tu réalises ton erreur et décides d'envoyer un mot d'excuses à Inès, rends-toi au 75.",
          "target": 75
        },
        {
          "text": "Si tu pousses ton voisin du coude en disant que c'est lui qui riait, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu contestes l'autorité de l'enseignante en haussant le ton, rends-toi au 74.",
          "target": 74
        }
      ],
      "isEnding": false
    },
    "80": {
      "id": 80,
      "text": "Autour de Mme Girault, la discussion s'engage calmement avec Maxime. Celui-ci exprime ses regrets : « Je pensais que c'était une petite blague, mais je réalise maintenant qu'en répétant cela tous les jours, j'ai fait beaucoup de mal à Inès. » L'explication permet de dénouer la situation de manière mûre et constructive.",
      "choices": [
        {
          "text": "Si tu proposes à Maxime de venir présenter ses excuses directement à Inès, rends-toi au 82.",
          "target": 82
        },
        {
          "text": "Si tu te moques de Maxime parce qu'il a l'air penaud, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu exiges qu'on le punisse sévèrement en lui criant dessus, rends-toi au 77.",
          "target": 77
        }
      ],
      "isEnding": false
    },
    "81": {
      "id": 81,
      "text": "À 10h, Mme Girault propose un temps d'échange en classe sur le thème du respect et de la différence entre plaisanterie et moquerie répétée. Toute la classe participe activement. Les élèves prennent conscience de l'impact de leurs mots sur les autres.",
      "choices": [
        {
          "text": "Si tu prends la parole pour expliquer l'importance de soutenir ses camarades, rends-toi au 83.",
          "target": 83
        },
        {
          "text": "Si tu lances des boules de papier sur tes voisins pendant le débat, rends-toi au 79.",
          "target": 79
        },
        {
          "text": "Si tu prétends devant tout le monde que les règles ne servent à rien, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "82": {
      "id": 82,
      "text": "Maxime s'approche d'Inès dans le couloir avant la récréation. D'une voix sincère, il lui dit : « Inès, je te demande pardon. Je n'avais pas compris que mes billets te rendaient si triste. Je te promets que c'est terminé. » Inès accepte ses excuses avec un doux sourire.",
      "choices": [
        {
          "text": "Si tu leur proposes de jouer tous ensemble pendant la récréation de 10h, rends-toi au 83.",
          "target": 83
        },
        {
          "text": "Si tu te moques de Maxime en disant qu'il est faible d'avoir fait des excuses, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu repousses brutalement Maxime en disant que ce n'est pas suffisant, rends-toi au 77.",
          "target": 77
        }
      ],
      "isEnding": false
    },
    "83": {
      "id": 83,
      "text": "Pendant la récréation de 10h, la cour de l'école des Érables est animée. Inès, rassurée et entourée, participe joyeusement à une grande partie de passe-ballon. L'atmosphère est détendue et chaleureuse. Tu as agi en camarade exemplaire.",
      "choices": [
        {
          "text": "Si tu continues d'intégrer tout le monde au jeu avec enthousiasme, rends-toi au 84.",
          "target": 84
        },
        {
          "text": "Si tu décides de garder le ballon pour toi seul en faisant des moqueries, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu t'énerves violemment dès qu'un camarade loupe une passe, rends-toi au 74.",
          "target": 74
        }
      ],
      "isEnding": false
    },
    "84": {
      "id": 84,
      "text": "La récréation se termine dans une excellente ambiance. En rang devant la porte, plusieurs élèves viennent te féliciter pour ton sens de l'écoute et ton soutien envers Inès. Tu sens que la classe est devenue plus unie et solidaire.",
      "choices": [
        {
          "text": "Si tu réponds modestement en disant que c'est normal de s'entraider, rends-toi au 85.",
          "target": 85
        },
        {
          "text": "Si tu te vantes bruyamment en disant que tu es le plus intelligent de l'école, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu bouscules les élèves pour entrer en premier dans la classe, rends-toi au 74.",
          "target": 74
        }
      ],
      "isEnding": false
    },
    "85": {
      "id": 85,
      "text": "En classe de mathématiques avant le déjeuner, l'attention est excellente. Inès participe activement au tableau et réussit son exercice de géométrie sous les encouragements de Mme Girault. La sérénité est revenue pour tous les élèves de CM1.",
      "choices": [
        {
          "text": "Si tu restes concentré sur ton travail jusqu'à la sonnerie de 12h, rends-toi au 86.",
          "target": 86
        },
        {
          "text": "Si tu te mets à pousser des cris d'animaux au milieu de la leçon, rends-toi au 79.",
          "target": 79
        },
        {
          "text": "Si tu rigoles en prétendant que les mathématiques ne servent à rien, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "86": {
      "id": 86,
      "text": "La cloche de 12h sonne la fin des cours de la matinée. Les élèves rangent leurs affaires dans le calme. Inès s'approche de toi pour te remercier à nouveau chaleureusement avant d'aller vers le réfectoire.",
      "choices": [
        {
          "text": "Si tu lui proposes de manger à la même table qu'elle à la cantine, rends-toi au 87.",
          "target": 87
        },
        {
          "text": "Si tu vas faire un croc-en-jambe à un camarade dans le couloir de la cantine, rends-toi au 74.",
          "target": 74
        },
        {
          "text": "Si tu t'enfuis en ricanant sans lui répondre, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "87": {
      "id": 87,
      "text": "Dans le réfectoire, tu vous installez ensemble à une table bien éclairée avec Sarah et Maxime, qui participe désormais positivement à la conversation. L'ambiance est joyeuse et conviviale. Vous échangez sur vos passions et vos projets de dessins.",
      "choices": [
        {
          "text": "Si tu profites du repas pour proposer la création d'un club de dessin à l'école, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu te mets à jeter la nourriture sur tes voisins de table, rends-toi au 74.",
          "target": 74
        },
        {
          "text": "Si tu te moques de l'assiette d'Inès en ricanant fort, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "88": {
      "id": 88,
      "text": "L'idée du club de dessin enthousiasme tout le monde autour de la table. Même Maxime propose de fournir des carnets neufs pour l'atelier. Inès déborde d'idées pour apprendre à ses camarades à dessiner des créatures merveilleuses.",
      "choices": [
        {
          "text": "Si tu proposes d'en parler à Mme Girault dès la fin du déjeuner, rends-toi au 89.",
          "target": 89
        },
        {
          "text": "Si tu déchires brusquement les dessins des autres pour plaisanter, rends-toi au 74.",
          "target": 74
        },
        {
          "text": "Si tu prétends subitement que l'idée est nulle et sans intérêt, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "89": {
      "id": 89,
      "text": "À la fin du repas, le groupe va présenter le projet d'exposition et d'atelier de dessin à Mme Girault dans la cour. La maîtresse accueille l'idée avec un immense plaisir : « C'est un projet magnifique pour souder la classe autour du respect et des arts ! »",
      "choices": [
        {
          "text": "Si tu te prépares à organiser la première réunion du club pour le début d'après-midi, rends-toi au 90.",
          "target": 90
        },
        {
          "text": "Si tu cries sur la maîtresse en disant qu'elle doit tout payer elle-même, rends-toi au 74.",
          "target": 74
        },
        {
          "text": "Si tu rigoles en disant que c'était une fausse promesse, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "90": {
      "id": 90,
      "text": "Le début de l'après-midi du mardi s'annonce sous les meilleurs auspices. Grâce à ton intervention vigilante et bienveillante, le problème des billets anonymes est résolu et laisse place à de nouvelles amitiés durables au sein de la classe.",
      "choices": [
        {
          "text": "Si tu souhaites découvrir comment s'organise l'atelier de dessin durant l'après-midi du Jour 2, rends-toi au 91.",
          "target": 91
        },
        {
          "text": "Si tu préfères accompagner Inès et Maxime présenter le projet à la directrice de l'école, rends-toi au 92.",
          "target": 92
        },
        {
          "text": "Si tu choisis d'aider à préparer les affiches d'information sur le respect pour la cour de récréation, rends-toi au 93.",
          "target": 93
        }
      ],
      "isEnding": false
    },
    "91": {
      "id": 91,
      "text": "Le mardi après-midi, l'atelier de dessin du club commence enfin dans la classe de CM1. Avec Inès et Maxime, vous installez les grandes feuilles et les feutres sur les tables assemblées. Les élèves des autres classes s'installent dans la joie et la bonne humeur, ravis de partager ce moment créatif.",
      "choices": [
        {
          "text": "Si tu encourages chaque participant en soulignant les qualités de leurs dessins, rends-toi au 94.",
          "target": 94
        },
        {
          "text": "Si tu te moques du dessin d'un élève de CE2 en disant qu'il ne ressemble à rien, rends-toi au 95.",
          "target": 95
        },
        {
          "text": "Si tu arraches les crayons des mains d'un camarade pour imposer tes couleurs, rends-toi au 96.",
          "target": 96
        }
      ],
      "isEnding": false
    },
    "92": {
      "id": 92,
      "text": "Mme Girault vous accompagne dans le bureau de la directrice de l'école des Érables. Inès et Maxime présentent avec assurance le projet d'exposition et d'atelier solidaire. La directrice écoute avec un sourire bienveillant et valide immédiatement votre magnifique initiative.",
      "choices": [
        {
          "text": "Si tu remercies la directrice et aides à organiser le matériel pour la cour, rends-toi au 94.",
          "target": 94
        },
        {
          "text": "Si tu t'attribues tout le mérite du projet devant la directrice en ignorant Inès, rends-toi au 97.",
          "target": 97
        },
        {
          "text": "Si tu prétends en ricanant que vous avez fait tout cela juste pour manquer des cours, rends-toi au 95.",
          "target": 95
        }
      ],
      "isEnding": false
    },
    "93": {
      "id": 93,
      "text": "Pendant une partie de l'après-midi, tu t'installes au fond de la classe avec des bandes de carton et de la peinture. Vous rédigez des slogans clairs et colorés expliquant la différence fondamentale entre une plaisanterie amicale et une intimidation blessante.",
      "choices": [
        {
          "text": "Si tu proposes d'accrocher ces affiches à côté des casiers en bois du couloir, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu bouscules un camarade pour coller ton affiche par-dessus la sienne, rends-toi au 96.",
          "target": 96
        },
        {
          "text": "Si tu barbouilles de la peinture sur les affiches des autres pour rigoler, rends-toi au 95.",
          "target": 95
        }
      ],
      "isEnding": false
    },
    "94": {
      "id": 94,
      "text": "L'après-midi se déroule dans un climat serein et constructif. Les dessins s'accumulent sur la grande table de la classe. Mme Girault prend des photos pour immortaliser l'événement. Inès se sent pleinement intégrée et rayonne de bonheur.",
      "choices": [
        {
          "text": "Si tu aides à ranger soigneusement la classe avant la sonnerie de 16h30, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu t'esclaffes en disant que tout ce bazar est complètement inutile, rends-toi au 95.",
          "target": 95
        },
        {
          "text": "Si tu bouscules les élèves qui rangent pour sortir le premier en récréation, rends-toi au 96.",
          "target": 96
        }
      ],
      "isEnding": false
    },
    "95": {
      "id": 95,
      "text": "Tes réflexions moqueuses gâchent l'ambiance de l'après-midi. Les élèves surpris s'éloignent de toi, et Inès baisse les yeux, attristée par ton changement d'attitude. Mme Girault t'appelle à son bureau pour te rappeler le sens du respect.",
      "choices": [
        {
          "text": "Si tu reconnais tes erreurs et t'excuses auprès du groupe, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu réponds brusquement à la maîtresse en haussant les épaules, rends-toi au 99.",
          "target": 99
        },
        {
          "text": "Si tu persistes à faire des grimaces moqueuses dans le couloir, rends-toi au 100.",
          "target": 100
        }
      ],
      "isEnding": false
    },
    "96": {
      "id": 96,
      "text": "À cause de ton comportement brusque, un pot de peinture se renverse sur le sol de la classe. Le matériel est taché et une dispute commence à éclater. La maîtresse intervient rapidement pour calmer les esprits et réparer les dégâts.",
      "choices": [
        {
          "text": "Si tu attrapes une éponge pour réparer ta bêtise avec les autres, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu rigoles du désastre en accusant Maxime d'avoir tout renversé, rends-toi au 100.",
          "target": 100
        },
        {
          "text": "Si tu contestes la colère de l'enseignante en contestant ses consignes, rends-toi au 99.",
          "target": 99
        }
      ],
      "isEnding": false
    },
    "97": {
      "id": 97,
      "text": "En prétendant avoir tout fait tout seul, tu déçois profondément Inès et Maxime qui ont travaillé très dur. L'atmosphère amicale s'effrite et tes camarades préfèrent s'éloigner de toi pendant la préparation des panneaux d'affichage.",
      "choices": [
        {
          "text": "Si tu regrettes ta vanité et remets en valeur le travail d'Inès et Maxime, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu t'énerves contre eux en disant qu'ils ne servent à rien, rends-toi au 99.",
          "target": 99
        },
        {
          "text": "Si tu quittes la classe en ricanant et en abandonnant le matériel au sol, rends-toi au 100.",
          "target": 100
        }
      ],
      "isEnding": false
    },
    "98": {
      "id": 98,
      "text": "À 16h00, vous installez les magnifiques affiches dans le couloir, tout autour des casiers en bois. Plusieurs élèves des autres classes s'arrêtent pour les lire attentivement. Les commentaires sont chaleureux et félicitent votre projet engagé.",
      "choices": [
        {
          "text": "Si tu salues tes camarades avec sérénité à la sonnerie de 16h30, rends-toi au 101.",
          "target": 101
        },
        {
          "text": "Si tu arraches une petite affiche pour prouver que tu fais ce que tu veux, rends-toi au 100.",
          "target": 100
        },
        {
          "text": "Si tu provoques une bousculade près de la sortie avec les plus grands, rends-toi au 99.",
          "target": 99
        }
      ],
      "isEnding": false
    },
    "99": {
      "id": 99,
      "text": "Mme Girault réprime fermement ton comportement agressif devant la classe. Tu te retrouves retenu quelques minutes après la fin des cours pour discuter de tes attitudes répétées. Tu réalises que ton emportement gâche des efforts collectifs.",
      "choices": [
        {
          "text": "Si tu acceptes les remarques et promets d'être positif dès demain, rends-toi au 101.",
          "target": 101
        },
        {
          "text": "Si tu sors en claquant la porte d'un air arrogant, rends-toi au 102.",
          "target": 102
        },
        {
          "text": "Si tu vas inventer de fausses rumeurs sur l'école devant le portail, rends-toi au 100.",
          "target": 100
        }
      ],
      "isEnding": false
    },
    "100": {
      "id": 100,
      "text": "À la sortie de 16h30, tu multiplies les moqueries devant les grilles de l'école. Les autres élèves s'écartent de toi, agacés par ton comportement désagréable. Tu rentres chez toi seul, en sentant bien que tu t'isoles inutilement du groupe.",
      "choices": [
        {
          "text": "Si tu décides de corriger ton attitude dès le lendemain matin, rends-toi au 101.",
          "target": 101
        },
        {
          "text": "Si tu projettes de continuer tes moqueries le mercredi matin, rends-toi au 102.",
          "target": 102
        },
        {
          "text": "Si tu prévois de bousculer les camarades à l'ouverture des portes, rends-toi au 103.",
          "target": 103
        }
      ],
      "isEnding": false
    },
    "101": {
      "id": 101,
      "text": "Le mercredi matin (Jour 3), le soleil brille sur l'École élémentaire des Érables. Dès l'ouverture des grilles à 8h20, tu entres avec enthousiasme dans le couloir. Les affiches d'information et de sensibilisation sont toujours intactes sur les murs.",
      "choices": [
        {
          "text": "Si tu t'approches du casier d'Inès pour vérifier l'ambiance du matin, rends-toi au 104.",
          "target": 104
        },
        {
          "text": "Si tu pousses un grand cri pour effrayer les élèves présents dans le couloir, rends-toi au 103.",
          "target": 103
        },
        {
          "text": "Si tu te moques des dessins exposés en déclarant qu'ils sont ridicules, rends-toi au 102.",
          "target": 102
        }
      ],
      "isEnding": false
    },
    "102": {
      "id": 102,
      "text": "En entrant dans l'école le mercredi matin, tu lances des mots sarcastiques sur les affiches préparées la veille. Tes camarades secouent la tête d'un air déçu. Ton absence de maturité risque de détruire la belle cohésion nouvellement construite.",
      "choices": [
        {
          "text": "Si tu t'excuses auprès d'Inès et décides de partager sa joie, rends-toi au 104.",
          "target": 104
        },
        {
          "text": "Si tu arraches un mot gentil collé sur un casier pour rigoler, rends-toi au 105.",
          "target": 105
        },
        {
          "text": "Si tu accuses Maxime de faire du cinéma devant la classe, rends-toi au 103.",
          "target": 103
        }
      ],
      "isEnding": false
    },
    "103": {
      "id": 103,
      "text": "Tu provoques une bousculade inutile près des casiers dès ton arrivée le mercredi matin. Des cartables tombent à terre et l'agitation attire l'attention d'un surveillant. Tu commences la journée par une sévère réprimande administrative.",
      "choices": [
        {
          "text": "Si tu t'excuses immédiatement et ramasses les affaires renversées, rends-toi au 104.",
          "target": 104
        },
        {
          "text": "Si tu accuses un élève de CE2 de t'avoir fait un croc-en-jambe, rends-toi au 105.",
          "target": 105
        },
        {
          "text": "Si tu contestes l'autorité du surveillant en ricanant très fort, rends-toi au 102.",
          "target": 102
        }
      ],
      "isEnding": false
    },
    "104": {
      "id": 104,
      "text": "En t'approchant des casiers en bois, tu découvres une scène magnifique : plusieurs casiers sont désormais ornés de petits messages chaleureux et de félicitations déposés anonymement par d'autres élèves. L'ambiance du couloir est métamorphosée.",
      "choices": [
        {
          "text": "Si tu félicites Inès et participe à la lecture des messages positifs, rends-toi au 106.",
          "target": 106
        },
        {
          "text": "Si tu te moques de cet enthousiasme en qualifiant ces mots de niais, rends-toi au 105.",
          "target": 105
        },
        {
          "text": "Si tu attrapes le sac d'un camarade pour le cacher derrière les casiers, rends-toi au 107.",
          "target": 107
        }
      ],
      "isEnding": false
    },
    "105": {
      "id": 105,
      "text": "Ton comportement désagréable gâche ce moment de joie partagée. Inès se détourne de toi et tes camarades te rappellent que le harcèlement commence par de petits gestes irrespectueux. Tu te sens de nouveau isolé et mal à l'aise.",
      "choices": [
        {
          "text": "Si tu rectifies ta conduite et demandes sincèrement à participer au groupe, rends-toi au 106.",
          "target": 106
        },
        {
          "text": "Si tu provoques une dispute en bousculant Maxime dans le couloir, rends-toi au 107.",
          "target": 107
        },
        {
          "text": "Si tu quittes le couloir en ricanant de façon méprisante, rends-toi au 108.",
          "target": 108
        }
      ],
      "isEnding": false
    },
    "106": {
      "id": 106,
      "text": "Mme Girault arrive dans le couloir et constate avec fierté la métamorphose des lieux. Elle félicite l'ensemble des élèves de CM1 pour leur initiative solidaire. Tu ressens une immense satisfaction d'avoir contribué à cette réussite collective.",
      "choices": [
        {
          "text": "Si tu proposes de préparer une petite exposition pour la fin de la semaine, rends-toi au 109.",
          "target": 109
        },
        {
          "text": "Si tu te vantes bruyamment d'être le seul responsable de ce succès, rends-toi au 110.",
          "target": 110
        },
        {
          "text": "Si tu fais une remarque ironique sur le travail de l'enseignante, rends-toi au 108.",
          "target": 108
        }
      ],
      "isEnding": false
    },
    "107": {
      "id": 107,
      "text": "Une nouvelle bousculade éclate et plusieurs affaires s'éparpillent à terre. Mme Girault intervient avec sévérité et te demande d'aider immédiatement à tout remettre en ordre. Ton goût pour le désordre ralentit le travail du groupe.",
      "choices": [
        {
          "text": "Si tu te baisses gentiment pour tout ramasser avec le sourire, rends-toi au 109.",
          "target": 109
        },
        {
          "text": "Si tu rejets la faute sur ton voisin en criant très fort, rends-toi au 108.",
          "target": 108
        },
        {
          "text": "Si tu te moques des camarades qui t'aident en ricanant, rends-toi au 110.",
          "target": 110
        }
      ],
      "isEnding": false
    },
    "108": {
      "id": 108,
      "text": "Exclu du groupe en raison de tes provocations quotidiennes, tu t'assois seul à ta table de classe. Tu réalises que tes moqueries répétées n'ont fait que t'isoler des autres, alors qu'une attitude bienveillante apporte joie et amitié.",
      "choices": [
        {
          "text": "Si tu prends la décision de t'excuser auprès d'Inès durant la pause, rends-toi au 109.",
          "target": 109
        },
        {
          "text": "Si tu persistes à faire des grimaces au fond de la classe, rends-toi au 111.",
          "target": 111
        },
        {
          "text": "Si tu envoies une boulette de papier sur le tableau de la classe, rends-toi au 112.",
          "target": 112
        }
      ],
      "isEnding": false
    },
    "109": {
      "id": 109,
      "text": "Pendant la première heure de cours du mercredi, la classe travaille en petits groupes. Inès, Maxime et toi collaborez efficacement. Vos échanges sont riches et l'entraide règne sur chaque table de la salle de cours.",
      "choices": [
        {
          "text": "Si tu encourages activement tes camarades en valorisant leurs idées, rends-toi au 113.",
          "target": 113
        },
        {
          "text": "Si tu interromps l'activité en te moquant de l'écriture de ton voisin, rends-toi au 111.",
          "target": 111
        },
        {
          "text": "Si tu tires brutalement la chaise d'un élève pour le faire tomber, rends-toi au 112.",
          "target": 112
        }
      ],
      "isEnding": false
    },
    "110": {
      "id": 110,
      "text": "Ta vantardise agace tes camarades de table. Inès te rappelle avec gentillesse que le travail d'équipe est une réussite collective. Pris de court, tu comprends que la vanité ne remplace jamais la sincérité et le respect d'autrui.",
      "choices": [
        {
          "text": "Si tu reconnais ton manque de modestie et félicites toute l'équipe, rends-toi au 113.",
          "target": 113
        },
        {
          "text": "Si tu piques une colère en refusant de travailler avec tes voisins, rends-toi au 111.",
          "target": 111
        },
        {
          "text": "Si tu caches le cartable d'un élève pour provoquer une dispute, rends-toi au 112.",
          "target": 112
        }
      ],
      "isEnding": false
    },
    "111": {
      "id": 111,
      "text": "Mme Girault te rappelle à l'ordre sévèrement pour tes interruptions continuelles. La classe poursuit son travail sans toi. Tu mesures enfin le prix de l'incivilité et du manque d'attention envers tes camarades de CM1.",
      "choices": [
        {
          "text": "Si tu te remets au travail dans le calme et présentes tes excuses, rends-toi au 113.",
          "target": 113
        },
        {
          "text": "Si tu contestes la décision de l'enseignante d'un ton impertinent, rends-toi au 114.",
          "target": 114
        },
        {
          "text": "Si tu te moques de l'élève qui passe au tableau résoudre le problème, rends-toi au 115.",
          "target": 115
        }
      ],
      "isEnding": false
    },
    "112": {
      "id": 112,
      "text": "Ton geste brutal perturbe l'ensemble de la classe. Un livre glisse du bureau et se déchire en deux. Mme Girault s'approche avec un visage très sévère et te sanctionne d'un avertissement officiel pour détérioration et agitation.",
      "choices": [
        {
          "text": "Si tu t'excuses immédiatement et proposes de réparer le livre, rends-toi au 113.",
          "target": 113
        },
        {
          "text": "Si tu accuses injustement Maxime d'avoir bousculé ta table, rends-toi au 114.",
          "target": 114
        },
        {
          "text": "Si tu te mets à rire de manière provocante devant la classe, rends-toi au 115.",
          "target": 115
        }
      ],
      "isEnding": false
    },
    "113": {
      "id": 113,
      "text": "À 10h, la sonnerie annonce la récréation du mercredi matin. La cour de l'école des Érables est animée par de nombreux jeux partagés. Inès te propose de mener une grande ronde avec plusieurs classes pour fêter l'amitié retrouvée.",
      "choices": [
        {
          "text": "Si tu acceptes avec joie et invites tous les élèves isolés à vous rejoindre, rends-toi au 116.",
          "target": 116
        },
        {
          "text": "Si tu te moques de leur jeu en disant que c'est réservé aux petits de CP, rends-toi au 115.",
          "target": 115
        },
        {
          "text": "Si tu envoies un ballon violemment au visage d'un camarade qui passe, rends-toi au 114.",
          "target": 114
        }
      ],
      "isEnding": false
    },
    "114": {
      "id": 114,
      "text": "Puni pour ton agressivité, tu dois passer la récréation du mercredi à côté du surveillant près du préau. Tu regardes de loin tes camarades s'amuser joyeusement. Tu regrettes sincèrement tes accès de colère et ton impulsivité.",
      "choices": [
        {
          "text": "Si tu profites de ce moment pour réfléchir et demander à t'excuser, rends-toi au 116.",
          "target": 116
        },
        {
          "text": "Si tu contestes la punition en boudant d'un air provocateur, rends-toi au 117.",
          "target": 117
        },
        {
          "text": "Si tu prétends devant la directrice que tout le monde est méchant avec toi, rends-toi au 118.",
          "target": 118
        }
      ],
      "isEnding": false
    },
    "115": {
      "id": 115,
      "text": "Tes ricanements continuels finissent par agacer profondément l'ensemble de la cour. Plusieurs élèves te font remarquer que ton attitude gâche l'atmosphère festive. Tu te rends compte que la moquerie isole toujours celui qui la pratique.",
      "choices": [
        {
          "text": "Si tu révises ton comportement et rejoins le groupe avec bienveillance, rends-toi au 116.",
          "target": 116
        },
        {
          "text": "Si tu pousses violemment Maxime pour lui prendre son ballon, rends-toi au 114.",
          "target": 114
        },
        {
          "text": "Si tu t'en vas bouder seul dans un coin du terrain de sport, rends-toi au 117.",
          "target": 117
        }
      ],
      "isEnding": false
    },
    "116": {
      "id": 116,
      "text": "La récréation du mercredi matin est une réussite totale. La grande ronde rassemble des élèves de toutes les classes. Inès sourit de tout son cœur, radieuse de se sentir entourée et protégée par une communauté scolaire unie.",
      "choices": [
        {
          "text": "Si tu proposes d'organiser un grand tournoi de dessin pour la semaine suivante, rends-toi au 119.",
          "target": 119
        },
        {
          "text": "Si tu prétends en te vantant que tu es le seul organisateur du jeu, rends-toi au 118.",
          "target": 118
        },
        {
          "text": "Si tu fais un croc-en-jambe à un camarade pendant la ronde pour rigoler, rends-toi au 117.",
          "target": 117
        }
      ],
      "isEnding": false
    },
    "117": {
      "id": 117,
      "text": "Tes moqueries ou ta maladresse gâchent la fin de la récréation. Tes camarades déçus préfèrent s'éloigner et regagner leurs rangs dans le calme. Tu prends conscience que la confiance et le respect se construisent par des actes quotidiens.",
      "choices": [
        {
          "text": "Si tu t'excuses sincèrement dans la rangée avant de remonter en classe, rends-toi au 119.",
          "target": 119
        },
        {
          "text": "Si tu bouscules tes voisins de rang pour entrer le premier, rends-toi au 120.",
          "target": 120
        },
        {
          "text": "Si tu répètes que tout cela n'est qu'une blague sans importance, rends-toi au 118.",
          "target": 118
        }
      ],
      "isEnding": false
    },
    "118": {
      "id": 118,
      "text": "En faisant preuve de vantardise ou en minimisant tes erreurs, tu perds la crédibilité que tu avais gagnée auprès d'Inès et de Mme Girault. Tu réalises qu'être un vrai héros exige de l'humilité, de la constance et de la bienveillance.",
      "choices": [
        {
          "text": "Si tu demandes humblement pardon à Inès et à la maîtresse, rends-toi au 119.",
          "target": 119
        },
        {
          "text": "Si tu t'emportes en accusant l'école tout entière d'être injuste, rends-toi au 120.",
          "target": 120
        },
        {
          "text": "Si tu ricanes en quittant les rangs sans autorisation, rends-toi au 121.",
          "target": 121
        }
      ],
      "isEnding": false
    },
    "119": {
      "id": 119,
      "text": "De retour en classe de CM1 après la récréation de 10h30, l'ambiance est studieuse et apaisée. Mme Girault vous félicite une nouvelle fois pour le climat de fraternité qui règne désormais dans le couloir et au sein de l'établissement.",
      "choices": [
        {
          "text": "Si tu te concentres activement sur la leçon de français pour terminer la matinée en beauté, rends-toi au 122.",
          "target": 122
        },
        {
          "text": "Si tu envoies un mot moqueur à ton voisin pendant la dictée, rends-toi au 120.",
          "target": 120
        },
        {
          "text": "Si tu te lèves brusquement en faisant du bruit avec ta chaise, rends-toi au 121.",
          "target": 121
        }
      ],
      "isEnding": false
    },
    "120": {
      "id": 120,
      "text": "Tes bavardages et tes petites moqueries pendant la leçon de français perturbent la fin de la matinée. Mme Girault doit s'interrompre plusieurs fois pour te rappeler les règles élémentaires de respect et de tenue en classe.",
      "choices": [
        {
          "text": "Si tu regrettes immédiatement tes interruptions et te remets au travail, rends-toi au 122.",
          "target": 122
        },
        {
          "text": "Si tu contestes la remarque de l'enseignante d'un ton insolent, rends-toi au 121.",
          "target": 121
        },
        {
          "text": "Si tu fais rire ton voisin en parodiant la maîtresse, rends-toi au 123.",
          "target": 123
        }
      ],
      "isEnding": false
    },
    "121": {
      "id": 121,
      "text": "En ayant perturbé le rang ou le cours, tu te retrouves sous l'œil vigilant de Mme Girault. Tu sens que tes camarades hésitent à t'accorder leur confiance pour la suite des événements. C'est le moment décisif pour choisir de faire machine arrière ou de persister dans ton attitude.",
      "choices": [
        {
          "text": "Si tu profites du temps calme pour présenter des excuses sincères et proposer ton aide, rends-toi au 124.",
          "target": 124
        },
        {
          "text": "Si tu vas fouiller brutalement dans un casier voisin pour essayer de faire l'intéressant, rends-toi au 125.",
          "target": 125
        },
        {
          "text": "Si tu répètes que tout cela n'est qu'un jeu stupide et que chacun devrait rire un peu, rends-toi au 126.",
          "target": 126
        }
      ],
      "isEnding": false
    },
    "122": {
      "id": 122,
      "text": "Ton comportement exemplaire et ton écoute ont porté leurs fruits. En travaillant main dans la main avec Inès et Maxime, tu as réussi à transformer une situation conflictuelle en un élan d'amitié solidaire dans toute la classe de CM1.",
      "choices": [
        {
          "text": "Si tu accompagnes Inès pour finaliser le panneau d'affichage positif près des casiers, rends-toi au 127.",
          "target": 127
        },
        {
          "text": "Si tu te précipites pour accuser un autre élève sans raison au dernier moment, rends-toi au 128.",
          "target": 128
        },
        {
          "text": "Si tu prétends soudain que tu as tout fait tout seul et minimises l'aide d'Inès, rends-toi au 129.",
          "target": 129
        }
      ],
      "isEnding": false
    },
    "123": {
      "id": 123,
      "text": "En continuant de ricaner ou de parodier l'enseignante, tu provoques l'exaspération de tes camarades. Inès se recroqueville à sa table et la classe entière perd le fil du cours dans une agitation pesante.",
      "choices": [
        {
          "text": "Si tu révises ton attitude et vas réconforter Inès avant la sonnerie finale, rends-toi au 130.",
          "target": 130
        },
        {
          "text": "Si tu t'emportes contre la maîtresse en disant qu'on ne peut plus rigoler, rends-toi au 131.",
          "target": 131
        },
        {
          "text": "Si tu quittes la classe en ricanant de plus belle avec quelques moqueurs, rends-toi au 132.",
          "target": 132
        }
      ],
      "isEnding": false
    },
    "124": {
      "id": 124,
      "text": "Tu te baisses pour aider à ramasser des fournitures tombées et tu glisses un mot gentil à Inès. Ton effort de sincérité est accueilli avec bienveillance, et la maîtresse apprécie ton changement d'attitude immédiat.",
      "choices": [
        {
          "text": "Si tu vas en parler posément avec Mme Girault pour sceller la fin de l'histoire, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu renonces brusquement en reprenant tes moqueries dans la cour, rends-toi au 134.",
          "target": 134
        },
        {
          "text": "Si tu attrapes le sac de Maxime pour y chercher un indice sans son accord, rends-toi au 135.",
          "target": 135
        }
      ],
      "isEnding": false
    },
    "125": {
      "id": 125,
      "text": "Tu ouvres un casier en bois d'un geste sec pour impressionner tes voisins. Un trousseau de clés tombe par terre avec un grand bruit, attirant immédiatement l'attention du surveillant général qui s'approche d'un pas ferme.",
      "choices": [
        {
          "text": "Si tu t'excuses et ramasses le trousseau avec respect, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu accuses un camarade d'avoir fait tomber les clés à ta place, rends-toi au 135.",
          "target": 135
        },
        {
          "text": "Si tu rigoles au nez du surveillant en disant que ce n'est rien du tout, rends-toi au 134.",
          "target": 134
        }
      ],
      "isEnding": false
    },
    "126": {
      "id": 126,
      "text": "En déclarant que la répétition des billets blessants est une simple farce, tu aggraves le désarroi d'Inès. Celle-ci range ses affaires dans son cartable sans plus rien dire, tandis que le sentiment d'injustice s'installe dans la classe.",
      "choices": [
        {
          "text": "Si tu comprends ton erreur et décides d'offrir un dessin solidaire à Inès, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu penses continuer ces plaisanteries douteuses toute la semaine, rends-toi au 134.",
          "target": 134
        },
        {
          "text": "Si tu te mets à crier sur tout le monde pour rejeter la faute sur autrui, rends-toi au 135.",
          "target": 135
        }
      ],
      "isEnding": false
    },
    "127": {
      "id": 127,
      "text": "Avec Inès, Sarah et Maxime, vous fixez la dernière affiche positive au-dessus de la rangée de casiers. Les élèves qui passent s'arrêtent pour admirer le travail collectif. Tout est en place pour conclure la semaine dans la sérénité.",
      "choices": [
        {
          "text": "Si tu te diriges vers le bureau de Mme Girault pour faire le bilan final, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu gâches tout au dernier moment en lançant une moquerie déplacée, rends-toi au 134.",
          "target": 134
        },
        {
          "text": "Si tu te mets à bousculer un camarade pour avoir la meilleure place dans le rang, rends-toi au 135.",
          "target": 135
        }
      ],
      "isEnding": false
    },
    "128": {
      "id": 128,
      "text": "Alors que l'enquête touchait à sa fin, tu te mets à pointer du doigt un élève au hasard dans le couloir. Tu affirmes sans raison qu'il était le complice secret de Maxime. Le désordre s'empare à nouveau de la classe.",
      "choices": [
        {
          "text": "Si tu retires immédiatement tes propos et t'excuses sincèrement, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu soutiens tes accusations fantaisistes d'un ton provocateur, rends-toi au 135.",
          "target": 135
        },
        {
          "text": "Si tu rigoles en déclarant que ce n'était qu'une blague sans importance, rends-toi au 134.",
          "target": 134
        }
      ],
      "isEnding": false
    },
    "129": {
      "id": 129,
      "text": "Devant toute la classe, tu prétends que tu as résolu l'énigme du casier entièrement seul. Inès et Maxime te regardent avec déception, attristés par ton manque de modestie et d'esprit d'équipe.",
      "choices": [
        {
          "text": "Si tu répares ton erreur en soulignant la force du collectif, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu persistes à te vanter d'un air méprisant devant tes camarades, rends-toi au 134.",
          "target": 134
        },
        {
          "text": "Si tu te fâches vivement dès qu'on te fait une remarque, rends-toi au 135.",
          "target": 135
        }
      ],
      "isEnding": false
    },
    "130": {
      "id": 130,
      "text": "Pris de remords, tu t'assois aux côtés d'Inès à la fin de la journée. Tu lui dis calmement que tu regrettes tes bavardages et tes rires. Elle t'écoute avec un doux sourire et apprécie ton honnêteté.",
      "choices": [
        {
          "text": "Si tu vas valider tes progrès auprès de l'enseignante, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu repars aussitôt ricaner avec les moqueurs du couloir, rends-toi au 134.",
          "target": 134
        },
        {
          "text": "Si tu bouscules un camarade pour sortir le premier de la classe, rends-toi au 135.",
          "target": 135
        }
      ],
      "isEnding": false
    },
    "131": {
      "id": 131,
      "text": "Tu contestes l'autorité de Mme Girault en haussant le ton au milieu de la salle. L'enseignante s'arrête, très ferme, et recadre ton insolence. Tu te retrouves isolé de tes camarades qui désapprouvent ta colère.",
      "choices": [
        {
          "text": "Si tu reconnais ton emportement et demandes pardon poliment, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu choisis d'insulter les camarades qui ne sont pas d'accord avec toi, rends-toi au 135.",
          "target": 135
        },
        {
          "text": "Si tu quitte le cours en ricanant et en claquant la porte, rends-toi au 134.",
          "target": 134
        }
      ],
      "isEnding": false
    },
    "132": {
      "id": 132,
      "text": "Tu sors dans le couloir en ricanant avec deux élèves indisciplinés. Inès vous regarde passer, déçue de voir que vous préférez la moquerie à l'entraide. Tu sens au fond de toi que ton choix détériore l'ambiance.",
      "choices": [
        {
          "text": "Si tu fais demi-tour pour aller soutenir Inès et faire la paix, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu persistes à rire des mots blessants glissés dans le casier, rends-toi au 134.",
          "target": 134
        },
        {
          "text": "Si tu bouscules les cartables rangés dans le couloir pour faire une farce, rends-toi au 135.",
          "target": 135
        }
      ],
      "isEnding": false
    },
    "133": {
      "id": 133,
      "text": "Tu as fait preuve de réflexion, de bienveillance et de respect envers les adultes et tes pairs. Tu te diriges maintenant vers l'issue finale de ton aventure à l'École des Érables.",
      "choices": [
        {
          "text": "Si tu as choisi d'agir avec écoute, méthode et soutien constant, rends-toi au 146.",
          "target": 146
        },
        {
          "text": "Si tu as commis quelques maladresses avant de rectifier ton attitude, rends-toi au 148.",
          "target": 148
        },
        {
          "text": "Si tu souhaites découvrir les autres dénouements de l'histoire, rends-toi au 150.",
          "target": 150
        }
      ],
      "isEnding": false
    },
    "134": {
      "id": 134,
      "text": "En traitant la situation par la moquerie constante ou le désintérêt, tu laisses l'intimidation s'installer dans le couloir. Tu t'approches désormais de la conclusion de ton parcours.",
      "choices": [
        {
          "text": "Si tu as ri des mots anonymes et encouragé le moqueur tout au long de la semaine, rends-toi au 136.",
          "target": 136
        },
        {
          "text": "Si tu as ignoré la détresse d'Inès en prétendant que ce n'était qu'un jeu inoffensif, rends-toi au 138.",
          "target": 138
        },
        {
          "text": "Si tu as fini par comprendre l'impact des mots trop tard, rends-toi au 140.",
          "target": 140
        }
      ],
      "isEnding": false
    },
    "135": {
      "id": 135,
      "text": "Ton désir d'enquêter à tout prix t'a poussé à agir avec précipitation, sans preuves et parfois avec agressivité. Tu te diriges vers les conséquences finales de tes décisions.",
      "choices": [
        {
          "text": "Si tu as accusé plusieurs camarades au hasard sans vérifier tes indices, rends-toi au 141.",
          "target": 141
        },
        {
          "text": "Si tu as fouillé dans les sacs des autres et provoqué des disputes dans le couloir, rends-toi au 143.",
          "target": 143
        },
        {
          "text": "Si tu as agi seul avec colère sans faire appel aux adultes de l'école, rends-toi au 145.",
          "target": 145
        }
      ],
      "isEnding": false
    },
    "136": {
      "id": 136,
      "text": "En considérant les billets moqueurs comme de simples farces et en riant avec les moqueurs, tu as laissé s'installer un climat désagréable. Inès ne sourit plus, n'ose plus s'approcher de son casier et s'isole chaque jour un peu plus. Tu comprends que rire des moqueries répétées rend complice du malaise de l'autre.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : MINIMISER L'INTIMIDATION (Dénouement 1/5)",
        "tone": "negative",
        "pedagogicalMessage": "Une plaisanterie fait rire tout le monde ; quand une moquerie se répète tous les jours et blesse quelqu'un, ce n'est plus un jeu, c'est de l'intimidation.",
        "outro": "N'hésite pas à rejouer pour explorer d'autres choix et aider Inès de façon plus positive !"
      }
    },
    "137": {
      "id": 137,
      "text": "Tu as préféré fermer les yeux et prétendre que la situation s'arrangerait d'elle-même. Malheureusement, l'auteur anonyme a continué ses agissements en toute impunité. Inès a fini par perdre confiance en elle et ne dessine plus pendant les récréations.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : MINIMISER L'INTIMIDATION (Dénouement 2/5)",
        "tone": "negative",
        "pedagogicalMessage": "Ignorer des actes méchants répétus ne les fait pas disparaître. Le silence permet à l'intimidation de grandir.",
        "outro": "Rejoue pour apprendre à repérer les signaux et intervenir à temps !"
      }
    },
    "138": {
      "id": 138,
      "text": "En répétant que ce n'était « qu'un petit mot sans importance », tu as banalisé la tristesse d'Inès. La classe s'est divisée entre ceux qui ricanent et ceux qui se taisent. Inès vit chaque venue à l'école avec appréhension et peur.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : MINIMISER L'INTIMIDATION (Dénouement 3/5)",
        "tone": "negative",
        "pedagogicalMessage": "Minimiser la souffrance d'un camarade empêche de prendre conscience de la gravité des mots. Chaque parole compte.",
        "outro": "Recommence la lecture pour faire preuve de plus de bienveillance !"
      }
    },
    "139": {
      "id": 139,
      "text": "Ta volonté d'amuser la galerie au détriment d'Inès a encouragé d'autres élèves à coller des sobriquets sur son casier. L'ambiance dans le couloir s'est dégradée et Inès a demandé à changer de place en classe.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : MINIMISER L'INTIMIDATION (Dénouement 4/5)",
        "tone": "negative",
        "pedagogicalMessage": "Faire le clown aux dépens de quelqu'un d'autre crée un effet d'entraînement blessant et injuste.",
        "outro": "Essaie une nouvelle trajectoire pour devenir un vrai soutien !"
      }
    },
    "140": {
      "id": 140,
      "text": "En ne prenant pas au sérieux les billets quotidiens, tu as laissé la situation s'envenimer jusqu'à la fin de la semaine. Même si l'auteur s'arrête par ennui, le mal est fait et Inès garde un souvenir triste de ces journées d'école.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : MINIMISER L'INTIMIDATION (Dénouement 5/5)",
        "tone": "negative",
        "pedagogicalMessage": "La répétition quotidienne de petites moqueries est la définition même du harcèlement. Ne laissons personne seul face à cela.",
        "outro": "Rejoue pour transformer la classe en un lieu d'entraide !"
      }
    },
    "141": {
      "id": 141,
      "text": "Tu voulais aider Inès, mais tu as accusé plusieurs camarades sans aucune preuve. Thomas, Léo et Jules se sont sentis injustement pris à partie. Même si les billets ont cessé, la méfiance et la colère règnent désormais entre les élèves dans le couloir.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : L'ENQUÊTE BRUTALE (Dénouement 1/5)",
        "tone": "mitigee",
        "pedagogicalMessage": "L'intention d'aider est bonne, mais accuser au hasard crée de l'injustice et gâche le climat de la classe.",
        "outro": "Rejoue pour apprendre à mener une enquête calme et rigoureuse !"
      }
    },
    "142": {
      "id": 142,
      "text": "En fouillant sans autorisation dans les sacs et les casiers de la classe, tu as provoqué de multiples disputes. Mme Girault a dû intervenir et sanctionner tes excès. L'auteur des mots a été découvert par hasard, mais tu as perdu la confiance de tes amis.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : L'ENQUÊTE BRUTALE (Dénouement 2/5)",
        "tone": "mitigee",
        "pedagogicalMessage": "On ne règle pas un problème en enfreignant le respect de la vie privée des autres. La méthode compte autant que le résultat.",
        "outro": "Tente une autre voie en coopérant gentiment avec la maîtresse !"
      }
    },
    "143": {
      "id": 143,
      "text": "Tes colères et tes accusations publiques dans le couloir ont créé un climat de peur et de suspicion. Inès s'est sentie très embarrassée par tout ce bruit autour d'elle. Le problème est résolu administrativement, mais l'amitié n'est pas au rendez-vous.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : L'ENQUÊTE BRUTALE (Dénouement 3/5)",
        "tone": "mitigee",
        "pedagogicalMessage": "Agir avec agressivité ne protège pas la victime ; cela rajoute du stress et de la gêne à une situation déjà difficile.",
        "outro": "Rejoue pour privilégier la douceur et la discrétion !"
      }
    },
    "144": {
      "id": 144,
      "text": "Tu as voulu jouer au justiciaire solitaire en attrapant brusquement tes camarades par le bras. Tes réactions impulsives t'ont valu une convocation dans le bureau de la direction, laissant l'enquête en suspens pendant plusieurs heures.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : L'ENQUÊTE BRUTALE (Dénouement 4/5)",
        "tone": "mitigee",
        "pedagogicalMessage": "Ne joue pas les détectives violents. Réfère-toi toujours aux adultes de l'école pour faire respecter les règles.",
        "outro": "Recommence pour faire équipe avec les adultes de confiance !"
      }
    },
    "145": {
      "id": 145,
      "text": "En inventant de faux arguments pour piéger des suspects, tu as perdu toute ta crédibilité auprès de Mme Girault. La vérité a fini par surgir, mais la classe garde un souvenir amer de ces disputes incessantes devant les casiers.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : L'ENQUÊTE BRUTALE (Dénouement 5/5)",
        "tone": "mitigee",
        "pedagogicalMessage": "La vérité nécessite de l'honnêteté et des faits concrets. Fabriquer des preuves détruit la confiance.",
        "outro": "Rejoue pour mener une démarche exemplaire et sereine !"
      }
    },
    "146": {
      "id": 146,
      "text": "Grâce à ton sens de l'observation et à ta discrétion, tu as conservé le mot violet comme preuve et informé Mme Girault au bon moment. Maxime a pu exprimer ses regrets sincères, et Inès a retrouvé la joie d'arriver chaque matin à l'école des Érables. Tu as été un camarade remarquable !",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'ENQUÊTE BIENVEILLANTE (Dénouement 1/5)",
        "tone": "positive",
        "pedagogicalMessage": "Repérer la répétition, garder son calme et avertir un adulte de confiance permet de stopper l'intimidation et de protéger ses camarades.",
        "outro": "Bravo ! Rejoue pour découvrir les autres nuances de cette belle victoire !"
      }
    },
    "147": {
      "id": 147,
      "text": "En brisant l'isolement d'Inès dès le début, tu lui as montré qu'elle n'était pas seule. Votre alliance avec la maîtresse a permis d'animer un grand débat de classe sur le respect. Maxime a rejoint votre groupe et dessine désormais avec vous lors des récréations.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'ENQUÊTE BIENVEILLANTE (Dénouement 2/5)",
        "tone": "positive",
        "pedagogicalMessage": "L'amitié et le soutien actif sont les meilleures armes contre le harcèlement. Ensemble, on est plus forts.",
        "outro": "Félicitations pour cette belle réussite collective !"
      }
    },
    "148": {
      "id": 148,
      "text": "L'initiative de déposer des mots d'encouragement et de superbes dessins dans le casier d'Inès a transformé le couloir. Inspirés par ton geste, d'autres élèves ont commencé à embellir les casiers de gentils messages. L'école des Érables est plus unie que jamais.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'ENQUÊTE BIENVEILLANTE (Dénouement 3/5)",
        "tone": "positive",
        "pedagogicalMessage": "Remplacer les moqueries par de la bienveillance crée une dynamique positive qui transforme toute une communauté.",
        "outro": "Bravo pour cet élan de solidarité exemplaire !"
      }
    },
    "149": {
      "id": 149,
      "text": "Le club de dessin créé avec l'accord de la directrice rencontre un succès impressionnant. Inès y anime des ateliers très populaires et Maxime aide à organiser le matériel. Grâce à ta démarche adulte et posée, une épreuve difficile s'est changée en un magnifique projet d'école.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'ENQUÊTE BIENVEILLANTE (Dénouement 4/5)",
        "tone": "positive",
        "pedagogicalMessage": "Dialoguer avec les adultes de confiance permet d'apporter des solutions durables et de valoriser les talents de chacun.",
        "outro": "Magnifique parcours ! N'hésite pas à relire l'histoire sous d'autres angles !"
      }
    },
    "150": {
      "id": 150,
      "text": "En cette fin de semaine, la classe de CM1 affiche une sérénité retrouvée. Inès, radieuse, t'offre son plus beau dessin représentant des arbres majestueux sous le soleil. Tu as prouvé qu'avec de l'écoute, du courage et du respect, chacun peut devenir le héros du quotidien.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'ENQUÊTE BIENVEILLANTE (Dénouement 5/5)",
        "tone": "positive",
        "pedagogicalMessage": "La bienveillance, le refus de la moquerie répétée et la confiance envers l'équipe éducative garantissent un climat scolaire heureux.",
        "outro": "Félicitations, tu as terminé avec succès la lecture de ce livre dont tu es le héros !"
      }
    }
  },
  "totalParagraphs": 150,
  "debateQuestions": [
    "Comment faire la différence entre une plaisanterie amicale et une moquerie qui devient de l'intimidation ?",
    "Pourquoi la répétition quotidienne d'un mot ou d'un geste change-t-elle complètement la gravité de la situation ?",
    "Pourquoi est-il important de conserver les preuves (comme les petits billets) et d'en parler à un adulte de confiance plutôt que de vouloir se venger seul ?",
    "Quelles actions concrètes pouvons-nous mettre en place dans notre école pour rendre nos couloirs et nos casiers plus accueillants et bienveillants ?"
  ],
  "coverTheme": {
    "primary": "#2D5E4E",
    "secondary": "#3F7D69",
    "accent": "#F2B857",
    "motif": "amitie"
  },
  "status": "playable",
  "isCustom": false
};
