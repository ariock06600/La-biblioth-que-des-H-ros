import type { BookData } from '../types/book';

export const quatriemeGroupePrive: BookData = {
  "id": "4eme-le-groupe-prive",
  "title": "Le Groupe Privé",
  "subtitle": "Une histoire interactive sur le cyberharcèlement au collège",
  "grade": "4ème",
  "section": "college",
  "cycleLabel": "Cycle 4",
  "ageRange": "13-14 ans",
  "theme": "Cyberharcèlement, droit à l’image & pHARe",
  "howToPlay": "Bienvenue au collège Jean Moulin. Tu es en classe de 4ème B. Dans ce livre interactif, tu ne te contentes pas de lire une histoire : tu la vis. À la fin de chaque paragraphe, trois choix s'offrent à toi. Selon ce que tu décides de faire, d'écrire ou de dire, l'histoire prendra une tournure complètement différente. Il n'y a pas de dés à lancer ni de points de vie à compter, mais tes choix ont une vraie influence sur ce qui arrive à tes camarades et à toi-même.",
  "introduction": [
    "Nous sommes dimanche soir. Tu termines tes devoirs dans ta chambre quand ton téléphone se met à vibrer sans arrêt. Une nouvelle notification vient de tomber. Enzo et Sarah, deux élèves très populaires de ta classe de 4ème B, viennent de créer un nouveau groupe privé intitulé « Les Vrais de la 4B ».",
    "Presque tous les élèves de la classe y sont ajoutés, sauf une personne : Chloé.",
    "En ouvrant le groupe, tu découvres un montage photo réalisé à partir d'un cliché pris à son insu vendredi dernier pendant le cours d'EPS. Le montage est insultant, humiliant et accompagné de commentaires moqueurs qui s'enchaînent à toute vitesse.",
    "Que vas-tu faire ? À toi de décider."
  ],
  "paragraphs": {
    "1": {
      "id": 1,
      "text": "Ton téléphone vibre sur ton bureau. L'écran s'allume : « Enzo t'a ajouté au groupe Les Vrais de la 4B ». En ouvrant la notification, tu vois qu'une image circule déjà. C'est une photo de Chloé, prise vendredi après-midi pendant le cycle d'endurance en EPS. Elle est en plein effort, le visage rouge, dans une posture peu avantageuse. Enzo a ajouté un texte provocateur au-dessus de la photo et des emojis moqueurs. Les premiers messages d'autres élèves arrivent déjà, certains rigolent, d'autres rajoutent des stickers. Que fais-tu ?",
      "choices": [
        {
          "text": "Si tu enregistres l'image et fais immédiatement une capture d'écran de la discussion pour garder une preuve de ce qui se passe, rends-toi au 4.",
          "target": 4
        },
        {
          "text": "Si tu envoies un emoji qui rigole pour faire comme tout le monde et ne pas passer pour le rabat-joie de service, rends-toi au 2.",
          "target": 2
        },
        {
          "text": "Si tu envoies un message privé à Chloé pour lui demander si elle va bien et la prévenir gentiment, rends-toi au 3.",
          "target": 3
        }
      ],
      "isEnding": false
    },
    "2": {
      "id": 2,
      "text": "Tu as tapé un emoji hilare sans trop réfléchir. Très vite, Sarah relance la discussion sur le groupe en proposant de faire un sondage pour savoir qui va oser afficher la photo en grand dans la classe demain matin. Plusieurs élèves répondent par des emojis flamme. Tu sens un léger malaise monter, mais ton téléphone continue de biper. Il est déjà 23h, tu dois te coucher pour être en forme demain.",
      "choices": [
        {
          "text": "Si tu éteins ton téléphone sans rien ajouter d'autre pour essayer de dormir, rends-toi au 5.",
          "target": 5
        },
        {
          "text": "Si tu écris sur le groupe « Arrêtez un peu, ça va trop loin là », rends-toi au 6.",
          "target": 6
        },
        {
          "text": "Si tu prends des captures d'écran des messages de Sarah et d'Enzo avant d'aller te coucher, rends-toi au 4.",
          "target": 4
        }
      ],
      "isEnding": false
    },
    "3": {
      "id": 3,
      "text": "Tu ouvres la discussion privée avec Chloé. Tu lui écris un message simple : « Coucou Chloé, je voulais juste vérifier que tu vas bien... Il y a un groupe qui a été créé ce soir, c'est pas très sympa. » Chloé répond quelques minutes plus tard avec trois petits points, puis écrit : « De quoi tu parles ? Quel groupe ? » Elle n'est visiblement au courant de rien.",
      "choices": [
        {
          "text": "Si tu lui envoies une capture d'écran du groupe pour qu'elle comprenne exactement la situation, rends-toi au 7.",
          "target": 7
        },
        {
          "text": "Si tu lui dis d'ignorer les rumeurs et que tu lui proposes d'aller faire un tour ensemble à la récré demain matin pour en parler tranquillement, rends-toi au 8.",
          "target": 8
        },
        {
          "text": "Si tu regrette d'être intervenu et coupes la conversation en disant « Laisse tomber, c'est rien de grave », rends-toi au 5.",
          "target": 5
        }
      ],
      "isEnding": false
    },
    "4": {
      "id": 4,
      "text": "Tu fais soigneusement plusieurs captures d'écran : la photo originale, le montage réalisé par Enzo, le nom du groupe et la liste des membres. Les images enregistrées s'entassent dans ta galerie. Tu sais que ces éléments peuvent être utiles si la situation dégénère. Mais pendant ce temps, les messages continuent de défiler à toute vitesse sur le groupe.",
      "choices": [
        {
          "text": "Si tu éteins ton téléphone pour la nuit en te promettant d'aller voir la CPE dès ton arrivée au collège demain matin, rends-toi au 9.",
          "target": 9
        },
        {
          "text": "Si tu envoies un message sur le groupe demandant à Enzo de supprimer le montage, rends-toi au 6.",
          "target": 6
        },
        {
          "text": "Si tu ne dis rien sur le groupe et décides d'observer simplement ce qui va se passer dans la cour le lendemain, rends-toi au 5.",
          "target": 5
        }
      ],
      "isEnding": false
    },
    "5": {
      "id": 5,
      "text": "Lundi matin, 7h45. Le réveil sonne. Tu as mal dormi. Devant les grilles du collège Jean Moulin, plusieurs élèves de 4ème B sont déjà regroupés en chuchotant. Tu aperçois Enzo et Sarah au milieu d'un petit cercle. Quand tu t'approches, tu entends qu'ils parlent encore de la photo. Chloé n'est pas encore arrivée.",
      "choices": [
        {
          "text": "Si tu t'approches du groupe d'Enzo pour écouter ce qu'ils disent et rigoler avec eux pour rester intégré, rends-toi au 10.",
          "target": 10
        },
        {
          "text": "Si tu décides de rester à l'écart près des casiers et d'attendre l'arrivée de Chloé pour l'écarter de la foule, rends-toi au 8.",
          "target": 8
        },
        {
          "text": "Si tu profites que la porte de la Vie Scolaire soit ouverte pour entrer parler directement à la CPE avant le sonnerie, rends-toi au 9.",
          "target": 9
        }
      ],
      "isEnding": false
    },
    "6": {
      "id": 6,
      "text": "Tu as posté ton message : « Arrêtez un peu, ça va trop loin là. » Le silence dure quelques secondes sur le groupe, puis la réplique d'Enzo tombe : « Oh c'est bon, rabat-joie ! On peut plus rigoler ou quoi ? T'es amoureux d'elle ou c'est comment ? » Sarah ajoute un meme moqueur qui te vise directement. Plusieurs personnes mettent des likes sur la réponse d'Enzo.",
      "choices": [
        {
          "text": "Si tu réponds violemment à Enzo en l'insultant pour te défendre et ne pas te laisser faire, rends-toi au 11.",
          "target": 11
        },
        {
          "text": "Si tu quittes immédiatement le groupe privé sans ajouter un mot, rends-toi au 12.",
          "target": 12
        },
        {
          "text": "Si tu sauvegardes la preuve de leurs insultes en faisant une capture d'écran, rends-toi au 4.",
          "target": 4
        }
      ],
      "isEnding": false
    },
    "7": {
      "id": 7,
      "text": "Tu as envoyé la capture d'écran à Chloé. Elle met du temps à répondre. Quand la bulle de texte réapparaît enfin, elle écrit : « C'est une blague ??? Pourquoi ils font ça ??? » Tu sens toute sa détresse à travers ses points d'interrogation. Elle ajoute qu'elle n'a plus du tout envie de venir en cours demain matin et qu'elle a honte.",
      "choices": [
        {
          "text": "Si tu la rassures en lui disant que tu seras à ses côtés demain matin au collège pour ne pas qu'elle soit seule, rends-toi au 8.",
          "target": 8
        },
        {
          "text": "Si tu lui conseilles de tout raconter immédiatement à ses parents ce soir même, rends-toi au 13.",
          "target": 13
        },
        {
          "text": "Si tu lui réponds de ne pas en faire un drame et que ça va passer dans deux jours, rends-toi au 2.",
          "target": 2
        }
      ],
      "isEnding": false
    },
    "8": {
      "id": 8,
      "text": "Lundi matin, 8h05. La sonnerie retentit dans la cour. Tu vois Chloé franchir le portail du collège, la tête baissée, son sac serré contre elle. Elle avance prudemment. Dans la cour, plusieurs élèves s'écartent sur son passage en riant sous cape et en la regardant fixement. Elle a l'air complètement perdue et isole son regard vers le sol.",
      "choices": [
        {
          "text": "Si tu vas immédiatement vers elle pour marcher à ses côtés jusqu'à la salle de cours malgré le regard des autres, rends-toi au 14.",
          "target": 14
        },
        {
          "text": "Si tu restes avec ton groupe d'amis habituel sans bouger, en faisant semblant de ne rien remarquer, rends-toi au 10.",
          "target": 10
        },
        {
          "text": "Si tu interpelles à haute voix Enzo devant tout le monde pour lui crier d'arrêter ses gamineries, rends-toi au 11.",
          "target": 11
        }
      ],
      "isEnding": false
    },
    "9": {
      "id": 9,
      "text": "Tu pousses la porte du bureau de la CPE (Conseillère Principale d'Éducation), Mme Bernard. Elle est en train d'organiser ses dossiers du jour. Elle lève les yeux, surprise de te voir si tôt. « Bonjour. Quelque chose ne va pas ? Tu as une retenue à justifier ? » Tu hésites une seconde devant son bureau.",
      "choices": [
        {
          "text": "Si tu lui montres directement les captures d'écran enregistrées sur ton téléphone en lui expliquant la situation du groupe privé, rends-toi au 15.",
          "target": 15
        },
        {
          "text": "Si tu paniques un peu et dis que tu t'es trompé de bureau avant de ressortir précipitamment, rends-toi au 5.",
          "target": 5
        },
        {
          "text": "Si tu lui donnes juste les noms d'Enzo et Sarah sans apporter de preuves tangibles ni montrer ton téléphone, rends-toi au 16.",
          "target": 16
        }
      ],
      "isEnding": false
    },
    "10": {
      "id": 10,
      "text": "Tu t'approches du groupe d'Enzo. Il montre son téléphone à deux élèves de 3ème qui rigolent fort. Tu esquisses un sourire forcé pour te fondre dans le décor. Mais au fond de toi, tu sens une boule au ventre. La première heure de cours est du français avec Mme Laurent, la professeure principale de la classe. Tout le monde se dirige vers la salle 204.",
      "choices": [
        {
          "text": "Si tu profites du temps où la prof installe son ordinateur pour poser discrètement un mot sur le bureau de Chloé disant « Je suis désolé pour le groupe », rends-toi au 17.",
          "target": 17
        },
        {
          "text": "Si tu te mets au fond de la classe à côté d'Enzo pour continuer à suivre les blagues et être tranquille, rends-toi au 18.",
          "target": 18
        },
        {
          "text": "Si tu lèves la main au milieu du cours pour demander à parler en privé à la professeure principale, rends-toi au 19.",
          "target": 19
        }
      ],
      "isEnding": false
    },
    "11": {
      "id": 11,
      "text": "Le ton monte. Devant les rangs qui se forment pour monter en classe, le ton a monté d'un cran. Tu as crié sur Enzo et il s'est approché de toi, torse bombé : « Qu'est-ce t'as toi ? Tu cherches la bagarre ? » Tout le monde s'arrête de parler autour de vous. Un cercle d'élèves commence à se former en criant « Bagarre ! Bagarre ! ». Un surveillant arrive à toute vitesse en sifflant.",
      "choices": [
        {
          "text": "Si tu t'expliques calmement avec le surveillant en lui disant qu'Enzo harcèle une élève depuis hier soir, rends-toi au 20.",
          "target": 20
        },
        {
          "text": "Si tu pousses Enzo pour montrer que tu n'as pas peur de lui, rends-toi au 21.",
          "target": 21
        },
        {
          "text": "Si tu baisses les yeux et répètes « C'est rien, c'est bon », pour éviter l'exclusion, rends-toi au 10.",
          "target": 10
        }
      ],
      "isEnding": false
    },
    "12": {
      "id": 12,
      "text": "Tu as quitté le groupe. En ouvrant à nouveau l'application quelques minutes plus tard, tu vois qu'Enzo a créé un sous-groupe intitulé « Les vrais sans les balances ». Tu te rends compte que l'exclusion numérique va très vite. Tu te retrouves maintenant dans une position d'observateur neutre, mais les rumeurs n'ont pas cessé pour autant.",
      "choices": [
        {
          "text": "Si tu vas en parler à un ami de confiance d'une autre classe pendant la pause pour savoir ce qu'il en pense, rends-toi au 22.",
          "target": 22
        },
        {
          "text": "Si tu décides d'aller directement voir le principal adjoint pour tout dénoncer, rends-toi au 15.",
          "target": 15
        },
        {
          "text": "Si tu fais comme si de rien n'était et vas t'installer à ta place habituelle en classe de français, rends-toi au 18.",
          "target": 18
        }
      ],
      "isEnding": false
    },
    "13": {
      "id": 13,
      "text": "Chloé a écouté ton conseil. Elle en a parlé à sa mère le dimanche soir même. Sa mère a immédiatement pris des captures d'écran depuis le téléphone de sa fille et a rédigé un mail formel à la direction du collège. Ce lundi matin, dès 8h, Chloé n'est pas en cours : elle est reçue avec ses parents dans le bureau du Principal. Dans la cour, les rumeurs vont bon train sur son absence.",
      "choices": [
        {
          "text": "Si tu racontes à tes camarades de classe qu'elle est chez le principal à cause du groupe Snapchat, rends-toi au 23.",
          "target": 23
        },
        {
          "text": "Si tu gardes le silence et attends la fin du cours de français pour en savoir plus, rends-toi au 19.",
          "target": 19
        },
        {
          "text": "Si tu envoies un message à Chloé pour lui demander comment se passe son rendez-vous, rends-toi au 17.",
          "target": 17
        }
      ],
      "isEnding": false
    },
    "14": {
      "id": 14,
      "text": "Tu traverses la cour sous le regard étonné de plusieurs élèves et tu te places aux côtés de Chloé. « Salut Chloé. Viens, on monte ensemble en cours. » Elle lève des yeux surpris et soulagés vers toi. « Merci... » murmure-t-elle. Enzo vous croise dans le couloir et lâche une réflexion grinçante : « Oh, les deux tourtereaux ! » Mais tu ne relèves pas et continue d'avancer avec elle jusqu'à la salle 204.",
      "choices": [
        {
          "text": "Si tu t'assieds à côté de Chloé en cours de français pour lui montrer ton soutien tout au long de l'heure, rends-toi au 24.",
          "target": 24
        },
        {
          "text": "Si tu te retournes pour faire un signe d'agacement à Enzo, rends-toi au 11.",
          "target": 11
        },
        {
          "text": "Si tu profites de l'installation de la classe pour glisser à la prof « Il faudrait vérifier le groupe de la classe », rends-toi au 19.",
          "target": 19
        }
      ],
      "isEnding": false
    },
    "15": {
      "id": 15,
      "text": "La CPE examine attentivement tes captures d'écran. Son visage se durcit à mesure qu'elle lit les commentaires et voit la photo détournée. « C'est très grave », dit-elle calmement. « Tu as eu le bon réflexe de venir me montrer ces preuves. Les faits de cyberharcèlement sont punis par la loi et par le règlement intérieur. Je vais immédiatement convoquer Enzo et Sarah. »",
      "choices": [
        {
          "text": "Si tu demandes à la CPE de ne pas dire que c'est toi qui as apporté les preuves par peur de représailles, rends-toi au 25.",
          "target": 25
        },
        {
          "text": "Si tu acceptes de rédiger un témoignage écrit signé pour étayer le dossier disciplinaire, rends-toi au 26.",
          "target": 26
        },
        {
          "text": "Si tu lui demandes si tu peux retourner en cours de français normalement, rends-toi au 27.",
          "target": 27
        }
      ],
      "isEnding": false
    },
    "16": {
      "id": 16,
      "text": "Mme Bernard prend des notes rapidement sur un bloc-notes. « D'accord, je note les noms d'Enzo et Sarah. Mais sans preuve matérielle ou sans le témoignage direct de Chloé, mon action reste limitée. Il me faut des captures d'écran ou des écrits pour pouvoir engager une procédure disciplinaire solide. »",
      "choices": [
        {
          "text": "Si tu penses aux preuves que tu peux encore réunir et proposes de repasser à la récréation avec des captures d'écran, rends-toi au 4.",
          "target": 4
        },
        {
          "text": "Si tu lui dis d'aller regarder directement dans le téléphone d'Enzo, rends-toi au 20.",
          "target": 20
        },
        {
          "text": "Si tu abandonnes la démarche et regagnes ton rang dans la cour, rends-toi au 10.",
          "target": 10
        }
      ],
      "isEnding": false
    },
    "17": {
      "id": 17,
      "text": "Pendant que Mme Laurent note les devoirs au tableau, tu glisses le petit mot sur la table de Chloé. Elle l'ouvre, le lit, et te fait un discret signe de la tête en esquissant un léger sourire. Elle se sent moins isolée. Cependant, au deuxième rang, Sarah a remarqué le manège et te fixe avec un regard noir, tapotant sur son téléphone sous sa table.",
      "choices": [
        {
          "text": "Si tu rattrapes le coup en envoyant un mot à Sarah pour t'excuser, rends-toi au 2.",
          "target": 2
        },
        {
          "text": "Si tu ignores le regard de Sarah et te concentres sur le cours de français, rends-toi au 24.",
          "target": 24
        },
        {
          "text": "Si tu demandes à aller aux toilettes pour avertir la CPE que la situation sous la table continue, rends-toi au 19.",
          "target": 19
        }
      ],
      "isEnding": false
    },
    "18": {
      "id": 18,
      "text": "Le cours de français commence. Tu es assis au fond avec la bande d'Enzo. Sous la table, Enzo continue de faire circuler son téléphone. Il a partagé une nouvelle version retouchée de la photo. Tes camarades autour de toi étouffent des rires. Mme Laurent s'arrête d'écrire au tableau et se retourne : « Qu'est-ce qui se passe au fond ? Enzo, range ce téléphone immédiatement ! »",
      "choices": [
        {
          "text": "Si tu profites de cet instant pour dire tout haut : « Madame, il montre des photos humiliantes de Chloé », rends-toi au 28.",
          "target": 28
        },
        {
          "text": "Si tu aides Enzo à cacher son téléphone sous ton sac pour qu'il ne se le fasse pas confisquer, rends-toi au 29.",
          "target": 29
        },
        {
          "text": "Si tu ne bouges pas et regardes fixement ton cahier de français, rends-toi au 30.",
          "target": 30
        }
      ],
      "isEnding": false
    },
    "19": {
      "id": 19,
      "text": "En plein milieu du cours, tu lèves la main et demandes si tu peux parler à Mme Laurent dans le couloir pour un motif important. La prof hésite, puis accepte. Dans le couloir, tu lui résumes rapidement la création du groupe « Les Vrais de la 4B », le montage photo de Chloé et l'ambiance lourde depuis ce matin. Mme Laurent écoute très attentivement, le visage grave.",
      "choices": [
        {
          "text": "Si tu lui montres le groupe sur ton propre téléphone pour qu'elle constate d'elle-même la réalité des faits, rends-toi au 15.",
          "target": 15
        },
        {
          "text": "Si tu lui demandes d'intervenir tout de suite devant toute la classe pour faire une heure d'éducation aux médias, rends-toi au 28.",
          "target": 28
        },
        {
          "text": "Si tu lui donnes les informations et lui demandes d'attendre la pause de 10h pour agir avec la CPE, rends-toi au 27.",
          "target": 27
        }
      ],
      "isEnding": false
    },
    "20": {
      "id": 20,
      "text": "Le surveillant vous sépare fermement et vous emmène tous les deux dans le bureau du conseiller d'éducation. Enzo essaie de se dédouaner : « Mais monsieur, il m'a agressé pour rien ! » Tu gardes ton calme et expliques clairement au surveillant qu'Enzo diffuse une photo volée et moqueuse de Chloé sur un groupe Snapchat privé depuis hier soir.",
      "choices": [
        {
          "text": "Si tu acceptes de tout raconter en détail lors d'une confrontation directe avec Enzo et la CPE, rends-toi au 25.",
          "target": 25
        },
        {
          "text": "Si tu montres sur-le-champ les captures d'écran enregistrées dans ton portable, rends-toi au 15.",
          "target": 15
        },
        {
          "text": "Si tu perds patience et recommences à hausser le ton contre Enzo dans le bureau, rends-toi au 21.",
          "target": 21
        }
      ],
      "isEnding": false
    },
    "21": {
      "id": 21,
      "text": "Tu as poussé Enzo. La bousculade dégénère rapidement en altercation physique. Plusieurs chaises de la permanence sont renversées avant que deux surveillants ne réussissent à vous séparer. Le résultat est immédiat : vous êtes tous les deux envoyés chez le Principal. Ton geste d'impulsivité a totalement détourné l'attention du vrai problème : la photo de Chloé.",
      "choices": [
        {
          "text": "Si tu profites de l'entretien chez le Principal pour tout réexpliquer depuis le début et faire valoir la cause de Chloé, rends-toi au 15.",
          "target": 15
        },
        {
          "text": "Si tu t'obstines à accuser uniquement Enzo d'être le seul responsable de la bagarre, rends-toi au 20.",
          "target": 20
        },
        {
          "text": "Si tu te renfermes dans le silence par peur d'être sanctionné d'un mot dans le carnet ou d'une exclusion, rends-toi au 30.",
          "target": 30
        }
      ],
      "isEnding": false
    },
    "22": {
      "id": 22,
      "text": "Pendant la courte pause avant le deuxième cours, tu retrouves ton ami Lucas de 4ème A près des casiers. Tu lui racontes toute l'histoire du groupe privé et du montage de Chloé. Lucas te répond : « Franchement, touche pas à ça. Si tu t'en mêles, Enzo et sa bande vont te prendre pour cible. Laisse les profs gérer s'ils s'en aperçoivent. »",
      "choices": [
        {
          "text": "Si tu écoutes le conseil de Lucas et décides de ne plus du tout intervenir dans cette affaire, rends-toi au 30.",
          "target": 30
        },
        {
          "text": "Si tu ne suis pas son conseil et décides d'aller quand même soutenir Chloé au cours suivant, rends-toi au 24.",
          "target": 24
        },
        {
          "text": "Si tu décides d'aller signaler l'existence du groupe anonymement en glissant un mot sous la porte de la Vie Scolaire, rends-toi au 27.",
          "target": 27
        }
      ],
      "isEnding": false
    },
    "23": {
      "id": 23,
      "text": "Tu racontes à deux camarades de rangée que Chloé est actuellement dans le bureau de la direction avec ses parents. La nouvelle se propage comme une traînée de poudre dans toute la classe. Enzo commence à paniquer. Il sort son téléphone à la hâte pour supprimer le groupe Snapchat « Les Vrais de la 4B » et effacer toutes les traces de la conversation.",
      "choices": [
        {
          "text": "Si tu fais vite une dernière série de captures d'écran avant qu'Enzo ne supprime définitivement le groupe, rends-toi au 4.",
          "target": 4
        },
        {
          "text": "Si tu avertis publiquement la classe que les preuves ont déjà été sauvegardées de toute façon, rends-toi au 28.",
          "target": 28
        },
        {
          "text": "Si tu ne dis rien et regardes Enzo supprimer le groupe en silence, rends-toi au 30.",
          "target": 30
        }
      ],
      "isEnding": false
    },
    "24": {
      "id": 24,
      "text": "Tu es assis à côté de Chloé. Elle sort ses affaires de son sac avec des mains légèrement tremblantes. En ouvrant sa trousse, elle te murmure : « Je ne sais pas ce que je ferais si tu n'étais pas là. Tout le monde me regarde comme si j'étais un monstre. » Tu la rassures en lui disant que la faute vient uniquement de ceux qui ont pris et partagé cette photo.",
      "choices": [
        {
          "text": "Si tu lui proposes d'aller ensemble voir la professeure principale à la fin de l'heure de cours, rends-toi au 19.",
          "target": 19
        },
        {
          "text": "Si tu lui suggères de déposer une plainte officielle avec ses parents dès ce soir, rends-toi au 13.",
          "target": 13
        },
        {
          "text": "Si tu lui conseilles de bloquer immédiatement Enzo, Sarah et tous les membres du groupe privé sur ses réseaux, rends-toi au 31.",
          "target": 31
        }
      ],
      "isEnding": false
    },
    "25": {
      "id": 25,
      "text": "La CPE prend note de ton inquiétude concernant ta protection et les représailles possibles. « Ne t'inquiète pas », te dit-elle. « Je vais convoquer la classe entière pour un rappel au règlement et aux lois sur le cyberharcèlement, sans préciser qui m'a prévenue. Mais je garderai tes éléments de preuve pour le dossier. »",
      "choices": [
        {
          "text": "Si tu regagnes la classe de français rassuré par la prise en charge de la CPE, rends-toi au 27.",
          "target": 27
        },
        {
          "text": "Si tu demandes à rester en permanence jusqu'à la pause de 10h pour éviter de croiser Enzo tout de suite, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu décides d'avertir discrètement Chloé par message que la CPE s'en occupe, rends-toi au 33.",
          "target": 33
        }
      ],
      "isEnding": false
    },
    "26": {
      "id": 26,
      "text": "Tu signes la déclaration écrite décrivant la chronologie des faits depuis dimanche soir 22h. La CPE te remercie pour ta maturité et ton courage civil. Avec ce document et les captures d'écran, l'administration dispose désormais de toutes les preuves nécessaires pour agir fermement et convoquer les responsables.",
      "choices": [
        {
          "text": "Si tu demandes si une séance d'information sur les réseaux sociaux peut être organisée pour toute la 4ème B, rends-toi au 34.",
          "target": 34
        },
        {
          "text": "Si tu portes le document signé au secrétariat du Principal sur demande de la CPE, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu retournes en classe la tête haute, prêt à affronter les regards, rends-toi au 27.",
          "target": 27
        }
      ],
      "isEnding": false
    },
    "27": {
      "id": 27,
      "text": "La sonnerie de 10h retentit dans tout le collège Jean Moulin. C'est la grande récréation du matin. Dans les couloirs, la rumeur d'une intervention imminente de la direction commence à circuler. Les élèves se rassemblent dans la cour principale autour des bancs et du préau. L'ambiance est particulièrement tendue au sein de la classe de 4ème B.",
      "choices": [
        {
          "text": "Si tu rejoins Chloé près du banc du préau pour passer la récréation avec elle, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu t'approches d'Enzo pour voir comment il réagit face aux risques de sanctions, rends-toi au 37.",
          "target": 37
        },
        {
          "text": "Si tu vas trouver l'infirmière scolaire pour lui signaler que Chloé est très affectée ce matin, rends-toi au 38.",
          "target": 38
        }
      ],
      "isEnding": false
    },
    "28": {
      "id": 28,
      "text": "Mme Laurent s'arrête net. Tes mots ont fait l'effet d'une bombe dans la classe. Un silence lourd s'installe dans la salle 204. La professeure principale s'avance vers le rang d'Enzo : « Enzo, donne-moi ce téléphone immédiatement. Et tout le monde ferme ses cahiers. Nous allons parler de ce qui se passe sur les réseaux sociaux. »",
      "choices": [
        {
          "text": "Si tu apportes ton témoignage devant toute la classe pour expliquer en quoi ce genre de montage est déductif et violent, rends-toi au 39.",
          "target": 39
        },
        {
          "text": "Si tu baisses la tête, mal à l'aise d'avoir fait éclater l'affaire en plein cours, rends-toi au 40.",
          "target": 40
        },
        {
          "text": "Si tu regardes Chloé pour voir si cette prise de parole publique la soulage, rends-toi au 41.",
          "target": 41
        }
      ],
      "isEnding": false
    },
    "29": {
      "id": 29,
      "text": "Tu as aidé Enzo à dissimuler son téléphone sous ton sac à dos. Il te fait un clin d'œil complice : « C'est bien, t'es un vrai toi. » Mais intérieurement, tu te sens coupable. Tu te rends compte que tu viens de te rendre complice de la dissimulation de preuves de harcèlement pour protéger un élève populaire.",
      "choices": [
        {
          "text": "Si tu finances ta culpabilité en décidant de changer de place dès le cours suivant pour t'éloigner d'Enzo, rends-toi au 42.",
          "target": 42
        },
        {
          "text": "Si tu profites de la récréation de 10h pour dire à Enzo que tu ne le couvriras plus jamais, rends-toi au 37.",
          "target": 37
        },
        {
          "text": "Si tu t'enfonces dans cette attitude en demandant à Enzo de te montrer les derniers commentaires du groupe, rends-toi au 43.",
          "target": 43
        }
      ],
      "isEnding": false
    },
    "30": {
      "id": 30,
      "text": "Tu as choisi de rester totalement passif. Tu ne dis rien, tu ne fais rien. Le cours de français se termine dans une ambiance lourde. Chloé a gardé la tête baissée pendant toute l'heure, sans prendre une seule note. À la sonnerie de 10h, elle ramasse rapidement ses affaires et sort la première de la salle, les larmes aux yeux, sans parler à personne.",
      "choices": [
        {
          "text": "Si tu la suis dans le couloir pour essayer de la rattraper avant qu'elle ne s'isole, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu laisses Chloé partir seule et vas rejoindre tes amis dans la cour pour la récréation, rends-toi au 45.",
          "target": 45
        },
        {
          "text": "Si tu décides que cette situation est insupportable et vas enfin tout raconter à la Vie Scolaire, rends-toi au 35.",
          "target": 35
        }
      ],
      "isEnding": false
    },
    "31": {
      "id": 31,
      "text": "Tu conseilles à Chloé d'ouvrir les paramètres de ses réseaux sociaux pour bloquer immédiatement Enzo, Sarah et tous les membres actifs du groupe privé. « Au moins, tu ne verras plus leurs notifications et ils n'auront plus accès à ton contenu », lui expliques-tu. Chloé suit tes conseils, soulagée de couper ce canal de harcèlement, mais l'inquiétude reste vive sur son visage quant aux réactions dans la cour.",
      "choices": [
        {
          "text": "Si tu lui proposes d'aller passer la récréation de 10h ensemble près du préau pour l'épauler, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu décides de devancer la sortie du cours pour aller signaler la situation à l'infirmière scolaire, rends-toi au 38.",
          "target": 38
        },
        {
          "text": "Si tu laisses Chloé rejoindre ses amies et pars de ton côté retrouver ton groupe d'amis habituel dans la cour, rends-toi au 45.",
          "target": 45
        }
      ],
      "isEnding": false
    },
    "32": {
      "id": 32,
      "text": "Après ton entretien avec Mme Bernard, la CPE, tu demandes la permission de passer le reste de la première heure en salle de permanence. Tu préfères éviter de croiser Enzo et sa bande immédiatement dans les couloirs. Installé au calme, tu réfléchis à tout ce qui s'est passé depuis la veille. La sonnerie de 10h retentit enfin dans les haut-parleurs, marquant le début de la grande récréation.",
      "choices": [
        {
          "text": "Si tu te rends dans la cour pour retrouver Chloé près du préau et prendre de ses nouvelles, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu cherches Enzo des yeux pour observer son attitude face aux sanctions qui le menacent, rends-toi au 37.",
          "target": 37
        },
        {
          "text": "Si tu choisis de rester discret et de chercher Chloé pour lui proposer d'aller à l'infirmerie si elle se sent mal, rends-toi au 38.",
          "target": 38
        }
      ],
      "isEnding": false
    },
    "33": {
      "id": 33,
      "text": "Sous la table pendant le cours, tu tapes un message rapide pour Chloé : « Ne t'inquiète pas, la CPE Mme Bernard est au courant et s'occupe du dossier ». Quelques secondes plus tard, tu vois les trois petits points s'afficher, puis Chloé te répond : « Merci infiniment, je me sentais tellement seule depuis hier ». Tu remets rapidement ton téléphone dans ton sac avant que le professeur ne remarque ton geste.",
      "choices": [
        {
          "text": "Si tu décides de rejoindre Chloé au banc du préau dès la sonnerie de 10h, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu vas directement parler à l'infirmière scolaire à la pause pour l'avertir de l'état de Chloé, rends-toi au 38.",
          "target": 38
        },
        {
          "text": "Si tu profites de la récréation pour observer la réaction d'Enzo et Sarah dans la cour, rends-toi au 37.",
          "target": 37
        }
      ],
      "isEnding": false
    },
    "34": {
      "id": 34,
      "text": "Avant de quitter le bureau de la CPE, tu lui demandes s'il serait possible d'organiser une séance d'information et de prévention sur le cyberharcèlement et l'usage des réseaux sociaux pour toute la classe de 4ème B. Mme Bernard approuve chaleureusement ton idée : « C'est une excellente suggestion. Je vais voir avec votre professeure principale pour programmer cela au plus vite. »",
      "choices": [
        {
          "text": "Si tu sors du bureau pour rejoindre le secrétariat et déposer ton rapport signé, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu sors dans la cour de récréation de 10h pour chercher Chloé et la soutenir, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu te diriges vers l'infirmerie pour prévenir le personnel médical du stress éprouvé par Chloé, rends-toi au 38.",
          "target": 38
        }
      ],
      "isEnding": false
    },
    "35": {
      "id": 35,
      "text": "Tu te rends à la Vie Scolaire et au secrétariat du Principal pour transmettre la déclaration écrite contenant les détails et les captures d'écran. Le personnel prend la mesure de la gravité de la situation et te confirme que le Principal va immédiatement se saisir du problème. Tu te sens libéré d'un poids en réintégrant la vie du collège.",
      "choices": [
        {
          "text": "Si tu vas immédiatement retrouver Chloé près des bancs du préau à 10h, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu approches du groupe d'Enzo dans la cour pour jauger le climat avant les sanctions, rends-toi au 37.",
          "target": 37
        },
        {
          "text": "Si tu préfères passer voir l'infirmière scolaire pour lui faire part de ton inquiétude concernant Chloé, rends-toi au 38.",
          "target": 38
        }
      ],
      "isEnding": false
    },
    "36": {
      "id": 36,
      "text": "À la récréation de 10h, tu retrouves Chloé assise à l'écart sur un banc sous le préau. Tu t'assieds à côté d'elle. Des élèves passent en murmurant, mais ta présence empêche quiconque de venir l'insulter ouvertement. « Merci d'être là », te murmure-t-elle. Tu l'écoutes vider son sac et tu la rassures sur le fait qu'elle n'a commis aucune faute.",
      "choices": [
        {
          "text": "Si tu lui proposes de l'accompagner à l'infirmerie pour qu'elle puisse se poser au calme, rends-toi au 38.",
          "target": 38
        },
        {
          "text": "Si tu décides de l'emmener faire un tour dans la cour pour montrer la tête haute que vous n'avez pas peur, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu t'absentes quelques minutes pour aller voir Enzo et lui demander d'arrêter son jeu toxique, rends-toi au 37.",
          "target": 37
        }
      ],
      "isEnding": false
    },
    "37": {
      "id": 37,
      "text": "Pendant la pause de 10h, tu marches en direction d'Enzo et de Sarah au centre de la cour. Enzo a l'air nerveux, son téléphone constamment en main. Tu l'abordes fermement : « Vous devriez arrêter tout de suite et effacer ce groupe. La direction est au courant et ça va très mal se terminer pour vous. » Enzo prend un air arrogant pour sauver les apparences devant ses amies, mais tu perçois de l'inquiétude dans son regard.",
      "choices": [
        {
          "text": "Si tu lui tournes le dos sans entrer dans son jeu d'insultes pour rejoindre Chloé, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si la colère te prend et que tu hausses le ton publiquement devant toute la cour, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu préfères ne pas insister et t'éloignes tranquillement pour aller au self réserver une table avec tes amis, rends-toi au 45.",
          "target": 45
        }
      ],
      "isEnding": false
    },
    "38": {
      "id": 38,
      "text": "Tu te rends à l'infirmerie pour expliquer à l'infirmière scolaire que Chloé subit une campagne de cyberharcèlement intense et qu'elle se trouve dans un état de grande détresse émotionnelle. L'infirmière te remercie chaleureusement pour ton geste solidaire et prépare un billet pour faire venir Chloé dans un espace bienveillant et sécurisé.",
      "choices": [
        {
          "text": "Si tu retournes sous le préau pour prévenir Chloé que l'infirmière l'attend, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu profites de la fin de la récréation pour tenter de calmer les rumeurs auprès de tes camarades de classe, rends-toi au 47.",
          "target": 47
        },
        {
          "text": "Si tu laisses l'infirmière gérer et pars directement t'installer en classe pour la deuxième heure de cours, rends-toi au 48.",
          "target": 48
        }
      ],
      "isEnding": false
    },
    "39": {
      "id": 39,
      "text": "Prenant ton courage à deux mains pendant le cours de français, tu prends la parole devant la classe : « Ce montage photo et les moqueries sur le groupe privé, c'est du cyberharcèlement. Ça peut détruire quelqu'un et c'est puni par la loi. » Un silence impressionné gagne la salle 204. Plusieurs élèves baissent la tête, prenant conscience de la gravité des faits.",
      "choices": [
        {
          "text": "Si tu jettes un coup d'œil bienveillant à Chloé pour lui manifester ton soutien, rends-toi au 41.",
          "target": 41
        },
        {
          "text": "Si tu te réassieds brusquement, soudain gêné d'avoir braqué tous les regards sur toi, rends-toi au 40.",
          "target": 40
        },
        {
          "text": "Si tu profites que Mme Laurent soutienne ton discours pour lui demander d'envoyer Enzo chez la CPE, rends-toi au 49.",
          "target": 49
        }
      ],
      "isEnding": false
    },
    "40": {
      "id": 40,
      "text": "Après l'intervention du professeur, tu baisses la tête et t'enfonces dans ton siège, mal à l'aise d'avoir fait éclater cette affaire devant tout le monde. Autour de toi, des chuchotements fusent et tu sens des regards pesants posés sur ton dos. La fin de l'heure approche et la tension reste palpable dans la classe.",
      "choices": [
        {
          "text": "Si tu décides de changer de place au cours suivant pour couper court aux commentaires, rends-toi au 42.",
          "target": 42
        },
        {
          "text": "Si tu cherches à rattraper Chloé à la sonnerie pour savoir comment elle a ressenti cette scène, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu files rapidement retrouver ton groupe d'amis dans la cour pour la récréation de 10h, rends-toi au 45.",
          "target": 45
        }
      ],
      "isEnding": false
    },
    "41": {
      "id": 41,
      "text": "Tu tournes la tête vers Chloé. Ses yeux sont embués de larmes, mais elle te fait un léger signe de tête plein de gratitude. Pour la première fois depuis la veille, elle ne se sent plus seule face à la meute. Mme Laurent reprend les commandes du cours en annonçant une prise en charge disciplinaire immédiate.",
      "choices": [
        {
          "text": "Si tu proposes à Chloé de marcher avec elle dans les couloirs jusqu'à la récréation, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu préfères t'isoler un moment pour éviter d'éventuelles représailles de la part d'Enzo, rends-toi au 42.",
          "target": 42
        },
        {
          "text": "Si tu rejoins les bancs du préau à 10h pour continuer à discuter sereinement avec elle, rends-toi au 36.",
          "target": 36
        }
      ],
      "isEnding": false
    },
    "42": {
      "id": 42,
      "text": "À la fin du cours de français, tu profites de l'interclasse pour prendre tes affaires et aller t'installer au premier rang pour l'heure suivante. Tu veux te tenir éloigné d'Enzo et de sa bande pour ne plus être complice de leurs agissements. Enzo te jette un regard méprisant, mais tu préfères ignorer ses réactions.",
      "choices": [
        {
          "text": "Si tu envoies un petit mot solidaire à Chloé pour lui proposer de déjeuner avec toi ce midi, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu restes concentré sur le cours sans chercher à intervenir à nouveau pour l'instant, rends-toi au 48.",
          "target": 48
        },
        {
          "text": "Si tu vas voir le professeur à la fin du cours pour lui expliquer tes remords, rends-toi au 49.",
          "target": 49
        }
      ],
      "isEnding": false
    },
    "43": {
      "id": 43,
      "text": "Cédant à la curiosité et à la pression sociale, tu te penches vers le téléphone d'Enzo pour regarder les derniers commentaires moqueurs déposés sur le groupe. Tu te surpris à rire doucement à une blague particulièrement cynique. Mais en levant les yeux, tu croises le regard dévasté de Chloé qui vient de surprendre ton manège.",
      "choices": [
        {
          "text": "Si un vif sentiment de culpabilité te saisit et que tu décides de sortir d'urgence du groupe privé, rends-toi au 51.",
          "target": 51
        },
        {
          "text": "Si tu continues de faire comme si de rien n'était et suis Enzo dans la cour pour la récréation, rends-toi au 52.",
          "target": 52
        },
        {
          "text": "Si tu essaies d'aller présenter des excuses maladroites à Chloé à la sonnerie, rends-toi au 44.",
          "target": 44
        }
      ],
      "isEnding": false
    },
    "44": {
      "id": 44,
      "text": "Dès la sonnerie de 10h, tu précipites tes affaires dans ton sac et tu emboîtes le pas à Chloé qui s'enfuit dans le couloir. Tu la rattrapes près des escaliers : « Chloé, attends ! Ne reste pas seule avec tout ça ». Elle s'arrête, essuie une larme et accepte de marcher avec toi. Vous vous dirigez doucement vers un endroit plus calme du collège.",
      "choices": [
        {
          "text": "Si tu l'accompagnes à l'infirmerie pour qu'on prenne soin d'elle, rends-toi au 38.",
          "target": 38
        },
        {
          "text": "Si tu t'assieds avec elle sur le banc du préau pour débriefer sereinement, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu lui proposes d'aller parler ensemble à un surveillant dans la cour, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "45": {
      "id": 45,
      "text": "Tu laisses Chloé quitter la classe seule et tu vas rejoindre ton groupe d'amis habituel au milieu de la cour. La conversation tourne rapidement autour des événements de la veille et du groupe Snapchat. Tu restes en retrait, mal à l'aise, hésitant entre rire aux moqueries ou prendre la défense de Chloé.",
      "choices": [
        {
          "text": "Si tu décides de quitter le groupe d'amis pour rejoindre Chloé près du préau, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu t'approches d'Enzo pour lui conseiller de calmer le jeu avant d'avoir des ennuis, rends-toi au 37.",
          "target": 37
        },
        {
          "text": "Si tu restes passif et te diriges vers le self à la sonnerie du midi, rends-toi au 53.",
          "target": 53
        }
      ],
      "isEnding": false
    },
    "46": {
      "id": 46,
      "text": "La colère prend le dessus. Au milieu de la cour, tu t'emportes contre Enzo et tu hausses fortement le ton : « T'es qu'un lâche Enzo avec tes montages ! » La scène attire immédiatement un attroupement d'élèves curieux. Enzo s'avance vers toi, le poing serré, tandis que des cris s'élèvent. Un surveillant intervient rapidement pour stopper l'incident.",
      "choices": [
        {
          "text": "Si tu profites de l'arrivée du surveillant pour tout expliquer calmement, rends-toi au 47.",
          "target": 47
        },
        {
          "text": "Si tu t'exposes davantage en continuant de provoquer Enzo malgré la présence du surveillant, rends-toi au 54.",
          "target": 54
        },
        {
          "text": "Si tu baisses la tête et t'éloignes vers le bâtiment principal, rends-toi au 48.",
          "target": 48
        }
      ],
      "isEnding": false
    },
    "47": {
      "id": 47,
      "text": "Tu t'approches de M. Thomas, un surveillant présent dans la cour, pour lui expliquer à voix basse la situation concernant le groupe privé et la détresse de Chloé. M. Thomas écoute attentivement tes déclarations, prend des notes et te remercie d'être venu lui en parler avant que la situation ne dérape complètement.",
      "choices": [
        {
          "text": "Si tu vas retrouver Chloé sous le préau pour la rassurer sur la prise en charge, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu vas te ranger pour le cours suivant avec le sentiment d'avoir accompli ton devoir, rends-toi au 48.",
          "target": 48
        },
        {
          "text": "Si tu cherches à discuter avec d'autres élèves pour les convaincre de soutenir Chloé, rends-toi au 55.",
          "target": 55
        }
      ],
      "isEnding": false
    },
    "48": {
      "id": 48,
      "text": "La sonnerie annonce la fin de la récréation de 10h. Tu te ranges calmement devant la salle de cours avec tes camarades. Les rumeurs continuent de circuler à mi-voix dans le rang. Enzo repasse devant la file avec un air sombre, suite à un appel haut-parleur réclamant sa présence immédiate à la Vie Scolaire.",
      "choices": [
        {
          "text": "Si tu profites du début de cours pour inviter Chloé à s'asseoir à côté de toi, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu suis le cours attentivement en attendant la pause déjeuner de 12h, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu envoies discrètement un message sur le groupe de classe pour demander à tout le monde de calmer le jeu, rends-toi au 51.",
          "target": 51
        }
      ],
      "isEnding": false
    },
    "49": {
      "id": 49,
      "text": "À la fin de l'heure, tu t'approches du bureau du professeur pour donner plus de détails sur le cyberharcèlement visant Chloé. L'enseignant prend la mesure des faits et décide d'envoyer un billet à la CPE pour faire convoquer les responsables lors de la pause méridienne. Tu te sens soulagé d'avoir agi efficacement.",
      "choices": [
        {
          "text": "Si tu vas rejoindre Chloé pour lui dire que la situation est désormais prise en main, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu pars directement vers le self pour la pause déjeuner, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu vas parler à d'autres camarades de classe pour désamorcer les rumeurs avant midi, rends-toi au 55.",
          "target": 55
        }
      ],
      "isEnding": false
    },
    "50": {
      "id": 50,
      "text": "En entrant dans la salle pour l'heure suivante, tu fais signe à Chloé d'aller s'asseoir à côté de toi. Un peu hésitante au départ, elle accepte avec un vrai soulagement. Travailler en binôme avec elle durant le cours lui permet de retrouver le sourire et d'oublier un instant le harcèlement subi en ligne.",
      "choices": [
        {
          "text": "Si tu lui proposes de déjeuner ensemble au self dès la sonnerie de midi, rends-toi au 56.",
          "target": 56
        },
        {
          "text": "Si tu lui donnes des conseils pour signaler les comptes malveillants sur les réseaux sociaux, rends-toi au 31.",
          "target": 31
        },
        {
          "text": "Si tu préfères rejoindre tes amis habituels à midi tout en restant attentif à elle, rends-toi au 53.",
          "target": 53
        }
      ],
      "isEnding": false
    },
    "51": {
      "id": 51,
      "text": "Pris de remords, tu ouvres l'application Snapchat sur ton téléphone et tu appuies fermement sur le bouton pour quitter définitivement le groupe « Les Vrais de la 4B ». Tu envoies ensuite un message général dans le groupe de discussion de classe afin d'exhorter tout le monde à faire preuve de respect et à stopper la diffusion du montage.",
      "choices": [
        {
          "text": "Si tu vas trouver Chloé pour lui annoncer que tu as quitté le groupe toxique, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu te diriges vers le restaurant scolaire pour prendre ton repas du midi, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu vas expliquer ton geste à Enzo pour lui montrer ton désaccord, rends-toi au 37.",
          "target": 37
        }
      ],
      "isEnding": false
    },
    "52": {
      "id": 52,
      "text": "Tu suis Enzo et sa bande dans la cour pendant la récréation. Ils continuent de rigoler en consultant leurs téléphones. Même si tu te sens coupable d'être resté passif, tu crains d'être rejeté si tu t'opposes ouvertement à eux. La sonnerie de 12h retentit, marquant le début de la pause déjeuner.",
      "choices": [
        {
          "text": "Si tu décides de t'éloigner d'eux au moment d'entrer dans le self pour manger seul ou avec d'autres camarades, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu t'assieds avec Enzo à la cantine en continuant d'écouter leurs discussions, rends-toi au 57.",
          "target": 57
        },
        {
          "text": "Si tu profites du repas pour tenter une dernière fois de convaincre Enzo d'arrêter, rends-toi au 58.",
          "target": 58
        }
      ],
      "isEnding": false
    },
    "53": {
      "id": 53,
      "text": "Il est 12h05. C'est le début de la pause méridienne. La file d'attente du restaurant scolaire s'allonge dans la cour. Les élèves discutent par petits groupes et l'histoire du groupe privé fait le tour des tables. Tu avances dans la file avec ton plateau, en te demandant comment va se dérouler la suite de la journée.",
      "choices": [
        {
          "text": "Si tu aperçois Chloé seule et décides d'aller t'asseoir à sa table, rends-toi au 56.",
          "target": 56
        },
        {
          "text": "Si tu t'assieds avec ton groupe d'amis habituel en évitant d'aborder le sujet chaud du matin, rends-toi au 59.",
          "target": 59
        },
        {
          "text": "Si tu préfères manger très vite pour aller faire un tour au foyer du collège, rends-toi au 60.",
          "target": 60
        }
      ],
      "isEnding": false
    },
    "54": {
      "id": 54,
      "text": "Emporté par l'énervement, tu continues de t'engueuler verbalement avec Enzo devant le bâtiment administratif. Un surveillant s'approche brusquement et vous sépare : « Ça suffit tous les deux ! Vos parents vont être prévenus si vous continuez. » Tu te retrouves convoqué pour un rappel au calme à la Vie Scolaire juste avant d'aller déjeuner.",
      "choices": [
        {
          "text": "Si tu profites de cet entretien pour réexpliquer que toute l'affaire découle du harcèlement subi par Chloé, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu t'excuses pour ton emportement et pars directement manger au self, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu te renfermes dans le silence et attends la reprise des cours de 13h30, rends-toi au 61.",
          "target": 61
        }
      ],
      "isEnding": false
    },
    "55": {
      "id": 55,
      "text": "Dans la cour de récréation, tu vas voir plusieurs camarades de classe pour leur expliquer le fond de l'histoire et les encourager à soutenir Chloé. Beaucoup d'entre eux admettent qu'ils ont trouvé le montage déplacé mais n'osaient rien dire par peur d'Enzo. Une vague de solidarité commence à se former au sein du groupe.",
      "choices": [
        {
          "text": "Si tu proposes à ces camarades d'inviter Chloé à manger avec vous au self ce midi, rends-toi au 56.",
          "target": 56
        },
        {
          "text": "Si tu vas informer la CPE du changement positif d'attitude de la classe, rends-toi au 34.",
          "target": 34
        },
        {
          "text": "Si tu te diriges calmement vers la cantine pour la pause de midi, rends-toi au 53.",
          "target": 53
        }
      ],
      "isEnding": false
    },
    "56": {
      "id": 56,
      "text": "Au self du collège, tu repères Chloé assise isolée au bout d'une table avec son plateau. Tu t'approches et tu lui demandes gentiment si tu peux t'installer à ses côtés. Deux autres camarades de classe vous rejoignent quelques minutes plus tard. La discussion s'engage dans une ambiance chaleureuse, redonnant des forces et le sourire à Chloé.",
      "choices": [
        {
          "text": "Si tu profites du repas pour lui réaffirmer que vous serez là pour elle cet après-midi, rends-toi au 62.",
          "target": 62
        },
        {
          "text": "Si vous allez faire une promenade calme dans la cour à la fin du repas, rends-toi au 63.",
          "target": 63
        },
        {
          "text": "Si vous décidez d'aller ensemble à l'infirmerie pour faire un point rapide avant 13h30, rends-toi au 64.",
          "target": 64
        }
      ],
      "isEnding": false
    },
    "57": {
      "id": 57,
      "text": "Tu t'assieds à la table d'Enzo et de Sarah dans la cantine. Ils rient encore du montage et spéculent sur d'éventuelles sanctions. Tu te sens très mal à l'aise au milieu de leurs moqueries quotidiennes, réalisant progressivement que cette complicité passive va à l'encontre de tes valeurs.",
      "choices": [
        {
          "text": "Si tu te lèves de table en plein milieu du repas pour aller rejoindre une autre table, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu restes jusqu'à la fin du repas sans prononcer un mot avant de fuir dans la cour, rends-toi au 65.",
          "target": 65
        },
        {
          "text": "Si tu profites d'un silence pour leur déclarer calmement que ce qu'ils font est inacceptable, rends-toi au 58.",
          "target": 58
        }
      ],
      "isEnding": false
    },
    "58": {
      "id": 58,
      "text": "Au milieu du déjeuner, tu te tournes vers Enzo et Sarah et leur dis franchement : « Franchement, mettez-vous deux secondes à sa place. Ce que vous faites est cruel et ça peut avoir des conséquences gravissimes. » Sarah s'arrête de rire et Enzo baisse les yeux sur son plateau, manifestement déstabilisé par ta remarque directe.",
      "choices": [
        {
          "text": "Si tu débarrasses ton plateau pour aller soutenir Chloé dans la cour du midi, rends-toi au 63.",
          "target": 63
        },
        {
          "text": "Si tu pars rejoindre la Vie Scolaire pour leur signaler que le groupe continue de médire, rends-toi au 66.",
          "target": 66
        },
        {
          "text": "Si tu quittes la table et vas te poser seul sur un banc jusqu'à la reprise des cours à 13h30, rends-toi au 65.",
          "target": 65
        }
      ],
      "isEnding": false
    },
    "59": {
      "id": 59,
      "text": "Tu déjeunes au self avec ton cercle d'amis habituel. La discussion reste superficielle, évitant soigneusement le sujet délicat du harcèlement de Chloé. Même si le repas se déroule sans accroc, tu ressens une pointe de culpabilité en apercevant Chloé manger seule de son côté.",
      "choices": [
        {
          "text": "Si tu apportes ton dessert à la table de Chloé pour passer la fin du repas avec elle, rends-toi au 56.",
          "target": 56
        },
        {
          "text": "Si tu sors dans la cour du midi avec ton groupe après avoir débarrassé ton plateau, rends-toi au 65.",
          "target": 65
        },
        {
          "text": "Si tu vas faire un tour au foyer pour jouer au baby-foot et te vider la tête, rends-toi au 60.",
          "target": 60
        }
      ],
      "isEnding": false
    },
    "60": {
      "id": 60,
      "text": "Après avoir déjeuné rapidement, tu te rends au foyer du collège pour passer un moment au calme avant la reprise de l'après-midi. L'ambiance y est détendue et plusieurs élèves de différentes classes discutent tranquillement. Tu profites de cette pause pour réfléchir à l'attitude à adopter lors des cours de l'après-midi.",
      "choices": [
        {
          "text": "Si tu décides de retourner dans la cour à 13h15 pour chercher Chloé avant le sonnerie, rends-toi au 63.",
          "target": 63
        },
        {
          "text": "Si tu vas te ranger directement devant la salle de cours dès le premier coup de sonnerie de 13h25, rends-toi au 61.",
          "target": 61
        },
        {
          "text": "Si tu croises Enzo dans le foyer et lui rappelles qu'il risque une lourde sanction, rends-toi au 67.",
          "target": 67
        }
      ],
      "isEnding": false
    },
    "61": {
      "id": 61,
      "text": "À 13h25, la sonnerie retentit pour annoncer la reprise des cours de l'après-midi. Tu te ranges devant la salle d'histoire-géographie. L'ambiance dans la file d'attente est électrique. Plusieurs élèves se chuchotent des détails sur la convocation d'Enzo et Sarah à la Vie Scolaire. Chloé arrive à son tour dans le couloir, le regard inquiet mais le visage un peu plus serein.",
      "choices": [
        {
          "text": "Si tu fais signe à Chloé de venir se placer à côté de toi dans la file pour l'encourager, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu t'approches d'un groupe de camarades pour essayer d'en savoir plus sur la convocation d'Enzo, rends-toi au 69.",
          "target": 69
        },
        {
          "text": "Si tu restes silencieux dans le rang sans porter attention aux remarques autour de toi, rends-toi au 70.",
          "target": 70
        }
      ],
      "isEnding": false
    },
    "62": {
      "id": 62,
      "text": "Après avoir déjeuné avec Chloé et quelques camarades solidairement rassemblés au self, vous montez ensemble l'escalier menant aux salles du premier étage. Cette présence collective autour de Chloé a manifestement découragé les attaques directes. Cependant, Sarah te jette un regard noir en passant à côté de vous dans le couloir.",
      "choices": [
        {
          "text": "Si tu réponds au regard de Sarah en lui demandant sèchement ce qu'elle a à regarder, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu ignores la provocation et t'installes à côté de Chloé en cours d'histoire-géo, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu t'éloignes pour aller t'asseoir au fond de la classe avec tes amis habituels, rends-toi au 70.",
          "target": 70
        }
      ],
      "isEnding": false
    },
    "63": {
      "id": 63,
      "text": "Tu retrouves Chloé près des bancs de la cour quelques minutes avant la sonnerie de 13h30. Tu prends le temps de discuter avec elle pour t'assurer qu'elle se sent soutenue. Elle te confie que le fait de savoir que certains élèves n'approuvent pas les agissements d'Enzo lui redonne confiance pour affronter la fin de journée.",
      "choices": [
        {
          "text": "Si tu lui proposes d'aller voir ensemble le professeur avant le début du cours pour prévenir de la situation, rends-toi au 72.",
          "target": 72
        },
        {
          "text": "Si tu l'accompagnes jusqu'au rang de la classe en discutant calmement de tout autre sujet, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu profites de l'entrée en classe pour lancer un avertissement vocal à la bande d'Enzo, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "64": {
      "id": 64,
      "text": "Vous passez rapidement à l'infirmerie scolaire juste avant la reprise de 13h30. L'infirmière examine la situation et confirme à Chloé qu'un suivi est mis en place avec la Vie Scolaire. Soulagée, Chloé se sent prête à affronter les cours de l'après-midi et vous regagnez rapidement le bâtiment principal.",
      "choices": [
        {
          "text": "Si vous entrez en classe d'histoire-géo en demandant à vous asseoir l'un à côté de l'autre, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu laisses Chloé s'installer seule pour ne pas attirer davantage l'attention sur vous, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu signales au professeur dès le début du cours qu'Enzo essaie de perturber la classe, rends-toi au 72.",
          "target": 72
        }
      ],
      "isEnding": false
    },
    "65": {
      "id": 65,
      "text": "Tu es sorti seul dans la cour du midi après un repas silencieux. Tu marchandes avec tes doutes, hésitant sur l'attitude à adopter. La sonnerie de 13h30 retentit alors que le reste de la 4ème B se dirige vers les escaliers. Tu te résous à emboîter le pas aux autres pour rejoindre la salle de cours.",
      "choices": [
        {
          "text": "Si tu décides de te rapprocher de Chloé dans la file pour rompre la glace, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu t'installes au fond de la classe sans adresser la parole à quiconque, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu interroges à voix haute Sarah pour savoir ce que la CPE lui a dit pendant la pause, rends-toi au 69.",
          "target": 69
        }
      ],
      "isEnding": false
    },
    "66": {
      "id": 66,
      "text": "Tu retournes à la Vie Scolaire pendant la pause méridienne pour signaler que la campagne de dénigrement orchestrée par Enzo et Sarah se poursuit à mi-voix dans la cantine. Le surveillant chef prend note de tes remarques et promet qu me ronde renforcée sera faite lors des prochaines pauses.",
      "choices": [
        {
          "text": "Si tu regagnes rapidement ton cours d'histoire-géo en t'installant près de Chloé, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu vas directement parler au professeur d'histoire-géo à la porte de la salle, rends-toi au 72.",
          "target": 72
        },
        {
          "text": "Si tu rentres silencieusement en cours pour éviter qu'Enzo ne se doute de ton passage à la Vie Scolaire, rends-toi au 70.",
          "target": 70
        }
      ],
      "isEnding": false
    },
    "67": {
      "id": 67,
      "text": "Tu croises Enzo au foyer du collège juste avant 13h30 et lui rappelles fermement qu me procédure disciplinaire est engagée contre lui s'il n'arrête pas immédiatement. Enzo esquisse un rire nerveux mais ne répond rien, visiblement sous pression après les rappels à l'ordre de la direction.",
      "choices": [
        {
          "text": "Si tu profites de l'interclasse pour avertir la prof que le climat est tendu, rends-toi au 72.",
          "target": 72
        },
        {
          "text": "Si tu rejoins Chloé en salle de cours pour la rassurer sur l'impact de tes interventions, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu vas t'asseoir à ta place habituelle sans chercher de contact avec les uns ou les autres, rends-toi au 70.",
          "target": 70
        }
      ],
      "isEnding": false
    },
    "68": {
      "id": 68,
      "text": "Le cours d'histoire-géographie commence. Tu es assis à côté de Chloé au deuxième rang. M. Lemaire, le professeur, distribue un travail en binôme. Travailler ensemble permet à Chloé de se concentrer sur l'exercice et de relâcher la pression acumulee depuis le matin. Enzo, assis deux rangs plus loin, jette des regards agacés dans votre direction.",
      "choices": [
        {
          "text": "Si tu restes pleinement concentré sur votre devoir d'histoire-géo avec Chloé, rends-toi au 73.",
          "target": 73
        },
        {
          "text": "Si tu profites que le professeur a le dos tourné pour faire une grimace ironique à Enzo, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu demandes à aller aux toilettes pour éviter de faire face aux regards insistants au fond de la classe, rends-toi au 74.",
          "target": 74
        }
      ],
      "isEnding": false
    },
    "69": {
      "id": 69,
      "text": "Dans le couloir, tu te rapproches d'un groupe d'élèves qui discutent à voix basse. Tu apprends qu'Enzo et Sarah ont été vus sortant du bureau du Principal juste avant la fin de la pause déjeuner avec une convocation écrite à faire signer par leurs parents. L'information commence à faire le tour de la classe.",
      "choices": [
        {
          "text": "Si tu lances bruyamment « Bien fait pour eux ! » devant le reste du groupe, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu vas immédiatement annoncer discrètement la nouvelle à Chloé pour la soulager, rends-toi au 73.",
          "target": 73
        },
        {
          "text": "Si tu t'installes en classe sans partager l'information pour ne pas alimenter les commérages, rends-toi au 70.",
          "target": 70
        }
      ],
      "isEnding": false
    },
    "70": {
      "id": 70,
      "text": "Tu t'installes à ta table habituelle au fond de la classe d'histoire-géo sans mot dire. Durant toute l'heure de cours, tu choisis la neutralité absolue. Chloé travaille seule au premier rang, tandis qu me lourde atmosphère d'attente pèse sur la salle. À 14h25, la sonnerie indique la fin de l'heure d'histoire-géo et le passage à la séance informatique de technologie.",
      "choices": [
        {
          "text": "Si tu te diriges en silence vers la salle informatique pour le cours de technologie, rends-toi au 75.",
          "target": 75
        },
        {
          "text": "Si tu profites du déplacement dans le couloir pour te rapprocher de Chloé et lui demander si elle tient le coup, rends-toi au 73.",
          "target": 73
        },
        {
          "text": "Si tu interpelles Enzo à voix haute dans le couloir pour savoir s'il a supprimé la photo, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "71": {
      "id": 71,
      "text": "Ton intervention provocatrice crée une tension immédiate. Enzo et Sarah te font savoir qu'ils ne comptent pas se laisser faire et que leurs amis hors du collège sont au courant. M. Lemaire intervient fermement pour faire cesser les altercations et remet de l'ordre dans la classe sous peine de retenues collectives.",
      "choices": [
        {
          "text": "Si tu t'excuses immédiatement auprès du professeur pour ramener le calme, rends-toi au 73.",
          "target": 73
        },
        {
          "text": "Si tu insistes à voix haute en accusant Enzo devant tout le monde, rends-toi au 72.",
          "target": 72
        },
        {
          "text": "Si tu te tais brusquement et t'enfonces dans ta chaise jusqu me la fin du cours, rends-toi au 70.",
          "target": 70
        }
      ],
      "isEnding": false
    },
    "72": {
      "id": 72,
      "text": "M. Lemaire prend la parole devant les élèves. Informé de la situation par la direction, il suspend le cours prévu pour organiser me discussion sur le respect de la vie privée, le droit à l'image et le cyberharcèlement. L'explication des risques judiciaires et disciplinaires fait grande impression sur l'ensemble des élèves de la 4ème B.",
      "choices": [
        {
          "text": "Si tu participes activement au débat en expliquant les risques du repartage d'images volées, rends-toi au 76.",
          "target": 76
        },
        {
          "text": "Si tu restes silencieux pendant l'exposé du professeur sans lever la main, rends-toi au 73.",
          "target": 73
        },
        {
          "text": "Si tu profites du débat pour prendre ostensiblement à partie Sarah au fond de la classe, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "73": {
      "id": 73,
      "text": "À 14h30, la classe se déplace vers la salle informatique pour l'heure de technologie. Les postes d'ordinateurs sont attribués par binômes. Tu te retrouves installé à un poste. L'accès à Internet ravive l'attention de certains élèves, mais les consignes de travail sont strictes sous la surveillance de l'enseignant.",
      "choices": [
        {
          "text": "Si tu te concentres entièrement sur l'exercice de technologie demandé, rends-toi au 77.",
          "target": 77
        },
        {
          "text": "Si tu t'installes en binôme avec Chloé pour l'aider dans son travail sur ordinateur, rends-toi au 76.",
          "target": 76
        },
        {
          "text": "Si tu tentes d'ouvrir me session pour vérifier discrètement les réseaux sociaux depuis le navigateur de l'école, rends-toi au 78.",
          "target": 78
        }
      ],
      "isEnding": false
    },
    "74": {
      "id": 74,
      "text": "Tu demandes me autorisation exceptionnelle pour sortir de la classe quelques minutes. Dans les couloirs vides du collège, tu croises l'infirmière scolaire qui fait me ronde. Elle s'arrête me minute pour prendre de tes nouvelles et te féliciter si tu as agi avec responsabilité au cours de la journée.",
      "choices": [
        {
          "text": "Si tu profites de cet échange pour lui demander conseil sur la manière de soutenir Chloé efficacement, rends-toi au 76.",
          "target": 76
        },
        {
          "text": "Si tu la remercies rapidement avant de retourner en cours d'histoire-géo, rends-toi au 73.",
          "target": 73
        },
        {
          "text": "Si tu vas flâner près des casiers jusqu me la fin de l'heure pour éviter la classe, rends-toi au 75.",
          "target": 75
        }
      ],
      "isEnding": false
    },
    "75": {
      "id": 75,
      "text": "Pendant le cours de technologie en salle informatique, tu gardes me posture en retrait. Assis à ton ordinateur, tu réalises la séance de travail individuel sans chercher à interagir avec le reste de la classe. Chloé, de son côté, travaille calmement à l'autre bout de la salle avec me amie.",
      "choices": [
        {
          "text": "Si tu restes concentré sur tes tâches jusqu'à la sonnerie de 15h30, rends-toi au 77.",
          "target": 77
        },
        {
          "text": "Si tu envoies un message à Chloé sur la messagerie interne de la session scolaire pour lui souhaiter bon courage, rends-toi au 76.",
          "target": 76
        },
        {
          "text": "Si tu cherches du regard ce qu'Enzo fait sur son poste informatique, rends-toi au 78.",
          "target": 78
        }
      ],
      "isEnding": false
    },
    "76": {
      "id": 76,
      "text": "En travail d'équipe sur les ordinateurs, la solidarité au sein de la classe progresse. Plusieurs élèves affichent ouvertement leur sympathie envers Chloé et refusent de relayer les moqueries d'Enzo et Sarah. L'atmosphère générale de la 4ème B devient plus saine et constructive à mesure que l'après-midi s'achève.",
      "choices": [
        {
          "text": "Si tu restes avec ce groupe positif lors de la sortie des cours à 15h30 pour la récréation de l'après-midi, rends-toi au 79.",
          "target": 79
        },
        {
          "text": "Si tu vas faire un tour seul dans la cour pendant la pause de 15h30, rends-toi au 77.",
          "target": 77
        },
        {
          "text": "Si tu vas interpeller Enzo devant la salle informatique pour exiger des excuses publiques, rends-toi au 78.",
          "target": 78
        }
      ],
      "isEnding": false
    },
    "77": {
      "id": 77,
      "text": "La sonnerie de 15h30 annonce la pause de l'après-midi. C'est me récréation de quinze minutes avant la dernière heure de la journée : l'heure de Vie de Classe organisée par Mme Laurent, la professeure principale. Dans la cour, les élèves se rassemblent par petits groupes calmes.",
      "choices": [
        {
          "text": "Si tu rejoins Chloé et d'autres camarades près des bancs pour passer la pause ensemble, rends-toi au 79.",
          "target": 79
        },
        {
          "text": "Si tu restes près du portique sans participer aux discussions, rends-toi au 80.",
          "target": 80
        },
        {
          "text": "Si tu t'approches d'Enzo pour écouter ce qu'il raconte à ses derniers soutiens, rends-toi au 78.",
          "target": 78
        }
      ],
      "isEnding": false
    },
    "78": {
      "id": 78,
      "text": "Tu constates qu'Enzo essaie encore de discréditer la démarche de sensibilisation en racontant à voix basse que « la direction en fait trop pour me simple plaisanterie ». Plusieurs élèves lui font remarquer que ses actes ont failli mener à l'exclusion d'un camarade et qu'il devrait assumer ses responsabilités.",
      "choices": [
        {
          "text": "Si tu interviens calmement pour soutenir la remarque de tes camarades face à Enzo, rends-toi au 79.",
          "target": 79
        },
        {
          "text": "Si tu te moques ouvertement de lui en disant qu'il est démasqué, rends-toi au 81.",
          "target": 81
        },
        {
          "text": "Si tu t'éloignes sans dire un mot pour rejoindre le rang de Vie de Classe, rends-toi au 80.",
          "target": 80
        }
      ],
      "isEnding": false
    },
    "79": {
      "id": 79,
      "text": "15h45. La classe de 4ème B se retrouve en salle 204 pour l'heure de Vie de Classe menée par Mme Laurent. La professeure consacre la séance à l'établissement de règles de respect mutuel au sein de la classe, tant au collège que sur les espaces numériques privés. L'échange est participatif et constructif.",
      "choices": [
        {
          "text": "Si tu prends la parole pour proposer la création d'une charte de respect entre élèves de 4B, rends-toi au 82.",
          "target": 82
        },
        {
          "text": "Si tu écoutes la séance sans intervenir personnellement, rends-toi au 80.",
          "target": 80
        },
        {
          "text": "Si tu réponds bruyamment à une remarque provocatrice formulée à voix basse par Sarah, rends-toi au 81.",
          "target": 81
        }
      ],
      "isEnding": false
    },
    "80": {
      "id": 80,
      "text": "Pendant l'heure de Vie de Classe, tu écoutes attentivement les explications de Mme Laurent sans lever la main. Les rappels sur les conséquences psychologiques du harcèlement et les sanctions encourues font réfléchir l'ensemble de la classe. Les tensions du matin s'apaisent progressivement dans la salle.",
      "choices": [
        {
          "text": "Si tu vas saluer Chloé à la fin du cours pour lui souhaiter me bonne fin de journée, rends-toi au 82.",
          "target": 82
        },
        {
          "text": "Si tu te précipites vers la sortie dès le coup de sonnerie de 17h00, rends-toi au 83.",
          "target": 83
        },
        {
          "text": "Si tu vas interpeller la prof à son bureau pour me question personnelle, rends-toi au 81.",
          "target": 81
        }
      ],
      "isEnding": false
    },
    "81": {
      "id": 81,
      "text": "Mme Laurent te reprend fermement après me intervention trop vive de ta part en plein cours. Elle rappelle que la séance vise à apaiser la situation et non à réorienter la rancœur contre d'autres élèves. Tu baisses la tête et acceptes de participer au calme jusqu'à la fin de la séance.",
      "choices": [
        {
          "text": "Si tu t'excuses auprès de la professeure à la fin de l'heure à 17h, rends-toi au 82.",
          "target": 82
        },
        {
          "text": "Si tu quittes la classe rapidement dès 17h00 pour rejoindre les grilles du collège, rends-toi au 83.",
          "target": 83
        },
        {
          "text": "Si tu vas retrouver des camarades devant le portail pour discuter des agissements d'Enzo, rends-toi au 84.",
          "target": 84
        }
      ],
      "isEnding": false
    },
    "82": {
      "id": 82,
      "text": "À 17h00, la sonnerie finale retentit. La journée de cours est terminée. Tu ramasses tes affaires et franchis les portes du collège Jean Moulin. Sur le parvis, l'ambiance est détendue. Chloé te rejoint me seconde pour te remercier chaleureusement de ta bienveillance tout au long de cette journée difficile.",
      "choices": [
        {
          "text": "Si tu proposes à Chloé de rentrer à pied ensemble me partie du chemin, rends-toi au 85.",
          "target": 85
        },
        {
          "text": "Si tu la salues chaleureusement avant de rejoindre ton bus de ton côté, rends-toi au 83.",
          "target": 83
        },
        {
          "text": "Si tu t'arrêtes avec me bande de copains devant le collège pour commenter les événements, rends-toi au 84.",
          "target": 84
        }
      ],
      "isEnding": false
    },
    "83": {
      "id": 83,
      "text": "Tu rentres directement chez toi après les cours. La marche du retour te permet de décompresser après me journée particulièrement chargée en émotions. Une fois arrivé à la maison, tu déposes ton sac dans ta chambre et t'installes sur ton bureau pour faire tes devoirs avant le dîner.",
      "choices": [
        {
          "text": "Si tu décides d'éteindre ton téléphone portable pendant la soirée pour réviser dans le calme, rends-toi au 86.",
          "target": 86
        },
        {
          "text": "Si tu allumes ton téléphone pour vérifier si le groupe toxique a été fermé sur les réseaux, rends-toi au 87.",
          "target": 87
        },
        {
          "text": "Si tu profites du repas du soir pour raconter la journée du collège à tes parents, rends-toi au 88.",
          "target": 88
        }
      ],
      "isEnding": false
    },
    "84": {
      "id": 84,
      "text": "Devant les grilles du collège à 17h10, plusieurs élèves reviennent sur les sanctions annoncées. Enzo et Sarah risquent un passage en conseil de discipline si les montages ne sont pas supprimés définitivement. Tu constates que la majorité des camarades désapprouve désormais fermement ce genre de comportement.",
      "choices": [
        {
          "text": "Si tu rappelles à tes amis qu me charte de bonne conduite a été discutée en classe, rends-toi au 85.",
          "target": 85
        },
        {
          "text": "Si tu salues le groupe et rentres chez toi sans tarder, rends-toi au 83.",
          "target": 83
        },
        {
          "text": "Si tu restes à discuter jusqu me 17h30 au risque d'arriver en retard chez toi, rends-toi au 87.",
          "target": 87
        }
      ],
      "isEnding": false
    },
    "85": {
      "id": 85,
      "text": "Tu fais me partie du trajet de retour avec Chloé et d'autres camarades. Vous discutez de vos projets pour le week-end à venir et de vos devoirs. Chloé retrouve le sourire et te réaffirme que ton attitude a fait me immense différence pour elle tout au long de cette journée. Vous vous séparez au croisement de votre rue.",
      "choices": [
        {
          "text": "Si tu rentres chez toi le cœur léger et prêt à passer me soirée calme, rends-toi au 86.",
          "target": 86
        },
        {
          "text": "Si tu envoies un court message à Chloé en arrivant pour lui confirmer que tu es bien rentré, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu allumes immédiatement tes réseaux sociaux pour surveiller l'activité des camarades, rends-toi au 87.",
          "target": 87
        }
      ],
      "isEnding": false
    },
    "86": {
      "id": 86,
      "text": "Lundi soir, 19h00. Tu as éteint ton téléphone portable pour te consacrer à tes devoirs et à ton dîner en famille. Ce temps hors des écrans te permet de prendre du recul sur les tensions de la journée. Tes parents remarquent que tu es particulièrement prévenant ce soir autour de la table.",
      "choices": [
        {
          "text": "Si tu choisis d'aborder avec tes parents la question du cyberharcèlement et des réseaux sociaux, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu vas te coucher tôt sans rallumer ton téléphone pour être en forme le lendemain, rends-toi au 89.",
          "target": 89
        },
        {
          "text": "Si tu rallumes ton téléphone avant de dormir pour jeter un coup d'œil rapide aux notifications, rends-toi au 87.",
          "target": 87
        }
      ],
      "isEnding": false
    },
    "87": {
      "id": 87,
      "text": "Lundi soir, 20h30. Tu fréquentes tes réseaux sociaux. Tu découvres que le groupe « Les Vrais de la 4B » a été intégralement supprimé par Enzo sous la pression de la direction. Quelques messages circulent encore sur la boucle générale de la classe, mais ils sont désormais axés sur la solidarité envers Chloé et le respect des règles.",
      "choices": [
        {
          "text": "Si tu postes un message bienveillant sur la boucle de classe pour soutenir l'esprit collectif, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu déconnectes ton téléphone pour passer me nuit reposante, rends-toi au 89.",
          "target": 89
        },
        {
          "text": "Si tu relances me conversation privée avec un ami pour médire sur les sanctions d'Enzo, rends-toi au 90.",
          "target": 90
        }
      ],
      "isEnding": false
    },
    "88": {
      "id": 88,
      "text": "Pendant le repas du soir, tu expliques à tes parents la situation vécue au collège et la façon dont l'établissement a pris en charge le problème de cyberharcèlement. Tes parents félicitent ta maturité et le courage de la démarche, soulignant l'importance d'agir avec solidarité dans de pareilles circonstances.",
      "choices": [
        {
          "text": "Si tu vas te coucher l'esprit serein après cette discussion rassurante, rends-toi au 89.",
          "target": 89
        },
        {
          "text": "Si tu envoies un dernier message à Chloé pour lui souhaiter me bonne nuit, rends-toi au 87.",
          "target": 87
        },
        {
          "text": "Si tu restes éveillé tard dans ton lit à repenser aux détails de la journée, rends-toi au 90.",
          "target": 90
        }
      ],
      "isEnding": false
    },
    "89": {
      "id": 89,
      "text": "Mardi matin, 7h15. Ton réveil sonne. Tu te prépares pour me nouvelle journée au collège Jean Moulin. Après un bon petit-déjeuner, tu attrapes ton sac et tu te diriges vers le collège. Les premières lueurs du jour éclairent le chemin, et tu te sens prêt à poursuivre l'aventure avec bienveillance et responsabilité.",
      "choices": [
        {
          "text": "Si tu retrouves Chloé devant les grilles du collège dès 7h45 pour franchir le portail ensemble, rends-toi au 91.",
          "target": 91
        },
        {
          "text": "Si tu t'approches du groupe d'amis près des casiers pour échanger sur la journée qui commence, rends-toi au 92.",
          "target": 92
        },
        {
          "text": "Si tu vas directement te ranger devant ta salle de cours pour réviser avant la sonnerie, rends-toi au 93.",
          "target": 93
        }
      ],
      "isEnding": false
    },
    "90": {
      "id": 90,
      "text": "Mardi matin, 7h40. Tu arrives un peu fatigué devant le collège après une nuit agitée. Devant le portail principal, l'ambiance a changé : le sujet du cyberharcèlement est désormais abordé ouvertement par plusieurs classes de 4ème. Tu aperçois Enzo qui entre à la Vie Scolaire accompagné de ses parents.",
      "choices": [
        {
          "text": "Si tu vas soutenir Chloé qui observe la scène depuis le préau avec ses amies, rends-toi au 91.",
          "target": 91
        },
        {
          "text": "Si tu te joins à d'autres élèves devant le portique pour discuter de l'issue possible du dossier, rends-toi au 92.",
          "target": 92
        },
        {
          "text": "Si tu rentres immédiatement dans le bâtiment principal pour préparer ton premier cours de la journée, rends-toi au 93.",
          "target": 93
        }
      ],
      "isEnding": false
    },
    "91": {
      "id": 91,
      "text": "Mardi 8h00. Tu retrouves Chloé devant les grilles du collège. Elle a l'air nettement plus détendue que la veille. Alors que vous franchissez le portail, vous apercevez Enzo qui entre dans le bâtiment administratif, encadré par ses parents et Mme Bernard, la CPE. Quelques élèves s'arrêtent pour regarder la scène à distance.",
      "choices": [
        {
          "text": "Si tu restes avec Chloé sous le préau pour discuter tranquillement avant la sonnerie, rends-toi au 94.",
          "target": 94
        },
        {
          "text": "Si tu te rapproches des fenêtres de la Vie Scolaire pour essayer de voir ce qui se passe, rends-toi au 95.",
          "target": 95
        },
        {
          "text": "Si tu vas directement te ranger devant la salle de cours pour éviter d'alimenter les commérages, rends-toi au 93.",
          "target": 93
        }
      ],
      "isEnding": false
    },
    "92": {
      "id": 92,
      "text": "Près des casiers, un groupe d'élèves de 4ème B discute vivement. La convocation d'Enzo et de ses parents fait réagir tout le monde. Sarah, présente un peu plus loin, évite les regards et consulte nerveusement son téléphone. Les avis sont partagés entre ceux qui trouvent la sanction méritée et ceux qui s'inquiètent des conséquences.",
      "choices": [
        {
          "text": "Si tu interviens dans la discussion pour rappeler la gravité du montage photo, rends-toi au 94.",
          "target": 94
        },
        {
          "text": "Si tu lances à Sarah « Alors, on fait moins la maligne ce matin ? », rends-toi au 95.",
          "target": 95
        },
        {
          "text": "Si tu écoutes sans donner ton avis avant de te ranger au coup de sonnerie, rends-toi au 96.",
          "target": 96
        }
      ],
      "isEnding": false
    },
    "93": {
      "id": 93,
      "text": "Tu montes directement au premier étage pour te ranger devant la salle 204. Le couloir est encore calme. Quelques minutes plus tard, la sonnerie retentit et tes camarades arrivent en rangs dispersés. Mme Laurent s'avance pour ouvrir la porte, accompagnée exceptionnellement de la CPE, Mme Bernard.",
      "choices": [
        {
          "text": "Si tu t'installes au premier rang près de Chloé pour suivre attentivement la séance, rends-toi au 97.",
          "target": 97
        },
        {
          "text": "Si tu vas t'asseoir au fond en chuchotant avec tes voisins sur l'absence d'Enzo, rends-toi au 96.",
          "target": 96
        },
        {
          "text": "Si tu demandes immédiatement si la séance remplacera l'évaluation prévue, rends-toi au 95.",
          "target": 95
        }
      ],
      "isEnding": false
    },
    "94": {
      "id": 94,
      "text": "La sonnerie de 8h05 rassemble les élèves. Tout le monde s'installe en salle 204. Mme Laurent prend la parole : « Ce matin, nous mettons de côté le cours habituel. Avec Mme Bernard, nous allons consacrer deux heures à une séance de sensibilisation sur le cyberharcèlement et l'usage des réseaux sociaux. » Un silence attentif s'installe dans la classe.",
      "choices": [
        {
          "text": "Si tu lèves la main pour poser une question sur le droit à l'image, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu te tournes vers Sarah avec un regard accusateur, rends-toi au 99.",
          "target": 99
        },
        {
          "text": "Si tu ouvres ton cahier pour dessiner discrètement sans trop écouter, rends-toi au 96.",
          "target": 96
        }
      ],
      "isEnding": false
    },
    "95": {
      "id": 95,
      "text": "Tes remarques ou ton attitude créent une petite tension dans la file avant d'entrer en classe. Mme Bernard remarque l'agitation et intervient aussitôt : « Nous sommes ici pour réfléchir et apaiser les choses, pas pour lancer de nouvelles provocations. » Une fois installés, la CPE commence la présentation du cadre légal.",
      "choices": [
        {
          "text": "Si tu te tais et te concentres sur la présentation du diaporama, rends-toi au 97.",
          "target": 97
        },
        {
          "text": "Si tu contestes à voix basse la remarque de la CPE auprès de ton voisin, rends-toi au 99.",
          "target": 99
        },
        {
          "text": "Si tu demandes des excuses discrètes à tes camarades pour ton emportement, rends-toi au 98.",
          "target": 98
        }
      ],
      "isEnding": false
    },
    "96": {
      "id": 96,
      "text": "Tu adoptes une attitude passive durant le début de la séance. Mme Bernard projette un diaporama intitulé « Réseaux sociaux : liberté et responsabilité ». Elle aborde la loi française concernant la diffusion d'images non consenties et rappelle que la responsabilité pénale s'applique dès l'âge de 13 ans.",
      "choices": [
        {
          "text": "Si tu écoutes attentivement ces explications juridiques qui t'interpellent, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu penses que tout cela ne te concerne pas vraiment et laisses vagabonder ton esprit, rends-toi au 100.",
          "target": 100
        },
        {
          "text": "Si tu interpelles publiquement Sarah en lui demandant si elle connaît ces lois, rends-toi au 99.",
          "target": 99
        }
      ],
      "isEnding": false
    },
    "97": {
      "id": 97,
      "text": "Installé près de Chloé, tu suis activement la présentation. Mme Laurent explique la notion d'« effet de meute » sur Internet : comment des élèves ordinaires peuvent devenir cyberharceleurs sans s'en rendre compte, simplement en likant ou en transférant un contenu. Chloé hoche la tête, visiblement soulagée de voir le sujet ainsi décortiqué.",
      "choices": [
        {
          "text": "Si tu partages ton témoignage sur le sentiment de malaise ressenti le dimanche soir, rends-toi au 101.",
          "target": 101
        },
        {
          "text": "Si tu relances le débat en critiquant violemment les modérateurs des réseaux sociaux, rends-toi au 99.",
          "target": 99
        },
        {
          "text": "Si tu prends des notes en silence pour garder une trace des conseils donnés, rends-toi au 98.",
          "target": 98
        }
      ],
      "isEnding": false
    },
    "98": {
      "id": 98,
      "text": "Tu demandes la parole : « Madame, est-ce que partager une photo dans un groupe fermé, c'est aussi grave que de la publier en public ? » Mme Bernard répond très clairement : « Oui. Dès lors que l'image est diffusée à plusieurs personnes sans l'accord de la personne concernée, la loi considère qu'il y a atteinte à la vie privée. La notion de groupe \"privé\" sur les réseaux est une illusion. »",
      "choices": [
        {
          "text": "Si tu renchéris en expliquant le rôle passif des témoins qui n'osent pas intervenir, rends-toi au 101.",
          "target": 101
        },
        {
          "text": "Si tu te tues soudainement quand plusieurs camarades se retournent vers toi, rends-toi au 100.",
          "target": 100
        },
        {
          "text": "Si tu désignes du doigt les membres du groupe Snapchat pour appuyer l'explication, rends-toi au 99.",
          "target": 99
        }
      ],
      "isEnding": false
    },
    "99": {
      "id": 99,
      "text": "Ta remarque ciblée provoque une vive réaction au fond de la classe. Sarah se redresse, rouge de colère : « C'était juste une rigolade, arrêtez de dramatiser ! » Mme Laurent intervient immédiatement en frappant sur son bureau : « Sarah, une moquerie qui blesse et s'accumule n'est plus un jeu. Nous parlons de faits graves qui ont des conséquences réelles sur la santé des élèves. »",
      "choices": [
        {
          "text": "Si tu t'excuses auprès de la professeure pour avoir fait monter la tension, rends-toi au 101.",
          "target": 101
        },
        {
          "text": "Si tu persistes en criant « Assume un peu tes actes ! », rends-toi au 102.",
          "target": 102
        },
        {
          "text": "Si tu t'enfonces dans ta chaise et ne dis plus un mot du reste de la séance, rends-toi au 100.",
          "target": 100
        }
      ],
      "isEnding": false
    },
    "100": {
      "id": 100,
      "text": "La discussion se poursuit sans que tu n'y prennes part activement. Mme Bernard aborde le rôle essentiel des témoins dans une situation de harcèlement. « Ne rien dire, c'est laisser faire. Mais signaler ou soutenir la victime, c'est casser la dynamique du harceleur », explique-t-elle en balayant la salle du regard.",
      "choices": [
        {
          "text": "Si tu lèves la main pour demander comment réagir concrètement sans devenir une cible, rends-toi au 101.",
          "target": 101
        },
        {
          "text": "Si tu continues de regarder par la fenêtre en attendant la fin de l'heure, rends-toi au 103.",
          "target": 103
        },
        {
          "text": "Si tu soupire ostensiblement en disant « De toute façon ça ne changera rien », rends-toi au 102.",
          "target": 102
        }
      ],
      "isEnding": false
    },
    "101": {
      "id": 101,
      "text": "Tu prends la parole avec maturité : « Le plus difficile quand on reçoit ce genre de message, c'est qu'on a peur de devenir la tête de turc si on dit d'arrêter. » Mme Laurent te remercie chaleureusement : « C'est exactement cela. C'est pour ça que la réponse doit être collective. Si plusieurs élèves disent non ensemble, le harceleur perd tout son pouvoir. » Plusieurs camarades approuvent ton intervention.",
      "choices": [
        {
          "text": "Si tu proposes que la classe s'engage ensemble contre le cyberharcèlement, rends-toi au 104.",
          "target": 104
        },
        {
          "text": "Si tu réclames l'exclusion définitive d'Enzo et de Sarah pour donner l'exemple, rends-toi au 102.",
          "target": 102
        },
        {
          "text": "Si tu te rassieds modestement sous les regards approuvants de tes camarades, rends-toi au 103.",
          "target": 103
        }
      ],
      "isEnding": false
    },
    "102": {
      "id": 102,
      "text": "L'atmosphère devient électrique. Les invectives déplacées provoquent un rappel à l'ordre d'une grande fermeté. Mme Laurent suspend la discussion collective pendant cinq minutes pour réimposer le calme dans la salle 204. Elle rappelle que la séance vise à la prise de conscience et non au règlement de comptes.",
      "choices": [
        {
          "text": "Si tu t'excuses sincèrement devant toute la classe pour ton manque de retenue, rends-toi au 104.",
          "target": 104
        },
        {
          "text": "Si tu quittes la salle de cours sans autorisation sous le coup de l'énervement, rends-toi au 105.",
          "target": 105
        },
        {
          "text": "Si tu restes muet et attend la fin des deux heures de sensibilisation, rends-toi au 103.",
          "target": 103
        }
      ],
      "isEnding": false
    },
    "103": {
      "id": 103,
      "text": "À la fin de la première heure de sensibilisation, Mme Bernard distribue un questionnaire anonyme à l'ensemble des élèves. Il comporte des questions sur l'utilisation personnelle des réseaux sociaux, le temps passé en ligne et les situations d'inconfort ou de moqueries déjà observées.",
      "choices": [
        {
          "text": "Si tu réponds au questionnaire avec sérieux et honnêteté, rends-toi au 104.",
          "target": 104
        },
        {
          "text": "Si tu blesse sciemment le questionnaire en écrivant des réponses ironiques, rends-toi au 105.",
          "target": 105
        },
        {
          "text": "Si tu coches les cases au hasard sans prendre le temps de lire les questions, rends-toi au 106.",
          "target": 106
        }
      ],
      "isEnding": false
    },
    "104": {
      "id": 104,
      "text": "Pendant le remplissage des questionnaires, une véritable dynamique positive s'installe. Mme Laurent prend la parole pour présenter une initiative de l'établissement : le programme pHARe contre le harcèlement scolaire, comprenant la rédaction d'une charte numérique par les élèves et la formation d'ambassadeurs collégiens.",
      "choices": [
        {
          "text": "Si tu te portes candidat pour devenir ambassadeur pHARe de la classe de 4B, rends-toi au 107.",
          "target": 107
        },
        {
          "text": "Si tu proposes d'écrire toi-même les règles sanctionnant les dérives sur les réseaux, rends-toi au 105.",
          "target": 105
        },
        {
          "text": "Si tu soutiens l'idée d'une charte mais préfères ne pas occuper de rôle officiel, rends-toi au 106.",
          "target": 106
        }
      ],
      "isEnding": false
    },
    "105": {
      "id": 105,
      "text": "Une attitude provocatrice ou un refus de coopérer attire l'attention de la CPE à la pause de 10h. Mme Bernard demande à te parler individuellement dans le couloir : « Tu sembles sous tension ou en opposition ce matin. Es-tu certain d'avoir mesuré l'impact de ce qui s'est passé dans votre classe ? »",
      "choices": [
        {
          "text": "Si tu reconnais ta maladresse et promets de participer de manière constructive, rends-toi au 107.",
          "target": 107
        },
        {
          "text": "Si tu réponds sur un ton insolent en contestant l'autorité de la Vie Scolaire, rends-toi au 108.",
          "target": 108
        },
        {
          "text": "Si tu baisses la tête sans rien dire en attendant qu me la CPE te laisse repartir, rends-toi au 106.",
          "target": 106
        }
      ],
      "isEnding": false
    },
    "106": {
      "id": 106,
      "text": "10h00. C'est la récréation de milieu de matinée. Dans la cour, l'ambiance au sein de la 4ème B a sensiblement évolué. La séance de sensibilisation a provoqué de nombreuses discussions. Plusieurs élèves entourent Chloé pour lui manifester leur soutien, tandis que Sarah est isolée avec deux amies proches.",
      "choices": [
        {
          "text": "Si tu rejoins le groupe autour de Chloé pour échanger positivement sur la séance, rends-toi au 107.",
          "target": 107
        },
        {
          "text": "Si tu t'approches de Sarah pour lui lancer des moqueries sur son isolement, rends-toi au 108.",
          "target": 108
        },
        {
          "text": "Si tu vas acheter un encas à la cafétéria en restant en dehors des débats, rends-toi au 109.",
          "target": 109
        }
      ],
      "isEnding": false
    },
    "107": {
      "id": 107,
      "text": "Pendant la récréation, l'enthousiasme autour de la charte numérique et des ambassadeurs pHARe grandit. Chloé te dit avec un grand sourire : « Si tu te portes candidat comme ambassadeur, je voterai pour toi ! Tu as été là dès le premier soir. » Plusieurs camarades approuvent cette idée.",
      "choices": [
        {
          "text": "Si tu confirmes ta candidature et commences à réfléchir aux propositions de la charte, rends-toi au 110.",
          "target": 110
        },
        {
          "text": "Si tu te vantes auprès de toute la cour en disant que tu seras le meilleur délégué du collège, rends-toi au 108.",
          "target": 108
        },
        {
          "text": "Si tu déclines modestement en encourageant Chloé à se présenter elle-même, rends-toi au 109.",
          "target": 109
        }
      ],
      "isEnding": false
    },
    "108": {
      "id": 108,
      "text": "Un dérapage verbal dans la cour entraîne une intervention rapide des surveillants. M. Thomas vient recadrer les élèves concernés : « La récréation n'est pas un terrain pour poursuivre les rancœurs de la classe. Si certains cherchent encore les ennuis, ils finiront la matinée en retenue administrative. »",
      "choices": [
        {
          "text": "Si tu t'excuses immédiatement auprès du surveillant pour calmer le jeu, rends-toi au 110.",
          "target": 110
        },
        {
          "text": "Si tu contestes l'avertissement en prétendant qu'on s'acharne sur toi, rends-toi au 111.",
          "target": 111
        },
        {
          "text": "Si tu t'éloignes sans mot dire pour regagner le bâtiment des cours, rends-toi au 109.",
          "target": 109
        }
      ],
      "isEnding": false
    },
    "109": {
      "id": 109,
      "text": "10h15. La sonnerie indique la fin de la pause. Les élèves de 4ème B remontent en salle 204 pour la deuxième heure consacrée au travail pratique : la rédaction des premiers articles de la « Charte du bon usage des espaces numériques de la 4B ». Mme Laurent répartit la classe en petits groupes de travail.",
      "choices": [
        {
          "text": "Si tu travailles activement avec ton groupe en proposant un article sur le respect des photos privées, rends-toi au 110.",
          "target": 110
        },
        {
          "text": "Si tu tentes de faire appliquer des règles totalement irréalistes en imposant tes choix à ton groupe, rends-toi au 111.",
          "target": 111
        },
        {
          "text": "Si tu laisses tes camarades rédiger les phrases et te contentes de recopier le résultat final, rends-toi au 112.",
          "target": 112
        }
      ],
      "isEnding": false
    },
    "110": {
      "id": 110,
      "text": "Ton groupe de travail produit des règles claires et constructives : « 1. Ne jamais publier ou transférer une photo d'un camarade sans son accord explicite. 2. Signaler immédiatement tout groupe toxique à un adulte de confiance. 3. Soutenir publiquement toute personne ciblée par des moqueries. » Mme Laurent félicite votre travail.",
      "choices": [
        {
          "text": "Si tu proposes de présenter vos articles devant l'ensemble de la classe au tableau, rends-toi au 113.",
          "target": 113
        },
        {
          "text": "Si tu demandes à ce que la charte prévoie l'exclusion automatique des élèves harceleurs, rends-toi au 111.",
          "target": 111
        },
        {
          "text": "Si tu laisses un autre membre de ton groupe aller lire le texte au bureau de la prof, rends-toi au 112.",
          "target": 112
        }
      ],
      "isEnding": false
    },
    "111": {
      "id": 111,
      "text": "Une proposition trop rigide ou formulée de manière agressive suscite un débat houleux. Mme Laurent intervient pour recentrer la consigne : « La charte de la classe doit être un document de prévention et d'engagement mutuel, pas un règlement disciplinaire rédigé sous le coup de la colère. »",
      "choices": [
        {
          "text": "Si tu reformules ta proposition de manière plus mesurée et bienveillante, rends-toi au 113.",
          "target": 113
        },
        {
          "text": "Si tu rouspètes ouvertement en prétendant qu'on protège trop les responsables, rends-toi au 114.",
          "target": 114
        },
        {
          "text": "Si tu renonces à participer et laisses tes camarades terminer l'exercice sans toi, rends-toi au 112.",
          "target": 112
        }
      ],
      "isEnding": false
    },
    "112": {
      "id": 112,
      "text": "Le travail en ateliers se poursuit tranquillement. Chaque groupe soumet ses propositions à la professeure principale, qui les regroupe au tableau. Même sans prendre d'initiative marquante, tu constates que la majorité des élèves partage la même volonté de mettre fin aux dérives numériques.",
      "choices": [
        {
          "text": "Si tu votes en faveur de la synthèse finale des articles proposée par la professeure, rends-toi au 113.",
          "target": 113
        },
        {
          "text": "Si tu t'abstiens lors du vote collectif pour marquer ton désintérêt, rends-toi au 114.",
          "target": 114
        },
        {
          "text": "Si tu tentes de glisser un commentaire ironique juste avant la sonnerie du midi, rends-toi au 115.",
          "target": 115
        }
      ],
      "isEnding": false
    },
    "113": {
      "id": 113,
      "text": "À 11h50, la « Charte du bon usage numérique de la 4ème B » est adoptée à la quasi-unanimité. Mme Laurent annonce qu'elle sera affichée en salle 204 et signée par chaque élève de la classe. Chloé sourit radieusement. La sonnerie de 12h00 retentit pour marquer le début de la pause déjeuner.",
      "choices": [
        {
          "text": "Si tu invites Chloé et tes amis de groupe à partager une grande table au self, rends-toi au 116.",
          "target": 116
        },
        {
          "text": "Si tu te précipites vers la cantine en bousculant les autres dans le couloir pour arriver le premier, rends-toi au 115.",
          "target": 115
        },
        {
          "text": "Si tu pars manger seul rapidement pour aller lire tranquillement au CDI, rends-toi au 114.",
          "target": 114
        }
      ],
      "isEnding": false
    },
    "114": {
      "id": 114,
      "text": "12h05. La file d'attente du restaurant scolaire s'allonge. Tu avances avec ton plateau dans une ambiance nettement plus sereine que la veille. Les élèves discutent des événements de la matinée, et plusieurs camarades expriment leur satisfaction d'avoir pu parler ouvertement des réseaux sociaux.",
      "choices": [
        {
          "text": "Si tu t'installes à une table avec Chloé pour continuer à échanger sur les projets de la classe, rends-toi au 116.",
          "target": 116
        },
        {
          "text": "Si tu t'assieds avec tes amis habituels en évitant d'aborder à nouveau le sujet du harcèlement, rends-toi au 117.",
          "target": 117
        },
        {
          "text": "Si tu tentes d'interpeller Sarah au loin pour lui demander ce qu me son père a dit à la CPE, rends-toi au 115.",
          "target": 115
        }
      ],
      "isEnding": false
    },
    "115": {
      "id": 115,
      "text": "Une bousculade ou une remarque déplacée dans la file du self provoque une intervention de l'équipe de restauration. Un des chefs de table intervient pour rappeler les règles élémentaires de politesse. Cet incident attire des regards agacés de tes camarades qui souhaitaient simplement déjeuner au calme.",
      "choices": [
        {
          "text": "Si tu t'excuses immédiatement et t'installes tranquillement pour finir ton repas, rends-toi au 117.",
          "target": 117
        },
        {
          "text": "Si tu réponds sèchement en haussant les épaules avant de quitter la cantine, rends-toi au 118.",
          "target": 118
        },
        {
          "text": "Si tu vas t'asseoir dans un coin isolé de la salle sans adresser la parole à personne, rends-toi au 114.",
          "target": 114
        }
      ],
      "isEnding": false
    },
    "116": {
      "id": 116,
      "text": "Le déjeuner se déroule dans une atmosphère particulièrement chaleureuse. Autour de la table, Chloé, toi et quatre autres élèves discutez des rôles d'ambassadeurs pHARe. « On pourrait organiser une petite présentation pour les classes de 6ème et 5ème ! », propose un camarade. L'idée enthousiasme tout le monde.",
      "choices": [
        {
          "text": "Si tu te portes volontaire pour rédiger le projet à présenter à la CPE, rends-toi au 119.",
          "target": 119
        },
        {
          "text": "Si tu suggères d'imposer cette présentation à tous les élèves sans leur demander leur avis, rends-toi au 118.",
          "target": 118
        },
        {
          "text": "Si tu approuves l'idée tout en laissant les autres organiser les détails, rends-toi au 117.",
          "target": 117
        }
      ],
      "isEnding": false
    },
    "117": {
      "id": 117,
      "text": "Après le repas, vers 12h45, les élèves se dispersent dans la cour du collège. Le soleil brille et l'ambiance générale est détendue. Tu aperçois Mme Bernard qui discute calmement avec Enzo près de la Vie Scolaire. Enzo ne semble plus arrogant : il écoute les explications de la CPE la tête baissée.",
      "choices": [
        {
          "text": "Si tu te diriges vers le banc sous le préau pour discuter sereinement avec tes camarades, rends-toi au 119.",
          "target": 119
        },
        {
          "text": "Si tu pointes du doigt Enzo en rigolant avec deux élèves pour te moquer de sa situation, rends-toi au 118.",
          "target": 118
        },
        {
          "text": "Si tu vas faire un tour au Foyer des élèves pour jouer au baby-foot jusqu'à la sonnerie, rends-toi au 120.",
          "target": 120
        }
      ],
      "isEnding": false
    },
    "118": {
      "id": 118,
      "text": "Une moquerie à l'égard d'Enzo est entendue par un surveillant. M. Thomas s'approche immédiatement : « Ce n'est pas parce qu'un élève a commis une faute qu'il faut se transformer à son tour en harceleur. La bienveillance s'applique à tout le monde. » Tu réalises que le respect doit concerner chaque membre du collège.",
      "choices": [
        {
          "text": "Si tu admets ton erreur et t'excuses auprès du surveillant, rends-toi au 119.",
          "target": 119
        },
        {
          "text": "Si tu t'emportes en prétendant qu'Enzo mérite bien pire, rends-toi au 121.",
          "target": 121
        },
        {
          "text": "Si tu te tais et pars t'installer seul dans un coin du préau, rends-toi au 120.",
          "target": 120
        }
      ],
      "isEnding": false
    },
    "119": {
      "id": 119,
      "text": "13h15. Avant le coup de sonnerie de l'après-midi, tu croises Mme Laurent dans le couloir principal. Tu lui partages l'idée née au self de former un groupe d'ambassadeurs collégiens contre le cyberharcèlement. La professeure est enthousiaste : « C'est une excellente initiative ! Nous pourrons en parler dès la semaine prochaine en heure de Vie de Classe. »",
      "choices": [
        {
          "text": "Si tu vas annoncer la bonne nouvelle à Chloé et à ton groupe d'amis, rends-toi au 122.",
          "target": 122
        },
        {
          "text": "Si tu réclames d'être nommé d'office chef du projet sans concertation avec la classe, rends-toi au 121.",
          "target": 121
        },
        {
          "text": "Si tu te ranges sagement devant la salle de cours en attendant la sonnerie de 13h25, rends-toi au 120.",
          "target": 120
        }
      ],
      "isEnding": false
    },
    "120": {
      "id": 120,
      "text": "13h25. La sonnerie annonce la reprise des cours de l'après-midi. La classe de 4ème B se range devant la salle de mathématiques. L'ambiance est calme et apaisée. Enzo rejoint le rang en silence et vient s'installer au premier rang. Le travail d'explication et de sensibilisation du matin a marqué un tournant décisif.",
      "choices": [
        {
          "text": "Si tu adresses un signe amical à Chloé en entrant en classe pour l'encourager, rends-toi au 122.",
          "target": 122
        },
        {
          "text": "Si tu lances un coup d'œil moqueur vers Enzo avant de sortir tes affaires, rends-toi au 121.",
          "target": 121
        },
        {
          "text": "Si tu t'installes tranquillement à ta place pour vous concentrer sur le cours, rends-toi au 123.",
          "target": 123
        }
      ],
      "isEnding": false
    },
    "121": {
      "id": 121,
      "text": "Enzo réagit vivement à ton attitude ou tes remarques, déclenchant un rappel à l'ordre du professeur de mathématiques. « Pas d'incidents pendant le cours ! », tranche l'enseignant en isolant les perturbateurs. L'atmosphère reste tendue pour la fin de la semaine.",
      "choices": [
        {
          "text": "Si tu insistes pour répliquer publiquement à Enzo malgré les avertissements, rends-toi au 124.",
          "target": 124
        },
        {
          "text": "Si tu baisses la tête et t'isoles à ton bureau en refusant de parler à quiconque, rends-toi au 125.",
          "target": 125
        },
        {
          "text": "Si tu décides de demander un entretien avec l'infirmière scolaire à la pause, rends-toi au 126.",
          "target": 126
        }
      ],
      "isEnding": false
    },
    "122": {
      "id": 122,
      "text": "Tu annonces avec enthousiasme à Chloé et plusieurs camarades le lancement du projet d'ambassadeurs pHARe et l'affichage officiel de la charte numérique de la 4ème B. Tout le monde salue la démarche et s'investit pour préparer les futures actions du collège.",
      "choices": [
        {
          "text": "Si tu proposes d'organiser une réunion de préparation du projet avec la CPE dès vendredi, rends-toi au 127.",
          "target": 127
        },
        {
          "text": "Si tu t'emportes contre les élèves qui hésitent encore à signer la charte, rends-toi au 124.",
          "target": 124
        },
        {
          "text": "Si tu restes discret et laisses Chloé porter la présentation du projet devant la classe, rends-toi au 128.",
          "target": 128
        }
      ],
      "isEnding": false
    },
    "123": {
      "id": 123,
      "text": "Tu poursuis les cours de la semaine dans une posture d'observation neutre. La situation semble s'être tassée en apparence, mais les échanges à voix basse et l'usage des téléphones en dehors des cours restent ambigus au sein du collège.",
      "choices": [
        {
          "text": "Si tu choisis d'ignorer complètement les discussions qui circulent encore, rends-toi au 125.",
          "target": 125
        },
        {
          "text": "Si tu décides de transmettre discrètement tes captures d'écran enregistrées au Principal, rends-toi au 129.",
          "target": 129
        },
        {
          "text": "Si tu essaies d'interpeller Sarah dans le couloir de manière agressive, rends-toi au 130.",
          "target": 130
        }
      ],
      "isEnding": false
    },
    "124": {
      "id": 124,
      "text": "Ta colère prend le dessus et tu provoques verbalement les responsables des moqueries devant d'autres élèves dans la cour. Des noms sont échangés et un attroupement se forme avant l'arrivée des surveillants.",
      "choices": [
        {
          "text": "Si tu continues d'insulter Enzo malgré les injonctions du surveillant, rends-toi au 131.",
          "target": 131
        },
        {
          "text": "Si tu réalises ton erreur et demandes à t'expliquer calmement chez la CPE, rends-toi au 129.",
          "target": 129
        },
        {
          "text": "Si tu tournes le dos et t'enfuis vers les toilettes pour éviter les sanctions, rends-toi au 130.",
          "target": 130
        }
      ],
      "isEnding": false
    },
    "125": {
      "id": 125,
      "text": "Tu as fermé les yeux et tu t'es totalement retiré de la situation. Dans la classe, personne n'ose plus aborder le sujet ouvertement, mais l'exclusion de Chloé s'aggrave de jour en jour sans que personne ne s'en inquiète.",
      "choices": [
        {
          "text": "Si tu quittes le collège vendredi soir sans jamais avoir parlé aux adultes ni à Chloé, rends-toi au 136.",
          "target": 136
        },
        {
          "text": "Si tu relances me conversation moqueuse en ligne pour te rapprocher de la bande d'Enzo, rends-toi au 137.",
          "target": 137
        },
        {
          "text": "Si tu restes dans l'indifférence totale face à l'isolement de ta camarade, rends-toi au 138.",
          "target": 138
        }
      ],
      "isEnding": false
    },
    "126": {
      "id": 126,
      "text": "L'infirmière scolaire prend le temps de t'écouter et te conseille sur la meilleure attitude à adopter pour soutenir les victimes de dénigrement sans céder à la violence ni à l'indifférence.",
      "choices": [
        {
          "text": "Si tu suis ses conseils en rejoignant l'équipe des ambassadeurs pHARe, rends-toi au 127.",
          "target": 127
        },
        {
          "text": "Si tu préfères ne pas t'impliquer davantage et rentrer chez toi, rends-toi au 128.",
          "target": 128
        },
        {
          "text": "Si tu t'emportes publiquement contre Enzo juste après cet entretien, rends-toi au 131.",
          "target": 131
        }
      ],
      "isEnding": false
    },
    "127": {
      "id": 127,
      "text": "La réunion avec la CPE et Mme Laurent valide l'organisation du groupe d'ambassadeurs. Des actions concrètes sont planifiées et les preuves collectées permettent d'engager les sanctions appropriées contre les auteurs du montage photo.",
      "choices": [
        {
          "text": "Si tu finalises le projet avec Chloé et l'équipe pédagogique pour la fin de semaine, rends-toi au 132.",
          "target": 132
        },
        {
          "text": "Si tu présentes le bilan des actions lors du rassemblement des délégués, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu célèbres cette réussite collective avec toute la classe de 4ème B, rends-toi au 134.",
          "target": 134
        }
      ],
      "isEnding": false
    },
    "128": {
      "id": 128,
      "text": "Le calme revient progressivement dans l'établissement. Bien que tu n'aies pas cherché à occuper le devant de la scène, ta démarche d'écoute et de soutien envers Chloé a porté ses fruits de manière mesurée et efficace.",
      "choices": [
        {
          "text": "Si tu restes un soutien discret et fiable auprès de Chloé au quotidien, rends-toi au 134.",
          "target": 134
        },
        {
          "text": "Si tu participes activement à la signature de la charte de classe vendredi, rends-toi au 135.",
          "target": 135
        },
        {
          "text": "Si tu relâches ta vigilance et oublies les engagements pris durant la semaine, rends-toi au 125.",
          "target": 125
        }
      ],
      "isEnding": false
    },
    "129": {
      "id": 129,
      "text": "Grâce aux captures d'écran précises et au signalement transmis aux adultes, la direction du collège traite le dossier avec rigueur. Enzo et Sarah sont convoqués et cadrés fermement par l'administration.",
      "choices": [
        {
          "text": "Si tu accompagnes Chloé lors de son bilan de fin de semaine à la Vie Scolaire, rends-toi au 132.",
          "target": 132
        },
        {
          "text": "Si tu mobilises tes camarades pour signer la charte citoyenne du collège, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu bascules dans des attaques personnelles contre Enzo après les sanctions, rends-toi au 130.",
          "target": 130
        }
      ],
      "isEnding": false
    },
    "130": {
      "id": 130,
      "text": "Ta volonté de punir toi-même les responsables crée de nouvelles tensions. Des rumeurs réciproques circulent et des disputes éclatent dans les couloirs, menant à une confusion générale.",
      "choices": [
        {
          "text": "Si tu te retrouves sanctionné d'une retenue avec Enzo pour bousculade dans la cour, rends-toi au 131.",
          "target": 131
        },
        {
          "text": "Si tu persistes à faire justice toi-même sur les réseaux sociaux durant le week-end, rends-toi au 139.",
          "target": 139
        },
        {
          "text": "Si tu acceptes enfin de cesser les provocations chez le Principal vendredi soir, rends-toi au 140.",
          "target": 140
        }
      ],
      "isEnding": false
    },
    "131": {
      "id": 131,
      "text": "L'escalade verbale et physique débouche sur un rapport disciplinaire. La direction doit sanctionner les provocations mutuelles, masquant l'enjeu initial de la protection contre le cyberharcèlement.",
      "choices": [
        {
          "text": "Si tu reçois un avertissement dans ton carnet de correspondance vendredi, rends-toi au 141.",
          "target": 141
        },
        {
          "text": "Si la dégradation du climat de classe entraîne des heures de retenue collectives, rends-toi au 142.",
          "target": 142
        },
        {
          "text": "Si tu t'exposes à des convocations de tes parents à la Vie Scolaire, rends-toi au 143.",
          "target": 143
        }
      ],
      "isEnding": false
    },
    "132": {
      "id": 132,
      "text": "La démarche engagée avec la direction et les enseignants aboutit à un résultat remarquable. Le groupe toxique est définitivement fermé, les preuves sont remises à l'administration et Chloé retrouve sa sérénité.",
      "choices": [
        {
          "text": "Si tu célèbres le retour d'un climat serein avec Chloé et tes camarades à la fin de la semaine, rends-toi au 146.",
          "target": 146
        },
        {
          "text": "Si tu t'engages officiellement comme ambassadeur pHARe du collège Jean Moulin, rends-toi au 147.",
          "target": 147
        },
        {
          "text": "Si tu participes à l'inauguration de la charte numérique lors de l'assemblée des élèves, rends-toi au 148.",
          "target": 148
        }
      ],
      "isEnding": false
    },
    "133": {
      "id": 133,
      "text": "L'alliance entre les élèves attentifs et l'équipe pédagogique transforme l'ambiance du collège. La charte citoyenne est affichée dans chaque classe et des règles claires de respect numérique sont adoptées.",
      "choices": [
        {
          "text": "Si tu assistes à la validation de la charte par la direction du collège vendredi après-midi, rends-toi au 147.",
          "target": 147
        },
        {
          "text": "Si tu organises un groupe de soutien citoyen pour accueillir chaleureusement Chloé en classe, rends-toi au 149.",
          "target": 149
        },
        {
          "text": "Si tu conclus cette aventure en constatant la force de la solidarité collective contre le harcèlement, rends-toi au 150.",
          "target": 150
        }
      ],
      "isEnding": false
    },
    "134": {
      "id": 134,
      "text": "Ta bienveillance constante et tes réactions mesurées ont permis à Chloé de ne pas sombrer dans l'isolement. Même sans éclat public, ton action a fait toute la différence au quotidien.",
      "choices": [
        {
          "text": "Si tu termines la semaine en marchant aux côtés de Chloé sous les encouragements de tes amis, rends-toi au 146.",
          "target": 146
        },
        {
          "text": "Si tu reçois les félicitations discrètes de Mme Laurent pour ta maturité exemplaire, rends-toi au 148.",
          "target": 148
        },
        {
          "text": "Si tu signes fièrement la charte de respect numérique avant le départ en week-end, rends-toi au 149.",
          "target": 149
        }
      ],
      "isEnding": false
    },
    "135": {
      "id": 135,
      "text": "En refusant le jeu de la moquerie et en apportant ton soutien dès les premiers instants, tu as contribué à désamorcer le piège du harcèlement en ligne et à réunir la classe autour de valeurs positives.",
      "choices": [
        {
          "text": "Si tu constates que les responsables ont supprimé leurs comptes toxiques sous la pression des adultes, rends-toi au 148.",
          "target": 148
        },
        {
          "text": "Si tu vois Chloé sourire et participer pleinement aux cours de la 4ème B vendredi, rends-toi au 149.",
          "target": 149
        },
        {
          "text": "Si tu quittes le collège en sachant que tu as agi en citoyen responsable et solidaire, rends-toi au 150.",
          "target": 150
        }
      ],
      "isEnding": false
    },
    "136": {
      "id": 136,
      "text": "En choisissant de fermer les yeux, de ne conserver aucune preuve et de ne parler à aucun adulte, tu as laissé la situation se dégrader. Durant tout le reste de la semaine, le groupe privé s'est contenté de changer de nom. Chloé, privée de soutien et submergée par la honte, a fini par ne plus venir en cours. L'ambiance dans la classe s'est détériorée et la peur d'être la prochaine cible s'est installée chez tout le monde.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'INACTION / LA LOI DU SILENCE (Fin négative)",
        "tone": "negative",
        "pedagogicalMessage": "Liker, relayer ou garder le silence face au cyberharcèlement, c'est laisser la violence numérique continuer et devenir complice de la souffrance d'un camarade.",
        "outro": "N'hésite pas à rejouer pour faire d'autres choix et découvrir les autres fins !"
      }
    },
    "137": {
      "id": 137,
      "text": "Pour ne pas risquer d'être rejeté par Enzo et Sarah, tu as suivi l'effet de meute en envoyant des emojis moqueurs. Tes réactions ont encouragé les harceleurs à amplifier leurs attaques en créant d'autres boucles de discussion. Chloé s'est retrouvée totalement isolée et la haine en ligne s'est propagée à d'autres élèves de 4ème sans que personne ne s'y oppose.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'INACTION / LA LOI DU SILENCE (Fin négative)",
        "tone": "negative",
        "pedagogicalMessage": "Liker, relayer ou garder le silence face au cyberharcèlement, c'est laisser la violence numérique continuer et détruire le climat scolaire.",
        "outro": "N'hésite pas à rejouer pour faire d'autres choix et découvrir les autres fins !"
      }
    },
    "138": {
      "id": 138,
      "text": "Tu as pensé que cette histoire ne te regardait pas et tu as supprimé les notifications sans rien faire. Sans l'intervention d'aucun témoin ni signalement aux adultes, les moqueries sur le montage photo ont continué de circuler pendant des semaines. Chloé a dû changer d'établissement scolaire au trimestre suivant, brisée par l'indifférence générale.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'INACTION / LA LOI DU SILENCE (Fin négative)",
        "tone": "negative",
        "pedagogicalMessage": "Liker, relayer ou garder le silence face au cyberharcèlement, c'est laisser la violence numérique continuer. Un témoin muet laisse carte blanche aux harceleurs.",
        "outro": "N'hésite pas à rejouer pour faire d'autres choix et découvrir les autres fins !"
      }
    },
    "139": {
      "id": 139,
      "text": "Tu as préféré quitter les groupes en silence sans jamais prévenir la CPE ou les professeurs. Ton départ n'a pas empêché le montage de tourner de téléphone en téléphone. Les rumeurs ont pris une telle ampleur qu'elles ont dépassé l'enceinte du collège, laissant Chloé démunie et sans aucune aide face aux moqueries en ligne.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'INACTION / LA LOI DU SILENCE (Fin négative)",
        "tone": "negative",
        "pedagogicalMessage": "Liker, relayer ou garder le silence face au cyberharcèlement, c'est laisser la violence numérique continuer. Quitter un groupe ne suffit pas : il faut alerter les adultes.",
        "outro": "N'hésite pas à rejouer pour faire d'autres choix et découvrir les autres fins !"
      }
    },
    "140": {
      "id": 140,
      "text": "Tu as espéré que le temps réglerait le problème sans que tu n'aies à intervenir. Malheureusement, l'absence de réaction des témoins a renforcé l'impunité des auteurs du montage. Les attaques se sont répétées sur d'autres réseaux sociaux et le malaise au sein de la classe de 4ème B s'est installé de manière permanente.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'INACTION / LA LOI DU SILENCE (Fin négative)",
        "tone": "negative",
        "pedagogicalMessage": "Liker, relayer ou garder le silence face au cyberharcèlement, c'est laisser la violence numérique continuer. L'inactivité des témoins est le premier carburant des harceleurs.",
        "outro": "N'hésite pas à rejouer pour faire d'autres choix et découvrir les autres fins !"
      }
    },
    "141": {
      "id": 141,
      "text": "En voulant défendre Chloé, tu as choisi de répondre par des insultes et des menaces directes contre Enzo et Sarah. La dispute a dégénéré en altercation physique dans la cour du collège. Résultat : vous vous retrouvez tous sanctionnés d'un avertissement et d'heures de retenue. La vraie souffrance de Chloé a été oubliée au milieu du conflit général.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : LA MALADRESSE / LA VENGEANCE CONTRE-PRODUCTIVE (Fin mitigée)",
        "tone": "mitigee",
        "pedagogicalMessage": "On ne combat pas le cyberharcèlement par l'insulte ou la vengeance ; la justice scolaire et le calme sont indispensables pour protéger les victimes.",
        "outro": "N'hésite pas à rejouer pour faire d'autres choix et découvrir les autres fins !"
      }
    },
    "142": {
      "id": 142,
      "text": "Tu as tenté de faire justice toi-même en publiant des messages d'attaque à ton tour sur les réseaux sociaux. Cette vengeance en ligne a provoqué une guerre de clans au sein de la classe de 4ème B. Les professeurs et la direction ont dû sanctionner les deux camps, créant de l'amertume sans jamais traiter le problème du respect de la vie privée.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : LA MALADRESSE / LA VENGEANCE CONTRE-PRODUCTIVE (Fin mitigée)",
        "tone": "mitigee",
        "pedagogicalMessage": "On ne combat pas le cyberharcèlement par l'insulte ou la vengeance ; recourir à la surenchère en ligne aggrave les conflits au lieu de protéger.",
        "outro": "N'hésite pas à rejouer pour faire d'autres choix et découvrir les autres fins !"
      }
    },
    "143": {
      "id": 143,
      "text": "Tu as affiché publiquement l'affaire en plein cours avec agressivité au lieu d'en parler calmement en privé avec un adulte. Ton emportement a braqué toute la classe et poussé Enzo à se poser en victime. Les convocations de parents se sont multipliées et l'atmosphère au collège est devenue très lourde pour tout le monde.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : LA MALADRESSE / LA VENGEANCE CONTRE-PRODUCTIVE (Fin mitigée)",
        "tone": "mitigee",
        "pedagogicalMessage": "On ne combat pas le cyberharcèlement par l'insulte ou la vengeance ; la méthode et la retenue permettent d'agir efficacement avec le soutien des adultes.",
        "outro": "N'hésite pas à rejouer pour faire d'autres choix et découvrir les autres fins !"
      }
    },
    "144": {
      "id": 144,
      "text": "Tu as voulu faire pression sur Sarah en diffusant des rumeurs sur elle pour « lui donner une leçon ». Cette démarche contre-productive a déplacé le harcèlement sans le résoudre. Mme Bernard a dû intervenir pour recadrer l'ensemble des élèves et rappeler que la vengeance numérique constitue également une infraction.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : LA MALADRESSE / LA VENGEANCE CONTRE-PRODUCTIVE (Fin mitigée)",
        "tone": "mitigee",
        "pedagogicalMessage": "On ne combat pas le cyberharcèlement par l'insulte ou la vengeance ; répliquer par de nouvelles moqueries perturbe l'action disciplinaire.",
        "outro": "N'hésite pas à rejouer pour faire d'autres choix et découvrir les autres fins !"
      }
    },
    "145": {
      "id": 145,
      "text": "Tu as refusé de dialoguer avec les adultes du collège en contestant brutalement les consignes des surveillants. Ta réaction d'opposition a détourné l'attention du sujet principal. Enzo a échappé aux sanctions majeures faute de témoignages calmes et ordonnés, laissant une situation confuse au collège.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : LA MALADRESSE / LA VENGEANCE CONTRE-PRODUCTIVE (Fin mitigée)",
        "tone": "mitigee",
        "pedagogicalMessage": "On ne combat pas le cyberharcèlement par l'insulte ou la vengeance ; s'associer aux adultes est la seule manière d'obtenir justice et sécurité.",
        "outro": "N'hésite pas à rejouer pour faire d'autres choix et découvrir les meileurs fins !"
      }
    },
    "146": {
      "id": 146,
      "text": "Dès le premier soir, tu as eu les bons réflexes : faire des captures d'écran des preuves, rassurer Chloé en privé et alerter rapidement Mme Bernard et Mme Laurent. Grâce à ta démarche responsable, le groupe privé a été fermé, Enzo et Sarah ont été convoqués et cadrés, et Chloé a pu traverser cette épreuve la tête haute entourée d'amis solides.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'ALLIANCE JUSTE / LE RÉFLEXE CITOYEN (Fin positive)",
        "tone": "positive",
        "pedagogicalMessage": "Un témoin qui conserve les preuves et brise le silence avec les adultes protège la victime et transforme tout le collège.",
        "outro": "Bravo pour tes choix citoyens ! N'hésite pas à rejouer pour explorer d'autres parcours !"
      }
    },
    "147": {
      "id": 147,
      "text": "Ton initiative d'alerter les adultes et d'encourager la classe à réagir a porté ses fruits. En devenant ambassadeur pHARe avec d'autres collégiens, tu as aidé à rédiger la charte de respect numérique de la 4ème B. Les responsables ont présenté des excuses formelles, les contenus ont été supprimés et la classe est sortie plus soudée et respectueuse que jamais.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'ALLIANCE JUSTE / LE RÉFLEXE CITOYEN (Fin positive)",
        "tone": "positive",
        "pedagogicalMessage": "Un témoin qui conserve les preuves et brise le silence avec les adultes protège la victime et construit une vraie solidarité collégienne.",
        "outro": "Bravo pour tes choix citoyens ! N'hésite pas à rejouer pour explorer d'autres parcours !"
      }
    },
    "148": {
      "id": 148,
      "text": "Grâce à ton soutien constant envers Chloé et à ton témoignage clair auprès de la CPE, l'engrenage du cyberharcèlement a été stoppé net. Une séance de sensibilisation efficace a sensibilisé l'ensemble des élèves de 4ème au droit à l'image et aux risques des dérives en ligne. Ton courage citoyen a fait du collège Jean Moulin un endroit plus sûr pour tous.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'ALLIANCE JUSTE / LE RÉFLEXE CITOYEN (Fin positive)",
        "tone": "positive",
        "pedagogicalMessage": "Un témoin qui conserve les preuves et brise le silence avec les adultes protège la victime et fait respecter les lois de la république.",
        "outro": "Bravo pour tes choix citoyens ! N'hésite pas à rejouer pour explorer d'autres parcours !"
      }
    },
    "149": {
      "id": 149,
      "text": "En choisissant de refuser la moquerie et d'accompagner Chloé dès son arrivée au collège tout en transmettant les preuves à la direction, tu as brisé l'effet de meute. Les sanctions adaptées prises par le Principal et la signature de la charte numérique par chaque élève ont rétabli un climat de confiance et d'amitié durable dans la classe.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'ALLIANCE JUSTE / LE RÉFLEXE CITOYEN (Fin positive)",
        "tone": "positive",
        "pedagogicalMessage": "Un témoin qui conserve les preuves et brise le silence avec les adultes protège la victime et rend la justice scolaire possible.",
        "outro": "Bravo pour tes choix citoyens ! N'hésite pas à rejouer pour explorer d'autres parcours !"
      }
    },
    "150": {
      "id": 150,
      "text": "Tu as su réagir avec maturité, réflexion et empathie. En associant l'écoute de ta camarade, la sauvegarde des preuves et le dialogue avec la communauté éducative, tu as permis de transformer un événement douloureux en une prise de conscience collective exemplaire. Chloé te remercie chaleureusement et la 4ème B aborde la suite de l'année sereinement.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'ALLIANCE JUSTE / LE RÉFLEXE CITOYEN (Fin positive)",
        "tone": "positive",
        "pedagogicalMessage": "Un témoin qui conserve les preuves et brise le silence avec les adultes protège la victime et transforme durablement le collège.",
        "outro": "Bravo pour tes choix citoyens ! N'hésite pas à rejouer pour explorer d'autres parcours !"
      }
    }
  },
  "totalParagraphs": 150,
  "debateQuestions": [
    "La notion de « groupe privé » : Pourquoi penser qu'un groupe Snapchat ou WhatsApp restreint est « privé » est-il une illusion ? Que dit la loi française sur la diffusion d'images non consenties dans une boucle de discussion ?",
    "La responsabilité des témoins et l'effet de meute : Pourquoi un simple emoji rigolard ou un \"like\" contribue-t-il au cyberharcèlement ? Comment l'effet de meute pousse-t-il des élèves ordinaires à participer à une injustice ?",
    "Les bons réflexes face à un contenu toxique : Quels sont les 3 réflexes immédiats à avoir quand on est témoin d'une photo détournée ou de moqueries en ligne visant un camarade ?",
    "Prévenir un adulte vs « balancer » : Quelle est la différence essentielle entre « cafter » pour faire nuire et « alerter un adulte » pour protéger une personne en danger ?"
  ],
  "coverTheme": {
    "primary": "#3B335E",
    "secondary": "#554A85",
    "accent": "#E8A852",
    "motif": "reseaux"
  },
  "status": "playable",
  "isCustom": false
};
