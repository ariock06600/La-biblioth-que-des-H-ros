import type { BookData } from '../types/book';

export const cm1LaRumeurQuiCourt: BookData = {
  "id": "cm1-la-rumeur-qui-court",
  "title": "La rumeur qui court",
  "subtitle": "Un livre dont tu es le héros à l'école primaire",
  "grade": "CM1",
  "section": "primaire",
  "cycleLabel": "Cycle 3",
  "ageRange": "9-10 ans",
  "theme": "Rumeurs, vérification des faits & empathie",
  "howToPlay": "Bienvenue dans ce roman interactif ! Ici, c'est toi qui décides de la suite de l'histoire. À la fin de chaque paragraphe, trois choix s'offrent à toi. En fonction de ce que tu décides de faire, tu dois te rendre au numéro indiqué en gras.",
  "introduction": [
    "Tu es élève en classe de CM1 à l'École primaire des Tilleuls. Ton maître s'appelle M. Moreau. Tout se passait très bien jusqu'à ce lundi matin. Dans le rang, un chuchotement suspect circule de bouche à oreille. La cible ? Noé, un nouvel élève arrivé il y a seulement deux semaines. Certains racontent qu'il a volé de précieuses cartes de collection dans le cartable de Lucas, d'autres disent qu'il ment sur sa famille.",
    "Comme dans le jeu du téléphone arabe, l'histoire se déforme à chaque fois qu'elle est répétée. Quelles décisions vas-tu prendre face à cette rumeur ? Vas-tu l'amplifier, réagir trop vite, ou chercher la vérité ?"
  ],
  "paragraphs": {
    "1": {
      "id": 1,
      "text": "Ce lundi matin, la sonnerie de l'école des Tilleuls vient de retentir. Dans le rang de la classe de CM1, l'atmosphère est étrange. Léo se penche vers toi et chuchote à ton oreille avec un air mystérieux : « Tu as appris pour Noé ? Il a piqué trois cartes super rares dans le sac de Lucas vendredi soir ! Fais attention à tes affaires... » Tu regardes Noé, qui se tient un peu plus loin, seul au bout du rang, son sac à dos rouge sur les épaules.",
      "choices": [
        {
          "text": "Si tu répètes immédiatement cette nouvelle à ton voisin de devant pour l'avertir, rends-toi au 4.",
          "target": 4
        },
        {
          "text": "Si tu vas directement voir Noé pour lui demander brutalement pourquoi il a volé les cartes, rends-toi au 7.",
          "target": 7
        },
        {
          "text": "Si tu préfères attendre la récréation pour demander calmement à Lucas ce qu'il a vraiment perdu, rends-toi au 2.",
          "target": 2
        }
      ],
      "isEnding": false
    },
    "2": {
      "id": 2,
      "text": "Tu décides de garder la tête froide. Durant le premier cours de français avec M. Moreau, tu observes Lucas. Il a l'air contrarié, mais il travaille normalement. À dix heures, la cloche sonne enfin pour la récréation. Tu te diriges vers le terrain de billes où se trouve Lucas.",
      "choices": [
        {
          "text": "Si tu demandes à Lucas : « C'est vrai que Noé t'a volé tes cartes rares vendredi ? », rends-toi au 5.",
          "target": 5
        },
        {
          "text": "Si tu cries devant tout le monde que Lucas s'est fait dépouiller par Noé pour faire éclater l'affaire, rends-toi au 8.",
          "target": 8
        },
        {
          "text": "Si tu t'approches de Léo pour lui demander d'où il tient cette information exactement, rends-toi au 12.",
          "target": 12
        }
      ],
      "isEnding": false
    },
    "3": {
      "id": 3,
      "text": "Pris de doute, tu décides de ne rien dire pour l'instant. Mais pendant la dictée, Sarah te passe un petit mot plié sous la table : « N'approche pas Noé, c'est un voleur ! Fais passer ! » Le mot attend sur ton bureau. M. Moreau écrit au tableau et ne regarde pas.",
      "choices": [
        {
          "text": "Si tu ajoutes un dessin moqueur sur le mot et le transmets à ton voisin, rends-toi au 6.",
          "target": 6
        },
        {
          "text": "Si tu gardes le mot dans ta poche sans le faire circuler, rends-toi au 10.",
          "target": 10
        },
        {
          "text": "Si tu lèves la main pour dénoncer haut et fort que Sarah fait circuler des accusations, rends-toi au 14.",
          "target": 14
        }
      ],
      "isEnding": false
    },
    "4": {
      "id": 4,
      "text": "Tu te penches vers Maxime et tu lui chuchotes : « Noé a volé des cartes rares à Lucas ! » Maxime ouvre de grands yeux et s'empresse de le répéter à sa voisine. En entrant en classe, tu vois plusieurs élèves chuchoter en regardant Noé d'un air méfiant. Noé baisse la tête, visiblement mal à l'aise.",
      "choices": [
        {
          "text": "Si tu te sens un peu coupable et décides d'observer la réaction de Noé pendant le cours, rends-toi au 9.",
          "target": 9
        },
        {
          "text": "Si tu profites de la distribution des cahiers pour dire à Noé : « Rends les cartes sinon on va tous te boycotter », rends-toi au 15.",
          "target": 15
        },
        {
          "text": "Si tu décides d'aller voir le maître à la fin du cours pour avouer la rumeur qui circule, rends-toi au 11.",
          "target": 11
        }
      ],
      "isEnding": false
    },
    "5": {
      "id": 5,
      "text": "Tu abordes Lucas au bord du terrain de sport. Il a l'air surpris par ta question. « Mes cartes ? J'en ai perdu une vendredi, oui, mais je ne sais pas du tout où elle est passée... Qui a dit que c'était Noé ? » Tu comprends que l'histoire a déjà été déformée.",
      "choices": [
        {
          "text": "Si tu vas voir Léo pour lui reprocher d'avoir inventé que Noé était un voleur, rends-toi au 13.",
          "target": 13
        },
        {
          "text": "Si tu rassures Lucas en lui proposant de l'aider à chercher sa carte sans accuser personne, rends-toi au 18.",
          "target": 18
        },
        {
          "text": "Si tu te dis que Lucas cherche juste à couvrir Noé et que tu vas enquêter toi-même dans le sac de Noé, rends-toi au 21.",
          "target": 21
        }
      ],
      "isEnding": false
    },
    "6": {
      "id": 6,
      "text": "Tu as gribouillé une tête de voleur sur le mot avant de le donner à Antoine. À la fin de la matinée, la moitié de la classe a vu la feuille. Pendant la récréation, un groupe d'élèves refuse de laisser Noé participer à la partie de balle au prisonnier. Noé reste assis seul sur le banc en pierre.",
      "choices": [
        {
          "text": "Si tu vas t'asseoir à côté de Noé pour essayer de comprendre son histoire, rends-toi au 16.",
          "target": 16
        },
        {
          "text": "Si tu rejoins le groupe qui se moque de Noé pour ne pas te faire rejeter à ton tour, rends-toi au 20.",
          "target": 20
        },
        {
          "text": "Si tu vas voir les élèves qui l'excluent et tu leur cries dessus qu'ils sont tous méchants, rends-toi au 22.",
          "target": 22
        }
      ],
      "isEnding": false
    },
    "7": {
      "id": 7,
      "text": "Dès que M. Moreau s'éloigne pour effacer le tableau, tu te tournes vers Noé et tu lui lances à voix basse mais ferme : « Pourquoi tu as volé les cartes de Lucas ? C'est vraiment moche ce que tu as fait ! » Noé devient tout rouge, les larmes lui montent aux yeux et il répond : « Mais... c'est faux ! De quoi tu parles ? »",
      "choices": [
        {
          "text": "Si tu lui réponds méchamment : « Arrête de mentir, tout le monde le sait ! », rends-toi au 17.",
          "target": 17
        },
        {
          "text": "Si tu te rends compte que ta réaction était trop violente et tu t'excuses de l'avoir accusé directement, rends-toi au 19.",
          "target": 19
        },
        {
          "text": "Si tu vas raconter à Léo que Noé a joué les victimes quand tu l'as confronté, rends-toi au 23.",
          "target": 23
        }
      ],
      "isEnding": false
    },
    "8": {
      "id": 8,
      "text": "Tu te mets au milieu de la cour et tu cries : « Hé tout le monde ! Noé a piqué les cartes rares de Lucas ! » Le silence se fait un instant, puis les chuchotements reprennent de plus belle. Lucas arrive en courant, complètement embarrassé : « Mais tais-toi ! Je n'ai jamais dit ça ! »",
      "choices": [
        {
          "text": "Si tu t'excuses immédiatement auprès de Lucas et Noé pour avoir crié sans savoir, rends-toi au 19.",
          "target": 19
        },
        {
          "text": "Si tu insistes en disant : « Bah alors pourquoi Léo dit que tu te plaignais ce matin ? », rends-toi au 13.",
          "target": 13
        },
        {
          "text": "Si tu rigoles en disant que c'était juste une blague pour animer la récréation, rends-toi au 25.",
          "target": 25
        }
      ],
      "isEnding": false
    },
    "9": {
      "id": 9,
      "text": "Pendant le cours de mathématiques, tu remarques que Noé n'ose même plus lever la main pour répondre, alors qu'il adore cette matière. Quand M. Moreau lui demande de distribuer les manuels, les élèves refusent de prendre les livres qu'il tend. La situation devient pesante.",
      "choices": [
        {
          "text": "Si tu acceptes le livre de Noé avec un sourire pour montrer l'exemple aux autres, rends-toi au 24.",
          "target": 24
        },
        {
          "text": "Si tu refuses aussi le livre en disant tout bas : « Garde tes mains sales », rends-toi au 20.",
          "target": 20
        },
        {
          "text": "Si tu lèves la main pour dire à M. Moreau que la classe est injuste avec Noé, rends-toi au 27.",
          "target": 27
        }
      ],
      "isEnding": false
    },
    "10": {
      "id": 10,
      "text": "Tu plies le mot de Sarah et tu le glisses soigneusement au fond de ta trousse. La dictée se termine sans encombre. En sortant en récréation, tu croises Sarah qui te regarde de travers : « Pourquoi tu n'as pas fait passer le mot ? Tu es complice ? »",
      "choices": [
        {
          "text": "Si tu lui expliques calmement : « On ne répète pas des accusations sans preuves », rends-toi au 26.",
          "target": 26
        },
        {
          "text": "Si tu te justifies bêtement : « Le maître me regardait, j'ai eu peur d'être puni », rends-toi au 4.",
          "target": 4
        },
        {
          "text": "Si tu te fâches contre elle : « Mêle-toi de tes affaires et arrête d'embêter Noé ! », rends-toi au 22.",
          "target": 22
        }
      ],
      "isEnding": false
    },
    "11": {
      "id": 11,
      "text": "À la fin du cours de français, tu restes dans la classe pendant que les autres sortent en récréation. Tu te rapproches du bureau de M. Moreau. « Monsieur, il y a une rumeur fausse qui circule sur Noé à propos d'un vol de cartes. » Le maître pose son stylo et t'écoute attentivement.",
      "choices": [
        {
          "text": "Si tu lui racontes tout ce que tu as entendu depuis ce matin sans donner de noms, rends-toi au 28.",
          "target": 28
        },
        {
          "text": "Si tu donnes immédiatement la liste des élèves qui ont répété la rumeur, rends-toi au 29.",
          "target": 29
        },
        {
          "text": "Si tu regrettes de lui en avoir parlé et tu prétexte une fausse excuse pour sortir vite rejoindre tes amis, rends-toi au 30.",
          "target": 30
        }
      ],
      "isEnding": false
    },
    "12": {
      "id": 12,
      "text": "Tu attrapes Léo près du préau. « Dis donc Léo, qui t'a raconté cette histoire de cartes volées par Noé ? » Léo hésite, se gratte la tête et finit par avouer : « Bah... c'est Tom qui m'a dit qu'il avait vu Noé fouiller dans un sac vendredi. Mais je ne sais pas si c'était le sac de Lucas... »",
      "choices": [
        {
          "text": "Si tu vas voir Tom pour vérifier ce qu'il a réellement vu avec ses propres yeux, rends-toi au 31.",
          "target": 31
        },
        {
          "text": "Si tu conclues immédiatement que Noé fouille donc dans tous les sacs, rends-toi au 17.",
          "target": 17
        },
        {
          "text": "Si tu réexpliques à Léo que répéter des suppositions crée de fausses rumeurs blessantes, rends-toi au 26.",
          "target": 26
        }
      ],
      "isEnding": false
    },
    "13": {
      "id": 13,
      "text": "Tu retrouves Léo au milieu de la cour. « Lucas dit qu'il a juste perdu une carte et qu'il n'a jamais accusé Noé ! Pourquoi tu as raconté ça ce matin dans le rang ? » Léo baisse les yeux, embêté : « J'ai juste répété ce que les grands du CM2 disaient... »",
      "choices": [
        {
          "text": "Si tu vas expliquer à la classe que la rumeur est totalement fausse et part d'un malentendu, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu te moques de Léo parce qu'il croit tout ce que disent les CM2, rends-toi au 25.",
          "target": 25
        },
        {
          "text": "Si tu proposes à Léo d'aller voir Noé ensemble pour s'excuser du malentendu, rends-toi au 33.",
          "target": 33
        }
      ],
      "isEnding": false
    },
    "14": {
      "id": 14,
      "text": "Tu lèves la main bien haut. M. Moreau t'interroge : « Oui ? Tu as une question sur la dictée ? » Tu te lèves et tu déclares devant tout le monde : « Sarah fait circuler un mot pour dire que Noé est un voleur ! » Toute la classe se retourne, choquée. Sarah devient rouge de colère.",
      "choices": [
        {
          "text": "Si tu assumes ta déclaration et montres le mot comme preuve au maître, rends-toi au 34.",
          "target": 34
        },
        {
          "text": "Si tu te rassis vite en réalisant que tu as affiché Sarah devant tout le monde au lieu de régler ça calmement, rends-toi au 29.",
          "target": 29
        },
        {
          "text": "Si tu profites de l'attention pour ajouter d'autres détails exagérés sur l'affaire, rends-toi au 15.",
          "target": 15
        }
      ],
      "isEnding": false
    },
    "15": {
      "id": 15,
      "text": "Au moment du rangement des affaires, tu approches du bureau de Noé. « Tu devrais rendre les cartes de Lucas si tu ne veux pas avoir de gros problèmes ! » Noé tape du poing sur la table, les yeux pleins de colère et de tristesse : « Mais je n'ai rien pris ! Arrêtez tous de m'accuser ! »",
      "choices": [
        {
          "text": "Si tu t'excuses d'avoir parlé trop vite en voyant sa grande détresse, rends-toi au 19.",
          "target": 19
        },
        {
          "text": "Si tu le menaces de le rapporter au directeur s'il ne s'exécute pas, rends-toi au 29.",
          "target": 29
        },
        {
          "text": "Si tu vas dire aux autres que Noé est devenu très agressif quand tu lui as parlé, rends-toi au 23.",
          "target": 23
        }
      ],
      "isEnding": false
    },
    "16": {
      "id": 16,
      "text": "Tu te détaches du groupe de jeu et tu vas t'asseoir à côté de Noé sur le banc en pierre. Il regarde ses chaussures, silencieux. « Salut Noé... Ça va ? Ne fais pas attention aux autres, il y a une rumeur bizarre depuis ce matin. » Noé te regarde, soulagé d'avoir enfin un allié.",
      "choices": [
        {
          "text": "Si tu lui demandes gentiment de t'expliquer ce qui s'est passé vendredi pour l'aider, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu lui conseilles de rester dans son coin toute la journée pour éviter les ennuis, rends-toi au 20.",
          "target": 20
        },
        {
          "text": "Si tu lui proposes de jouer tout de suite au marbre avec toi devant les autres élèves, rends-toi au 36.",
          "target": 36
        }
      ],
      "isEnding": false
    },
    "17": {
      "id": 17,
      "text": "Tu insistes lourdement face à Noé : « Tout le monde sait que tu as menti ! Tu es le nouveau, c'est trop bizarre ! » Noé ramasse ses affaires brusquement et change de place dans la classe. Pendant toute la matinée, plus personne ne lui adresse la parole.",
      "choices": [
        {
          "text": "Si tu te rends compte que ton comportement d'exclusion est cruel et décides de changer d'attitude, rends-toi au 24.",
          "target": 24
        },
        {
          "text": "Si tu te félicites d'avoir fait respecter la justice dans la classe, rends-toi au 20.",
          "target": 20
        },
        {
          "text": "Si tu vas raconter à d'autres camarades que Noé a une attitude louche, rends-toi au 6.",
          "target": 6
        }
      ],
      "isEnding": false
    },
    "18": {
      "id": 18,
      "text": "Tu aides Lucas à fouiller le fond de son cartable et sa poche de manteau. En secouant son blouson suspendu au porte-manteau, une carte brillante tombe sur le sol ! « Ma carte ultra-rare ! Exclame Lucas. Elle était juste coincée dans la doublure ! »",
      "choices": [
        {
          "text": "Si tu cours annoncer la bonne nouvelle à toute la cour pour innocenter totalement Noé, rends-toi au 37.",
          "target": 37
        },
        {
          "text": "Si tu demandes à Lucas d'aller immédiatement s'excuser auprès de Noé avec toi, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu gardes la carte dans ta poche sans rien dire à personne pour continuer le mystère, rends-toi au 21.",
          "target": 21
        }
      ],
      "isEnding": false
    },
    "19": {
      "id": 19,
      "text": "En voyant les larmes de Noé, tu sens un pincement au cœur. Tu te rends compte que tu as agi sous l'effet du groupe sans réfléchir. « Excuse-moi Noé, j'ai répété ce que j'ai entendu sans vérifier. Je ne voulais pas te faire de mal. » Noé essuie ses yeux et hoche la tête.",
      "choices": [
        {
          "text": "Si tu lui promets de mener l'enquête pour stopper la fausse rumeur dès la récréation, rends-toi au 2.",
          "target": 2
        },
        {
          "text": "Si tu lui proposes d'être ton coéquipier pour le travail de géographie de cet après-midi, rends-toi au 38.",
          "target": 38
        },
        {
          "text": "Si tu restes discret et ne fais plus rien de la matinée, rends-toi au 10.",
          "target": 10
        }
      ],
      "isEnding": false
    },
    "20": {
      "id": 20,
      "text": "La récréation touche à sa fin. Tu as laissé la rumeur se propager sans intervenir, ou tu y as même participé. Dans le rang pour la cantine, Noé est complètement isolé. Personne ne veut se mettre à côté de lui. Tu sens que la situation est devenue totalement injuste.",
      "choices": [
        {
          "text": "Si tu décides de rompre l'isolement en te plaçant à côté de Noé dans le rang de la cantine, rends-toi au 39.",
          "target": 39
        },
        {
          "text": "Si tu continues à l'ignorer pour rester avec ton groupe d'amis habituel, rends-toi au 40.",
          "target": 40
        },
        {
          "text": "Si tu profites du rang pour lancer une moquerie supplémentaire, rends-toi au 23.",
          "target": 23
        }
      ],
      "isEnding": false
    },
    "21": {
      "id": 21,
      "text": "Tu profites du moment où M. Moreau écrit au tableau pour jeter un coup d'œil sous le bureau de Noé. Son sac est entreouvert. Tu te penches pour essayer de regarder à l'intérieur. Noé te surprend en train de fouiller dans ses affaires.",
      "choices": [
        {
          "text": "Si tu t'excuses immédiatement embarrassé d'avoir violé son intimité, rends-toi au 19.",
          "target": 19
        },
        {
          "text": "Si tu prétextes que tu ramassais seulement ton stylo tombé par terre, rends-toi au 9.",
          "target": 9
        },
        {
          "text": "Si tu l'accuses à haute voix d'avoir caché les cartes volées au fond de son sac, rends-toi au 14.",
          "target": 14
        }
      ],
      "isEnding": false
    },
    "22": {
      "id": 22,
      "text": "Tu te mets à crier sur les élèves du groupe : « Vous êtes vraiment méchants d'accuser Noé ! Vous êtes nuls ! » Les élèves te regardent avec énervement et le ton monte rapidement. M. Moreau s'approche du groupe en fronçant les sourcils.",
      "choices": [
        {
          "text": "Si tu expliques calmement au maître l'origine du conflit sur la rumeur, rends-toi au 28.",
          "target": 28
        },
        {
          "text": "Si tu te disputes encore plus fort en rejetant toute la faute sur Sarah et Léo, rends-toi au 29.",
          "target": 29
        },
        {
          "text": "Si tu te tais brusquement et refuses d'expliquer au maître ce qui se passe, rends-toi au 30.",
          "target": 30
        }
      ],
      "isEnding": false
    },
    "23": {
      "id": 23,
      "text": "Tu vas voir le groupe au milieu de la cour : « J'ai parlé à Noé, il a une réaction super bizarre ! Il s'énerve tout de suite, c'est sûr qu'il a quelque chose à cacher. » La rumeur prend une nouvelle ampleur : désormais, on dit aussi que Noé est violent.",
      "choices": [
        {
          "text": "Si tu te rends compte que tu aggraves dangereusement les choses et décides d'avouer la vérité à Lucas, rends-toi au 5.",
          "target": 5
        },
        {
          "text": "Si tu ajoutes encore d'autres détails inventés pour intéresser tes copains, rends-toi au 6.",
          "target": 6
        },
        {
          "text": "Si tu vas enfin poser des questions neutres à Tom qui était présent vendredi, rends-toi au 31.",
          "target": 31
        }
      ],
      "isEnding": false
    },
    "24": {
      "id": 24,
      "text": "Quand Noé tend le manuel de mathématiques, tu le prends en le remerciant gentiment. Il te lance un regard rempli de gratitude. Deux autres élèves, voyant ton geste simple, acceptent à leur tour leurs livres sans faire de réflexion.",
      "choices": [
        {
          "text": "Si tu lui chuchotes : « Ne t'inquiète pas pour les histoires de ce matin », rends-toi au 26.",
          "target": 26
        },
        {
          "text": "Si tu te concentres uniquement sur tes exercices de maths sans plus lui parler, rends-toi au 10.",
          "target": 10
        },
        {
          "text": "Si tu proposes à Noé de travailler en binôme sur le problème d'analyse de données, rends-toi au 38.",
          "target": 38
        }
      ],
      "isEnding": false
    },
    "25": {
      "id": 25,
      "text": "Tu penses que toute cette histoire est juste un jeu amusant pour occuper la matinée. Mais en regardant Noé qui ne mange pas son biscuit à la récréation et reste prostré contre le mur, tu comprends que ce n'est pas drôle du tout pour celui qui le subit.",
      "choices": [
        {
          "text": "Si tu stoppes immédiatement tes moqueries et décides de réparer tes erreurs, rends-toi au 16.",
          "target": 16
        },
        {
          "text": "Si tu te moques de sa tristesse en disant qu'il fait la tête pour rien, rends-toi au 23.",
          "target": 23
        },
        {
          "text": "Si tu vas demander conseil à un surveillant de la cour, rends-toi au 41.",
          "target": 41
        }
      ],
      "isEnding": false
    },
    "26": {
      "id": 26,
      "text": "Tu prends le temps de discuter calmement avec tes camarades. « Réfléchissez un peu : personne n'a vu Noé prendre ces cartes. Répéter ça sans savoir, ça s'appelle de la calomnie et ça fait très mal. » Plusieurs élèves commencent à hocher la tête et à remettre en cause ce qu'ils ont entendu.",
      "choices": [
        {
          "text": "Si tu organises une petite discussion entre Lucas, Léo et Noé pour tout clarifier, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu vas annoncer la fin de la rumeur à Noé pour le rassurer, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu laisses les choses se calmer toutes seules pour le reste de la matinée, rends-toi au 39.",
          "target": 39
        }
      ],
      "isEnding": false
    },
    "27": {
      "id": 27,
      "text": "Tu lèves la main au milieu du cours. « Monsieur Moreau, il y a des fausses informations qui circulent dans la classe et Noé est rejeté par tout le monde depuis ce matin. » Le maître prend ces propos très au sérieux et décide de suspendre la leçon de mathématiques.",
      "choices": [
        {
          "text": "Si tu expliques le fonctionnement de la propagation d'une rumeur avec l'exemple des cartes, rends-toi au 42.",
          "target": 42
        },
        {
          "text": "Si tu refuses d'en dire plus par peur d'être traité de dénonciateur, rends-toi au 30.",
          "target": 30
        },
        {
          "text": "Si tu accuses nommément Léo d'être le seul responsable de cette histoire, rends-toi au 29.",
          "target": 29
        }
      ],
      "isEnding": false
    },
    "28": {
      "id": 28,
      "text": "Tu expliques calmement à M. Moreau qu'une histoire de cartes de collection perdues s'est transformée en rumeur de vol visant Noé. Le maître te remercie pour ta maturité. Il attend le retour de la classe pour faire une mise au point essentielle sur le respect.",
      "choices": [
        {
          "text": "Si tu te places aux côtés de Noé lors de la rentrée en classe pour lui montrer ton soutien, rends-toi au 39.",
          "target": 39
        },
        {
          "text": "Si tu vas prévenir Lucas que le maître est au courant de la perte de sa carte, rends-toi au 18.",
          "target": 18
        },
        {
          "text": "Si tu restes en retrait pour observer la réaction des autres élèves, rends-toi au 43.",
          "target": 43
        }
      ],
      "isEnding": false
    },
    "29": {
      "id": 29,
      "text": "Tu donnes des noms au maître d'un ton vindicatif. M. Moreau t'arrête gentiment : « Mon rôle n'est pas de punir au hasard, mais de vous faire comprendre le danger des rumeurs. Merci de m'avoir averti, mais réglons cela intelligemment. » Tu te sens un peu confus.",
      "choices": [
        {
          "text": "Si tu écoutes attentivement les conseils du maître pour réparer l'ambiance de classe, rends-toi au 42.",
          "target": 42
        },
        {
          "text": "Si tu vas t'excuser auprès de tes camarades d'avoir donné leurs noms sous le coup de la colère, rends-toi au 26.",
          "target": 26
        },
        {
          "text": "Si tu boudes dans ton coin jusqu'à l'heure du déjeuner, rends-toi au 40.",
          "target": 40
        }
      ],
      "isEnding": false
    },
    "30": {
      "id": 30,
      "text": "Pris de panique, tu bafouilles une excuse et tu rejoins la cour de récréation. Tu n'as pas osé aller au bout de ta démarche auprès du maître. La cloche sonne pour annoncer la fin de la pause et le rang se forme pour la cantine. La rumeur flotte toujours dans l'air.",
      "choices": [
        {
          "text": "Si tu profites du rangement pour aller parler enfin avec Noé, rends-toi au 39.",
          "target": 39
        },
        {
          "text": "Si tu te sauves en tête de rang pour éviter d'entendre les chuchotements, rends-toi au 40.",
          "target": 40
        },
        {
          "text": "Si tu essaies de retrouver Lucas pour connaître le fin mot de l'histoire avant de manger, rends-toi au 5.",
          "target": 5
        }
      ],
      "isEnding": false
    },
    "31": {
      "id": 31,
      "text": "Tu cours vers Tom, qui joue au ballon au centre de la cour. « Tom, attarde-toi deux secondes ! Qu'est-ce que tu as vu vendredi soir exactement ? » Tom s'arrête, un peu surpris. « Bah, j'ai vu Noé se baisser près du sac de Lucas... Mais il ramassait juste son propre cahier qui était tombé par terre ! Je n'ai jamais dit qu'il avait volé une carte ! » Tout s'explique : la rumeur est née d'un simple malentendu.",
      "choices": [
        {
          "text": "Si tu vas immédiatement trouver Léo et Lucas pour leur révéler la vérité, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu réunis un groupe au milieu de la cour pour clamer haut et fort l'innocence de Noé, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu gardes cette information pour toi et préfères aller manger à la cantine, rends-toi au 40.",
          "target": 40
        }
      ],
      "isEnding": false
    },
    "32": {
      "id": 32,
      "text": "Tu montes sur le rebord du bac à sable et tu interpelles tes camarades : « Écoutez tous ! La rumeur sur Noé est totalement fausse ! Tom m'a expliqué qu'il ramassait seulement son carnet. Personne n'a rien volé ! » Plusieurs élèves s'arrêtent de jouer, l'air étonné. La tension commence à retomber dans la cour.",
      "choices": [
        {
          "text": "Si tu profites de cet effet pour aller proposer à Noé de venir jouer avec le groupe, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu te moques ouvertement de ceux qui ont cru à cette histoire sans vérifier, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu rejoins calmement le rang pour aller déjeuner à la cantine, rends-toi au 39.",
          "target": 39
        }
      ],
      "isEnding": false
    },
    "33": {
      "id": 33,
      "text": "Tu rassembles Lucas, Léo et Noé près du grand marronnier. « On s'arrête deux minutes, les gars. Lucas n'a rien perdu par vol, et Noé n'a fait que ramasser ses affaires. » Léo bafouille des excuses à Noé, qui sourit avec soulagement. Lucas s'excuse également d'avoir laissé planer le doute. La vérité est enfin établie.",
      "choices": [
        {
          "text": "Si tu proposes qu'ils mangent tous ensemble à la même table de la cantine, rends-toi au 45.",
          "target": 45
        },
        {
          "text": "Si tu t'en vas fièrement sans prêter attention à la suite des événements, rends-toi au 40.",
          "target": 40
        },
        {
          "text": "Si tu insistes lourdement pour que Léo donne une bille rare à Noé en dédommagement, rends-toi au 46.",
          "target": 46
        }
      ],
      "isEnding": false
    },
    "34": {
      "id": 34,
      "text": "Tu avances jusqu'au bureau du maître et tu lui tends le petit papier plié. M. Moreau le déplie, le lit attentivement, puis fronce les sourcils. « Sarah, viens me voir immédiatement », dit-il d'un ton sévère. Toute la classe retient son souffle. Sarah te jette un regard furieux en se levant.",
      "choices": [
        {
          "text": "Si tu soutiens le regard de Sarah en lui disant haut et fort qu'elle l'a bien cherché, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu demandes au maître de transformer ce moment en une discussion collective apaisée, rends-toi au 42.",
          "target": 42
        },
        {
          "text": "Si tu te rassis discrètement en baissant la tête, gêné par l'ambiance tendue, rends-toi au 43.",
          "target": 43
        }
      ],
      "isEnding": false
    },
    "35": {
      "id": 35,
      "text": "Sur le banc en pierre, Noé prend une grande inspiration et t'explique : « Vendredi soir, en me dépêchant, mon carnet est tombé sous le banc. Je me suis baissé pour le prendre, à côté du sac de Lucas. Tom a dû croire que je fouillais... Je n'ai jamais touché aux cartes de qui que ce soit. » Tu comprends que Noé est totalement innocent.",
      "choices": [
        {
          "text": "Si tu lui réponds brutalement qu'il aurait dû s'expliquer plus tôt au lieu de bouder, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu lui proposes de former une équipe avec toi pour le grand jeu du midi, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu pars chercher Léo pour lui faire répéter l'histoire de Noé, rends-toi au 33.",
          "target": 33
        }
      ],
      "isEnding": false
    },
    "36": {
      "id": 36,
      "text": "Tu sors tes plus belles billes et tu les tentes devant Noé. « Viens, on fait une partie d'enfer ! » Les autres élèves s'approchent, intrigués par vos rires. Peu à peu, deux camarades demandent à vous rejoindre. L'isolement de Noé est brisé grâce à ton attitude accueillante.",
      "choices": [
        {
          "text": "Si tu invites tout le monde à partager la même table au repas de midi, rends-toi au 45.",
          "target": 45
        },
        {
          "text": "Si tu te vantes auprès des camarades d'être le seul héros à avoir soutenu Noé, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu te concentres sur la partie de billes sans reparler de la rumeur, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "37": {
      "id": 37,
      "text": "Tu brandis la carte retrouvée et tu cries dans toute la cour : « La carte de Lucas est retrouvée ! Elle était coincée dans son blouson ! Noé n'a rien fait du tout ! » Un murmure de soulagement parcourt les élèves. Lucas s'approche de Noé pour lui tapoter l'épaule en signe d'apaisement.",
      "choices": [
        {
          "text": "Si tu demandes à Sarah de présenter des excuses publiques à Noé devant tout le monde, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu vas fièrement t'installer dans le rang de la cantine à côté de Noé, rends-toi au 39.",
          "target": 39
        },
        {
          "text": "Si tu laisses la cour se vider et pars manger sans prêter attention aux autres, rends-toi au 40.",
          "target": 40
        }
      ],
      "isEnding": false
    },
    "38": {
      "id": 38,
      "text": "Au retour de la pause, M. Moreau annonce un travail en binôme. Tu te tournes vers Noé et décides d'être son partenaire. Vous combinez vos forces pour résoudre les exercices de géographie. Noé est très rapide pour lire les cartes et vous obtenez un excellent résultat.",
      "choices": [
        {
          "text": "Si tu profites du travail pour inciter Noé à raconter sa passion pour la géographie à la classe, rends-toi au 48.",
          "target": 48
        },
        {
          "text": "Si tu fais tout le devoir seul sans vraiment laisser Noé donner ses réponses, rends-toi au 49.",
          "target": 49
        },
        {
          "text": "Si tu relances une moquerie bête à voix basse pendant que le maître tourne le dos, rends-toi au 50.",
          "target": 50
        }
      ],
      "isEnding": false
    },
    "39": {
      "id": 39,
      "text": "La cloche sonne la pause déjeuner. Dans le rang pour le réfectoire, tu viens te placer juste à côté de Noé. « On se met à la même table ? » lui demandes-tu. Son visage s'illumine. Ensemble, vous récupérez vos plateaux et choisissez une table lumineuse près de la fenêtre.",
      "choices": [
        {
          "text": "Si tu profites du repas pour discuter de vos jeux vidéo préférés et faire connaissance, rends-toi au 45.",
          "target": 45
        },
        {
          "text": "Si tu le questionnes lourdement sur ses anciennes écoles en le harcelant de détails, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu l'abandonnes soudainement au milieu du repas pour rejoindre la table des populaires, rends-toi au 51.",
          "target": 51
        }
      ],
      "isEnding": false
    },
    "40": {
      "id": 40,
      "text": "Tu décides de ne pas te meler de l'histoire et tu rejoins ton groupe d'amis habituel dans la file de la cantine. Derrière vous, Noé avance seul, le regard fixe. Pendant le repas, la discussion tourne autour du football, mais tu ne peux t'empêcher de jeter des coups d'œil vers Noé, isolé au bout d'une table.",
      "choices": [
        {
          "text": "Si tu décides de corriger la situation en allant le rejoindre pour le dessert, rends-toi au 45.",
          "target": 45
        },
        {
          "text": "Si tu participes aux rires étouffés de tes camarades qui se moquent de son isolement, rends-toi au 51.",
          "target": 51
        },
        {
          "text": "Si tu finis ton repas sans mot dire et cours retrouver les surveillants dans la cour du midi, rends-toi au 41.",
          "target": 41
        }
      ],
      "isEnding": false
    },
    "41": {
      "id": 41,
      "text": "Tu t'approches de Marc, le surveillant avec son gilet jaune. « Marc, comment on fait quand une fausse histoire circule et que tout le monde accuse quelqu'un pour rien ? » Marc s'arrête et t'écoute gentiment : « Une rumeur, c'est comme un incendie. Pour l'éteindre, il ne faut pas l'alimenter. Il faut rétablir les faits avec calme et protéger la personne ciblée. » Ses conseils t'éclairent.",
      "choices": [
        {
          "text": "Si tu décides d'appliquer immédiatement ses conseils en réunissant Lucas et Noé, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu vas trouver la maîtresse ou le maître pour organiser une réunion de classe, rends-toi au 42.",
          "target": 42
        },
        {
          "text": "Si tu laisses Marc gérer seul la situation et vas jouer au ballon de ton côté, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "42": {
      "id": 42,
      "text": "M. Moreau demande le silence dans la classe. Il s'assoit sur le bord de son bureau et parle d'une voix posée. Vous dialoguez ensemble sur la manière dont les informations se déforment. Léo et Sarah interviennent pour exprimer leurs regrets. Toute la classe prend conscience de l'impact des mots blessants.",
      "choices": [
        {
          "text": "Si tu proposes que toute la classe prépare un panneau d'affichage contre les rumeurs, rends-toi au 52.",
          "target": 52
        },
        {
          "text": "Si tu murmures à ton voisin que c'est bien fait pour les fauteurs de troubles, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu attends tranquillement que le cours reprenne son déroulement normal, rends-toi au 38.",
          "target": 38
        }
      ],
      "isEnding": false
    },
    "43": {
      "id": 43,
      "text": "Sagement assis à ta table, tu observes les échanges entre le maître et les élèves. Tu vois le visage de Noé se détendre à mesure que les malentendus sont levés. Tu comprends qu'écouter et réfléchir avant d'agir évite bien des erreurs, même si tu es resté plutôt discret.",
      "choices": [
        {
          "text": "Si tu décides de sortir de ta réserve pour proposer ton aide à Noé pour le devoir d'après-midi, rends-toi au 38.",
          "target": 38
        },
        {
          "text": "Si tu restes silencieux pendant toute l'après-midi sans adresser la parole à personne, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu réépètes à la récréation de l'après-midi une autre anecdote inventée sur un autre élève, rends-toi au 50.",
          "target": 50
        }
      ],
      "isEnding": false
    },
    "44": {
      "id": 44,
      "text": "Tu prends un air supérieur et tu lances aux autres : « Vous êtes vraiment naïfs d'avoir cru à cette rumeur ! Moi, j'avais tout compris dès le début ! » Léo et Sarah te regardent de travers, agacés par ton attitude arrogante. Tu as peut-être dit la vérité, mais ton ton bravache énerve tes camarades.",
      "choices": [
        {
          "text": "Si tu rectifies immédiatement ton attitude en proposant un jeu collectif pour apaiser l'ambiance, rends-toi au 47.",
          "target": 47
        },
        {
          "text": "Si tu continues à provoquer la classe en les traitant d'incompétents, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu t'isoles au coin du préau pour bouder tout seul jusqu'au repas, rends-toi au 40.",
          "target": 40
        }
      ],
      "isEnding": false
    },
    "45": {
      "id": 45,
      "text": "À la cantine, la table est remplie d'éclats de rire. Noé, rassuré et entouré, raconte ses anecdotes de vacances. Le repas se passe dans une très bonne ambiance. Même Lucas et Léo sont venus partager leur yaourt avec vous. Une vraie camaraderie s'installe.",
      "choices": [
        {
          "text": "Si tu proposes d'organiser un grand match de passe à dix dans la cour du midi, rends-toi au 47.",
          "target": 47
        },
        {
          "text": "Si tu gâches ce moment chaleureux en rappelant à voix haute l'erreur de Léo devant tout le monde, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu restes tranquillement assis à écouter les histoires des uns et des autres, rends-toi au 54.",
          "target": 54
        }
      ],
      "isEnding": false
    },
    "46": {
      "id": 46,
      "text": "Tu insistes de manière très sèche, voulant forcer des excuses dramatiques ou des réparations financières. « Léo doit donner ses meilleures cartes à Noé pour se faire pardonner ! » Noé secoue la tête, mal à l'aise : « Non, ce n'est pas la peine, je veux juste qu'on oublie cette histoire. » Ta réaction trop brutale crée un nouveau malaise.",
      "choices": [
        {
          "text": "Si tu comprends ton erreur et t'excuses de vouloir trop en faire, rends-toi au 45.",
          "target": 45
        },
        {
          "text": "Si tu t'énerves contre Noé en le traitant d'ingrat, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu t'éloignes pour aller parler avec les surveillants dans la cour, rends-toi au 41.",
          "target": 41
        }
      ],
      "isEnding": false
    },
    "47": {
      "id": 47,
      "text": "Pendant la pause du midi, vous organisez une grande partie de ballon prisonnier dans la cour ensoleillée. Les équipes sont mélangées et Noé fait d'excellents tirs. L'incident du matin semble loin derrière vous, effacé par l'esprit d'équipe et le jeu collectif.",
      "choices": [
        {
          "text": "Si tu félicites chaleureusement Noé pour sa super prestation au jeu, rends-toi au 54.",
          "target": 54
        },
        {
          "text": "Si tu contestes rageusement un point en accusant Noé d'avoir triché, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu vas directement te ranger quand la cloche sonne pour l'après-midi, rends-toi au 38.",
          "target": 38
        }
      ],
      "isEnding": false
    },
    "48": {
      "id": 48,
      "text": "À la fin du cours de géographie, M. Moreau demande si un élève veut présenter le travail de son groupe. Tu lèves la main et proposes à Noé d'aller au tableau avec toi. Noé explique la légende de la carte avec aisance. La classe l'applaudit. Il retrouve toute sa confiance en lui.",
      "choices": [
        {
          "text": "Si tu profites de cet élan pour proposer un projet commun de classe à M. Moreau, rends-toi au 52.",
          "target": 52
        },
        {
          "text": "Si tu tires toute la couverture à toi en disant que c'est grâce à tes conseils qu'il a réussi, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu vas te rasseoir sagement en attendant la fin de la journée à 16h30, rends-toi au 55.",
          "target": 55
        }
      ],
      "isEnding": false
    },
    "49": {
      "id": 49,
      "text": "Pendant l'exercice, tu attrapes le feutre et tu écris toutes les réponses sans laisser Noé prendre la parole. « Laisse-faire, je vais plus vite que toi ! » lui lances-tu. Noé se tait et te regarde travailler. Tu as rendu le devoir à temps, mais tu n'as pas vraiment joué le jeu du travail en équipe.",
      "choices": [
        {
          "text": "Si tu te rattrapes avant d'aborder la dernière question pour écouter enfin l'avis de Noé, rends-toi au 38.",
          "target": 38
        },
        {
          "text": "Si tu bouscules Noé en lui reprochant de ne rien faire, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu rends la feuille sans y ajouter de commentaire et attends 16h30, rends-toi au 55.",
          "target": 55
        }
      ],
      "isEnding": false
    },
    "50": {
      "id": 50,
      "text": "Tu relances une pique inutile : « N'empêche, avec des histoires pareilles, on a failli tous perdre notre récréation par ta faute ! » Noé lève les yeux au ciel, déçu par ton manque d'empathie. L'ambiance redevient lourde autour de votre table et tes camarades préfèrent s'éloigner de toi.",
      "choices": [
        {
          "text": "Si tu ravales ta fierté et t'excuses sincèrement auprès de Noé pour tes paroles blessantes, rends-toi au 54.",
          "target": 54
        },
        {
          "text": "Si tu insistes lourdement en colportant un autre cancan sur le matériel de la classe, rends-toi au 56.",
          "target": 56
        },
        {
          "text": "Si tu te tais jusqu'à la sonnerie de fin des cours devant le portail, rends-toi au 55.",
          "target": 55
        }
      ],
      "isEnding": false
    },
    "51": {
      "id": 51,
      "text": "À la cantine, tu te moques de Noé avec tes copains pour te faire bien voir. Tu te sens sur le moment très populaire, mais en apercevant la silhouette triste de Noé qui mange tout seul son dessert, une mauvaise sensation te tord le ventre. Tu comprends que tu as agi par lâcheté.",
      "choices": [
        {
          "text": "Si tu décides de quitter ta table pour aller t'excuser auprès de Noé avant la fin du repas, rends-toi au 45.",
          "target": 45
        },
        {
          "text": "Si tu aggraves la moquerie en inventant une nouvelle blague de mauvais goût, rends-toi au 56.",
          "target": 56
        },
        {
          "text": "Si tu gardes le silence jusqu'à la fin de la pause sans savoir quoi faire, rends-toi au 53.",
          "target": 53
        }
      ],
      "isEnding": false
    },
    "52": {
      "id": 52,
      "text": "M. Moreau valide ton idée ! Toute la classe consacre la dernière heure d'arts plastiques à réaliser une grande affiche colorée intitulée : « Stopper les rumeurs, vérifier les faits ! ». Vous la collez fièrement dans le couloir principal de l'école. Tu sens que la journée se termine sur une note très positive.",
      "choices": [
        {
          "text": "Si tu proposes à Noé de vous retrouver demain matin pour continuer vos projets, rends-toi au 57.",
          "target": 57
        },
        {
          "text": "Si tu gribouilles un dessin moqueur dans un coin caché du panneau pour rigoler, rends-toi au 56.",
          "target": 56
        },
        {
          "text": "Si tu ramasses tranquillement tes affaires à la sonnerie de 16h30, rends-toi au 55.",
          "target": 55
        }
      ],
      "isEnding": false
    },
    "53": {
      "id": 53,
      "text": "L'après-midi s'écoule lentement. Tu es resté neutre, sans prendre parti, mais cette journée t'a beaucoup fait réfléchir. La rumeur s'est essoufflée d'elle-même, mais tu réalises qu'en restant passif, on laisse parfois souffrir les autres sans agir.",
      "choices": [
        {
          "text": "Si tu vas parler gentiment à Noé sur le chemin du retour pour lui souhaiter une bonne soirée, rends-toi au 57.",
          "target": 57
        },
        {
          "text": "Si tu décides de colporter ce soir au téléphone une autre rumeur sur un maître, rends-toi au 56.",
          "target": 56
        },
        {
          "text": "Si tu sors de l'école à 16h30 et rentres directement chez toi sans adresser un mot aux copains, rends-toi au 58.",
          "target": 58
        }
      ],
      "isEnding": false
    },
    "54": {
      "id": 54,
      "text": "En fin d'après-midi, la classe retrouve son calme habituel. Les tensions sont apaisées et Noé s'est fait de vrais repères parmi vous. Tu as appris qu'un mot bienveillant ou une simple vérification pouvait changer toute l'ambiance d'un groupe.",
      "choices": [
        {
          "text": "Si tu rejoins Noé devant le portail à 16h30 pour rentrer une partie du trajet ensemble, rends-toi au 57.",
          "target": 57
        },
        {
          "text": "Si tu cries à tout le monde que tu es le meilleur élève de la classe en les bousculant, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu vas récupérer ton cartable et salues M. Moreau avant de franchir la grille, rends-toi au 55.",
          "target": 55
        }
      ],
      "isEnding": false
    },
    "55": {
      "id": 55,
      "text": "La sonnerie de 16h30 retentit enfin dans tout l'établissement. Les rangs se forment et les élèves se dirigent vers la sortie. Devant le portail des Tilleuls, les parents et les animateurs attendent. Tu boucles ton cartable, prêt à conclure cette première journée mouvementée.",
      "choices": [
        {
          "text": "Si tu vas saluer chaleureusement Noé avant qu'il ne monte dans le bus, rends-toi au 57.",
          "target": 57
        },
        {
          "text": "Si tu bouscules Léo en sortant pour rigoler, rends-toi au 56.",
          "target": 56
        },
        {
          "text": "Si tu rentres directement chez toi pour raconter ta journée à tes parents, rends-toi au 58.",
          "target": 58
        }
      ],
      "isEnding": false
    },
    "56": {
      "id": 56,
      "text": "Tu n'as pas pu t'empêcher de relancer une moquerie ou un ragot avant de franchir le portail. En sortant de l'école, tu remarques que tes camarades s'éloignent de toi, méfiants. À trop vouloir amplifier les histoires ou blesser les autres, c'est toi qui te retrouves isolé ce soir.",
      "choices": [
        {
          "text": "Si tu te promets de changer radicalement d'attitude dès demain matin au Jour 2, rends-toi au 59.",
          "target": 59
        },
        {
          "text": "Si tu rejettes la faute sur les autres et t'énerves tout seul pendant le trajet du retour, rends-toi au 60.",
          "target": 60
        },
        {
          "text": "Si tu cours rattraper Noé pour lui présenter tes excuses sincères avant de rentrer, rends-toi au 57.",
          "target": 57
        }
      ],
      "isEnding": false
    },
    "57": {
      "id": 57,
      "text": "Devant la grille, tu rattrapes Noé. « À demain Noé ! Bonne soirée ! » Il se retourne avec un grand sourire : « Merci pour aujourd'hui, à demain ! » Tu rentres chez toi le cœur léger, fier d'avoir su être un camarade honnête, bienveillant et courageux face à la rumeur.",
      "choices": [
        {
          "text": "Si tu prépares tes affaires du lendemain avec enthousiasme, rends-toi au 61.",
          "target": 61
        },
        {
          "text": "Si tu penses déjà aux nouveaux mystères qui pourraient arriver à l'école, rends-toi au 62.",
          "target": 62
        },
        {
          "text": "Si tu discutes de la prévention des fausses nouvelles avec tes parents pendant le repas du soir, rends-toi au 63.",
          "target": 63
        }
      ],
      "isEnding": false
    },
    "58": {
      "id": 58,
      "text": "Tu rentres chez toi en marchant tranquillement. La journée a été mouvementée à l'école des Tilleuls, mais les choses sont rentrées dans l'ordre. En posant ton cartable dans ta chambre, tu repenses aux événements du matin et aux choix que tu as faits.",
      "choices": [
        {
          "text": "Si tu décides d'être plus actif et solidaire demain matin dès la sonnerie, rends-toi au 61.",
          "target": 61
        },
        {
          "text": "Si tu te plonges dans la lecture de tes devoirs pour oublier cette folle journée, rends-toi au 64.",
          "target": 64
        },
        {
          "text": "Si tu vas goûter dans la cuisine en racontant une version neutre à ta famille, rends-toi au 63.",
          "target": 63
        }
      ],
      "isEnding": false
    },
    "59": {
      "id": 59,
      "text": "En rentrant chez toi, tu prends du recul sur ton comportement. Tu réalises que colporter des ragots ou réagir brutalement n'apporte que des ennuis. Demain sera un autre jour, et tu es bien décidé à montrer une attitude beaucoup plus constructive.",
      "choices": [
        {
          "text": "Si tu rédiges une petite note d'excuses que tu donneras demain à Noé, rends-toi au 65.",
          "target": 65
        },
        {
          "text": "Si tu te couches tôt pour arriver en pleine forme et de bonne humeur le lendemain, rends-toi au 61.",
          "target": 61
        },
        {
          "text": "Si tu cherches comment faire plaisir à toute la classe lors de la prochaine récréation, rends-toi au 62.",
          "target": 62
        }
      ],
      "isEnding": false
    },
    "60": {
      "id": 60,
      "text": "Tu franchis la porte de ta maison de mauvaise humeur. En refusant de reconnaître tes torts et en ayant alimenté la rumeur, tu te sens amer. Heureusement, la nuit porte conseil et le Jour 2 te permettra peut-être de rattraper tes erreurs de la journée.",
      "choices": [
        {
          "text": "Si tu décides de faire un effort pour présenter tes excuses dès l'ouverture du portail demain, rends-toi au 65.",
          "target": 65
        },
        {
          "text": "Si tu t'isoles dans ta chambre sans parler à tes proches toute la soirée, rends-toi au 64.",
          "target": 64
        },
        {
          "text": "Si tu prévois de mener une enquête encore plus approfondie le lendemain matin, rends-toi au 62.",
          "target": 62
        }
      ],
      "isEnding": false
    },
    "61": {
      "id": 61,
      "text": "C'est le mardi matin. La grille de l'école des Tilleuls s'ouvre sous un beau soleil. Dès ton arrivée, tu aperçois Noé près du préau. Il te fait un grand signe de la main avec un large sourire. Tu le rejoins d'un pas joyeux, prêt à passer une excellente journée ensemble.",
      "choices": [
        {
          "text": "Si tu lui proposes de former une équipe imbattable pour la récréation, rends-toi au 66.",
          "target": 66
        },
        {
          "text": "Si tu lui demandes s'il a entendu les nouveaux chuchotements près du portail, rends-toi au 62.",
          "target": 62
        },
        {
          "text": "Si tu vas saluer M. Moreau avant d'entrer en classe, rends-toi au 63.",
          "target": 63
        }
      ],
      "isEnding": false
    },
    "62": {
      "id": 62,
      "text": "En entrant dans la cour ce mardi, une agitation étrange attire ton attention près des bancs. Sarah et Antoine discutent à voix basse d'un air inquiet. D'après eux, le voyage scolaire à la mer prévu au mois de mai serait totalement annulé par le directeur !",
      "choices": [
        {
          "text": "Si tu répètes cette information catastrophe à tout le rang, rends-toi au 67.",
          "target": 67
        },
        {
          "text": "Si tu suggères d'aller demander confirmation à M. Moreau avant de s'inquiéter, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu t'énerves contre Sarah en disant qu'elle raconte encore n'importe quoi, rends-toi au 69.",
          "target": 69
        }
      ],
      "isEnding": false
    },
    "63": {
      "id": 63,
      "text": "M. Moreau accueille les élèves en tapant dans les mains. « Ce matin, après nos réflexions d'hier, nous allons fabriquer notre propre journal de classe ! » Il explique que les journalistes doivent vérifier chaque fait avant d'écrire un article.",
      "choices": [
        {
          "text": "Si tu te proposes pour être le rédacteur en chef avec Noé, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu écris une fausse annonce rigolote pour tester si la classe va y croire, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu travailles en silence sur ton dessin d'illustration, rends-toi au 72.",
          "target": 72
        }
      ],
      "isEnding": false
    },
    "64": {
      "id": 64,
      "text": "Tu franchis la grille d'un pas plus calme. L'ambiance de la cour semble paisible. Lucas et Léo jouent ensemble sans tension, tandis que Noé discute tranquillement près de la bibliothèque de classe. Ton attitude prudente de la veille t'a évité bien des soucis.",
      "choices": [
        {
          "text": "Si tu t'approches doucement du groupe de Lucas pour écouter leur conversation, rends-toi au 73.",
          "target": 73
        },
        {
          "text": "Si tu rejoins Noé pour voir les livres qu'il a apportés, rends-toi au 66.",
          "target": 66
        },
        {
          "text": "Si tu demandes à Léo s'il a entendu la rumeur du voyage annulé, rends-toi au 62.",
          "target": 62
        }
      ],
      "isEnding": false
    },
    "65": {
      "id": 65,
      "text": "Avant d'entrer en classe, tu t'avances vers Noé. Tu lui tends un petit papier plié où tu as écrit quelques mots d'excuses sincères pour l'incompréhension de la veille. Noé lit ton mot, ému, puis te tend la main : « C'est oublié ! On repart à zéro. »",
      "choices": [
        {
          "text": "Si tu lui proposes de vous installer à la même table ce matin, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu vas raconter ton geste à Lucas pour lui prouver que tu es gentil, rends-toi au 74.",
          "target": 74
        },
        {
          "text": "Si tu rejoins calmement ta place en attendant le début du cours, rends-toi au 63.",
          "target": 63
        }
      ],
      "isEnding": false
    },
    "66": {
      "id": 66,
      "text": "Noé te montre son carnet de croquis passionnant. Vous inventez ensemble un jeu de piste pour la récréation du matin. Quelques camarades s'approchent curieux et demandent s'ils pourront participer. Une très belle dynamique s'installe dès le début de la journée.",
      "choices": [
        {
          "text": "Si tu acceptes tout le monde dans l'équipe sans exception, rends-toi au 75.",
          "target": 75
        },
        {
          "text": "Si tu refuses l'accès à Sarah en lui rappelant ses bavardages d'hier, rends-toi au 76.",
          "target": 76
        },
        {
          "text": "Si tu demandes à M. Moreau s'il peut vous prêter de la craie pour tracer le parcours, rends-toi au 77.",
          "target": 77
        }
      ],
      "isEnding": false
    },
    "67": {
      "id": 67,
      "text": "Sans attendre, tu te tournes vers tes voisins de rang : « Vous avez appris ? Le voyage à la mer est annulé ! C'est une catastrophe ! » En moins de trois minutes, la moitié des élèves s'agite et commence à se plaindre. L'ambiance devient anxieuse avant même la sonnerie.",
      "choices": [
        {
          "text": "Si tu réalises le désordre créé et essaies de rassurer tes camarades, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu ajoutes que c'est sûrement à cause du comportement de certains élèves, rends-toi au 78.",
          "target": 78
        },
        {
          "text": "Si tu te tais rapidement en voyant M. Moreau arriver d'un air sévère, rends-toi au 79.",
          "target": 79
        }
      ],
      "isEnding": false
    },
    "68": {
      "id": 68,
      "text": "Tu lèves la main dès l'installation en classe. « Monsieur, il y a une rumeur qui dit que le voyage à la mer est annulé... Est-ce que c'est vrai ? » M. Moreau sourit et secoue la tête : « Pas du tout ! La réservation est bien confirmée. Voilà une preuve de plus qu'il faut toujours vérifier ! »",
      "choices": [
        {
          "text": "Si tu proposes à la classe d'écrire un article sur le voyage dans le journal d'école, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu te moques de Sarah pour avoir cru à cette fausse nouvelle, rends-toi au 69.",
          "target": 69
        },
        {
          "text": "Si tu te concentres sur l'exercice d'écriture de la matinée, rends-toi au 72.",
          "target": 72
        }
      ],
      "isEnding": false
    },
    "69": {
      "id": 69,
      "text": "Tu tances Sarah brusquement : « Tu n'as pas retenu la leçon d'hier ? Tu inventes encore des mensonges pour faire du bruit ! » Sarah baisse les yeux, vexée et blessée par tes paroles dures. Le ton monte entre vous deux sous le préau.",
      "choices": [
        {
          "text": "Si tu t'excuses d'avoir été agressif et lui proposes d'aller vérifier ensemble, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu demandes aux autres élèves de ne plus parler à Sarah, rends-toi au 78.",
          "target": 78
        },
        {
          "text": "Si tu t'éloignes pour rejoindre Noé près de la porte, rends-toi au 66.",
          "target": 66
        }
      ],
      "isEnding": false
    },
    "70": {
      "id": 70,
      "text": "Avec Noé, vous formez un duo de rédacteurs très efficace. Vous décidez d'interroger M. Moreau et le directeur pour rédiger un article intitulé « Vrai ou Faux à l'école des Tilleuls ». La classe observe votre méthode de travail avec beaucoup d'intérêt.",
      "choices": [
        {
          "text": "Si tu invites Lucas à écrire la rubrique sportive avec vous, rends-toi au 80.",
          "target": 80
        },
        {
          "text": "Si tu refuses d'intégrer d'autres camarades pour garder le contrôle total, rends-toi au 81.",
          "target": 81
        },
        {
          "text": "Si tu poursuis la rédaction au calme jusqu'à la récréation, rends-toi au 82.",
          "target": 82
        }
      ],
      "isEnding": false
    },
    "71": {
      "id": 71,
      "text": "Pour rigoler, tu rédiges un faux paragraphe annonçant que la cantine servira des frites tous les jours de la semaine. Tu fais circuler ton mot sous les tables. Plusieurs élèves se mettent à sautiller de joie sans vérifier la source !",
      "choices": [
        {
          "text": "Si tu avoues immédiatement qu'il s'agissait d'un exemple amusant sur la crédulité, rends-toi au 83.",
          "target": 83
        },
        {
          "text": "Si tu laisses croire à la rumeur pour voir jusqu'où elle irait à la cantine, rends-toi au 84.",
          "target": 84
        },
        {
          "text": "Si tu te fais intercepter ton mot par M. Moreau, rends-toi au 79.",
          "target": 79
        }
      ],
      "isEnding": false
    },
    "72": {
      "id": 72,
      "text": "Appliqué, tu réalises l'en-tête du petit journal avec des crayons de couleur. Noé vient te donner un coup de main pour les lettres en relief. Votre travail est soigné et M. Moreau vous félicite pour votre sérieux et votre coopération.",
      "choices": [
        {
          "text": "Si tu proposes d'afficher la une du journal sur le panneau d'entrée, rends-toi au 80.",
          "target": 80
        },
        {
          "text": "Si tu te vantes devant Antoine d'avoir fait le plus beau dessin, rends-toi au 81.",
          "target": 81
        },
        {
          "text": "Si tu attends la sonnerie pour aller ranger ton matériel dans la boite collective, rends-toi au 82.",
          "target": 82
        }
      ],
      "isEnding": false
    },
    "73": {
      "id": 73,
      "text": "En t'approchant de Lucas et Léo, tu entends qu'ils discutent tranquillement du prochain entraînement de football. Lucas te salue : « Salut ! Tu viens jouer avec nous à la récréation de dix heures ? » Tout semble rentré dans l'ordre entre eux.",
      "choices": [
        {
          "text": "Si tu acceptes avec enthousiasme en invitant aussi Noé à vous rejoindre, rends-toi au 75.",
          "target": 75
        },
        {
          "text": "Si tu leur reparles de l'histoire de la carte de vendredi pour vérifier s'ils sont encore fâchés, rends-toi au 74.",
          "target": 74
        },
        {
          "text": "Si tu te ranges en silence avec le reste de la classe, rends-toi au 63.",
          "target": 63
        }
      ],
      "isEnding": false
    },
    "74": {
      "id": 74,
      "text": "Tu vas trouver Lucas dans le couloir : « Tu sais, j'ai aidé Noé et on s'est expliqué ! C'est moi qui ai arrangé les choses ! » Lucas hausse les épaules : « Oui, c'est bon, l'histoire est terminée maintenant... Pas besoin d'en faire des tonnes. » Tu réalises que chercher de la gloire n'est pas très utile.",
      "choices": [
        {
          "text": "Si tu rejoins ton bureau pour te concentrer sur l'atelier de classe, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu t'agaces contre Lucas en le trouvant ingrat, rends-toi au 81.",
          "target": 81
        },
        {
          "text": "Si tu t'installes sagement à ta table sans plus faire de commentaire, rends-toi au 72.",
          "target": 72
        }
      ],
      "isEnding": false
    },
    "75": {
      "id": 75,
      "text": "À dix heures, la cloche sonne la récréation ! Dans la cour, vous organisez une grande course aux indices. Noé, Lucas, Léo et plusieurs autres élèves jouent tous ensemble. L'ambiance est amicale et solidaire, exactement comme elle devrait toujours l'être.",
      "choices": [
        {
          "text": "Si tu proposes d'élargir le jeu à d'autres classes de la cour, rends-toi au 85.",
          "target": 85
        },
        {
          "text": "Si tu triches à la fin de la course pour absolument gagner la partie, rends-toi au 86.",
          "target": 86
        },
        {
          "text": "Si tu profites de la fin de récréation pour te ranger sagement à la cloche, rends-toi au 87.",
          "target": 87
        }
      ],
      "isEnding": false
    },
    "76": {
      "id": 76,
      "text": "Quand Sarah veut participer au jeu, tu lui barres le passage : « Non ! Tu as colporté des rumeurs hier, alors tu es exclue ! » Sarah s'éloigne, le visage sombre. Noé te touche le bras : « Tu sais, ce n'est pas sympa de faire aux autres ce qu'on m'a fait hier... »",
      "choices": [
        {
          "text": "Si tu écoutes le conseil de Noé et rattrapes Sarah pour l'intégrer au jeu, rends-toi au 75.",
          "target": 75
        },
        {
          "text": "Si tu t'énerves contre Noé en disant qu'il est trop gentil, rends-toi au 81.",
          "target": 81
        },
        {
          "text": "Si tu penses à cette remarque en marchant seul au bord de la cour, rends-toi au 87.",
          "target": 87
        }
      ],
      "isEnding": false
    },
    "77": {
      "id": 77,
      "text": "M. Moreau vous donne une boîte de craies de toutes les couleurs. Avec Noé et Lucas, vous dessinez un parcours d'obstacles géant dans la cour. Tous les enfants de la classe viennent s'y amuser à la récréation. C'est un franc succès !",
      "choices": [
        {
          "text": "Si tu organises un championnat du plus beau saut sur le parcours, rends-toi au 85.",
          "target": 85
        },
        {
          "text": "Si tu disputes un camarade qui a marché sur tes lignes à la craie, rends-toi au 86.",
          "target": 86
        },
        {
          "text": "Si tu aides à ranger le matériel de sport au coup de sifflet, rends-toi au 87.",
          "target": 87
        }
      ],
      "isEnding": false
    },
    "78": {
      "id": 78,
      "text": "Tu en remets une couche dans le rang : « De toute façon, certains dans la classe font n'importe quoi et c'est toujours la même chose ! » Tes paroles créent une dispute entre deux groupes d'élèves. M. Moreau intervient immédiatement pour réclamer un silence absolu.",
      "choices": [
        {
          "text": "Si tu t'excuses auprès du maître d'avoir attisé les tensions, rends-toi au 79.",
          "target": 79
        },
        {
          "text": "Si tu rejettes la responsabilité sur Antoine et Sarah, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu t'assieds sans rien dire pour éviter d'être puni, rends-toi au 72.",
          "target": 72
        }
      ],
      "isEnding": false
    },
    "79": {
      "id": 79,
      "text": "M. Moreau te fait venir à son bureau pendant que les autres s'installent. « Les mots ont un pouvoir, tu dois apprendre à les utiliser pour construire et non pour diviser. » Ses explications sont claires et bienveillantes. Tu comprends parfaitement ton erreur.",
      "choices": [
        {
          "text": "Si tu demandes à participer à la réalisation du journal de classe pour te racheter, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu boudes à ta table pendant tout l'exercice d'écriture, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu rejoins ton binôme sans faire de bruit, rends-toi au 72.",
          "target": 72
        }
      ],
      "isEnding": false
    },
    "80": {
      "id": 80,
      "text": "L'atelier journal de classe est une vraie réussite. M. Moreau félicite votre groupe pour l'article sur la vérification des rumeurs. La sonnerie de la fin de matinée retentit. C'est l'heure de se ranger pour la cantine !",
      "choices": [
        {
          "text": "Si tu te places dans le rang avec Noé et Lucas en rigolant, rends-toi au 89.",
          "target": 89
        },
        {
          "text": "Si tu t'empresses de doubler tout le monde pour arriver le premier au réfectoire, rends-toi au 86.",
          "target": 86
        },
        {
          "text": "Si tu attends calmement ton tour à la fin de la file, rends-toi au 90.",
          "target": 90
        }
      ],
      "isEnding": false
    },
    "81": {
      "id": 81,
      "text": "À force de vouloir imposer tes idées et de rejeter les autres, plus personne dans ton groupe ne souhaite travailler avec toi. Tu te retrouves seul à ton bureau à finir le dessin du journal, alors que les rires fusent autour des autres tables.",
      "choices": [
        {
          "text": "Si tu ravales ton orgueil et demandes gentiment à rejoindre Noé, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu râles ouvertement contre la classe auprès du maître, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu ranges tes affaires sans parler à personne jusqu'au déjeuner, rends-toi au 90.",
          "target": 90
        }
      ],
      "isEnding": false
    },
    "82": {
      "id": 82,
      "text": "La matinée de cours se termine dans la sérénité. L'exercice sur le journalisme et l'information a remis tout le monde sur de bons rails. En sortant en rang vers la cantine, la bonne humeur générale est évidente.",
      "choices": [
        {
          "text": "Si tu discutes du menu du midi avec tes camarades de rang, rends-toi au 89.",
          "target": 89
        },
        {
          "text": "Si tu lances une nouvelle rumeur absurde sur la cuisinière, rends-toi au 84.",
          "target": 84
        },
        {
          "text": "Si tu avances tranquillement dans la file jusqu'à la distribution des plateaux, rends-toi au 90.",
          "target": 90
        }
      ],
      "isEnding": false
    },
    "83": {
      "id": 83,
      "text": "Tu te lèves et révèles ton canular : « C'était une blague pour notre atelier journal ! Vous voyez comme c'est facile de croire une rumeur sur les frites ! » Tout le monde rigole, y compris M. Moreau qui souligne l'originalité de ton exemple.",
      "choices": [
        {
          "text": "Si tu aides à rassembler les articles de la classe pour la maquette finale, rends-toi au 80.",
          "target": 80
        },
        {
          "text": "Si tu te vantes d'être le plus malin de l'école, rends-toi au 81.",
          "target": 81
        },
        {
          "text": "Si tu vas te ranger pour le repas de midi dès la sonnerie, rends-toi au 89.",
          "target": 89
        }
      ],
      "isEnding": false
    },
    "84": {
      "id": 84,
      "text": "En arrivant devant le réfectoire, plusieurs élèves réclament des frites à grands cris ! Le personnel de cantine est complètement déboussolé. M. Moreau comprend d'où vient la fausse information et demande immédiatement à savoir qui a rédigé le mot.",
      "choices": [
        {
          "text": "Si tu avoues courageusement être l'auteur de la rumeur, rends-toi au 79.",
          "target": 79
        },
        {
          "text": "Si tu laisses accuser Antoine à ta place, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu prends ton plateau sans dire un mot et t'assieds dans un coin, rends-toi au 90.",
          "target": 90
        }
      ],
      "isEnding": false
    },
    "85": {
      "id": 85,
      "text": "La récréation du mardi matin se termine dans une ambiance joyeuse et inclusive. Tu as su rassembler tes camarades autour d'activités positives. Noé est parfaitement intégré et la rumeur de la veille appartient définitivement au passé.",
      "choices": [
        {
          "text": "Si tu invites tout ton groupe à manger à la grande table ronde de la cantine, rends-toi au 89.",
          "target": 89
        },
        {
          "text": "Si tu cherches la petite bête sur le classement de la course, rends-toi au 86.",
          "target": 86
        },
        {
          "text": "Si tu te ranges sereinement pour entrer en classe, rends-toi au 87.",
          "target": 87
        }
      ],
      "isEnding": false
    },
    "86": {
      "id": 86,
      "text": "Ta volonté d'avoir toujours raison provoque une prise de bec devant la porte de la classe. Léo et Lucas décident d'aller jouer ailleurs. En voulant trop imposer ta volonté, tu gâches un peu ce moment collectif.",
      "choices": [
        {
          "text": "Si tu reconnais ta maladresse et proposes de repartir sur de bonnes bases, rends-toi au 89.",
          "target": 89
        },
        {
          "text": "Si tu t'énerves et bouder pendant le repas, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu prends ton repas tranquillement sans créer d'histoire, rends-toi au 90.",
          "target": 90
        }
      ],
      "isEnding": false
    },
    "87": {
      "id": 87,
      "text": "La deuxième partie de la matinée se passe très bien. Vous apprenez comment les informations circulent sur Internet et dans la presse. M. Moreau est ravi de la participation de chacun.",
      "choices": [
        {
          "text": "Si tu te proposes pour exposer les panneaux lors de la pause du midi, rends-toi au 91.",
          "target": 91
        },
        {
          "text": "Si tu te précipites vers la cantine sans attendre le rang, rends-toi au 86.",
          "target": 86
        },
        {
          "text": "Si tu te joins à Noé et Lucas dans la file du réfectoire, rends-toi au 89.",
          "target": 89
        }
      ],
      "isEnding": false
    },
    "88": {
      "id": 88,
      "text": "En boudant et en rejetant la faute sur tes camarades, tu te retrouves isolé au bout du rang. La matinée s'achève dans une ambiance maussade pour toi. Tu réalises qu'une mauvaise attitude nuit d'abord à soi-même.",
      "choices": [
        {
          "text": "Si tu décides de mettre ta mauvaise humeur de côté et d'aller t'excuser auprès de la table de Noé, rends-toi au 89.",
          "target": 89
        },
        {
          "text": "Si tu continues à faire la tête tout seul pendant le repas de midi, rends-toi au 92.",
          "target": 92
        },
        {
          "text": "Si tu manges sans dire un mot en observant les autres, rends-toi au 90.",
          "target": 90
        }
      ],
      "isEnding": false
    },
    "89": {
      "id": 89,
      "text": "Au réfectoire, vous partagez une grande table lumineuse avec Noé, Lucas, Léo et Sarah. Les discussions sont vivantes, joyeuses et remplies de projets pour l'après-midi. La classe de CM1 a retenu la leçon sur les rumeurs et la camaraderie est de retour.",
      "choices": [
        {
          "text": "Si tu proposes un grand jeu collectif pour la longue récréation du midi, rends-toi au 93.",
          "target": 93
        },
        {
          "text": "Si tu relances une petite pique moqueuse sur le repas d'un camarade, rends-toi au 94.",
          "target": 94
        },
        {
          "text": "Si tu profites tranquillement de ton dessert avec tes amis, rends-toi au 95.",
          "target": 95
        }
      ],
      "isEnding": false
    },
    "90": {
      "id": 90,
      "text": "Tu prends ton plateau repas et t'assieds sagement à une table calme. Tu observes les échanges joyeux de tes camarades. La matinée du Jour 2 s'achève paisiblement, et tu te demandes ce que réserve la suite de la journée aux Tilleuls.",
      "choices": [
        {
          "text": "Si tu décides de rejoindre le groupe de Noé pour la récréation de l'après-midi, rends-toi au 93.",
          "target": 93
        },
        {
          "text": "Si tu pars explorer seul le coin lecture après le repas, rends-toi au 96.",
          "target": 96
        },
        {
          "text": "Si tu attends la sonnerie du début de l'après-midi au soleil, rends-toi au 95.",
          "target": 95
        }
      ],
      "isEnding": false
    },
    "91": {
      "id": 91,
      "text": "Pendant la pause du midi, tu installes les panneaux du journal de classe sous le préau avec l'accord de Marc le surveillant. Plusieurs élèves d'autres classes s'approchent intrigués. Tu leur expliques avec assurance la règle d'or : toujours vérifier une information auprès de la personne concernée avant de la répéter à ses copains.",
      "choices": [
        {
          "text": "Si tu proposes aux délégués de CM2 de faire visiter l'exposition à toute l'école, rends-toi au 97.",
          "target": 97
        },
        {
          "text": "Si tu te vantes d'être le seul élève capable de donner des leçons de morale, rends-toi au 94.",
          "target": 94
        },
        {
          "text": "Si tu rejoins Noé et Lucas pour participer au grand jeu collectif de la récréation, rends-toi au 93.",
          "target": 93
        }
      ],
      "isEnding": false
    },
    "92": {
      "id": 92,
      "text": "Isolé au bout d'une table du réfectoire, tu manges ton hachis parmentier en silence. En regardant vers le centre de la salle, tu aperçois la table de Noé, Lucas, Léo et Sarah animée de rires joyeux. En t'enfermant dans ton mauvais caractère, tu t'es privé d'un moment très chaleureux.",
      "choices": [
        {
          "text": "Si tu ravales enfin ta fierté et viens t'asseoir avec eux pour prendre le dessert, rends-toi au 93.",
          "target": 93
        },
        {
          "text": "Si tu pars te réfugier au calme dans le coin bibliothèque pour la fin de la pause, rends-toi au 96.",
          "target": 96
        },
        {
          "text": "Si tu boudes encore plus fort en jetant des regards noirs aux autres tables, rends-toi au 98.",
          "target": 98
        }
      ],
      "isEnding": false
    },
    "93": {
      "id": 93,
      "text": "Dans la cour ensoleillée, vous lancez une immense partie de chat perché collective. Noé court très vite et évite toutes les attaques avec agilité. Lucas, Léo et Sarah rigolent de bon cœur. L'entraide et la bonne humeur ont totalement effacé le malaise de la veille.",
      "choices": [
        {
          "text": "Si tu proposes d'inviter les élèves solitaires du banc à vous rejoindre dans le jeu, rends-toi au 99.",
          "target": 99
        },
        {
          "text": "Si tu pousses brutalement Léo pour éviter de te faire attraper, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu profites des derniers instants de la pause pour discuter tranquillement au soleil, rends-toi au 95.",
          "target": 95
        }
      ],
      "isEnding": false
    },
    "94": {
      "id": 94,
      "text": "Au réfectoire, tu lances d'un ton moqueur : « Dis donc Antoine, avec ton assiette débordante, on dirait un ogre ! » Le silence s'installe instantanément à la table. Antoine baisse les yeux, embarrassé. Tu te rends compte que ta blague déplacée gâche l'ambiance amicale.",
      "choices": [
        {
          "text": "Si tu t'excuses tout de suite auprès d'Antoine pour cette pique inutile, rends-toi au 93.",
          "target": 93
        },
        {
          "text": "Si tu insistes en disant que personne n'a d'humour dans cette école, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu laisses le repas se finir sans plus ajouter un mot, rends-toi au 95.",
          "target": 95
        }
      ],
      "isEnding": false
    },
    "95": {
      "id": 95,
      "text": "Après un repas agréable, tu te poses sur le banc en bois face au grand marronnier. La douce chaleur du soleil de début d'après-midi est réconfortante. Noé s'assoit près de toi : « C'est vraiment une super journée ! » Tu apprécies ce moment de calme avant la sonnerie.",
      "choices": [
        {
          "text": "Si tu lui demandes ce qu'il aimerait présenter durant le cours d'EMC de l'après-midi, rends-toi au 100.",
          "target": 100
        },
        {
          "text": "Si tu te lèves brusquement pour aller embêter les CM2 au terrain de basket, rends-toi au 101.",
          "target": 101
        },
        {
          "text": "Si tu pars rejoindre le rang dès le premier coup de sifflet des surveillants, rends-toi au 102.",
          "target": 102
        }
      ],
      "isEnding": false
    },
    "96": {
      "id": 96,
      "text": "Dans la chaleur calme de la bibliothèque, tu feuillettes un livre documentaire sur la liberté de la presse. Tu découvres à quel point la déformation des faits peut créer des injustices. Cette lecture passionnante te donne de précieuses idées pour la classe.",
      "choices": [
        {
          "text": "Si tu notes des citations inspirantes sur ton carnet pour les partager avec M. Moreau, rends-toi au 100.",
          "target": 100
        },
        {
          "text": "Si tu caches le livre derrière une étagère pour que personne d'autre ne le lise, rends-toi au 101.",
          "target": 101
        },
        {
          "text": "Si tu ranges soigneusement ton ouvrage et te diriges vers la classe à la sonnerie, rends-toi au 102.",
          "target": 102
        }
      ],
      "isEnding": false
    },
    "97": {
      "id": 97,
      "text": "Les deux délégués de la classe de CM2 acceptent ton invitation avec enthousiasme ! Ils font venir leurs camarades pour découvrir l'exposition. Tu expliques l'expérience du journal avec passion, et toute l'école félicite la classe de CM1 pour cette belle initiative anti-rumeurs.",
      "choices": [
        {
          "text": "Si tu proposes à M. Moreau d'animer un atelier collectif d'écriture pour la classe, rends-toi au 100.",
          "target": 100
        },
        {
          "text": "Si tu interromps les explications des CM2 pour exiger qu'on t'applaudisse toi seul, rends-toi au 101.",
          "target": 101
        },
        {
          "text": "Si tu te réjouis du succès de l'exposition et rejoins ton rang à la sonnerie, rends-toi au 102.",
          "target": 102
        }
      ],
      "isEnding": false
    },
    "98": {
      "id": 98,
      "text": "À force d'adopter une posture agressive et boudeuse, tu finis par agacer même tes amis les plus proches. Dans le rang de 13h30, personne n'ose te parler. En voulant imposer ta colère, tu t'es complètement isolé du groupe.",
      "choices": [
        {
          "text": "Si tu profites de l'installation en classe pour demander pardon à tes voisins, rends-toi au 102.",
          "target": 102
        },
        {
          "text": "Si tu donnes un coup de pied dans le cartable de Léo en passant à côté de lui, rends-toi au 103.",
          "target": 103
        },
        {
          "text": "Si tu restes silencieux à ta table en écoutant les consignes du maître, rends-toi au 104.",
          "target": 104
        }
      ],
      "isEnding": false
    },
    "99": {
      "id": 99,
      "text": "Tu cours vers le banc en pierre où deux élèves de CE2 regardent les autres d'un air timide. « Venez jouer avec nous ! » leur lances-tu. Leurs visages s'illuminent d'un grand sourire. La partie de chat perché devient encore plus animée et festive grâce à ton attention bienveillante.",
      "choices": [
        {
          "text": "Si tu félicites Noé pour avoir fait participer les nouveaux venus avec douceur, rends-toi au 95.",
          "target": 95
        },
        {
          "text": "Si tu triches honteusement pour éliminer les CE2 dès le premier tour, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu rejoins calmement la file de classe au coup de sifflet du surveillant, rends-toi au 102.",
          "target": 102
        }
      ],
      "isEnding": false
    },
    "100": {
      "id": 100,
      "text": "De retour en classe à 13h30, M. Moreau s'installe devant le tableau. « Cet après-midi, nous faisons une séance d'Enseignement Moral et Civique consacrée au jeu du téléphone arabe. » Il invite ton groupe à introduire la séance grâce à vos réflexions sur les rumeurs.",
      "choices": [
        {
          "text": "Si tu proposes d'animer l'expérience du chuchotement en chaîne devant la classe, rends-toi au 105.",
          "target": 105
        },
        {
          "text": "Si tu profites de ta prise de parole pour faire une moquerie déplacée sur Sarah, rends-toi au 103.",
          "target": 103
        },
        {
          "text": "Si tu t'assieds gentiment aux côtés de Noé pour écouter le maître, rends-toi au 104.",
          "target": 104
        }
      ],
      "isEnding": false
    },
    "101": {
      "id": 101,
      "text": "En provoquant les grands du CM2 ou en perturbant la cour, tu te fais immédiatement rappeler à l'ordre par Marc le surveillant. « Attention à ton attitude ! La bienveillance concerne tout le monde aux Tilleuls ! » Tu regagnes le rang d'un pas embarrassé.",
      "choices": [
        {
          "text": "Si tu t'excuses auprès de Marc avant de monter en classe, rends-toi au 102.",
          "target": 102
        },
        {
          "text": "Si tu contestes la punition en rouspétant très fort dans les escaliers, rends-toi au 103.",
          "target": 103
        },
        {
          "text": "Si tu t'installes en silence à ta table de travail, rends-toi au 104.",
          "target": 104
        }
      ],
      "isEnding": false
    },
    "102": {
      "id": 102,
      "text": "La classe de CM1 s'installe sereinement. M. Moreau félicite les élèves pour leur bonne tenue durant la pause du midi. Il distribue des feuilles colorées pour rédiger ensemble la « Charte du bon camarade », un document qui servira à toute l'école.",
      "choices": [
        {
          "text": "Si tu donnes des idées très pertinentes sur le respect des histoires d'autrui, rends-toi au 105.",
          "target": 105
        },
        {
          "text": "Si tu dessines des gribouillages irrespectueux au dos de la charte de ton voisin, rends-toi au 103.",
          "target": 103
        },
        {
          "text": "Si tu écris soigneusement les articles de la charte sur ton cahier d'EMC, rends-toi au 104.",
          "target": 104
        }
      ],
      "isEnding": false
    },
    "103": {
      "id": 103,
      "text": "M. Moreau fronce les sourcils devant ton comportement perturbateur. « Ton attitude manque cruellement de respect envers la classe. Tu vas passer la fin de l'après-midi à réfléchir au sens de la responsabilité. » La honte te gagne devant le regard déçu de tes camarades.",
      "choices": [
        {
          "text": "Si tu demandes sincèrement pardon au maître et à la classe pour ta conduite, rends-toi au 104.",
          "target": 104
        },
        {
          "text": "Si tu boudes violemment en croisant les bras jusqu'à la fin de la journée, rends-toi au 106.",
          "target": 106
        },
        {
          "text": "Si tu écris une lettre de réconciliation pour la lire le lendemain matin, rends-toi au 107.",
          "target": 107
        }
      ],
      "isEnding": false
    },
    "104": {
      "id": 104,
      "text": "Pendant l'atelier d'EMC, vous rédigez des phrases claires pour bannir les ragots de la cour. Noé propose la règle suivante : « Avant de répéter une phrase, demande-toi si elle est vraie, gentille et utile ». Toute la classe applaudit cette formidable idée.",
      "choices": [
        {
          "text": "Si tu félicites chaleureusement Noé pour sa proposition brillante, rends-toi au 105.",
          "target": 105
        },
        {
          "text": "Si tu bouscules Noé en sortant pour être le premier devant l'armoire de rangement, rends-toi au 103.",
          "target": 103
        },
        {
          "text": "Si tu recopies cette règle d'or sur ton agenda pour ne jamais l'oublier, rends-toi au 108.",
          "target": 108
        }
      ],
      "isEnding": false
    },
    "105": {
      "id": 105,
      "text": "Pour illustrer la déformation des propos, M. Moreau lance l'expérience du téléphone arabe. Il chuchote une phrase complexe à Sarah, qui la répète à Lucas... Arrivée en fin de chaîne chez Léo, la phrase n'a plus aucun sens ! La démonstration amuse follement les élèves tout en les éclairant.",
      "choices": [
        {
          "text": "Si tu expliques devant tout le monde la leçon qu'il faut en tirer sur les rumeurs, rends-toi au 108.",
          "target": 108
        },
        {
          "text": "Si tu déformes volontairement le message avec des insultes pour faire rire, rends-toi au 103.",
          "target": 103
        },
        {
          "text": "Si tu écoutes attentivement la synthèse de M. Moreau à la fin de la séance, rends-toi au 109.",
          "target": 109
        }
      ],
      "isEnding": false
    },
    "106": {
      "id": 106,
      "text": "La sonnerie de 16h30 retentit enfin. Tu quittes la classe la tête basse, sans dire au revoir à personne. Le trajet vers ta maison se fait dans une ambiance lourde. Tu regrettes amèrement d'avoir gâché ton après-midi par entêtement.",
      "choices": [
        {
          "text": "Si tu décides de rédiger un mot d'excuses cette nuit pour tout réparer mercredi, rends-toi au 107.",
          "target": 107
        },
        {
          "text": "Si tu accuses la terre entière d'être injuste avec toi pendant le repas du soir, rends-toi au 110.",
          "target": 110
        },
        {
          "text": "Si tu prépares ton cartable en silence et te couches tôt pour repartir à zéro, rends-toi au 111.",
          "target": 111
        }
      ],
      "isEnding": false
    },
    "107": {
      "id": 107,
      "text": "Mardi soir dans ta chambre, tu prends ton plus beau papier à lettres et tu écris une gentille note d'excuses pour M. Moreau et tes camarades. Tu te sens libéré d'un grand poids. Tu es prêt à afficher une attitude exemplaire dès demain matin.",
      "choices": [
        {
          "text": "Si tu prévois d'offrir un joli dessin de réconciliation à Noé à l'ouverture de la grille, rends-toi au 112.",
          "target": 112
        },
        {
          "text": "Si tu déchires ton mot au dernier moment par fierté avant de dormir, rends-toi au 110.",
          "target": 110
        },
        {
          "text": "Si tu t'endors paisiblement avec la résolution d'être un camarade parfait, rends-toi au 111.",
          "target": 111
        }
      ],
      "isEnding": false
    },
    "108": {
      "id": 108,
      "text": "À 16h30, la journée s'achève dans l'enthousiasme général. M. Moreau félicite chaleureusement la classe pour son travail sur la charte et le journal. En franchissant le portail, Noé, Lucas et Léo te font de grands signes d'amitié.",
      "choices": [
        {
          "text": "Si tu donnes rendez-vous à tes copains devant l'école dès 8h20 le mercredi, rends-toi au 112.",
          "target": 112
        },
        {
          "text": "Si tu pousses Léo dans le bus de ramassage pour faire une blague lourde, rends-toi au 106.",
          "target": 106
        },
        {
          "text": "Si tu rentres chez toi d'un pas joyeux pour raconter cette belle journée à ta famille, rends-toi au 113.",
          "target": 113
        }
      ],
      "isEnding": false
    },
    "109": {
      "id": 109,
      "text": "En sortant de l'école des Tilleuls ce mardi après-midi, tu te sens grandir. Tu as compris qu'une rumeur peut faire beaucoup de mal, mais qu'avec du courage et de la bienveillance, on peut transformer la classe en un endroit formidable.",
      "choices": [
        {
          "text": "Si tu prépares tes affaires de classe avec une immense fierté pour mercredi, rends-toi au 112.",
          "target": 112
        },
        {
          "text": "Si tu laisses tes devoirs traîner par terre en râlant contre l'école, rends-toi au 110.",
          "target": 110
        },
        {
          "text": "Si tu profites de ton repas du soir pour expliquer les trois filtres de la rumeur à tes parents, rends-toi au 113.",
          "target": 113
        }
      ],
      "isEnding": false
    },
    "110": {
      "id": 110,
      "text": "Tu passes une mauvaise soirée à ruminer tes erreurs. Tu te sens fâché contre tout le monde, alors que c'est ton propre comportement qui a causé ces problèmes. Le réveil du mercredi matin s'annonce plutôt difficile si tu ne changes pas d'attitude.",
      "choices": [
        {
          "text": "Si tu décides de sourire et de t'excuser dès ton arrivée au portail le mercredi, rends-toi au 114.",
          "target": 114
        },
        {
          "text": "Si tu t'enfermes dans ta colère en bousculant les élèves à l'entrée de l'école, rends-toi au 115.",
          "target": 115
        },
        {
          "text": "Si tu marches à l'écart en attendant que la première heure de cours commence, rends-toi au 116.",
          "target": 116
        }
      ],
      "isEnding": false
    },
    "111": {
      "id": 111,
      "text": "Mercredi matin (Jour 3). Le soleil se lève sur l'École primaire des Tilleuls. La fraîcheur matinale est agréable. En t'approchant de la grille, tu aperçois une grande affiche plastifiée collée sur le panneau d'accueil : c'est la Charte du bon camarade rédigée hier !",
      "choices": [
        {
          "text": "Si tu cours rejoindre Noé et Lucas qui admirent l'affiche sous le préau, rends-toi au 114.",
          "target": 114
        },
        {
          "text": "Si tu ajoutes une trace de marqueur sur l'affiche pour défigurer le travail collectif, rends-toi au 115.",
          "target": 115
        },
        {
          "text": "Si tu lis calmement le texte de la charte avant d'entrer en classe, rends-toi au 116.",
          "target": 116
        }
      ],
      "isEnding": false
    },
    "112": {
      "id": 112,
      "text": "C'est le mercredi matin ! Tu arrives devant l'école des Tilleuls avec une énergie formidable. Noé t'attend près du portail et te fait un joyeux signe de la main. Il te montre son tout nouveau cahier de dessin. L'amitié qui vous lie désormais est solide et sincère.",
      "choices": [
        {
          "text": "Si tu lui proposes d'accueillir ensemble le nouvel élève qui doit arriver aujourd'hui, rends-toi au 117.",
          "target": 117
        },
        {
          "text": "Si tu te moques du dessin de Noé en disant qu'il ressemble à un gribouillage de CP, rends-toi au 115.",
          "target": 115
        },
        {
          "text": "Si tu avances d'un pas serein vers le rang de la classe de CM1, rends-toi au 116.",
          "target": 116
        }
      ],
      "isEnding": false
    },
    "113": {
      "id": 113,
      "text": "Après une excellente nuit de sommeil, tu te réveilles en pleine forme ce mercredi matin. Sur le chemin de l'école, tu croises Sarah et Lucas qui te saluent chaleureusement. L'atmosphère aux Tilleuls est devenue incroyablement saine et agréable.",
      "choices": [
        {
          "text": "Si tu suggères d'aller présenter le journal de classe aux élèves de CE2 dès la récréation, rends-toi au 117.",
          "target": 117
        },
        {
          "text": "Si tu fais un croc-en-jambe à Sarah pour rigoler avant la sonnerie, rends-toi au 115.",
          "target": 115
        },
        {
          "text": "Si tu te ranges tranquillement avec tes camarades devant la porte de la classe, rends-toi au 116.",
          "target": 116
        }
      ],
      "isEnding": false
    },
    "114": {
      "id": 114,
      "text": "Sous le préau ce mercredi matin, tu rejoins Noé, Lucas et Léo. Tu leur donnes la note ou les mots d'excuses préparés la veille. Les trois camarades te sourient chaleureusement : « C'est super de ta part ! L'important, c'est qu'on soit tous copains maintenant. »",
      "choices": [
        {
          "text": "Si tu proposes d'organiser un comité d'accueil pour les nouveaux arrivants de l'école, rends-toi au 117.",
          "target": 117
        },
        {
          "text": "Si tu gâches ce moment en prétendant que c'était eux les vrais coupables, rends-toi au 115.",
          "target": 115
        },
        {
          "text": "Si tu te diriges d'un pas calme vers la salle de classe avec le groupe, rends-toi au 116.",
          "target": 116
        }
      ],
      "isEnding": false
    },
    "115": {
      "id": 115,
      "text": "À cause de ton attitude agressive ou provocatrice ce mercredi matin, M. Moreau t'interpelle avant même l'entrée en classe. « Je vois que tu n'as toujours pas compris le sens du mot respect. Tu vas passer la première heure de cours isolé au bureau de la direction. »",
      "choices": [
        {
          "text": "Si tu exprimes des regrets sincères auprès du directeur et demandes une dernière chance, rends-toi au 116.",
          "target": 116
        },
        {
          "text": "Si tu réponds insolemment en claquant la porte du bureau, rends-toi au 118.",
          "target": 118
        },
        {
          "text": "Si tu écris une réflexion personnelle sur le respect des autres durant l'heure de retenue, rends-toi au 119.",
          "target": 119
        }
      ],
      "isEnding": false
    },
    "116": {
      "id": 116,
      "text": "Ce mercredi matin à 8h30, M. Moreau fait entrer les élèves en classe. Il s'assoit à son bureau avec un grand sourire. « Ce matin, nous accueillons une classe voisine de CM2 qui vient découvrir notre journal anti-rumeurs et notre charte du respect ! »",
      "choices": [
        {
          "text": "Si tu te portes volontaire pour lire à haute voix le premier article du journal devant les invités, rends-toi au 120.",
          "target": 120
        },
        {
          "text": "Si tu grimaces derrière le dos des élèves de CM2 pour les perturber, rends-toi au 118.",
          "target": 118
        },
        {
          "text": "Si tu suis la présentation avec attention depuis ton bureau, rends-toi au 119.",
          "target": 119
        }
      ],
      "isEnding": false
    },
    "117": {
      "id": 117,
      "text": "En compagnie de Noé, tu t'avances vers la classe de CM2 en visite dans votre couloir. Avec beaucoup d'aisance et d'enthousiasme, vous leur présentez les panneaux d'affichage. Les CM2 sont impressionnés par la qualité de votre travail et posent plein de questions.",
      "choices": [
        {
          "text": "Si tu laisses Noé expliquer la conclusion avec brio sous les applaudissements, rends-toi au 120.",
          "target": 120
        },
        {
          "text": "Si tu coupais brutalement la parole à Noé pour prétendre que tu as tout fait tout seul, rends-toi au 118.",
          "target": 118
        },
        {
          "text": "Si tu invites la classe de CM2 à participer à la ronde du grand jeu de récréation, rends-toi au 119.",
          "target": 119
        }
      ],
      "isEnding": false
    },
    "118": {
      "id": 118,
      "text": "En restant bloqué dans ton insolence ou ton attitude égocentrique, tu gâches cette belle matinée du mercredi. Le directeur convoque tes parents pour une réunion importante sur ton comportement aux Tilleuls. Tu réalises qu'il est grand temps de réagir.",
      "choices": [
        {
          "text": "Si tu promets fermement de changer d'attitude et de faire tes preuves dès la récréation, rends-toi au 121.",
          "target": 121
        },
        {
          "text": "Si tu t'enfermes dans ta rancœur et t'isoles dans la cour, rends-toi au 122.",
          "target": 122
        },
        {
          "text": "Si tu écoutes sagement les conseils bienveillants de M. Moreau avant la fin de matinée, rends-toi au 123.",
          "target": 123
        }
      ],
      "isEnding": false
    },
    "119": {
      "id": 119,
      "text": "La séance de présentation du mercredi matin se déroule merveilleusement bien. La classe de CM2 félicite l'ensemble du groupe de CM1 pour cet atelier anti-rumeurs. L'ambiance aux Tilleuls n'a jamais été aussi sereine et fraternelle.",
      "choices": [
        {
          "text": "Si tu félicites Noé et Lucas pour cette formidable réussite collective, rends-toi au 121.",
          "target": 121
        },
        {
          "text": "Si tu fais une pique moqueuse à Sarah sur sa voix lors de la lecture, rends-toi au 122.",
          "target": 122
        },
        {
          "text": "Si tu te prépares sagement pour la récréation de dix heures, rends-toi au 123.",
          "target": 123
        }
      ],
      "isEnding": false
    },
    "120": {
      "id": 120,
      "text": "Sous les yeux émerveillés des invités et de M. Moreau, tu lis à haute voix la conclusion du journal de classe. Tes mots vibrants sur l'amitié, le respect et la vérité provoquent un tonnerre d'applaudissements sous le préau des Tilleuls. Tu éprouves une fierté immense !",
      "choices": [
        {
          "text": "Si tu invites toute la classe et les invités à fêter cet événement par un grand jeu de récréation, rends-toi au 121.",
          "target": 121
        },
        {
          "text": "Si tu te vantes devant tout le monde d'être le meilleur orateur de toute l'école, rends-toi au 122.",
          "target": 122
        },
        {
          "text": "Si tu savoures ce moment de bonheur avec Noé et tes amis au soleil, rends-toi au 123.",
          "target": 123
        }
      ],
      "isEnding": false
    },
    "121": {
      "id": 121,
      "text": "Après les applaudissements pour la présentation du journal, Noé, Lucas et toi vous regroupez près de la grille avec un grand sourire. « C'était super de présenter ça tous ensemble ! » s'exclame Lucas. La récréation de dix heures s'annonce géniale.",
      "choices": [
        {
          "text": "Si tu proposes d'organiser un grand jeu collectif où personne ne sera exclu, rends-toi au 124.",
          "target": 124
        },
        {
          "text": "Si tu préfères discuter calmement sur le banc des 3 filtres pour préparer le prochain projet, rends-toi au 125.",
          "target": 125
        },
        {
          "text": "Si tu te vantes devant les autres classes en disant que c'est grâce à toi que l'exposé a réussi, rends-toi au 126.",
          "target": 126
        }
      ],
      "isEnding": false
    },
    "122": {
      "id": 122,
      "text": "Seul près du préau pendant que les autres s'amusent, tu repenses à ta pique moqueuse ou à ton isolement. Noé passe à côté de toi pour aller chercher un ballon. La situation est encore rattrapable si tu fais un effort.",
      "choices": [
        {
          "text": "Si tu ravales ta fierté et approches Noé pour t'excuser franchement, rends-toi au 125.",
          "target": 125
        },
        {
          "text": "Si tu boudes dans ton coin et murmures des méchancetés sur la classe, rends-toi au 127.",
          "target": 127
        },
        {
          "text": "Si tu interpelles brutalement Lucas en lui reprochant de ne pas t'avoir soutenu, rends-toi au 126.",
          "target": 126
        }
      ],
      "isEnding": false
    },
    "123": {
      "id": 123,
      "text": "En sortant de classe après les conseils bienveillants de M. Moreau, tu respires l'air frais de la cour. Tu comprends que chaque mot compte. En regardant autour de toi, tu vois la classe divisée en plusieurs petits groupes.",
      "choices": [
        {
          "text": "Si tu décides de rassembler tout le monde autour d'une activité positive, rends-toi au 124.",
          "target": 124
        },
        {
          "text": "Si tu vas réexpliquer calmement la règle des 3 filtres aux élèves qui chuchotent, rends-toi au 128.",
          "target": 128
        },
        {
          "text": "Si tu te laisses tenter par un nouveau ragot qui circule près de la cantine, rends-toi au 127.",
          "target": 127
        }
      ],
      "isEnding": false
    },
    "124": {
      "id": 124,
      "text": "Au centre de la cour, tu lances une grande balle aux prisonniers avec Noé, Sarah, Lucas et Léo. Le jeu se déroule dans une ambiance joyeuse et équitable. Tu veilles à ce que chaque élève, même le plus timide, reçoive la balle.",
      "choices": [
        {
          "text": "Si tu invites le nouvel élève de CE2 qui regarde le jeu avec hésitation, rends-toi au 129.",
          "target": 129
        },
        {
          "text": "Si tu contestes violemment un point contre Sarah pour gagner à tout prix, rends-toi au 130.",
          "target": 130
        },
        {
          "text": "Si tu te félicites du climat d'amitié rétabli jusqu'à la sonnerie finale, rends-toi au 128.",
          "target": 128
        }
      ],
      "isEnding": false
    },
    "125": {
      "id": 125,
      "text": "Assis sous le grand marronnier, tu discutes avec Noé. Vous repensez aux moments difficiles du début de semaine et à la façon dont les vérités ont tout changé. Noé te remercie d'avoir été un vrai camarade.",
      "choices": [
        {
          "text": "Si tu lui promets de toujours appliquer les 3 filtres (« vrai, gentil, utile »), rends-toi au 129.",
          "target": 129
        },
        {
          "text": "Si tu gâches ce moment en rappelant que certains avaient douté de lui, rends-toi au 130.",
          "target": 130
        },
        {
          "text": "Si tu proposes d'écrire une promesse d'amitié sur votre cahier d'EMC, rends-toi au 131.",
          "target": 131
        }
      ],
      "isEnding": false
    },
    "126": {
      "id": 126,
      "text": "Tu hausser le ton devant le préau : « Sans moi, personne n'aurait tiré cette histoire au clair ! C'est moi le héros de la classe ! » Lucas secoue la tête et s'éloigne, tandis que Noé semble gêné par tes vantardises.",
      "choices": [
        {
          "text": "Si tu t'excuses de ton arrogance et proposes de partager la victoire avec tous, rends-toi au 130.",
          "target": 130
        },
        {
          "text": "Si tu t'énerves encore plus en traitant tes camarades d'ingrats, rends-toi au 132.",
          "target": 132
        },
        {
          "text": "Si tu t'isoles au fond du préau en boudant tout seul, rends-toi au 127.",
          "target": 127
        }
      ],
      "isEnding": false
    },
    "127": {
      "id": 127,
      "text": "Près du grillage, tu écoutes deux élèves colporter une rumeur sur le maître. Au lieu de stopper le ragot, tu hoches la tête et ajoutes un détail inventé. En quelques minutes, la fausse information fait le tour de la cour.",
      "choices": [
        {
          "text": "Si tu réalises la gravité de ton acte et cours avouer au maître avant que ça ne dégénère, rends-toi au 132.",
          "target": 132
        },
        {
          "text": "Si tu laisses la rumeur se propager sans te soucier des conséquences, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu accuses Noé d'avoir lancé l'histoire pour te défausser, rends-toi au 134.",
          "target": 134
        }
      ],
      "isEnding": false
    },
    "128": {
      "id": 128,
      "text": "M. Moreau rassemble la classe sous le préau pour le bilan de fin de semaine. « Je suis fier de la façon dont nous avons appris à surmonter les fausses nouvelles », annonce-t-il. Tu te sens pleinement investi dans cette démarche civique.",
      "choices": [
        {
          "text": "Si tu demandes la parole pour partager la règle des 3 filtres avec toute l'école, rends-toi au 131.",
          "target": 131
        },
        {
          "text": "Si tu profites du rassemblement pour faire une réflexion désagréable à Sarah, rends-toi au 132.",
          "target": 132
        },
        {
          "text": "Si tu restes en retrait sans participer au bilan collectif, rends-toi au 135.",
          "target": 135
        }
      ],
      "isEnding": false
    },
    "129": {
      "id": 129,
      "text": "L'ambiance à l'École des Tilleuls est désormais radieuse. Grâce aux efforts collectifs, la confiance règne à nouveau entre tous les élèves de CM1. Noé se sent totalement accepté et apprécié de tous.",
      "choices": [
        {
          "text": "Si tu conclus la semaine en fêtant cette belle amitié avec toute la classe, rends-toi au 131.",
          "target": 131
        },
        {
          "text": "Si tu laisses une petite querelle gâcher ce beau résultat au dernier moment, rends-toi au 130.",
          "target": 130
        },
        {
          "text": "Si tu te félicites d'avoir appris à vérifier chaque fait avant de parler, rends-toi au 135.",
          "target": 135
        }
      ],
      "isEnding": false
    },
    "130": {
      "id": 130,
      "text": "Une dispute éclate au sujet du rangement du matériel d'EPS. Même si le problème des rumeurs a été abordé, le manque de calme et la colère provoquent encore des frictions inutiles entre toi et tes camarades.",
      "choices": [
        {
          "text": "Si tu t'excuses de ton emportement et proposes une solution équitable, rends-toi au 135.",
          "target": 135
        },
        {
          "text": "Si tu cries sur Noé en lui reprochant de ne pas prendre ton parti, rends-toi au 132.",
          "target": 132
        },
        {
          "text": "Si tu quittes le groupe avec colère sans chercher à discuter, rends-toi au 133.",
          "target": 133
        }
      ],
      "isEnding": false
    },
    "131": {
      "id": 131,
      "text": "Le projet anti-rumeur est un succès total ! La Charte du bon camarade brille dans le couloir principal, et chaque élève de la classe s'engage à appliquer quotidiennement les principes de respect et de vérification des faits.",
      "choices": [
        {
          "text": "Si tu veux découvrir la conclusion d'une aventure parfaitement maîtrisée et fraternelle, rends-toi au 146.",
          "target": 146
        },
        {
          "text": "Si tu veux voir comment une belle démarche s'est terminée avec un léger sentiment de fierté excessive, rends-toi au 147.",
          "target": 147
        },
        {
          "text": "Si tu souhaites lire le bilan de cette belle réussite collective de la classe, rends-toi au 148.",
          "target": 148
        }
      ],
      "isEnding": false
    },
    "132": {
      "id": 132,
      "text": "À force d'accuser brutalement les autres, de hausser le ton ou d'agir par orgueil, tu as créé des rancœurs. Lucas et Sarah refusent de te parler, et Noé se sent très mal à l'aise face à ces disputes incessantes.",
      "choices": [
        {
          "text": "Si tu veux découvrir la conclusion d'une aventure marquée par des accusations trop maladroites, rends-toi au 141.",
          "target": 141
        },
        {
          "text": "Si tu souhaites voir les conséquences d'une tentative de justice trop violente, rends-toi au 142.",
          "target": 142
        },
        {
          "text": "Si tu veux lire la fin mitigée liée au manque de tact dans la résolution du conflit, rends-toi au 143.",
          "target": 143
        }
      ],
      "isEnding": false
    },
    "133": {
      "id": 133,
      "text": "En colportant des histoires sans vérifier, en relayant les ragots ou en refusant d'aider Noé quand il était injustement accusé, tu as laissé la rumeur tout détruire. L'ambiance dans la classe est devenue lourde et méfiante.",
      "choices": [
        {
          "text": "Si tu veux voir les conséquences tristes d'une rumeur dévastatrice non contrôlée, rends-toi au 136.",
          "target": 136
        },
        {
          "text": "Si tu veux découvrir le bilan amer d'une amplification constante des fausses informations, rends-toi au 137.",
          "target": 137
        },
        {
          "text": "Si tu souhaites lire la fin négative sur l'isolement d'un camarade victime de ragots, rends-toi au 138.",
          "target": 138
        }
      ],
      "isEnding": false
    },
    "134": {
      "id": 134,
      "text": "Tu as cherché à rejeter la faute sur les autres et à alimenter les soupçons jusqu'au bout. Résultat : plus personne ne te fait confiance aux Tilleuls, et la pauvre rumeur continue de faire des dégâts autour de toi.",
      "choices": [
        {
          "text": "Si tu veux lire la fin négative sur la rupture de confiance au sein du groupe, rends-toi au 139.",
          "target": 139
        },
        {
          "text": "Si tu veux découvrir le triste dénouement d'une rumeur répétée sans réflexion, rends-toi au 140.",
          "target": 140
        },
        {
          "text": "Si tu préfères tenter une prise de conscience tardive mais mitigée, rends-toi au 144.",
          "target": 144
        }
      ],
      "isEnding": false
    },
    "135": {
      "id": 135,
      "text": "Grâce aux explications de M. Moreau et à l'effort de plusieurs élèves, la rumeur s'est arrêtée. Tu as compris l'importance des faits, même si tu as parfois hésité ou manqué de diplomatie dans tes choix.",
      "choices": [
        {
          "text": "Si tu veux découvrir le dénouement positif de cette grande aventure civique, rends-toi au 149.",
          "target": 149
        },
        {
          "text": "Si tu souhaites lire la fin positive sur l'intégration réussie de Noé, rends-toi au 150.",
          "target": 150
        },
        {
          "text": "Si tu veux lire la fin mitigée sur la nécessité de doser ses réactions, rends-toi au 145.",
          "target": 145
        }
      ],
      "isEnding": false
    },
    "136": {
      "id": 136,
      "text": "En répétant l'histoire des cartes volées sans chercher à vérifier si elle était vraie, tu as contribué à propager un mensonge blessant. Noé termine la semaine totalement isolé, la tête basse, et n'ose plus parler à personne dans la cour des Tilleuls. La confiance est brisée dans la classe et une ambiance lourde s'est installée.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'AMPLIFICATION / LA RUMEUR QUI BLESSE",
        "tone": "negative",
        "pedagogicalMessage": "Répéter une rumeur sans vérifier les faits blesse profondément les autres et détruit l'amitié dans la classe.",
        "outro": "C'est la fin de ton aventure (Fin négative A1). N'hésite pas à rejouer pour faire d'autres choix et découvrir les fins positives !"
      }
    },
    "137": {
      "id": 137,
      "text": "Tu as laissé le mot circuler et tu as même ajouté des moqueries sur Noé. La rumeur a gonflé comme une boule de neige. Aujourd'hui, Noé a demandé à changer de place et ne veut plus venir en récréation. Tu te rends compte trop tard de la douleur provoquée par des paroles irréfléchies.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'AMPLIFICATION / LA RUMEUR QUI BLESSE",
        "tone": "negative",
        "pedagogicalMessage": "Les moqueries et les ragots ne sont jamais inoffensifs : ils peuvent faire souffrir un camarade pendant très longtemps.",
        "outro": "C'est la fin de ton aventure (Fin négative A2). Rejoue pour essayer de protéger Noé et rétablir la vérité !"
      }
    },
    "138": {
      "id": 138,
      "text": "Parce que tu as préféré suivre la foule au lieu de te poser la question de la vérité, Noé a été accusé à tort pendant plusieurs jours. Même si Lucas a fini par retrouver sa carte coincée dans sa veste, le mal est fait : Noé reste triste et méfiant envers la classe.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'AMPLIFICATION / LA RUMEUR QUI BLESSE",
        "tone": "negative",
        "pedagogicalMessage": "Suivre le groupe sans réfléchir peut faire de toi le relais d'une injustice. Apprends à douter des accusations sans preuve.",
        "outro": "C'est la fin de ton aventure (Fin négative A3). Tente une nouvelle partie pour devenir un défenseur de la vérité !"
      }
    },
    "139": {
      "id": 139,
      "text": "Tu as rejeté la faute sur les autres et fait monter la tension. Marc le surveillant et M. Moreau ont dû intervenir sévèrement, mais le climat de camaraderie est gâché. Personne n'ose plus se faire confiance dans le rang de la cantine.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'AMPLIFICATION / LA RUMEUR QUI BLESSE",
        "tone": "negative",
        "pedagogicalMessage": "Une rumeur non stoppée empoisonne la vie de toute une communauté scolaire.",
        "outro": "C'est la fin de ton aventure (Fin négative A4). Rejoue dès maintenant pour ramener la paix et la joie aux Tilleuls !"
      }
    },
    "140": {
      "id": 140,
      "text": "En continuant de colporter de fausses informations sur d'autres sujets, tu t'es toi-même retrouvé isolé. Plus aucun camarade ne veut te confier de secrets ou jouer avec toi par peur d'être victime du prochain ragot.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'AMPLIFICATION / LA RUMEUR QUI BLESSE",
        "tone": "negative",
        "pedagogicalMessage": "Celui qui colporte des ragots finit toujours par perdre la confiance de ses propres amis.",
        "outro": "C'est la fin de ton aventure (Fin négative A5). Relance l'histoire pour adopter une attitude plus bienveillante !"
      }
    },
    "141": {
      "id": 141,
      "text": "Tu voulais défendre la justice, mais tu as hurlé au milieu de la cour et accusé brutalement tes camarades. Même si Noé est disculpé, la façon agressive dont tu as réagi a créé des clans et des rancœurs. La rumeur est éteinte, mais l'ambiance reste tendue.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : LA PRÉCIPITATION / L'ACCUSATION MALADROITE",
        "tone": "mitigee",
        "pedagogicalMessage": "Pour arrêter une rumeur, il faut agir avec calme, écoute et respect, sans humilier ni accuser brutalement.",
        "outro": "C'est la fin de ton aventure (Fin mitigée B1). Rejoue pour apprendre à intervenir avec plus de tact et de calme !"
      }
    },
    "142": {
      "id": 142,
      "text": "Tu as dénoncé Sarah en plein milieu de la dictée au lieu de lui parler en privé ou d'attendre la fin du cours. Sarah a été punie, mais elle t'en veut énormément et la classe se dispute sur la méthode employée. Le fond du problème est réglé, mais la forme a blessé tout le monde.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : LA PRÉCIPITATION / L'ACCUSATION MALADROITE",
        "tone": "mitigee",
        "pedagogicalMessage": "La recherche de la vérité ne doit pas devenir un prétexte pour afficher publiquement ou humilier un camarade.",
        "outro": "C'est la fin de ton aventure (Fin mitigée B2). Tente un autre parcours pour trouver le juste équilibre !"
      }
    },
    "143": {
      "id": 143,
      "text": "Tu as voulu forcer Léo à donner ses meilleures billes à Noé pour le punir de ses mensonges. Cette réaction punitive trop sévère a mis Noé très mal à l'aise. La rumeur est finie, mais le malaise persiste à cause de cette fausse justice dramatique.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : LA PRÉCIPITATION / L'ACCUSATION MALADROITE",
        "tone": "mitigee",
        "pedagogicalMessage": "Vouloir se faire justice soi-même par la force ou la surenchère ne fait que créer de nouveaux problèmes.",
        "outro": "C'est la fin de ton aventure (Fin mitigée B3). Rejoue pour favoriser le pardon et la réconciliation apaisée !"
      }
    },
    "144": {
      "id": 144,
      "text": "Après avoir vanté ton rôle de sauveur auprès de tous les élèves, tes camarades se sont agacés de ton comportement arrogant. Certes, tu as aidé à clarifier les faits pour Noé, mais ton besoin d'être le héros de l'école t'a éloigné de tes amis.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : LA PRÉCIPITATION / L'ACCUSATION MALADROITE",
        "tone": "mitigee",
        "pedagogicalMessage": "Faire une bonne action doit se faire en toute humilité, sans chercher à briller aux dépens des autres.",
        "outro": "C'est la fin de ton aventure (Fin mitigée B4). Relance l'histoire pour agir dans un vrai esprit d'équipe !"
      }
    },
    "145": {
      "id": 145,
      "text": "Tu as résolu l'histoire en fouillant dans les affaires des autres sans autorisation. La vérité est sortie, mais le non-respect du matériel et de l'intimité de Noé a laissé des traces. L'intention était bonne, mais les moyens utilisés étaient inadéquats.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : LA PRÉCIPITATION / L'ACCUSATION MALADROITE",
        "tone": "mitigee",
        "pedagogicalMessage": "On ne règle pas une fausse rumeur en commettant à son tour une mauvaise action.",
        "outro": "C'est la fin de ton aventure (Fin mitigée B5). Rejoue pour trouver une démarche irréprochable du début à la fin !"
      }
    },
    "146": {
      "id": 146,
      "text": "En prenant le temps de questionner Lucas et Tom avec calme, tu as vite découvert que la carte était coincée dans la doublure et que Noé ramassait seulement son propre carnet. Grâce à ton intervention intelligente, Noé est chaleureusement entouré et la classe de CM1 est plus soudée que jamais !",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : LA VÉRIFICATION / LA PAROLE JUSTE",
        "tone": "positive",
        "pedagogicalMessage": "Vérifier les faits avant de parler et refuser de relayer une information blessante protège tout le monde.",
        "outro": "BRAVO ! Tu as obtenu la meilleure fin possible (Fin positive C1). Tu es un vrai champion de l'amitié et de la vérité !"
      }
    },
    "147": {
      "id": 147,
      "text": "Tu as immédiatement prévenu M. Moreau en privé et aidé la classe à réaliser le journal anti-rumeurs. La présentation devant les CM2 a été un immense succès, et l'affiche des 3 filtres décore désormais fièrement le hall de l'école des Tilleuls !",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : LA VÉRIFICATION / LA PAROLE JUSTE",
        "tone": "positive",
        "pedagogicalMessage": "Faire appel à un adulte bienveillant et construire un projet collectif permet de transformer une erreur en une belle leçon civique.",
        "outro": "BRAVO ! Tu as obtenu une superbe fin positive (Fin positive C2). Félicitations pour ton engagement parfait !"
      }
    },
    "148": {
      "id": 148,
      "text": "Dès le premier jour, tu es allé t'asseoir à côté de Noé sur le banc en pierre pour briser son isolement. Ton attitude accueillante a inspiré d'autres élèves, et une grande partie de ballon prisonnier a définitivement scellé votre amitié. Noé est très heureux aux Tilleuls !",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : LA VÉRIFICATION / LA PAROLE JUSTE",
        "tone": "positive",
        "pedagogicalMessage": "Tendre la main à un camarade isolé par une rumeur est le plus beau geste d'empathie et de courage qu'on puisse faire.",
        "outro": "BRAVO ! Tu as obtenu une fin positive exemplaire (Fin positive C3). N'hésite pas à rejouer pour explorer d'autres chemins constructifs !"
      }
    },
    "149": {
      "id": 149,
      "text": "En appliquant la règle des 3 filtres d'accords (« Est-ce vrai ? Est-ce gentil ? Est-ce utile ? »), tu as refusé de transmettre le mot secret de Sarah et tu as expliqué la leçon à tes voisins. La rumeur s'est éteinte d'elle-même avant d'avoir pu causer le moindre dégât.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : LA VÉRIFICATION / LA PAROLE JUSTE",
        "tone": "positive",
        "pedagogicalMessage": "Le silence face à un ragot est parfois l'arme la plus puissante pour éteindre un incendie de mensonges.",
        "outro": "BRAVO ! Tu as obtenu une fin positive remarquable (Fin positive C4). Tu as fait preuve d'une vraie maturité !"
      }
    },
    "150": {
      "id": 150,
      "text": "Après avoir reconnu ta propre hésitation du début, tu as su présenter des excuses sincères et travailler main dans la main avec Noé pour le devoir de géographie. Votre binôme a obtenu la meilleure note de la classe et une amitié durable est née.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : LA VÉRIFICATION / LA PAROLE JUSTE",
        "tone": "positive",
        "pedagogicalMessage": "Il n'est jamais trop tard pour reconnaître une erreur, réparer ses actes et devenir un camarade exemplaire.",
        "outro": "BRAVO ! Tu as terminé l'histoire sur une note fantastique (Fin positive C5). Félicitations pour cette belle aventure interactive !"
      }
    }
  },
  "totalParagraphs": 150,
  "debateQuestions": [
    "La déformation de l'information : Pourquoi l'histoire des cartes de Lucas s'est-elle modifiée à chaque fois qu'elle était répétée, comme dans le jeu du téléphone arabe ?",
    "La recherche des faits : Que faut-il faire avant de répéter une information entendue dans la cour de récréation ou en classe ?",
    "La règle des 3 filtres : Comment les trois questions (« Est-ce vrai ? Est-ce gentil ? Est-ce utile ? ») permettent-elles d'éviter de faire souffrir un camarade ?",
    "La solidarité entre élèves : Si tu vois un nouvel élève comme Noé mis à l'écart à cause de chuchotements, quelle est la meilleure attitude à adopter ?"
  ],
  "coverTheme": {
    "primary": "#6C4668",
    "secondary": "#8E6289",
    "accent": "#EBB86B",
    "motif": "rumeur"
  },
  "status": "playable",
  "isCustom": false
};
