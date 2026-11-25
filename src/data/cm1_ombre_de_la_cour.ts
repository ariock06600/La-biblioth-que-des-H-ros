import type { BookData } from '../types/book';

/**
 * Données intégrales (150 paragraphes) extraites directement du Google Doc :
 * « LDVELH CM1 - L'Ombre de la Cour (150 paragraphes) ».
 * Tous les liens internes (1 à 150), les 15 fins pédagogiques (136 à 150)
 * et les questions de débat EMC ont été vérifiés automatiquement.
 */
export const cm1OmbreDeLaCour: BookData = {
  "id": "cm1-ombre-de-la-cour",
  "title": "L'Ombre de la Cour",
  "subtitle": "Un livre dont tu es le héros",
  "grade": "CM1",
  "section": "primaire",
  "cycleLabel": "Cycle 3",
  "ageRange": "9-10 ans",
  "theme": "Harcèlement silencieux, inclusion & PAI",
  "howToPlay": "Bienvenue dans cette aventure ! Ici, c'est toi le personnage principal. Tu ne vas pas lire les pages dans l'ordre habituel de 1 à 30. À la fin de chaque paragraphe, tu auras trois choix. Selon ta décision, tu devras vous rendre au numéro indiqué en gras (par exemple : rends-toi au 8).",
  "introduction": [
    "Tu es élève en classe de CM1 dans l'école du Marronnier. Ce matin, c'est un jour particulier : Samy revient enfin en classe ! Il a été absent pendant plusieurs semaines à cause d'une maladie chronique non contagieuse. Il est un peu fatigué, a des soins particuliers et un PAI (Projet d'Accueil Individualisé).",
    "Mais dès le rang du matin, tu remarques quelque chose de bizarre. Hugo et Léa, deux élèves très populaires de la classe, chuchotent et rigolent. Ils ont décidé de lancer le « jeu du fantôme » : faire comme si Samy n'existait pas du tout. Ni un regard, ni un mot, comme s'il était invisible.",
    "Tes choix vont transformer la journée de Samy et la vie de la classe. À toi de jouer !"
  ],
  "paragraphs": {
    "1": {
      "id": 1,
      "text": "Tu es rangé devant la classe de CM1. La porte s'ouvre et Mme Martin accueille tout le monde avec son sourire habituel. Samy avance doucement à côté d'elle. Il a l'air un peu timide, le teint pâle, et porte son sac d'école à bout de bras. Hugo se penche vers Léa et murmure très fort : « Eh, regardez, l'air est froid ce matin, mais il n'y a personne ! » Plusieurs élèves étouffent un rire. Samy baisse la tête et s'assoit à sa table, au fond.",
      "choices": [
        {
          "text": "Si tu lui fais un petit signe discret de la main pour lui souhaiter la bienvenue, rends-toi au 4.",
          "target": 4
        },
        {
          "text": "Si tu rigoles doucement avec les autres pour ne pas te faire remarquer par Hugo, rends-toi au 7.",
          "target": 7
        },
        {
          "text": "Si tu cries à Hugo : « Tais-toi Hugo, tu es vraiment méchant ! », rends-toi au 12.",
          "target": 12
        }
      ],
      "isEnding": false
    },
    "2": {
      "id": 2,
      "text": "Mme Martin s'approche de ton bureau. « Tout va bien ici ? » demande-t-elle à voix basse. Tu sens le regard de Léa peser sur ton dos. Samy, de son côté, attend silencieusement qu'on lui donne l'énoncé du problème de mathématiques.",
      "choices": [
        {
          "text": "Si tu profites de l'occasion pour dire discrètement à la maîtresse : « Samy n'a pas la feuille de maths », rends-toi au 15.",
          "target": 15
        },
        {
          "text": "Si tu réponds « Oui oui, tout va bien », en évitant soigneusement de regarder Samy, rends-toi au 9.",
          "target": 9
        },
        {
          "text": "Si tu dis à haute voix : « C'est Hugo et Léa qui font un jeu stupide ! », rends-toi au 18.",
          "target": 18
        }
      ],
      "isEnding": false
    },
    "3": {
      "id": 3,
      "text": "Hugo te donne une tape dans le dos sur le chemin des portemanteaux. « Bien joué ! On ne parle pas aux fantômes, c'est la règle ! » Tu ressens un pincement au cœur. En te retournant, tu vois Samy qui galère à accrocher son manteau car son bras semble engourdi.",
      "choices": [
        {
          "text": "Si tu vas l'aider à accrocher son manteau malgré la remarque d'Hugo, rends-toi au 11.",
          "target": 11
        },
        {
          "text": "Si tu t'éloignes rapidement vers la cour pour ne pas être vu avec lui, rends-toi au 22.",
          "target": 22
        },
        {
          "text": "Si tu te moques haut et fort : « Ben alors, tu sais plus utiliser un cintre ? », rends-toi au 14.",
          "target": 14
        }
      ],
      "isEnding": false
    },
    "4": {
      "id": 4,
      "text": "Samy aperçoit ton signe de la main. Un léger sourire illumine son visage fatigué, et il semble tout de suite un peu moins tendu. Mais déjà, Mme Martin demande d'ouvrir le cahier du jour pour la dictée. Léa se retourne vers toi en fronçant les sourcils.",
      "choices": [
        {
          "text": "Si tu te concentres immédiatement sur ta dictée sans prêter attention au regard de Léa, rends-toi au 10.",
          "target": 10
        },
        {
          "text": "Si tu lui renvoies un regard noir pour lui faire comprendre de se mêler de ses affaires, rends-toi au 16.",
          "target": 16
        },
        {
          "text": "Si tu murmures à Léa : « Pardon, je le ferai plus », rends-toi au 20.",
          "target": 20
        }
      ],
      "isEnding": false
    },
    "5": {
      "id": 5,
      "text": "En arrivant dans la cour de récréation, le grand soleil fait du bien. Un groupe s'organise déjà pour faire un ballon prisonnier. Samy s'approche doucement du terrain, les mains dans les poches, et regarde le ballon avec envie.",
      "choices": [
        {
          "text": "Si tu t'écries devant tout le monde : « Attention Samy, avec ta maladie tu vas te faire écraser ! », rends-toi au 21.",
          "target": 21
        },
        {
          "text": "Si tu vas le voir et lui proposes de faire une partie de billes plus calme à l'ombre, rends-toi au 24.",
          "target": 24
        },
        {
          "text": "Si tu rejoins vite l'équipe d'Hugo pour être sûr d'être choisi dans les premiers, rends-toi au 26.",
          "target": 26
        }
      ],
      "isEnding": false
    },
    "6": {
      "id": 6,
      "text": "Samy a fait tomber sa trousse en allant au tableau. Les stylos roulent par terre aux pieds d'Hugo. Hugo marche sciemment sur une règle en plastique, qui casse dans un petit claquement. Personne ne bouge.",
      "choices": [
        {
          "text": "Si tu te lèves pour aider Samy à ramasser ses affaires et lui prêtes ta propre règle, rends-toi au 13.",
          "target": 13
        },
        {
          "text": "Si tu lances ton effaceur à la tête d'Hugo en lui criant d'arrêter, rends-toi au 19.",
          "target": 19
        },
        {
          "text": "Si tu baisses les yeux sur ton cahier en faisant semblant de relire ta leçon, rends-toi au 2.",
          "target": 2
        }
      ],
      "isEnding": false
    },
    "7": {
      "id": 7,
      "text": "Samy a entendu ton rire. Ses épaules se contractent et il s'installe à sa table sans dire un mot. Mme Martin distribue les feuilles d'exercices mais oublie d'en donner une à Samy par inadvertance. Léa chuchote : « Normal, les fantômes ne font pas de maths ! »",
      "choices": [
        {
          "text": "Si tu demandes poliment à la maîtresse : « Madame, il manque une feuille pour Samy », rends-toi au 15.",
          "target": 15
        },
        {
          "text": "Si tu gardes le silence et continues à suivre la moquerie du regard, rends-toi au 2.",
          "target": 2
        },
        {
          "text": "Si tu attrapes la feuille de ton voisin et la jettes sur le bureau de Samy en riant, rends-toi au 17.",
          "target": 17
        }
      ],
      "isEnding": false
    },
    "8": {
      "id": 8,
      "text": "Pendant la dictée, Samy s'arrête d'écrire. Il a l'air très fatigué et se frotte les yeux. La maîtresse est occupée à réexpliquer un mot à un autre élève. Hugo en profite pour faire des signes d'invisibilité dans son dos.",
      "choices": [
        {
          "text": "Si tu lui donnes un petit coup de coude amical et lui murmures le mot qu'il a manqué, rends-toi au 23.",
          "target": 23
        },
        {
          "text": "Si tu soupires très fort pour montrer que le cours va trop lentement à cause de lui, rends-toi au 27.",
          "target": 27
        },
        {
          "text": "Si tu ignoration complète la scène et accélères ton écriture, rends-toi au 10.",
          "target": 10
        }
      ],
      "isEnding": false
    },
    "9": {
      "id": 9,
      "text": "Tu as préféré ne rien dire. La maîtresse s'éloigne. Samy reste sans feuille pendant dix minutes avant que Mme Martin ne s'en rende compte toute seule. À la sonnerie de la récréation, Samy se lève le dernier.",
      "choices": [
        {
          "text": "Si tu l'attends à la sortie de la classe pour lui proposer de descendre ensemble, rends-toi au 25.",
          "target": 25
        },
        {
          "text": "Si tu sors en vitesse pour rejoindre les autres et éviter de te retrouver seul avec lui, rends-toi au 5.",
          "target": 5
        },
        {
          "text": "Si tu lui tires la manche en disant : « Avance, tu es trop lent ! », rends-toi au 14.",
          "target": 14
        }
      ],
      "isEnding": false
    },
    "10": {
      "id": 10,
      "text": "La dictée se termine. Tu as bien travaillé, mais tu sens une atmosphère lourde dans la classe. Samy se débat avec son grand classeur qu'il n'arrive pas à ranger à cause de sa fatigue.",
      "choices": [
        {
          "text": "Si tu l'aides poliment à fermer son classeur sans faire de commentaires, rends-toi au 11.",
          "target": 11
        },
        {
          "text": "Si tu vas voir Hugo pour lui demander à quoi on joue pendant la récréation, rends-toi au 26.",
          "target": 26
        },
        {
          "text": "Si tu attrapes le classeur des mains de Samy en disant : « Laisse, tu n'y arrives pas ! », rends-toi au 17.",
          "target": 17
        }
      ],
      "isEnding": false
    },
    "11": {
      "id": 11,
      "text": "Samy te remercie avec un grand sourire soulagé. « Merci, j'ai encore un peu de mal avec mes bras aujourd'hui », te confie-t-il. Hugo vous observe de loin avec un air agacé.",
      "choices": [
        {
          "text": "Si tu réponds à Samy : « Ne t'inquiète pas, c'est normal ! » et marches à ses côtés, rends-toi au 25.",
          "target": 25
        },
        {
          "text": "Si tu t'éloignes rapidement en murmurant « De rien » pour que Hugo ne pense pas que tu es son ami, rends-toi au 22.",
          "target": 22
        },
        {
          "text": "Si tu lui réponds brutalement : « C'est bon, n'en fais pas une montagne non plus », rends-toi au 27.",
          "target": 27
        }
      ],
      "isEnding": false
    },
    "12": {
      "id": 12,
      "text": "Ton éclat de voix fait sursauter toute la classe. Mme Martin se retourne, les sourcils froncés. « Un peu de calme ! Qu'est-ce qui se passe ici ? » Hugo te jette un regard noir et chuchote : « Tu es une balance ! »",
      "choices": [
        {
          "text": "Si tu expliques calmement à la maîtresse le jeu du fantôme inventé par Hugo, rends-toi au 28.",
          "target": 28
        },
        {
          "text": "Si tu es intimidé par Hugo et dis : « Rien madame, je me suis trompé », rends-toi au 9.",
          "target": 9
        },
        {
          "text": "Si tu t'énerves encore plus et tapes sur le bureau d'Hugo, rends-toi au 19.",
          "target": 19
        }
      ],
      "isEnding": false
    },
    "13": {
      "id": 13,
      "text": "Tu ramasses les stylos et tend ta propre règle à Samy. Il te chuchote : « Merci beaucoup... » Hugo te regarde d'un air mauvais et murmure à Léa : « On a un traître dans la classe. »",
      "choices": [
        {
          "text": "Si tu t'assois fièrement à côté de Samy pour lui montrer ton soutien, rends-toi au 23.",
          "target": 23
        },
        {
          "text": "Si tu te dépêches de retourner à ta place en évitant le regard des autres, rends-toi au 10.",
          "target": 10
        },
        {
          "text": "Si tu dis à Hugo : « Répète un peu ce que tu viens de dire ? », rends-toi au 16.",
          "target": 16
        }
      ],
      "isEnding": false
    },
    "14": {
      "id": 14,
      "text": "Tes paroles font rire un petit groupe près de la porte. Samy devient tout rouge, ramasse son manteau tombé par terre et s'éloigne rapidement sans rien dire. Tu te sens un peu mal à l'aise d'avoir agi ainsi.",
      "choices": [
        {
          "text": "Si tu le rattrapes dans le couloir pour t'excuser de tes mots durs, rends-toi au 29.",
          "target": 29
        },
        {
          "text": "Si tu te justifies auprès de tes camarades : « Ben quoi, c'est vrai qu'il est lent ! », rends-toi au 26.",
          "target": 26
        },
        {
          "text": "Si tu vas te cacher dans les toilettes tellement tu te sens honteux, rends-toi au 22.",
          "target": 22
        }
      ],
      "isEnding": false
    },
    "15": {
      "id": 15,
      "text": "Mme Martin te remercie et donne aussitôt une feuille d'exercices à Samy. Samy te jette un regard reconnaissant. Léa te chuchote : « Tu gâches tout le jeu ! »",
      "choices": [
        {
          "text": "Si tu chuchotes en retour à Léa : « Ce jeu est stupide et méchant », rends-toi au 16.",
          "target": 16
        },
        {
          "text": "Si tu te concentres sur ton exercice sans répondre à Léa, rends-toi au 10.",
          "target": 10
        },
        {
          "text": "Si tu rougis et réponds à Léa : « C'est pas ma faute, la maîtresse me regardait ! », rends-toi au 20.",
          "target": 20
        }
      ],
      "isEnding": false
    },
    "16": {
      "id": 16,
      "text": "Léa hausse les épaules mais se tait. Tu as réussi à imposer le respect sans crier. Pendant ce temps, le cours d'histoire commence. La maîtresse demande de former des binômes pour étudier des documents.",
      "choices": [
        {
          "text": "Si tu proposes immédiatement à Samy de te mettre avec lui, rends-toi au 30.",
          "target": 30
        },
        {
          "text": "Si tu attends de voir si quelqu'un d'autre se met avec Samy, rends-toi au 2.",
          "target": 2
        },
        {
          "text": "Si tu te précipites vers le meilleur élève de la classe pour avoir une bonne note, rends-toi au 26.",
          "target": 26
        }
      ],
      "isEnding": false
    },
    "17": {
      "id": 17,
      "text": "Le geste était vif et sans ménagement. La feuille glisse et tombe par terre. Samy se baisse péniblement pour la ramasser. La maîtresse ne s'est aperçue de rien mais d'autres élèves t'observent.",
      "choices": [
        {
          "text": "Si tu aides Samy à ramasser la feuille pour réparer ta maladresse, rends-toi au 13.",
          "target": 13
        },
        {
          "text": "Si tu rigoles avec Hugo pour faire comme si c'était une bonne blague, rends-toi au 7.",
          "target": 7
        },
        {
          "text": "Si tu t'énerves après Samy : « Mais ramasse-la au lieu de faire la tête ! », rends-toi au 27.",
          "target": 27
        }
      ],
      "isEnding": false
    },
    "18": {
      "id": 18,
      "text": "Mme Martin fronce les sourcils devant cette accusation directe. Léa prend un air innocent : « Mais non Madame, on n'a rien fait ! » L'ambiance devient très tendue dans la classe.",
      "choices": [
        {
          "text": "Si tu donnes des exemples précis de ce qu'ils ont dit ce matin, rends-toi au 28.",
          "target": 28
        },
        {
          "text": "Si tu te dégonfles devant le regard menaçant d'Hugo et murmures « Laissez tomber », rends-toi au 9.",
          "target": 9
        },
        {
          "text": "Si tu accuses aussi d'autres élèves qui n'ont rien fait pour aggraver la situation, rends-toi au 19.",
          "target": 19
        }
      ],
      "isEnding": false
    },
    "19": {
      "id": 19,
      "text": "Ton geste brutal provoque un grand tumulte. Mme Martin intervient immédiatement et tape du poing sur la table. « Ça suffit ! Dans le bureau du directeur tout de suite ! » Tu as voulu agir mais tu te retrouves puni.",
      "choices": [
        {
          "text": "Si tu profites du chemin vers le bureau du directeur pour expliquer enfin tout le problème, rends-toi au 31.",
          "target": 31
        },
        {
          "text": "Si tu boudes et refuses de parler à quiconque pour la journée, rends-toi au 34.",
          "target": 34
        },
        {
          "text": "Si tu rejettes toute la faute sur Samy en disant qu'il attire les ennuis, rends-toi au 37.",
          "target": 37
        }
      ],
      "isEnding": false
    },
    "20": {
      "id": 20,
      "text": "Tu as cédé à la pression de Léa. Tu te sens lâche. Pendant tout le reste de la matinée, tu évites soigneusement le regard de Samy. La cloche de la récréation finit par sonner.",
      "choices": [
        {
          "text": "Si tu décides de te rattraper maintenant en allant lui parler dans la cour, rends-toi au 24.",
          "target": 24
        },
        {
          "text": "Si tu restes dans ton coin à réfléchir à ce que tu devrais faire, rends-toi au 22.",
          "target": 22
        },
        {
          "text": "Si tu vas jouer avec Hugo pour te faire pardonner d'avoir parlé à Samy, rends-toi au 26.",
          "target": 26
        }
      ],
      "isEnding": false
    },
    "21": {
      "id": 21,
      "text": "Tes mots résonnent fort dans toute la cour. Samy s'arrête net, blesse et humilié devant tout le monde. Hugo et son groupe s'exclament : « Ah tu vois ! Même lui dit que tu es trop faible ! »",
      "choices": [
        {
          "text": "Si tu te rends compte de ton erreur et cries : « Non, ce n'est pas ce que je voulais dire ! », rends-toi au 29.",
          "target": 29
        },
        {
          "text": "Si tu en rajoutes une couche : « Ben oui, reste sur le banc c'est mieux », rends-toi au 27.",
          "target": 27
        },
        {
          "text": "Si tu te sauves vers les préaux, effrayé par le résultat de tes paroles, rends-toi au 22.",
          "target": 22
        }
      ],
      "isEnding": false
    },
    "22": {
      "id": 22,
      "text": "Tu te retrouves isolé près du préau. De loin, tu vois Samy assis tout seul sur un banc. Personne ne lui adresse la parole. Hugo et ses copains jouent au ballon en rigolant fort.",
      "choices": [
        {
          "text": "Si tu prends ton courage à deux mains et vas vous asseoir à côté de Samy, rends-toi au 24.",
          "target": 24
        },
        {
          "text": "Si tu restes à observer sans rien faire jusqu'à la fin de la récréation, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu essaies de t'incruster incognito dans un groupe de CE2 pour oublier, rends-toi au 26.",
          "target": 26
        }
      ],
      "isEnding": false
    },
    "23": {
      "id": 23,
      "text": "Samy te donne le mot manquant et vous terminez la dictée côte à côte. À la fin de l'exercice, la maîtresse ramasse les cahiers et vous félicite tous les deux pour votre sérieux.",
      "choices": [
        {
          "text": "Si tu lui proposes de former une équipe pour le cours d'histoire à venir, rends-toi au 30.",
          "target": 30
        },
        {
          "text": "Si tu te motives à parler du comportement d'Hugo à la maîtresse à la fin de la séance, rends-toi au 28.",
          "target": 28
        },
        {
          "text": "Si tu te dépêches d'aller voir Hugo pour lui dire que tu faisais juste du tutorat, rends-toi au 20.",
          "target": 20
        }
      ],
      "isEnding": false
    },
    "24": {
      "id": 24,
      "text": "Tu rejoins Samy sur le banc et tu sors ton sac de billes. « Ça te dit une partie ? » Ses yeux s'illuminent. Vous commencez à jouer tranquillement. Léa passe à côté en fredonnant une chanson moqueuse, mais vous décidez d'ignorer ses remarques.",
      "choices": [
        {
          "text": "Si tu lui proposes de manger à la même table que lui ce midi à la cantine, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu préfères jouer plus discrètement pour ne pas attirer l'attention au deuxième service, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu lui dis que la prochaine fois, il devra se défendre tout seul face à Hugo, rends-toi au 38.",
          "target": 38
        }
      ],
      "isEnding": false
    },
    "25": {
      "id": 25,
      "text": "Vous descendez ensemble l'escalier vers la cour. Samy te raconte qu'il a dû réapprendre certains gestes à cause de sa fatigue, mais qu'il adore toujours autant les bandes dessinées. Tu découvres qu'il a plein de points communs avec toi !",
      "choices": [
        {
          "text": "Si tu l'invites à échanger vos bandes dessinées pendant la pause du midi, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu écoutes distraitement en regardant si les autres élèves vous observent, rends-toi au 22.",
          "target": 22
        },
        {
          "text": "Si tu lui coupes la parole pour ne parler que de toi et de tes jeux vidéo, rends-toi au 21.",
          "target": 21
        }
      ],
      "isEnding": false
    },
    "26": {
      "id": 26,
      "text": "Tu as rejoint l'équipe d'Hugo pour le ballon prisonnier. Pendant toute la récréation, tu t'amuses mais tu vois bien que Samy est resté tout seul au bord du terrain, appuyé contre un arbre.",
      "choices": [
        {
          "text": "Si tu décides d'aller chercher Samy pour qu'il arbitre la partie avec vous, rends-toi au 24.",
          "target": 24
        },
        {
          "text": "Si tu ne fais rien et retournes en classe dès que la cloche sonne, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu envoies le ballon volontairement près de lui en lui criant d'aller le chercher, rends-toi au 27.",
          "target": 27
        }
      ],
      "isEnding": false
    },
    "27": {
      "id": 27,
      "text": "Samy baisse les yeux, le visage fermé. Il préfère ne plus rien dire du tout et s'isole complètement. La fin de la matinée passe rapidement dans un silence pesant. La cloche sonne la pause déjeuner.",
      "choices": [
        {
          "text": "Si tu décides de lui présenter tes excuses avant de descendre à la cantine, rends-toi au 29.",
          "target": 29
        },
        {
          "text": "Si tu pars manger avec tes amis habituels sans te soucier de lui, rends-toi au 36.",
          "target": 36
        },
        {
          "text": "Si tu vas raconter à Hugo que Samy fait la tête pour continuer à vous moquer, rends-toi au 39.",
          "target": 39
        }
      ],
      "isEnding": false
    },
    "28": {
      "id": 28,
      "text": "Mme Martin écoute attentivement tes explications. Son visage devient grave. Elle remercie ta franchise et demande à Hugo et Léa de la suivre au bureau. Tu te sens soulagé d'avoir rompu le silence.",
      "choices": [
        {
          "text": "Si tu vas rassurer Samy en lui disant que les choses vont s'arranger, rends-toi au 30.",
          "target": 30
        },
        {
          "text": "Si tu retournes à ta place un peu anxieux des conséquences pour la classe, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu te vantes auprès des camarades d'avoir fait punir le groupe d'Hugo, rends-toi au 19.",
          "target": 19
        }
      ],
      "isEnding": false
    },
    "29": {
      "id": 29,
      "text": "Tu te rapproches de Samy : « Excuse-moi pour tout à l'heure, je ne pensais pas ce que j'ai dit... » Samy t'observe un instant puis esquisse un petit sourire : « D'accord. C'est juste que c'est dur d'être de retour. »",
      "choices": [
        {
          "text": "Si tu lui proposes d'aller manger ensemble à la cantine pour repartir sur de bonnes bases, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu lui dis juste « Merci » et cours retrouver les autres élèves, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu lui réponds : « De toute façon c'est à cause d'Hugo tout ça », rends-toi au 38.",
          "target": 38
        }
      ],
      "isEnding": false
    },
    "30": {
      "id": 30,
      "text": "Vous travaillez ensemble sur la carte d'histoire. Samy est très fort en géographie et vous avancez très vite. La maîtresse félicite votre binôme. En sortant de classe pour aller à la cantine, tu te sens fier.",
      "choices": [
        {
          "text": "Si tu vas t'asseoir avec Samy à la cantine au plateau du self, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu t'assois à une autre table mais lui fais un signe amical de loin, rends-toi au 35.",
          "target": 35
        },
        {
          "text": "Si tu dis devant la cantine : « On a bien travaillé mais cet après-midi je travaille tout seul », rends-toi au 40.",
          "target": 40
        }
      ],
      "isEnding": false
    },
    "31": {
      "id": 31,
      "text": "Le bureau de M. Bernard, le directeur, est impressionnant. Mme Martin explique ce qui s'est passé en classe, puis le directeur te regarde attentivement : « Que s'est-il passé exactement ? » Tu prends une grande inspiration et tu racontes tout : le « jeu du fantôme » inventé par Hugo, l'exclusion de Samy et le malaise général. M. Bernard te félicite pour ton honnêteté et décide de convoquer Hugo et Léa.",
      "choices": [
        {
          "text": "Si tu demandes la permission d'aller rejoindre Samy à la cantine pour lui dire que tout va s'arranger, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu retournes en classe en silence sans chercher à en faire plus, rends-toi au 33.",
          "target": 33
        },
        {
          "text": "Si tu te vantes devant les copains dans la cour d'avoir fait convoquer les leaders de la classe, rends-toi au 39.",
          "target": 39
        }
      ],
      "isEnding": false
    },
    "32": {
      "id": 32,
      "text": "Au self, tu portes ton plateau et viens t'asseoir directement en face de Samy. Il sourit chaleureusement. Il a un plateau PAI spécialement adapté avec un régime léger. Vous discutez de vos BD préférées et échangez vos idées. Hugo et Léa vous observent de loin en chuchotant, mais leur jeu d'invisibilité ne fonctionne plus du tout.",
      "choices": [
        {
          "text": "Si tu lui proposes de faire équipe avec toi cet après-midi pour la séance d'EPS adaptée, rends-toi au 41.",
          "target": 41
        },
        {
          "text": "Si tu restes passif quand les copains se moquent du repas spécial PAI de Samy, rends-toi au 42.",
          "target": 42
        },
        {
          "text": "Si tu lances un morceau de pain vers la table d'Hugo pour leur signifier de vous laisser tranquilles, rends-toi au 43.",
          "target": 43
        }
      ],
      "isEnding": false
    },
    "33": {
      "id": 33,
      "text": "Tu es retourné à ta place après cette matinée agitée. L'ambiance est lourde et personne n'ose vraiment parler à Samy. En allant à la cantine, la classe se sépare en petits groupes. Samy marche seul, son plateau à la main, cherchant où s'asseoir.",
      "choices": [
        {
          "text": "Si tu te lèves brusquement pour crier à tout le monde d'arrêter d'être injuste, rends-toi au 43.",
          "target": 43
        },
        {
          "text": "Si tu l'appelles discrètement pour qu'il vienne s'asseoir avec toi et tes amis, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu t'assois avec tes amis habituels sans prêter attention à lui, rends-toi au 36.",
          "target": 36
        }
      ],
      "isEnding": false
    },
    "34": {
      "id": 34,
      "text": "En sortant du bureau du directeur, tu croises les bras et tu boudes dans ton coin. Tu te sens injustement traité et tu refuses d'adresser la parole à qui que ce soit. À la cantine, tu manges seul à une petite table dans un silence maussade.",
      "choices": [
        {
          "text": "Si tu continues à faire la tête tout au long de la pause repas, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu vas voir Samy à la fin du repas pour sortir de ta bouderie et discuter avec lui, rends-toi au 41.",
          "target": 41
        },
        {
          "text": "Si tu envoies promener un camarade qui vient te demander si tout va bien, rends-toi au 43.",
          "target": 43
        }
      ],
      "isEnding": false
    },
    "35": {
      "id": 35,
      "text": "Tu t'es assis à la table d'à côté pour ne pas trop attirer l'attention d'Hugo, mais dès que Samy lève les yeux, tu lui fais un signe de la main très amical en lui souriant. Samy te répond par un geste reconnaissant et semble retrouver le moral pour finir son repas.",
      "choices": [
        {
          "text": "Si tu t'approches d'Hugo pour lui dire agressivement d'arrêter de dévisager Samy, rends-toi au 43.",
          "target": 43
        },
        {
          "text": "Si tu rejoins Samy dès la sortie du refectoire pour faire le chemin ensemble vers la cour, rends-toi au 45.",
          "target": 45
        },
        {
          "text": "Si tu restes assis sans bouger en attendant la fin de la pause repas, rends-toi au 44.",
          "target": 44
        }
      ],
      "isEnding": false
    },
    "36": {
      "id": 36,
      "text": "Tu as préféré t'asseoir à ta table habituelle avec tes meilleurs copains. Vous rigolez ensemble, mais du coin de l'œil, tu aperçois Samy tout au bout du réfectoire, mangeant silencieusement son repas adapté sans personne à qui parler.",
      "choices": [
        {
          "text": "Si tu te lèves avec ton dessert pour aller le finir à la table de Samy, rends-toi au 32.",
          "target": 32
        },
        {
          "text": "Si tu ne bouges pas et te laisses entraîner dans les histoires de tes copains, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu fais une blague lourde sur le plat spécial de Samy pour faire rire ta table, rends-toi au 42.",
          "target": 42
        }
      ],
      "isEnding": false
    },
    "37": {
      "id": 37,
      "text": "Acculé devant le directeur, tu as dit que c'était Samy qui attirait les ennuis à cause de son attitude. Une fois dehors, tu te sens très mal. Tu vois Samy qui te regarde avec une profonde tristesse en allant récupérer son repas PAI.",
      "choices": [
        {
          "text": "Si tu t'emportes contre toi-même et motives une dispute violente avec Hugo dans la cour, rends-toi au 43.",
          "target": 43
        },
        {
          "text": "Si tu prends ton courage à deux mains pour tout avouer à Samy et lui demander pardon, rends-toi au 45.",
          "target": 45
        },
        {
          "text": "Si tu t'isoles sous le préau en refusant d'assumer ta faute, rends-toi au 44.",
          "target": 44
        }
      ],
      "isEnding": false
    },
    "38": {
      "id": 38,
      "text": "Ta remarque est tombée à plat : « Tu devrais te défendre tout seul face à Hugo ! » Samy a baissé les yeux, déçu. Un silence gênant s'est installé entre vous deux alors que la pause déjeuner touche à sa fin.",
      "choices": [
        {
          "text": "Si tu laisses tomber et vas ranger ton plateau sans rajouter un mot, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu corriges tes paroles : « Désolé, ce n'est pas facile mais on va faire équipe tous les deux », rends-toi au 41.",
          "target": 41
        },
        {
          "text": "Si tu te fâches en lui disant qu'il est trop sensible, rends-toi au 42.",
          "target": 42
        }
      ],
      "isEnding": false
    },
    "39": {
      "id": 39,
      "text": "Tu es allé répéter à Hugo que Samy boudait dans son coin. Hugo rigole fort : « Tu vois, c'est bien un fantôme ! » Tu te sens accepté par le groupe des populaires, mais au fond de toi, tu ressens une drôle de honte.",
      "choices": [
        {
          "text": "Si tu continues les moqueries en imitant les gestes de Samy, rends-toi au 42.",
          "target": 42
        },
        {
          "text": "Si tu réalises la méchanceté du groupe et t'éloignes d'Hugo sans rien dire, rends-toi au 44.",
          "target": 44
        },
        {
          "text": "Si tu coupes court aux rires d'Hugo et décides de repartir voir Samy, rends-toi au 45.",
          "target": 45
        }
      ],
      "isEnding": false
    },
    "40": {
      "id": 40,
      "text": "Devant l'entrée de la cantine, tu as lancé à Samy : « Cet après-midi, je préfère travailler seul ! » Samy s'est arrêté net, déçu. Il a hoché la tête doucement et est allé s'asseoir seul avec son plateau spécial.",
      "choices": [
        {
          "text": "Si tu t'approches de lui pendant le dessert pour rectifier et lui proposer de réviser ensemble, rends-toi au 41.",
          "target": 41
        },
        {
          "text": "Si tu t'énerves s'il te regarde de loin pendant qu'il mange, rends-toi au 43.",
          "target": 43
        },
        {
          "text": "Si tu vas manger à l'autre bout de la salle sans plus te préoccuper de lui, rends-toi au 36.",
          "target": 36
        }
      ],
      "isEnding": false
    },
    "41": {
      "id": 41,
      "text": "La pause du midi se termine et Mme Martin annonce la séance d'EPS de l'après-midi : une course d'orientation dans le parc de l'école. En raison de son PAI, Samy ne peut pas courir trop longtemps. Tu te proposes d'être son coéquipier pour adapter le rythme.",
      "choices": [
        {
          "text": "Si tu prends la carte et proposes à Samy de vous occuper de la stratégie des balises, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu lui crie d'avancer plus vite quand vous prenez du retard sur Hugo, rends-toi au 47.",
          "target": 47
        },
        {
          "text": "Si tu te contentes de marcher à côté de lui sans trop chercher à trouver les balises, rends-toi au 48.",
          "target": 48
        }
      ],
      "isEnding": false
    },
    "42": {
      "id": 42,
      "text": "Les remarques désagréables ont continué. Samy est assis sur un banc de la cour du midi, le regard vide. Léa et Hugo continuent d'inciter les autres à ne pas jouer avec lui pour l'activité d'EPS qui approche.",
      "choices": [
        {
          "text": "Si tu t'associes aux rires d'Hugo pour bien montrer que tu es dans l'équipe des vainqueurs, rends-toi au 47.",
          "target": 47
        },
        {
          "text": "Si tu braves les consignes d'Hugo et vas proposer à Samy d'être avec toi en EPS, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu te mets à l'écart sous un arbre pour ne pas choisir de camp, rends-toi au 48.",
          "target": 48
        }
      ],
      "isEnding": false
    },
    "43": {
      "id": 43,
      "text": "L'éclat de voix ou la dispute provoque des remous. L'animateur de la cantine intervient pour séparer tout le monde. L'après-midi démarre sous de mauvaises augures et la maîtresse rassemble la classe pour l'EPS.",
      "choices": [
        {
          "text": "Si tu t'excuses auprès de la maîtresse et demandes à travailler sereinement avec Samy, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu boudes pendant toute la présentation des consignes de course d'orientation, rends-toi au 48.",
          "target": 48
        },
        {
          "text": "Si tu bouscules Hugo en allant chercher les fiches de balises, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "44": {
      "id": 44,
      "text": "La pause du midi s'achève passivement. La classe se regroupe pour le cours d'EPS. Mme Martin explique que Samy tiendra le rôle de chronométreur et de responsable de la carte centrale pour ne pas trop se fatiguer.",
      "choices": [
        {
          "text": "Si tu vas consulter Samy régulièrement à la table centrale pour lui demander des indications de parcours, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu fais ton parcours de course sans jamais t'arrêter au stand de Samy, rends-toi au 48.",
          "target": 48
        },
        {
          "text": "Si tu contestes les temps relevés par Samy en disant qu'il s'est trompé, rends-toi au 47.",
          "target": 47
        }
      ],
      "isEnding": false
    },
    "45": {
      "id": 45,
      "text": "Tu rattrapes Samy dans la cour du midi. Vous discutez calmement de la suite de la journée. Samy t'avoue qu'il redoutait le cours de sport de cet après-midi car il a peur de se sentir exclu du groupe à cause de son PAI.",
      "choices": [
        {
          "text": "Si tu lui réponds avec moquerie : « Ben en même temps tu peux pas courir, c'est logique ! », rends-toi au 47.",
          "target": 47
        },
        {
          "text": "Si tu rassures Samy en lui promettant qu'on formera une super équipe stratégique en EPS, rends-toi au 46.",
          "target": 46
        },
        {
          "text": "Si tu lui dis d'aller en parler directement à la maîtresse sans l'accompagner, rends-toi au 48.",
          "target": 48
        }
      ],
      "isEnding": false
    },
    "46": {
      "id": 46,
      "text": "Pendant la course d'orientation, grâce au sens de l'orientation exceptionnel de Samy et à ta rapidité à trouver les balises hidden, votre duo fait des merveilles ! Vous poinçonnez toutes les cartes avec succès. Même Hugo semble impressionné.",
      "choices": [
        {
          "text": "Si tu fécilites chaleureusement Samy devant toute la classe lors de l'annonce des résultats, rends-toi au 49.",
          "target": 49
        },
        {
          "text": "Si tu tires toute la couverture à toi en disant que tu as tout fait tout seul, rends-toi au 50.",
          "target": 50
        },
        {
          "text": "Si tu ne dis rien et vas t'asseoir sagement pour le retour en classe, rends-toi au 51.",
          "target": 51
        }
      ],
      "isEnding": false
    },
    "47": {
      "id": 47,
      "text": "Tu t'es énervé pendant la course. En voulant aller trop vite sans écouter les conseils de Samy, tu t'es trompé de balise et votre duo termine dernier. Tu rejettes la responsabilité sur la lenteur de Samy.",
      "choices": [
        {
          "text": "Si tu t'excuses auprès de lui de t'être emporté sous le coup de la compétition, rends-toi au 49.",
          "target": 49
        },
        {
          "text": "Si tu vas t'isoler sur les bancs sans dire un mot au moment de rentrer en classe, rends-toi au 51.",
          "target": 51
        },
        {
          "text": "Si tu en rajoutes une couche devant les autres en te moquant de son état physique, rends-toi au 50.",
          "target": 50
        }
      ],
      "isEnding": false
    },
    "48": {
      "id": 48,
      "text": "L'activité d'EPS s'est déroulée de manière neutre. Tu n'as ni cherché l'affrontement ni le rapprochement. De retour en classe à 15h30, Mme Martin propose un travail en petits groupes pour préparer l'exposé des sciences.",
      "choices": [
        {
          "text": "Si tu lèves la main pour inviter Samy à rejoindre ton groupe d'exposé, rends-toi au 49.",
          "target": 49
        },
        {
          "text": "Si tu laisses Samy se débrouiller seul sans t'en soucier, rends-toi au 51.",
          "target": 51
        },
        {
          "text": "Si tu dis tout haut que tu ne veux pas de Samy car il va ralentir le groupe, rends-toi au 50.",
          "target": 50
        }
      ],
      "isEnding": false
    },
    "49": {
      "id": 49,
      "text": "Le travail de groupe en sciences est passionnant ! Samy a des connaissances super intéressantes sur les expériences à réaliser. Votre table avance dans la joie et la bonne humeur. Mme Martin vous félicite pour votre bel esprit d'équipe.",
      "choices": [
        {
          "text": "Si tu l'invites à ranger les affaires avec toi quand la sonnerie de 16h30 retentit, rends-toi au 52.",
          "target": 52
        },
        {
          "text": "Si tu laisses tout le rangement à la charge de Samy en filant vers la porte, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu sors en traînant des pieds sans saluer personne, rends-toi au 54.",
          "target": 54
        }
      ],
      "isEnding": false
    },
    "50": {
      "id": 50,
      "text": "Tes paroles dures ont une nouvelle fois blessé Samy. Pendant la préparation de l'exposé, il reste assis dans son coin sans intervenir. Mme Martin intervient pour rappeler que le respect de chacun est la première règle de la classe.",
      "choices": [
        {
          "text": "Si tu boudes à ta table en attendant impatiemment la fin des cours à 16h30, rends-toi au 54.",
          "target": 54
        },
        {
          "text": "Si tu en rajoutes une couche en contestant la remarque de la maîtresse, rends-toi au 53.",
          "target": 53
        },
        {
          "text": "Si tu profites des cinq dernières minutes pour présenter de vraies excuses à Samy, rends-toi au 52.",
          "target": 52
        }
      ],
      "isEnding": false
    },
    "51": {
      "id": 51,
      "text": "L'après-midi se termine sans incident majeur. Le travail en groupe s'est fait machinalement. À 16h30, la cloche sonne la fin de la journée d'école. Les élèves rassemblent leurs affaires pour sortir dans la cour des parents.",
      "choices": [
        {
          "text": "Si tu attends Samy au portail pour lui proposer de faire le chemin ensemble demain, rends-toi au 52.",
          "target": 52
        },
        {
          "text": "Si tu sors rapidement pour rejoindre tes parents sans porter d'attention aux autres, rends-toi au 54.",
          "target": 54
        },
        {
          "text": "Si tu bouscules légèrement Samy en sortant dans le couloir sans t'excuser, rends-toi au 53.",
          "target": 53
        }
      ],
      "isEnding": false
    },
    "52": {
      "id": 52,
      "text": "Devant le portail de l'école, la maman de Samy vient le chercher. Samy te pointe du doigt avec un grand sourire : « Maman, c'est mon ami ! Il m'a super bien aidé aujourd'hui ! » Sa maman te remercie chaleureusement. Tu te sens fier et heureux.",
      "choices": [
        {
          "text": "Si tu lui dis à demain avec enthousiasme et rentres chez toi le cœur léger, rends-toi au 55.",
          "target": 55
        },
        {
          "text": "Si tu réponds froidement en faisant semblant de ne pas le connaître devant d'autres grands de l'école, rends-toi au 56.",
          "target": 56
        },
        {
          "text": "Si tu t'en vas sans dire un mot en tirant ton sac sur le trottoir, rends-toi au 57.",
          "target": 57
        }
      ],
      "isEnding": false
    },
    "53": {
      "id": 53,
      "text": "La sortie des classes est houleuse. Des disputes éclatent devant le portail entre le groupe d'Hugo et d'autres élèves. Samy s'éloigne rapidement avec son père, visiblement anxieux du climat agressif qui règne.",
      "choices": [
        {
          "text": "Si tu t'interposes devant le portail pour calmer les moqueries d'Hugo, rends-toi au 55.",
          "target": 55
        },
        {
          "text": "Si tu rajoutes de l'huile sur le feu en criant avec Hugo, rends-toi au 56.",
          "target": 56
        },
        {
          "text": "Si tu rases les murs pour rentrer vite à la maison sans te mêler de rien, rends-toi au 57.",
          "target": 57
        }
      ],
      "isEnding": false
    },
    "54": {
      "id": 54,
      "text": "Tu franchis le portail de l'école à 16h30. Tu vois Samy qui monte dans la voiture de ses parents, le visage pensif. Tu te demandes quelle tournure prendra la journée de demain pour lui et pour toute la classe.",
      "choices": [
        {
          "text": "Si tu fais un dernier signe de la main amical par la fenêtre de la voiture, rends-toi au 55.",
          "target": 55
        },
        {
          "text": "Si tu détournes le regard et marches vers ta maison, rends-toi au 57.",
          "target": 57
        },
        {
          "text": "Si tu grimaçais dans sa direction pour faire rire Hugo qui passe à côté, rends-toi au 56.",
          "target": 56
        }
      ],
      "isEnding": false
    },
    "55": {
      "id": 55,
      "text": "De retour chez toi, au moment du goûter, tu repenses à ce premier jour. Tu sens que tu as agi avec justice et bienveillance. Tu as su dépasser les préjugés et protéger Samy de l'isolement. Demain sera un grand jour !",
      "choices": [
        {
          "text": "Si tu prépares déjà tes BD pour les prêter à Samy demain matin, rends-toi au 58.",
          "target": 58
        },
        {
          "text": "Si tu hésites encore sur la façon dont tu vas te comporter demain devant Hugo, rends-toi au 59.",
          "target": 59
        },
        {
          "text": "Si tu t'énerves en repensant aux moqueries subies dans la journée, rends-toi au 60.",
          "target": 60
        }
      ],
      "isEnding": false
    },
    "56": {
      "id": 56,
      "text": "Pendant la soirée, une sensation désagréable te pèse sur l'estomac. En cherchant à plaire aux élèves populaires, tu sais pertinemment que tu as été injuste et dur avec Samy. Il va falloir corriger le tir dès demain.",
      "choices": [
        {
          "text": "Si tu décides de lui présenter tes excuses au portail dès demain matin, rends-toi au 58.",
          "target": 58
        },
        {
          "text": "Si tu te persuades que ce n'est pas si grave et qu'il faut oublier, rends-toi au 59.",
          "target": 59
        },
        {
          "text": "Si tu prépares d'autres mauvais coups avec Hugo par message, rends-toi au 60.",
          "target": 60
        }
      ],
      "isEnding": false
    },
    "57": {
      "id": 57,
      "text": "La soirée s'écoule paisiblement à la maison. Tu as fait tes devoirs, mais tu restes perplexe. L'intégration de Samy ne fait que commencer et ton rôle dans cette histoire sera décisif pour la suite du trimestre.",
      "choices": [
        {
          "text": "Si tu te promets de devenir un véritable allié pour Samy à partir de demain, rends-toi au 58.",
          "target": 58
        },
        {
          "text": "Si tu décides de continuer à observer sans trop prendre parti, rends-toi au 59.",
          "target": 59
        },
        {
          "text": "Si tu crains de devenir la nouvelle cible d'Hugo si tu l'aides, rends-toi au 60.",
          "target": 60
        }
      ],
      "isEnding": false
    },
    "58": {
      "id": 58,
      "text": "La nuit est paisible. Tu te réveilles en pleine forme, bien décidé à faire de cette deuxième journée une grande réussite de solidarité et d'amitié dans l'école du Marronnier. Tu boucles ton sac avec enthousiasme.",
      "choices": [
        {
          "text": "Pour ouvrir le Jour 2 avec une posture d'engagement positif, rends-toi au 61.",
          "target": 61
        },
        {
          "text": "Pour voir comment Hugo prépare sa riposte au portail, rends-toi au 62.",
          "target": 62
        },
        {
          "text": "Pour découvrir le nouveau projet collectif de Mme Martin, rends-toi au 63.",
          "target": 63
        }
      ],
      "isEnding": false
    },
    "59": {
      "id": 59,
      "text": "Tu te couches avec encore quelques hésitations. Tu sais que le chemin de la neutralité est difficile quand un camarade est exclu. Demain matin, les choix que tu feras dès le rang seront déterminants.",
      "choices": [
        {
          "text": "Pour tenter une nouvelle approche plus amicale au Jour 2, rends-toi au 61.",
          "target": 61
        },
        {
          "text": "Pour observer la réaction de la maîtresse au réveil, rends-toi au 63.",
          "target": 63
        },
        {
          "text": "Si tu crains que l'ambiance ne se dégrade encore, rends-toi au 62.",
          "target": 62
        }
      ],
      "isEnding": false
    },
    "60": {
      "id": 60,
      "text": "Le réveil sonne. Tu sens que la tension de la veille n'est pas retombée. Le Jour 2 s'annonce décisif : vas-tu continuer dans l'affrontement ou trouver enfin la voix de l'empathie et de la justice ?",
      "choices": [
        {
          "text": "Si tu souhaites repartir sur de nouvelles bases positives pour le Jour 2, rends-toi au 61.",
          "target": 61
        },
        {
          "text": "Si tu veux faire face directement aux provocations d'Hugo, rends-toi au 62.",
          "target": 62
        },
        {
          "text": "Si tu veux demander conseil à Mme Martin dès ton arrivée, rends-toi au 63.",
          "target": 63
        }
      ],
      "isEnding": false
    },
    "61": {
      "id": 61,
      "text": "Le soleil se lève sur l'école du Marronnier. Tu arrives devant le portail avec deux bandes dessinées glissées dans ton sac, bien décidé à soutenir Samy. Dès qu'il franchit l'entrée, tu cours vers lui pour lui donner un grand bonjour. Samy sourit de toutes ses dents, ravi de voir qu'il a un véritable ami sur qui compter.",
      "choices": [
        {
          "text": "Si tu lui proposes immédiatement de lui prêter une de tes BD avant la sonnerie, rends-toi au 64.",
          "target": 64
        },
        {
          "text": "Si tu restes à côté de lui en évitant de regarder Hugo et Léa qui s'approchent, rends-toi au 65.",
          "target": 65
        },
        {
          "text": "Si tu te tournes vers la maîtresse pour lui demander quel est le programme de la journée, rends-toi au 63.",
          "target": 63
        }
      ],
      "isEnding": false
    },
    "62": {
      "id": 62,
      "text": "Au portail de l'école, Hugo et Léa distribuent de petits papiers pliés à plusieurs camarades de CM1. Tu t'approches et tu découvres la consigne : « Mission Fantôme Jour 2 : personne ne doit répondre si Samy pose une question en classe ! » L'ambiance devient crispée.",
      "choices": [
        {
          "text": "Si tu prends un mot pour le déchirer ostensiblement devant Hugo, rends-toi au 66.",
          "target": 66
        },
        {
          "text": "Si tu préviens discrètement Samy avant qu'il ne s'avance vers le groupe, rends-toi au 64.",
          "target": 64
        },
        {
          "text": "Si tu mets le papier dans ta poche sans rien dire pour éviter les ennuis, rends-toi au 65.",
          "target": 65
        }
      ],
      "isEnding": false
    },
    "63": {
      "id": 63,
      "text": "Dès le rangement du matin, Mme Martin annonce une grande nouvelle : « Les enfants, nous allons préparer ensemble l'affiche géante et la maquette pour la fête de l'école ! » Un murmure d'enthousiasme parcourt le rang. Samy lève la main pour poser une question sur le matériel.",
      "choices": [
        {
          "text": "Si tu écoutes sa question avec attention et y réponds avec lui, rends-toi au 67.",
          "target": 67
        },
        {
          "text": "Si tu tousses très fort pour qu'on n'entende pas ce qu'il dit, rends-toi au 66.",
          "target": 66
        },
        {
          "text": "Si tu attends de voir la réaction des autres avant d'intervenir, rends-toi au 65.",
          "target": 65
        }
      ],
      "isEnding": false
    },
    "64": {
      "id": 64,
      "text": "Samy feuillette la bande dessinée avec un grand enthousiasme sous le préau. Deux élèves de la classe, Thomas et Yasmine, s'approchent curieux. « Oh, vous lisez la suite de la série ? Je peux regarder avec vous ? » demande Yasmine.",
      "choices": [
        {
          "text": "Si tu invites chaleureusement Yasmine et Thomas à s'asseoir avec vous deux, rends-toi au 67.",
          "target": 67
        },
        {
          "text": "Si tu refermes brusquement le livre en disant que c'est privé, rends-toi au 66.",
          "target": 66
        },
        {
          "text": "Si tu les laisses regarder sans vraiment leur adresser la parole, rends-toi au 68.",
          "target": 68
        }
      ],
      "isEnding": false
    },
    "65": {
      "id": 65,
      "text": "La cloche sonne la rentrée en classe. Les rangs se forment dans le calme. Mme Martin distribue les responsabilités du projet pour la journée. Samy demande s'il peut s'occuper de la partie illustration, mais personne autour de lui ne réagit.",
      "choices": [
        {
          "text": "Si tu restes silencieux pour voir si la maîtresse va intervenir seule, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu te lèves et dis bien fort : « Excellente idée, Samy dessine super bien ! », rends-toi au 67.",
          "target": 67
        },
        {
          "text": "Si tu te moques à voix basse : « De toute façon il dessine mal », rends-toi au 69.",
          "target": 69
        }
      ],
      "isEnding": false
    },
    "66": {
      "id": 66,
      "text": "Un ton monte dans le couloir. Hugo s'approche de toi d'un air provocateur : « Tu te prends pour le chef maintenant ? » La dispute attire l'attention des camarades. Samy se sent mal à l'aise d'être encore une fois au centre d'une tension.",
      "choices": [
        {
          "text": "Si tu réponds en poussant Hugo du coude, rends-toi au 69.",
          "target": 69
        },
        {
          "text": "Si tu te calmes immédiatement et proposes à tout le monde de rentrer en classe, rends-toi au 68.",
          "target": 68
        },
        {
          "text": "Si tu prends la parole calmement pour expliquer la situation sans agressivité, rends-toi au 67.",
          "target": 67
        }
      ],
      "isEnding": false
    },
    "67": {
      "id": 67,
      "text": "Grâce à ton intervention positive, la dynamique change ! Yasmine et deux autres élèves décident de rejoindre votre groupe d'exposé pour la fête de l'école. Samy se sent enfin écouté et valorisé au sein du CM1.",
      "choices": [
        {
          "text": "Si tu proposes à Samy de distribuer les rôles équitablement entre vous quatre, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu prends tout le travail à ta charge sans laisser Samy s'exprimer, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu surveilles du regard la table d'Hugo pour voir s'ils s'énervent, rends-toi au 72.",
          "target": 72
        }
      ],
      "isEnding": false
    },
    "68": {
      "id": 68,
      "text": "Le travail d'exposé commence doucement. L'atmosphère reste hésitante dans la salle. Certains élèves observent la scène en silence sans trop savoir s'ils doivent parler à Samy ou suivre les consignes d'Hugo.",
      "choices": [
        {
          "text": "Si tu restes neutre sans prêter attention aux doutes des camarades, rends-toi au 72.",
          "target": 72
        },
        {
          "text": "Si tu lèves la main pour inviter tes voisins à venir travailler avec Samy et toi, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu soupires et râles sur la lenteur de la mise en place, rends-toi au 71.",
          "target": 71
        }
      ],
      "isEnding": false
    },
    "69": {
      "id": 69,
      "text": "L'ambiance se dégrade l'espace d'un instant. Mme Martin intervient promptement : « Que se passe-t-il au fond de la classe ? On se remet au travail immédiatement. » Tu te sens penaud d'avoir provoqué cette remarque.",
      "choices": [
        {
          "text": "Si tu réponds sèchement à la maîtresse en rejetant la faute sur les autres, rends-toi au 71.",
          "target": 71
        },
        {
          "text": "Si tu t'excuses poliment et reprends ton calme avec Samy, rends-toi au 70.",
          "target": 70
        },
        {
          "text": "Si tu te plonges dans ton travail en ignorant complètement Samy, rends-toi au 72.",
          "target": 72
        }
      ],
      "isEnding": false
    },
    "70": {
      "id": 70,
      "text": "Pendant une heure, l'atelier bat son plein. Samy dessine de magnifiques croquis pour la maquette de la fête de l'école. Mais vers 10 heures, tu remarques qu'il commence à pâlir et qu'il pose son crayon. Son PAI prévoit un temps de soin ou de repos en milieu de matinée.",
      "choices": [
        {
          "text": "Si tu lui murmures gentiment d'aller voir l'infirmière ou Mme Martin sans avoir honte, rends-toi au 73.",
          "target": 73
        },
        {
          "text": "Si tu ne fais pas attention à sa fatigue et lui demandes de continuer à dessiner, rends-toi au 74.",
          "target": 74
        },
        {
          "text": "Si tu attends sans rien dire qu'il réagisse de lui-même, rends-toi au 75.",
          "target": 75
        }
      ],
      "isEnding": false
    },
    "71": {
      "id": 71,
      "text": "Tu t'es emporté et tu as voulu tout contrôler dans le travail d'équipe. Samy s'est mis en retrait, fatigué et déçu. En le voyant se frotter le visage avec difficulté, tu réalises qu'il ne se sent pas bien à cause de sa maladie chronique.",
      "choices": [
        {
          "text": "Si tu t'énerves encore plus en disant qu'il ne fait aucun effort, rends-toi au 74.",
          "target": 74
        },
        {
          "text": "Si tu restes les bras croisés en attendant la sonnerie de la récréation, rends-toi au 75.",
          "target": 75
        },
        {
          "text": "Si tu t'excuses de ton emportement et lui demandes s'il a besoin de faire une pause, rends-toi au 73.",
          "target": 73
        }
      ],
      "isEnding": false
    },
    "72": {
      "id": 72,
      "text": "Le temps passe et la fatigue de Samy devient évidente. Il s'arrête de participer et pose sa tête sur ses bras. Léa s'en aperçoit et chuchote à son voisin : « Regarde, le fantôme s'endort ! »",
      "choices": [
        {
          "text": "Si tu fais semblant de n'avoir rien entendu pour ne pas créer d'histoire, rends-toi au 75.",
          "target": 75
        },
        {
          "text": "Si tu réponds fermement à Léa : « Il a le droit de se reposer, laisse-le tranquille ! », rends-toi au 73.",
          "target": 73
        },
        {
          "text": "Si tu rigoles à la blague de Léa pour faire rire la table, rends-toi au 74.",
          "target": 74
        }
      ],
      "isEnding": false
    },
    "73": {
      "id": 73,
      "text": "Samy te remercie d'un geste reconnaissant. Il se lève pour aller voir Mme Martin et prendre ses médicaments conformément à son PAI. La maîtresse l'accompagne bienveillamment vers l'infirmerie pour dix minutes de calme. La cloche de la récréation du matin retentit alors.",
      "choices": [
        {
          "text": "Si tu décides de garder la place de Samy à l'ombre dans la cour en l'attendant, rends-toi au 76.",
          "target": 76
        },
        {
          "text": "Si tu vas jouer au foot avec Hugo en attendant son retour, rends-toi au 77.",
          "target": 77
        },
        {
          "text": "Si tu restes seul près du couloir sans savoir trop quoi faire, rends-toi au 78.",
          "target": 78
        }
      ],
      "isEnding": false
    },
    "74": {
      "id": 74,
      "text": "Submergé par la douleur et la fatigue sans soutien, Samy laisse échapper une larme. La maîtresse le remarque enfin et accourt : « Samy, viens avec moi. » L'ambiance dans la classe devient gênée au moment où la sonnerie de 10h30 annonce la récréation.",
      "choices": [
        {
          "text": "Si tu cours rejoindre Samy dans le couloir pour lui présenter tes excuses, rends-toi au 76.",
          "target": 76
        },
        {
          "text": "Si tu t'en vas directement jouer sans plus te soucier de la situation, rends-toi au 77.",
          "target": 77
        },
        {
          "text": "Si tu traînes les pieds dans l'escalier en réfléchissant à ta réaction, rends-toi au 78.",
          "target": 78
        }
      ],
      "isEnding": false
    },
    "75": {
      "id": 75,
      "text": "Mme Martin s'approche doucement de la table et prend Samy par l'épaule pour l'amener se reposer. Les élèves sortent en rang pour la récréation du matin. Tu te retrouves sur le palier alors que le soleil brille dehors.",
      "choices": [
        {
          "text": "Si tu restes neutre et t'assois sur un banc pour observer les jeux, rends-toi au 78.",
          "target": 78
        },
        {
          "text": "Si tu prépares une surprise positive avec les autres pour le retour de Samy, rends-toi au 76.",
          "target": 76
        },
        {
          "text": "Si tu rejettes la consigne d'Hugo mais vas jouer sans intégrer Samy, rends-toi au 77.",
          "target": 77
        }
      ],
      "isEnding": false
    },
    "76": {
      "id": 76,
      "text": "Dans la cour de récréation, Samy revient de l'infirmerie, en bien meilleure forme après ses soins. Tu l'accueilles au grand air et plusieurs camarades, inspirés par ton attitude, viennent discuter pacifiquement avec lui. Le « jeu du fantôme » commence à s'effondrer !",
      "choices": [
        {
          "text": "Si tu organises un grand jeu de chat perché incluant tout le monde avec des règles adaptées, rends-toi au 79.",
          "target": 79
        },
        {
          "text": "Si tu provoques Hugo en te moquant ouvertement de son jeu raté, rends-toi au 80.",
          "target": 80
        },
        {
          "text": "Si tu laisses la discussion se poursuivre sans trop intervenir, rends-toi au 81.",
          "target": 81
        }
      ],
      "isEnding": false
    },
    "77": {
      "id": 77,
      "text": "Au milieu du terrain de sport, Hugo essaie de réorganiser sa troupe : « Bon, personne ne passe le ballon à Samy s'il vient dans la cour ! » Mais cette fois, Thomas et Yasmine protestent : « Franchement Hugo, c'est nul comme jeu. »",
      "choices": [
        {
          "text": "Si tu restes silencieux pour voir quel camp va l'emporter, rends-toi au 81.",
          "target": 81
        },
        {
          "text": "Si tu soutiens ouvertement Thomas et Yasmine pour stopper le harcèlement, rends-toi au 79.",
          "target": 79
        },
        {
          "text": "Si tu crie sur Hugo pour lui ordonner de se taire, rends-toi au 80.",
          "target": 80
        }
      ],
      "isEnding": false
    },
    "78": {
      "id": 78,
      "text": "La récréation du matin se déroule dans une certaine indécision. Une partie de la classe n'ose pas bouger, tandis qu'Hugo et Léa constatent que leur influence diminue. Samy réapparaît près du préau, son traitement terminé.",
      "choices": [
        {
          "text": "Si tu vas directement le chercher pour lui faire une place dans le groupe, rends-toi au 79.",
          "target": 79
        },
        {
          "text": "Si tu le regardes de loin sans bouger de ta place, rends-toi au 81.",
          "target": 81
        },
        {
          "text": "Si tu t'impatientes et lui cries de se dépêcher de venir, rends-toi au 80.",
          "target": 80
        }
      ],
      "isEnding": false
    },
    "79": {
      "id": 79,
      "text": "Le jeu réunit une grande partie des CM1 ! Samy s'amuse énormément et apporte de super idées. Même Léa finit par approcher pour demander si elle peut jouer. L'ambiance s'apaise complètement avant le retour en classe.",
      "choices": [
        {
          "text": "Si tu acceptes Léa dans le jeu avec le sourire pour montrer l'exemple, rends-toi au 82.",
          "target": 82
        },
        {
          "text": "Si tu lui réponds méchamment : « Non, tu n'as pas le droit de jouer avec nous ! », rends-toi au 83.",
          "target": 83
        },
        {
          "text": "Si tu laisses les autres décider sans donner ton avis, rends-toi au 84.",
          "target": 84
        }
      ],
      "isEnding": false
    },
    "80": {
      "id": 80,
      "text": "Une nouvelle dispute éclate au milieu de la cour. Le ton monte rapidement et un surveillant s'approche en sifflant fort : « Qu'est-ce qui se passe ici ? Tout le monde au calme ! » La tension gâche la fin de la récréation.",
      "choices": [
        {
          "text": "Si tu contestes l'autorité du surveillant en râlant, rends-toi au 83.",
          "target": 83
        },
        {
          "text": "Si tu expliques posément la situation au surveillant, rends-toi au 82.",
          "target": 82
        },
        {
          "text": "Si tu baisses la tête et t'éloignes en silence, rends-toi au 84.",
          "target": 84
        }
      ],
      "isEnding": false
    },
    "81": {
      "id": 81,
      "text": "La cloche sonne la fin de la récréation de 10h45. Les élèves se rangent deux par deux pour remonter en classe. Samy se trouve au bout du rang, incertain de la suite de la journée.",
      "choices": [
        {
          "text": "Si tu vas te ranger à côté de lui spontanément, rends-toi au 82.",
          "target": 82
        },
        {
          "text": "Si tu te ranges avec ton camarade habituel sans faire attention à lui, rends-toi au 84.",
          "target": 84
        },
        {
          "text": "Si tu bouscules la rangée pour passer devant tout le monde, rends-toi au 83.",
          "target": 83
        }
      ],
      "isEnding": false
    },
    "82": {
      "id": 82,
      "text": "De retour en classe, Mme Martin lance le projet collectif de mise en page des affiches de la fête de l'école. Grâce à la bonne volonté générale, l'ambiance devient coopérative. Samy propose un slogan percutant sur la solidarité dans l'école.",
      "choices": [
        {
          "text": "Si tu appuies son idée en l'écrivant en gros caractères sur l'affiche, rends-toi au 85.",
          "target": 85
        },
        {
          "text": "Si tu proposes un autre slogan sans prendre en compte son avis, rends-toi au 86.",
          "target": 86
        },
        {
          "text": "Si tu te contentes de découper le papier sans donner ton opinion, rends-toi au 87.",
          "target": 87
        }
      ],
      "isEnding": false
    },
    "83": {
      "id": 83,
      "text": "En voulant imposer tes idées trop brutalement lors de l'atelier affiche, tu renverses un pot de peinture sur le travail du groupe. La maîtresse pousse un grand soupir : « Un peu d'attention, s'il vous plaît ! »",
      "choices": [
        {
          "text": "Si tu te fâches en accusant Samy d'avoir poussé la table, rends-toi au 86.",
          "target": 86
        },
        {
          "text": "Si tu éponges immédiatement les dégâts en t'excusant auprès de l'équipe, rends-toi au 85.",
          "target": 85
        },
        {
          "text": "Si tu laisses les autres nettoyer à ta place en boudant dans ton coin, rends-toi au 87.",
          "target": 87
        }
      ],
      "isEnding": false
    },
    "84": {
      "id": 84,
      "text": "La fin de la matinée se déroule calmement mais sans grand enthousiasme. L'affiche du groupe avance doucement. Samy réalise sa part du travail de son côté sans que personne ne vienne vraiment échanger avec lui.",
      "choices": [
        {
          "text": "Si tu fais un effort et viens intégrer ses dessins dans la maquette globale, rends-toi au 85.",
          "target": 85
        },
        {
          "text": "Si tu termines ta feuille sans même regarder ce qu'il a produit, rends-toi au 87.",
          "target": 87
        },
        {
          "text": "Si tu lui dis d'un air moqueur que sa couleur n'est pas jolie, rends-toi au 86.",
          "target": 86
        }
      ],
      "isEnding": false
    },
    "85": {
      "id": 85,
      "text": "L'affiche est magnifique ! Mme Martin l'accroche au tableau pour la montrer à toute la classe. Tout le monde applaudit le travail d'équipe. Samy rayonne de joie et te remercie chaleureusement pour ton aide précieuse. La cloche de 11h45 sonne le début du midi.",
      "choices": [
        {
          "text": "Si tu l'invites à s'asseoir à la grande table du self avec toute l'équipe de l'affiche, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu lui dis brutalement que le midi tu préfères rester sans lui, rends-toi au 89.",
          "target": 89
        },
        {
          "text": "Si tu le laisses choisir sa table tout seul sans lui proposer de place, rends-toi au 90.",
          "target": 90
        }
      ],
      "isEnding": false
    },
    "86": {
      "id": 86,
      "text": "En raison des tensions et des remarques désagréables, la maquette n'est pas terminée à temps pour la sonnerie de midi. Mme Martin demande de tout ranger. Samy range ses feutres tristement sans dire un mot.",
      "choices": [
        {
          "text": "Si tu te précipites pour sortir le premier au refectoire sans t'occuper de rien, rends-toi au 89.",
          "target": 89
        },
        {
          "text": "Si tu aides Samy à remettre ses affaires dans son sac avant de descendre, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu descends l'escalier à ton rythme en restant en arrière-plan, rends-toi au 90.",
          "target": 90
        }
      ],
      "isEnding": false
    },
    "87": {
      "id": 87,
      "text": "La matinée s'achève sur une note neutre. L'affiche est correcte mais sans grande originalité. Les élèves se préparent à descendre vers le réfectoire pour la pause déjeuner du Jour 2.",
      "choices": [
        {
          "text": "Si tu attends tranquillement dans le couloir sans prendre de décision active, rends-toi au 90.",
          "target": 90
        },
        {
          "text": "Si tu prends l'initiative de proposer à Samy de faire la queue ensemble à la cantine, rends-toi au 88.",
          "target": 88
        },
        {
          "text": "Si tu bouscules les autres pour attraper le premier plateau de la rangée, rends-toi au 89.",
          "target": 89
        }
      ],
      "isEnding": false
    },
    "88": {
      "id": 88,
      "text": "À l'entrée de la cantine du Jour 2, une ambiance très chaleureuse s'installe. Thomas, Yasmine, Samy et toi prenez vos plateaux ensemble. Même Hugo se rend compte que son jeu débile ne prend plus du tout au sein de la classe.",
      "choices": [
        {
          "text": "Pour mener l'action de solidarité à son terme pendant le repas du midi, rends-toi au 91.",
          "target": 91
        },
        {
          "text": "Pour voir comment Hugo réagit en essayant de lancer un nouveau défi, rends-toi au 92.",
          "target": 92
        },
        {
          "text": "Pour observer la réaction de la maîtresse et des surveillants au réfectoire, rends-toi au 93.",
          "target": 93
        }
      ],
      "isEnding": false
    },
    "89": {
      "id": 89,
      "text": "En bousculant la file de la cantine, tu fais tomber un verre d'eau. Les surveillants te rappellent à l'ordre. Samy observe la scène au loin, incertain de ce qu'il doit faire pendant la pause repas.",
      "choices": [
        {
          "text": "Si tu t'excuses immédiatement auprès du personnel de service, rends-toi au 91.",
          "target": 91
        },
        {
          "text": "Si tu râles haut et fort en contestant la remarque du surveillant, rends-toi au 92.",
          "target": 92
        },
        {
          "text": "Si tu ramasses les débris en silence sans dire un mot, rends-toi au 93.",
          "target": 93
        }
      ],
      "isEnding": false
    },
    "90": {
      "id": 90,
      "text": "Tu t'installes à une table du réfectoire sans prendre parti. Le repas du Jour 2 commence dans une atmosphère mitigée. L'après-midi s'annonce crucial pour l'intégration de Samy et l'équilibre de la classe.",
      "choices": [
        {
          "text": "Pour tenter une démarche active d'inclusion au cours du repas, rends-toi au 91.",
          "target": 91
        },
        {
          "text": "Si tu redoutes une nouvelle provocation d'Hugo au second service, rends-toi au 92.",
          "target": 92
        },
        {
          "text": "Si tu préfères voir comment la maîtresse va guider la suite des événements, rends-toi au 93.",
          "target": 93
        }
      ],
      "isEnding": false
    },
    "91": {
      "id": 91,
      "text": "Autour de la grande table du réfectoire, l'ambiance est joyeuse. Samy partage son dessert tout en expliquant sa passion pour l'astronomie. Thomas et Yasmine l'écoutent avec captivité. Tu sens que le regard de la classe a changé : l'isolement de Samy est en train de disparaître.",
      "choices": [
        {
          "text": "Si tu proposes à Samy et au groupe de créer un stand d'astronomie pour la fête de l'école, rends-toi au 94.",
          "target": 94
        },
        {
          "text": "Si tu te contentes de finir ton repas en souriant sans proposer d'idée, rends-toi au 95.",
          "target": 95
        },
        {
          "text": "Si tu coupes la parole à Samy pour imposer ton propre sujet préféré, rends-toi au 96.",
          "target": 96
        }
      ],
      "isEnding": false
    },
    "92": {
      "id": 92,
      "text": "Hugo se lève d'un coup et lance à haute voix : « Qui veut faire un concours d'épluchures de pommes avec moi ? Seuls les vrais joueurs ont le droit ! » Il jette un regard provocateur vers la table de Samy pour tenter d'attirer l'attention de toute la salle.",
      "choices": [
        {
          "text": "Si tu te lèves pour participer au concours d'Hugo pour ne pas paraître rabat-joie, rends-toi au 96.",
          "target": 96
        },
        {
          "text": "Si tu lances à Hugo : « Ton concours est complètement idiot ! », rends-toi au 95.",
          "target": 95
        },
        {
          "text": "Si tu proposes calmement à ton groupe de continuer à discuter sans prêter attention au bruit d'Hugo, rends-toi au 94.",
          "target": 94
        }
      ],
      "isEnding": false
    },
    "93": {
      "id": 93,
      "text": "Mme Martin entre dans le réfectoire pour observer le déroulement du repas. En voyant les animateurs discuter calmement avec Hugo et Léa au sujet du respect des consignes, elle hoche la tête. La situation semble s'apaiser peu à peu dans la cantine.",
      "choices": [
        {
          "text": "Si tu fais un signe discret à la maîtresse pour lui montrer que tout va bien à votre table, rends-toi au 94.",
          "target": 94
        },
        {
          "text": "Si tu boudes dans ton coin en pensant aux embêtements du matin, rends-toi au 96.",
          "target": 96
        },
        {
          "text": "Si tu restes passif en attendant simplement le coup de sifflet de fin de repas, rends-toi au 95.",
          "target": 95
        }
      ],
      "isEnding": false
    },
    "94": {
      "id": 94,
      "text": "De retour en classe à 13h30, Mme Martin rassemble tout le monde autour du grand tapis. « Cet après-midi, nous faisons un conseil d'élèves sur le respect et l'inclusion, avant d'installer la maquette pour la fête d'demain. » La maîtresse donne la parole au groupe.",
      "choices": [
        {
          "text": "Si tu lèves la main pour exprimer combien il est important d'accueillir chacun avec ses différences, rends-toi au 97.",
          "target": 97
        },
        {
          "text": "Si tu coupes la parole à un camarade pour raconter une blague, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu fixes tes chaussures en attendant que la discussion se termine, rends-toi au 99.",
          "target": 99
        }
      ],
      "isEnding": false
    },
    "95": {
      "id": 95,
      "text": "Le début du conseil d'élèves se déroule dans un calme mitigé. Mme Martin rappelle que les amitiés s'enrichissent de la diversité de chacun. Hugo baisse la tête, tandis que Samy regarde la classe avec l'espoir que la journée se termine bien.",
      "choices": [
        {
          "text": "Si tu restes silencieux sans participer aux échanges collectifs, rends-toi au 99.",
          "target": 99
        },
        {
          "text": "Si tu proposes à Samy de partager votre projet de maquette avec toute la classe, rends-toi au 97.",
          "target": 97
        },
        {
          "text": "Si tu soupires bruyamment pour montrer que le débat est trop long, rends-toi au 98.",
          "target": 98
        }
      ],
      "isEnding": false
    },
    "96": {
      "id": 96,
      "text": "Quelques tensions persistent autour du tapis de rassemblement. Mme Martin intervient gentiment : « Chaque élève a sa place ici, quel que soit son parcours ou sa santé. C'est cela qui fait la force de notre classe de CM1. »",
      "choices": [
        {
          "text": "Si tu t'énerves contre Hugo en lui disant qu'il ne comprend rien, rends-toi au 98.",
          "target": 98
        },
        {
          "text": "Si tu hoches la tête et proposes ton aide pour organiser la salle d'exposition, rends-toi au 97.",
          "target": 97
        },
        {
          "text": "Si tu attends tranquillement que la maîtresse donne la consigne suivante, rends-toi au 99.",
          "target": 99
        }
      ],
      "isEnding": false
    },
    "97": {
      "id": 97,
      "text": "L'après-midi se poursuit avec la finalisation des affiches et des maquettes pour la fête de l'école. Samy apporte des précisions formidables grâce à sa créativité. Votre groupe installe les éléments sur la grande table d'exposition du hall.",
      "choices": [
        {
          "text": "Si tu mets en valeur le travail de Samy au centre du panneau principal, rends-toi au 100.",
          "target": 100
        },
        {
          "text": "Si tu colles les étiquettes sans regarder le placement des dessins des autres, rends-toi au 101.",
          "target": 101
        },
        {
          "text": "Si tu bouscules les découpages pour aller plus vite avant la sonnerie, rends-toi au 102.",
          "target": 102
        }
      ],
      "isEnding": false
    },
    "98": {
      "id": 98,
      "text": "Dans la précipitation, une colle renverse quelques pièces de carton préparées pour le stand. Hugo rigole dans son coin. Mme Martin rappelle que l'entraide est nécessaire pour terminer à temps l'installation de la fête.",
      "choices": [
        {
          "text": "Si tu t'excuses de ta maladresse et ramasses les éléments renversés, rends-toi au 100.",
          "target": 100
        },
        {
          "text": "Si tu boudes et laisses les autres réparer les dégâts, rends-toi au 102.",
          "target": 102
        },
        {
          "text": "Si tu attends la fin de la séance sans prendre d'initiative particulière, rends-toi au 101.",
          "target": 101
        }
      ],
      "isEnding": false
    },
    "99": {
      "id": 99,
      "text": "La fin de l'après-midi du Jour 2 approche. L'exposition prend forme dans le hall. Même si tout n'est pas parfait, l'ambiance générale s'est grandement adoucie. Samy remercie plusieurs camarades qui sont venus lui poser des questions sur la maquette.",
      "choices": [
        {
          "text": "Si tu te ranges avec bienveillance aux côtés de Samy pour finaliser l'installation, rends-toi au 100.",
          "target": 100
        },
        {
          "text": "Si tu te précipites vers la porte dès que la cloche de 16h30 sonne, rends-toi au 102.",
          "target": 102
        },
        {
          "text": "Si tu restes assis à ta table sans aider au rangement du matériel d'exposition, rends-toi au 101.",
          "target": 101
        }
      ],
      "isEnding": false
    },
    "100": {
      "id": 100,
      "text": "Le soir du Jour 2 arrive. De retour chez toi, tu te sens satisfait des progrès accomplis. Demain est le grand jour : la fête de l'école du Marronnier où tous les parents et les autres classes viendront découvrir vos maquettes !",
      "choices": [
        {
          "text": "Si tu prépares un petit mot d'encouragement pour Samy à lui remettre le lendemain matin, rends-toi au 103.",
          "target": 103
        },
        {
          "text": "Si tu t'endors tranquillement sans penser davantage au déroulement de la fête, rends-toi au 104.",
          "target": 104
        },
        {
          "text": "Si tu stresses à l'idée de devoir prendre la parole devant tout le monde, rends-toi au 105.",
          "target": 105
        }
      ],
      "isEnding": false
    },
    "101": {
      "id": 101,
      "text": "Pendant la soirée du Jour 2, tu repenses aux moments de la journée. Tu te dis que la neutralité a ses limites, mais tu espères que la fête de l'école se déroulera dans la bonne humeur et l'amitié.",
      "choices": [
        {
          "text": "Si tu décides de prendre une résolution active pour guider le groupe demain, rends-toi au 103.",
          "target": 103
        },
        {
          "text": "Si tu laisses la matinée du Jour 3 se dérouler sans t'impliquer davantage, rends-toi au 104.",
          "target": 104
        },
        {
          "text": "Si tu crains une nouvelle moquerie d'Hugo au moment de la présentation des travaux, rends-toi au 105.",
          "target": 105
        }
      ],
      "isEnding": false
    },
    "102": {
      "id": 102,
      "text": "La soirée s'écoule. Quelques doutes te traversent l'esprit sur les réactions des uns et des autres. Tu sais que le Jour 3 sera une étape décisive pour sceller définitivement l'esprit d'équipe de la classe de CM1.",
      "choices": [
        {
          "text": "Si tu choisis d'aborder le Jour 3 avec enthousiasme et solidarité, rends-toi au 103.",
          "target": 103
        },
        {
          "text": "Si tu boudes encore un peu en arrivant devant le portail, rends-toi au 105.",
          "target": 105
        },
        {
          "text": "Si tu attends au milieu de la cour sans chercher de contact particulier, rends-toi au 104.",
          "target": 104
        }
      ],
      "isEnding": false
    },
    "103": {
      "id": 103,
      "text": "C'est le grand matin du Jour 3 ! Le soleil brille sur l'école du Marronnier. Des fanions colorés décorent la cour. Les parents, le directeur et les autres classes commencent à arriver pour visiter l'exposition. Samy arrive tout souriant.",
      "choices": [
        {
          "text": "Si tu vas accueillir Samy au portail pour visiter les stand ensemble, rends-toi au 106.",
          "target": 106
        },
        {
          "text": "Si tu cours directement vers les stands sans attendre les autres, rends-toi au 107.",
          "target": 107
        },
        {
          "text": "Si tu restes à côté de tes parents sans prêter attention aux camarades, rends-toi au 108.",
          "target": 108
        }
      ],
      "isEnding": false
    },
    "104": {
      "id": 104,
      "text": "Le portail s'ouvre pour le Jour 3. La cour est remplie de musique et d'animation. Mme Martin rassemble les élèves de CM1 pour attribuer les plages horaires d'explication de la maquette devant le public.",
      "choices": [
        {
          "text": "Si tu te portes volontaire pour co-présenter le projet avec Samy, rends-toi au 106.",
          "target": 106
        },
        {
          "text": "Si tu demandes à présenter la maquette tout seul, rends-toi au 107.",
          "target": 107
        },
        {
          "text": "Si tu donnes ton accord sans enthousiasme particulier, rends-toi au 108.",
          "target": 108
        }
      ],
      "isEnding": false
    },
    "105": {
      "id": 105,
      "text": "Un peu de nervosité flotte dans l'air au début de la fête de l'école. Hugo passe à proximité du stand avec sa famille. Il a l'air hésitant et ne sait pas trop quelle attitude adopter aujourd'hui.",
      "choices": [
        {
          "text": "Si tu fais la grimace à Hugo en passant à côté de lui, rends-toi au 107.",
          "target": 107
        },
        {
          "text": "Si tu lui adresses un salut neutre pour montrer que la page est tournée, rends-toi au 108.",
          "target": 108
        },
        {
          "text": "Si tu l'invites chaleureusement à venir voir la maquette de la classe, rends-toi au 106.",
          "target": 106
        }
      ],
      "isEnding": false
    },
    "106": {
      "id": 106,
      "text": "Devant la grande maquette de la classe de CM1, les visiteurs se pressent. Samy explique avec une aisance remarquable les détails de la réalisation. Les parents et M. Bernard, le directeur, applaudissent vivement la présentation.",
      "choices": [
        {
          "text": "Si tu félicites Samy à voix haute devant tout le groupe réuni, rends-toi au 109.",
          "target": 109
        },
        {
          "text": "Si tu prends toute la parole en oubliant de mentionner le travail des copains, rends-toi au 110.",
          "target": 110
        },
        {
          "text": "Si tu te tiens un peu en retrait en souriant poliment, rends-toi au 111.",
          "target": 111
        }
      ],
      "isEnding": false
    },
    "107": {
      "id": 107,
      "text": "Pendant la démonstration du projet, une petite bousculade survient près du panneau des affiches. Un dessin se décroche et glisse au sol. Hugo s'approche prudemment pour observer la scène.",
      "choices": [
        {
          "text": "Si tu ramasses le dessin en accusant Hugo d'avoir fait exprès, rends-toi au 110.",
          "target": 110
        },
        {
          "text": "Si tu replaces calmement l'affiche avec l'aide de Samy et Thomas, rends-toi au 109.",
          "target": 109
        },
        {
          "text": "Si tu donnes un coup de pied dans l'affiche tombée par terre, rends-toi au 111.",
          "target": 111
        }
      ],
      "isEnding": false
    },
    "108": {
      "id": 108,
      "text": "L'exposition de la fête de l'école bat son plein. Plusieurs enseignants félicitent la classe de CM1 pour le bel esprit d'équipe qui se dégage des panneaux préparés par les élèves.",
      "choices": [
        {
          "text": "Si tu restes spectateur sans participer aux explications, rends-toi au 111.",
          "target": 111
        },
        {
          "text": "Si tu encourages Samy à présenter sa partie préférée du travail, rends-toi au 109.",
          "target": 109
        },
        {
          "text": "Si tu t'éloignes vers le buffet des gâteaux sans prévenir personne, rends-toi au 110.",
          "target": 110
        }
      ],
      "isEnding": false
    },
    "109": {
      "id": 109,
      "text": "M. Bernard s'approche du stand et remet à la classe un diplôme d'honneur pour la qualité de leur projet sur la solidarité. Tout le monde applaudit chaleureusement. Samy te serre la main avec émotion.",
      "choices": [
        {
          "text": "Si tu proposes une photo de groupe avec toute la classe rassemblée autour du diplôme, rends-toi au 112.",
          "target": 112
        },
        {
          "text": "Si tu attrapes le diplôme pour le garder tout seul dans tes mains, rends-toi au 113.",
          "target": 113
        },
        {
          "text": "Si tu t'éclipses discrètement vers les jeux de la kermesse, rends-toi au 114.",
          "target": 114
        }
      ],
      "isEnding": false
    },
    "110": {
      "id": 110,
      "text": "Un petit manque d'organisation perturbe la fin de la présentation. Mme Martin intervient avec le sourire : « Ce qui compte le plus aujourd'hui, c'est le chemin parcouru ensemble pour apprendre à se respecter ! »",
      "choices": [
        {
          "text": "Si tu râles en disant que les explications étaient mal préparées, rends-toi au 113.",
          "target": 113
        },
        {
          "text": "Si tu approuves les paroles de la maîtresse et rejoins tes camarades, rends-toi au 112.",
          "target": 112
        },
        {
          "text": "Si tu regardes l'heure en attendant la fin de la matinée, rends-toi au 114.",
          "target": 114
        }
      ],
      "isEnding": false
    },
    "111": {
      "id": 111,
      "text": "L'exposition de la fête s'achève doucement dans le hall. Les visiteurs commencent à se disperser vers les stands de jeux dans la cour. L'ambiance entre les élèves de CM1 est devenue calme et sereine.",
      "choices": [
        {
          "text": "Si tu restes neutre et accompagnes le groupe vers la cour, rends-toi au 114.",
          "target": 114
        },
        {
          "text": "Si tu vas proposer à Samy d'essayer la pêche aux canards avec toi, rends-toi au 112.",
          "target": 112
        },
        {
          "text": "Si tu cours devant en bousculant les plus petits, rends-toi au 113.",
          "target": 113
        }
      ],
      "isEnding": false
    },
    "112": {
      "id": 112,
      "text": "Au milieu de la cour de récréation, les stands de kermesse sont installés : chamboule-tout, course en sac, pêche aux canards. Hugo s'approche de Samy et lui tend une balle : « Tu veux essayer de faire tomber les boîtes avec moi ? »",
      "choices": [
        {
          "text": "Si tu félicites Hugo pour ce beau geste d'amitié et jouez tous ensemble, rends-toi au 115.",
          "target": 115
        },
        {
          "text": "Si tu dis à Hugo : « Trop tard, tu as été trop méchant avant ! », rends-toi au 116.",
          "target": 116
        },
        {
          "text": "Si tu regardes la scène de loin sans intervenir, rends-toi au 117.",
          "target": 117
        }
      ],
      "isEnding": false
    },
    "113": {
      "id": 113,
      "text": "Une petite dispute éclate près du chamboule-tout car deux élèves veulent tirer en même temps. Léa essaie de trancher la question en criant plus fort que les autres.",
      "choices": [
        {
          "text": "Si tu t'énerves à ton tour pour imposer ton tour de passage, rends-toi au 116.",
          "target": 116
        },
        {
          "text": "Si tu donnes l'exemple en cédant ta place pacifiquement, rends-toi au 115.",
          "target": 115
        },
        {
          "text": "Si tu t'éloignes vers un autre stand pour éviter les histoires, rends-toi au 117.",
          "target": 117
        }
      ],
      "isEnding": false
    },
    "114": {
      "id": 114,
      "text": "Les jeux de la fête de l'école battent leur plein dans une ambiance animée. La plupart des élèves de CM1 s'amusent ensemble et le climat d'exclusion du début de la semaine semble définitivement loin.",
      "choices": [
        {
          "text": "Si tu profites du moment pour rassembler l'équipe autour d'un verre de limonade, rends-toi au 115.",
          "target": 115
        },
        {
          "text": "Si tu te laisses porter par la foule sans prêter attention aux autres, rends-toi au 117.",
          "target": 117
        },
        {
          "text": "Si tu taquines grossièrement un camarade qui a manqué sa cible au tir, rends-toi au 116.",
          "target": 116
        }
      ],
      "isEnding": false
    },
    "115": {
      "id": 115,
      "text": "Vers la fin de la matinée, Mme Martin réunit une dernière fois la classe sous le grand marronnier de la cour. « Je suis très fière de vous tous. Vous avez su transformer l'atmosphère de l'école par vos choix ! »",
      "choices": [
        {
          "text": "Si tu remercies Mme Martin et serres la main de Samy avec enthousiasme, rends-toi au 118.",
          "target": 118
        },
        {
          "text": "Si tu interromps la maîtresse pour demander quand commencera le goûter, rends-toi au 119.",
          "target": 119
        },
        {
          "text": "Si tu restes sagement dans le rang en attendant la distribution des lots, rends-toi au 120.",
          "target": 120
        }
      ],
      "isEnding": false
    },
    "116": {
      "id": 116,
      "text": "Un dernier petit malentendu survient au moment du rangement des stands. Heureusement, la bienveillance générale permet de désamorcer rapidement la tension avant la clôture de la fête.",
      "choices": [
        {
          "text": "Si tu aides à plier les tables en présentant tes excuses pour ton comportement brusque, rends-toi au 118.",
          "target": 118
        },
        {
          "text": "Si tu boudes sur un banc jusqu'à la fin de la matinée, rends-toi au 119.",
          "target": 119
        },
        {
          "text": "Si tu attends tranquillement la fin du discours de clôture, rends-toi au 120.",
          "target": 120
        }
      ],
      "isEnding": false
    },
    "117": {
      "id": 117,
      "text": "La fête de l'école se conclut progressivement sous le soleil de midi. Les familles s'apprêtent à rentrer chez elles. Le bilan de ces trois jours dans la classe du Marronnier est riche en enseignements.",
      "choices": [
        {
          "text": "Si tu décides de prendre une posture résolument solidaire pour la suite de l'année, rends-toi au 118.",
          "target": 118
        },
        {
          "text": "Si tu t'en vas en restant dans une attitude passive et distante, rends-toi au 120.",
          "target": 120
        },
        {
          "text": "Si tu lances une dernière remarque ironique avant de franchir le portail, rends-toi au 119.",
          "target": 119
        }
      ],
      "isEnding": false
    },
    "118": {
      "id": 118,
      "text": "Au moment d'avoir le mot de la fin pour cette étape, tu mesures le chemin parcouru. Grâce à des choix empreints de justice, d'empathie et d'amitié, Samy a trouvé toute sa place au sein du CM1 de l'école du Marronnier.",
      "choices": [
        {
          "text": "Pour découvrir le bilan final positif de ton aventure et la conclusion du livre, rends-toi au 121.",
          "target": 121
        },
        {
          "text": "Pour voir les réflexions du groupe classe avant le grand départ en vacances, rends-toi au 122.",
          "target": 122
        },
        {
          "text": "Pour lire le message d'au revoir préparé par Mme Martin et les élèves, rends-toi au 123.",
          "target": 123
        }
      ],
      "isEnding": false
    },
    "119": {
      "id": 119,
      "text": "L'aventure se termine sur quelques regrets liés à tes réactions impulsives, mais tu as compris la portée de tes actes et l'importance de respecter chacun avec ses différences.",
      "choices": [
        {
          "text": "Pour découvrir comment corriger tes erreurs dans le bilan final de l'histoire, rends-toi au 124.",
          "target": 124
        },
        {
          "text": "Pour voir la suite des événements lors de la clôture du trimestre, rends-toi au 125.",
          "target": 125
        },
        {
          "text": "Pour lire la conclusion nuancée de ton parcours dans ce livre dont tu es le héros, rends-toi au 126.",
          "target": 126
        }
      ],
      "isEnding": false
    },
    "120": {
      "id": 120,
      "text": "Ton parcours dans ce récit s'achève. Tu as traversé ces trois journées d'école en alternant hésitations et prises de conscience. Il est temps de découvrir la conclusion de cette grande aventure humaine.",
      "choices": [
        {
          "text": "Pour obtenir le dénouement neutre de ton parcours, rends-toi au 127.",
          "target": 127
        },
        {
          "text": "Pour découvrir la leçon de vie retenue par l'ensemble de la classe de CM1, rends-toi au 128.",
          "target": 128
        },
        {
          "text": "Pour lire l'épilogue final de « L'Ombre de la Cour », rends-toi au 129.",
          "target": 129
        }
      ],
      "isEnding": false
    },
    "121": {
      "id": 121,
      "text": "Bilan final positif : En choisissant l'empathie et la solidarité, tu as redonné confiance à Samy. Sa maman te remercie chaleureusement et la classe a appris qu'accueillir les différences enrichit tout le monde.",
      "choices": [
        {
          "text": "Pour sceller cette belle amitié lors du dernier jour avant les vacances, rends-toi au 130.",
          "target": 130
        },
        {
          "text": "Pour proposer un projet de groupe solidaire pour l'année prochaine, rends-toi au 131.",
          "target": 131
        },
        {
          "text": "Pour organiser un grand goûter d'adieu convivial avec Mme Martin, rends-toi au 132.",
          "target": 132
        }
      ],
      "isEnding": false
    },
    "122": {
      "id": 122,
      "text": "Avant le grand départ en vacances, les élèves se réunissent en cercle sous le marronnier. Hugo s'approche de Samy et s'excuse sincèrement d'avoir lancé le « jeu du fantôme ». L'atmosphère de la classe est totalement transformée.",
      "choices": [
        {
          "text": "Si tu encourages Hugo pour sa démarche courageuse, rends-toi au 131.",
          "target": 131
        },
        {
          "text": "Si tu félicites Samy pour son courage tout au long de la semaine, rends-toi au 130.",
          "target": 130
        },
        {
          "text": "Si tu remercies Mme Martin pour ses conseils bienveillants, rends-toi au 132.",
          "target": 132
        }
      ],
      "isEnding": false
    },
    "123": {
      "id": 123,
      "text": "Mme Martin lit un message d'au revoir préparé avec l'ensemble des élèves. Elle rappelle que chaque membre de la classe apporte sa richesse unique et que l'exclusion n'a plus aucune place à l'école du Marronnier.",
      "choices": [
        {
          "text": "Si tu proposes de signer une charte de la camaraderie pour l'an prochain, rends-toi au 130.",
          "target": 130
        },
        {
          "text": "Si tu prends une photo souvenir avec Samy et tes amis, rends-toi au 132.",
          "target": 132
        },
        {
          "text": "Si tu invites Samy à venir jouer chez toi pendant les vacances, rends-toi au 131.",
          "target": 131
        }
      ],
      "isEnding": false
    },
    "124": {
      "id": 124,
      "text": "Tu comprends que tes réactions impulsives ou maladroites ont parfois créé de la gêne. Heureusement, il n'est jamais trop tard pour bien faire et corriger le tir avant la fin de l'année scolaire.",
      "choices": [
        {
          "text": "Si tu vas voir Samy en privé pour lui présenter de vraies excuses, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu essaies de faire rire la classe en exagérant la situation, rends-toi au 134.",
          "target": 134
        },
        {
          "text": "Si tu demandes à Mme Martin de t'aider à exprimer ce que tu ressens, rends-toi au 135.",
          "target": 135
        }
      ],
      "isEnding": false
    },
    "125": {
      "id": 125,
      "text": "Au moment du bilan de clôture du trimestre, une certaine maladresse persiste dans tes échanges avec Samy. Tu as voulu bien faire en luttant contre l'invisibilisation, mais sans toujours respecter sa discrétion.",
      "choices": [
        {
          "text": "Si tu décides de lui demander directement ce qu'il préfère pour la suite, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu t'imposes à nouveau en parlant à sa place devant le groupe, rends-toi au 134.",
          "target": 134
        },
        {
          "text": "Si tu te mets en retrait pour le laisser s'exprimer seul, rends-toi au 135.",
          "target": 135
        }
      ],
      "isEnding": false
    },
    "126": {
      "id": 126,
      "text": "Ton parcours dans ce livre se termine sur une note nuancée. Tu as conscience des erreurs commises lors des moments de tension et tu réfléchis à la façon dont tu réagiras la prochaine fois qu'un camarade aura besoin d'aide.",
      "choices": [
        {
          "text": "Si tu choisis d'apprendre de tes erreurs pour l'avenir, rends-toi au 135.",
          "target": 135
        },
        {
          "text": "Si tu t'excuses auprès de la classe pour ton comportement impulsif, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu préfères ignorer le malaise et attendre les vacances, rends-toi au 134.",
          "target": 134
        }
      ],
      "isEnding": false
    },
    "127": {
      "id": 127,
      "text": "Dénouement neutre : Tu es resté en retrait, observant les événements sans vraiment intervenir. Samy n'est plus ouvertement moqué, mais il n'a pas non plus trouvé de véritables amis et passe ses récréations en solo.",
      "choices": [
        {
          "text": "Si tu décides au dernier moment de franchir le pas pour lui adresser la parole, rends-toi au 135.",
          "target": 135
        },
        {
          "text": "Si tu continues à l'ignorer et pars rejoindre ton groupe habituel, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu constates la solitude de Samy sans agir jusqu'au coup de sifflet final, rends-toi au 134.",
          "target": 134
        }
      ],
      "isEnding": false
    },
    "128": {
      "id": 128,
      "text": "La leçon de vie retenue par la classe de CM1 montre que le silence des témoins permet parfois aux moqueries de s'installer. Plusieurs élèves réalisent qu'ils auraient dû agir plus tôt pour soutenir Samy.",
      "choices": [
        {
          "text": "Si tu prends la parole pendant le conseil d'élèves pour avouer ton hésitation, rends-toi au 135.",
          "target": 135
        },
        {
          "text": "Si tu laisses les autres donner leur avis sans exprimer le tien, rends-toi au 134.",
          "target": 134
        },
        {
          "text": "Si tu t'approches discrètement de Samy pour lui dire bonjour avant de partir, rends-toi au 133.",
          "target": 133
        }
      ],
      "isEnding": false
    },
    "129": {
      "id": 129,
      "text": "Épilogue final : Les vacances arrivent. En repensant à cette semaine décisive à l'école du Marronnier, tu comprends quel rôle essentiel chaque élève peut jouer dans le bien-être et le bonheur de ses camarades.",
      "choices": [
        {
          "text": "Si tu décides d'envoyer une carte postale à Samy pendant l'été, rends-toi au 135.",
          "target": 135
        },
        {
          "text": "Si tu quittes l'école sans te soucier de ce qu'il deviendra à la rentrée, rends-toi au 133.",
          "target": 133
        },
        {
          "text": "Si tu hésites encore sur la posture à adopter au trimestre prochain, rends-toi au 134.",
          "target": 134
        }
      ],
      "isEnding": false
    },
    "130": {
      "id": 130,
      "text": "Tu échanges un grand sourire avec Samy en scellant votre amitié. Vous planifiez déjà vos lectures et vos jeux pour la rentrée prochaine. Tu sais que ton intervention a tout changé pour lui.",
      "choices": [
        {
          "text": "Pour découvrir l'aboutissement de cette belle alliance solidaire, rends-toi au 146.",
          "target": 146
        },
        {
          "text": "Pour lire l'impact positif de ton aide sur le climat général de la classe, rends-toi au 148.",
          "target": 148
        },
        {
          "text": "Pour conclure l'histoire sur une note d'amitié durable et sincère, rends-toi au 150.",
          "target": 150
        }
      ],
      "isEnding": false
    },
    "131": {
      "id": 131,
      "text": "Avec l'accord de Mme Martin, la classe crée un club d'entraide pour que plus personne ne se sente isolé, quelle que soit sa situation de santé ou ses difficultés temporaires.",
      "choices": [
        {
          "text": "Pour voir le succès de ce projet solidaire avant le départ en vacances, rends-toi au 147.",
          "target": 147
        },
        {
          "text": "Pour célébrer la fin définitive de l'invisibilisation à l'école du Marronnier, rends-toi au 149.",
          "target": 149
        },
        {
          "text": "Pour sceller la grande victoire de l'empathie collective dans le CM1, rends-toi au 146.",
          "target": 146
        }
      ],
      "isEnding": false
    },
    "132": {
      "id": 132,
      "text": "Pendant le goûter d'adieu, Samy prend la parole pour remercier ceux qui l'ont accueilli les bras ouverts. Ses mots touchent l'ensemble des élèves et des adultes présents.",
      "choices": [
        {
          "text": "Pour lire la conclusion solidaire et chaleureuse de ton aventure, rends-toi au 148.",
          "target": 148
        },
        {
          "text": "Pour découvrir le message pédagogique final sur l'importance du soutien solidaire, rends-toi au 150.",
          "target": 150
        },
        {
          "text": "Pour voir comment l'amitié triomphe des moqueries et du harcèlement, rends-toi au 147.",
          "target": 147
        }
      ],
      "isEnding": false
    },
    "133": {
      "id": 133,
      "text": "Malgré l'intention d'aider, les choix faits trop rapidement ont manqué de tact. Samy ne sait pas toujours sur quel pied danser et préfère éviter les disputes inutiles.",
      "choices": [
        {
          "text": "Pour découvrir le résultat d'une aide mal ajustée ou trop bruyante, rends-toi au 141.",
          "target": 141
        },
        {
          "text": "Pour lire la conclusion mitigée due au manque d'écoute des besoins de Samy, rends-toi au 143.",
          "target": 143
        },
        {
          "text": "Pour comprendre comment une réaction maladroite peut créer une gêne durable, rends-toi au 145.",
          "target": 145
        }
      ],
      "isEnding": false
    },
    "134": {
      "id": 134,
      "text": "En trop voulant intervenir à la place de Samy sans lui demander son avis, tu as parfois attiré une attention excessive sur sa maladie, le mettant mal à l'aise devant les autres.",
      "choices": [
        {
          "text": "Pour voir le bilan de cette surprotection maladroite en fin d'année, rends-toi au 142.",
          "target": 142
        },
        {
          "text": "Pour lire les explications sur la différence entre aider et imposer ses choix, rends-toi au 144.",
          "target": 144
        },
        {
          "text": "Pour découvrir comment réajuster ton comportement à l'avenir, rends-toi au 141.",
          "target": 141
        }
      ],
      "isEnding": false
    },
    "135": {
      "id": 135,
      "text": "Tu essaies d'équilibrer tes réactions, mais l'inconstance de tes actes laisse un sentiment mitigé. Samy apprécie ton intention, mais aurait préféré une présence plus posée et régulière.",
      "choices": [
        {
          "text": "Pour découvrir le bilan d'une démarche hésitante mais réparatrice, rends-toi au 143.",
          "target": 143
        },
        {
          "text": "Pour comprendre la leçon sur le respect du rythme de chacun, rends-toi au 145.",
          "target": 145
        },
        {
          "text": "Pour lire l'issue mitigée de cette fin de trimestre au Marronnier, rends-toi au 142.",
          "target": 142
        }
      ],
      "isEnding": false
    },
    "136": {
      "id": 136,
      "text": "En refusant de t'interposer et en préférant suivre l'effet de groupe ou détourner le regard, tu as laissé le « jeu du fantôme » faire ses ravages. Samy s'est complètement replié sur lui-même. Chaque jour, il s'assoit seul au fond de la classe et traverse les récréations dans un silence pesant, devenu invisible aux yeux de tous.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'inaction / L'isolement (Fin négative)",
        "tone": "negative",
        "pedagogicalMessage": "Ne rien faire ou détourner le regard devant l'injustice, c'est laisser l'exclusion et le harcèlement s'installer. Chaque témoin a le pouvoir d'agir !",
        "outro": "Tu peux rejouer pour explorer d'autres choix et aider Samy à trouver sa place !"
      }
    },
    "137": {
      "id": 137,
      "text": "Par crainte de te faire mal voir d'Hugo et des élèves populaires, tu as préféré ignorer les moqueries à l'égard de Samy. Ton silence a encouragé l'exclusion. Samy ne cherche même plus à participer aux activités de groupe et passe ses pauses déjeuner à attendre silencieusement la fin des cours.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'inaction / L'isolement (Fin négative)",
        "tone": "negative",
        "pedagogicalMessage": "Le silence des témoins renforce le pouvoir des harceleurs. Prendre la parole pour inclure un camarade, c'est protéger toute la classe.",
        "outro": "N'hésite pas à recommencer l'histoire pour faire triompher la solidarité !"
      }
    },
    "138": {
      "id": 138,
      "text": "En choisissant la passivité, tu as laissé s'installer une barrière invisible entre Samy et le reste des élèves. La maladie de Samy servait de prétexte à son mise à l'écart, et personne n'a pris sa défense. L'année scolaire s'achève sur une triste impression d'injustice non résolue.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'inaction / L'isolement (Fin négative)",
        "tone": "negative",
        "pedagogicalMessage": "L'invisibilisation est une forme silencieuse mais très douloureuse de harcèlement. Un simple geste de bienvenue peut tout changer.",
        "outro": "Relance une partie pour tenter une démarche plus courageuse et amicale !"
      }
    },
    "139": {
      "id": 139,
      "text": "Samy passe désormais ses journées d'école isolé au bord de la cour. À force d'être ignoré par ses camarades de CM1, il a perdu son enthousiasme et appréhende chaque matin la rentrée en classe. En n'intervenant pas, tu as laissé la méchanceté prendre le dessus.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'inaction / L'isolement (Fin négative)",
        "tone": "negative",
        "pedagogicalMessage": "Rester neutre face à l'exclusion d'un camarade vulnérable, c'est cautionner le rejet. L'amitié commence par le refus de l'indifférence.",
        "outro": "Invite d'autres choix dans une nouvelle lecture pour transformer cette fin !"
      }
    },
    "140": {
      "id": 140,
      "text": "La cloche des vacances sonne sans que personne ne soit venu rompre l'isolement de Samy. Le « jeu du fantôme » a fini par faire oublier sa présence dans l'école. En ayant choisi de détourner la tête tout au long de la semaine, tu portes une part de cette triste réalité.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "A",
        "label": "FIN A : L'inaction / L'isolement (Fin négative)",
        "tone": "negative",
        "pedagogicalMessage": "L'invisibilisation nuit gravement au bien-être des élèves. Ne laisse jamais un camarade devenir un \"fantôme\" dans la cour de récréation.",
        "outro": "Rejoue dès maintenant pour découvrir les fins solidaire et positive !"
      }
    },
    "141": {
      "id": 141,
      "text": "Tu as voulu défendre Samy contre les provocations d'Hugo, mais tu l'as fait en criant et en provoquant de violentes disputes. Bien que le « jeu du fantôme » ait cessé, l'atmosphère de la classe reste très tendue et Samy se sent gêné d'avoir été au centre de tous ces conflits.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : La maladresse / L'effet contre-productif (Fin mitigée)",
        "tone": "mitigee",
        "pedagogicalMessage": "Vouloir aider est essentiel, mais l'agressivité ou la provocation créent du malaise. Pour défendre un camarade, privilégie le calme et le dialogue.",
        "outro": "Rejoue pour essayer de soutenir Samy avec plus de calme et de tact !"
      }
    },
    "142": {
      "id": 142,
      "text": "En cherchant à protéger Samy, tu as parlé fort de son PAI et de sa maladie devant toute la classe sans lui demander son avis. Pensant bien faire, tu as involontairement renforcé sa différence et Samy se sent désormais dévisagé et mal à l'aise au quotidien.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : La maladresse / L'effet contre-productif (Fin mitigée)",
        "tone": "mitigee",
        "pedagogicalMessage": "Aider quelqu'un implique de respecter sa pudeur et son rythme. Exposer la santé d'un camarade à sa place peut lui causer de l'embarras.",
        "outro": "Tente une autre partie pour trouver le juste équilibre entre soutien et respect !"
      }
    },
    "143": {
      "id": 143,
      "text": "Tu as alterné entre des gestes de soutien impulsifs et des moments de timidité. Résultat : Samy ne sait pas s'il peut vraiment compter sur toi, et l'intégration s'est faite dans une gêne persistante. Les moqueries ont diminué, mais une vraie amitié n'a pas pu se consolider.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : La maladresse / L'effet contre-productif (Fin mitigée)",
        "tone": "mitigee",
        "pedagogicalMessage": "La solidarité demande de la constance et de la bienveillance. Une aide maladroite vaut mieux que de l'indifférence, mais l'écoute reste la clé.",
        "outro": "Recommence l'histoire pour offrir un soutien plus régulier et chaleureux à Samy !"
      }
    },
    "144": {
      "id": 144,
      "text": "Soucieux de contrer Hugo, tu as voulu prendre toutes les décisions à la place de Samy sans l'écouter. Samy s'est senti étouffé et écarté de ses propres choix. Le harcèlement direct s'est arrêté, mais un sentiment d'inconfort demeure au sein du groupe.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : La maladresse / L'effet contre-productif (Fin mitigée)",
        "tone": "mitigee",
        "pedagogicalMessage": "Inclure un camarade, c'est l'écouter et lui donner la parole, et non décider à sa place. Le respect des souhaits de l'autre est primordial.",
        "outro": "Rejoue pour découvrir comment faire équipe en toute égalité !"
      }
    },
    "145": {
      "id": 145,
      "text": "Tes réactions vives face aux moqueries ont provoqué plusieurs interventions des surveillants et de la maîtresse. La situation s'est apaisée en surface, mais une certaine lourdeur flotte dans l'air. Samy te remercie pour tes intentions tout en regrettant l'agitation engendrée.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "B",
        "label": "FIN B : La maladresse / L'effet contre-productif (Fin mitigée)",
        "tone": "mitigee",
        "pedagogicalMessage": "L'action d'un témoin doit apaiser les tensions et non les amplifier. Le dialogue constructif est l'arme la plus efficace contre l'exclusion.",
        "outro": "Relance une partie pour essayer d'agir de façon plus sereine et réfléchie !"
      }
    },
    "146": {
      "id": 146,
      "text": "Grâce à ton accueil chaleureux, ton écoute et tes choix courageux, tu as brisé le « jeu du fantôme » dès ses premiers instants ! Samy a trouvé toute sa place dans la classe de CM1. Son PAI est parfaitement respecté sans aucune stigmatisation, et il s'épanouit entouré de véritables amis.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'alliance juste / La solidarité (Fin positive)",
        "tone": "positive",
        "pedagogicalMessage": "Un témoin qui agit avec bienveillance, justice et respect peut briser l'isolement et transformer radicalement le climat de toute une classe.",
        "outro": "Bravo pour tes choix exemplaires ! Rejoue pour tester d'autres parcours !"
      }
    },
    "147": {
      "id": 147,
      "text": "En coopérant avec Samy sur la maquette de la fête et en invitant spontanément les autres camarades à vous rejoindre, tu as démontré que la solidarité rend les projets plus forts. Hugo et Léa ont abandonné leurs moqueries et toute la classe célèbre la réussite collective dans la joie !",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'alliance juste / La solidarité (Fin positive)",
        "tone": "positive",
        "pedagogicalMessage": "L'inclusion et le travail d'équipe enrichissent tout le monde. En valorisant les compétences de chacun, on élimine les préjugés.",
        "outro": "Félicitations pour ce magnifique parcours solidaire !"
      }
    },
    "148": {
      "id": 148,
      "text": "Tu as su faire preuve de tact en informant Mme Martin du malaise tout en offrant un soutien sincère et discret à Samy. Samy est ravi de sa réintégration et partage désormais toutes ses passions avec la classe. Une amitié solide est née entre vous pour toute l'année scolaire !",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'alliance juste / La solidarité (Fin positive)",
        "tone": "positive",
        "pedagogicalMessage": "Savoir demander de l'aide aux adultes tout en tendant la main à un camarade en difficulté est la meilleure façon d'agir contre l'injustice.",
        "outro": "Bravo ! Tu as été un allié formidable et un modèle de camaraderie !"
      }
    },
    "149": {
      "id": 149,
      "text": "Ton attitude positive a créé un superbe effet d'entraînement dans l'école du Marronnier. Thomas, Yasmine et d'autres élèves ont suivi ton exemple. Samy se sent accepté, compris et aimé tel qu'il est. Le « jeu du fantôme » a définitivement disparu du vocabulaire de la classe.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'alliance juste / La solidarité (Fin positive)",
        "tone": "positive",
        "pedagogicalMessage": "L'empathie est contagieuse. Quand un élève ose dire non à l'exclusion, il inspire les autres et transforme son école en un lieu accueillant pour tous.",
        "outro": "Un immense bravo pour cette belle victoire humaine !"
      }
    },
    "150": {
      "id": 150,
      "text": "Au moment de se quitter pour les vacances, la classe remet un diplôme d'honneur de la solidarité. Samy te serre chaleureusement la main en te remerciant d'avoir été là au bon moment. Tu as prouvé qu'avec de l'écoute et du respect, chaque enfant peut briller et se sentir à sa place.",
      "choices": [],
      "isEnding": true,
      "ending": {
        "category": "C",
        "label": "FIN C : L'alliance juste / La solidarité (Fin positive)",
        "tone": "positive",
        "pedagogicalMessage": "Accepter les différences de santé ou de rythme et faire preuve de gentillesse au quotidien construit un monde plus juste et plus humain.",
        "outro": "Félicitations ! Tu as terminé l'histoire de la plus belle des manières !"
      }
    }
  },
  "totalParagraphs": 150,
  "debateQuestions": [
    "Pourquoi le « jeu du fantôme » (l'invisibilisation) est-il aussi blessant qu'une moquerie directe ou une insulte ?",
    "Quel est le rôle des témoins quand un élève est mis à l'écart ? Que risque-t-on à ne rien faire ?",
    "Pourquoi est-il important de respecter les besoins d'un camarade atteint d'une maladie chronique (PAI) sans pour autant le stigmatiser ou décider à sa place ?",
    "Comment réagir avec calme et efficacité quand on voit un camarade victime de moqueries ou d'exclusion dans la cour ?"
  ],
  "coverTheme": {
    "primary": "#1E4663",
    "secondary": "#2D6487",
    "accent": "#E39D3E",
    "motif": "cour"
  },
  "status": "playable",
  "isCustom": false
};

export default cm1OmbreDeLaCour;
