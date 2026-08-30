const db = require('./database.js');

const mesAnimes = [
  {
    titre: "365 Days to the Wedding",
    titre_secondaire: "365 Days to the Wedding / Maphoring",
    date_sortie: "Octobre 2024 (Automne 2024)",
    synopsis: "Takuya et Rika travaillent dans une agence de voyages à Tokyo. Tous deux introvertis et satisfaits de leur célibat, ils décident de feindre des fiançailles pour éviter d'être mutés dans une nouvelle filiale en Sibérie."
  },
  {
    titre: "5 Centimeters per Second",
    titre_secondaire: "5 Centimeters per Second (Byōsoku Gō Senchimētoru)",
    date_sortie: "Mars 2007 (Film de Makoto Shinkai)",
    synopsis: "Une histoire d'amour racontée en trois chapitres retraçant la vie de Takaki Toono et Akari Shinohara, séparés par la distance mais liés par leurs sentiments à mesure que les années passent."
  },
  {
    titre: "7th Time Loop: The Villainess Enjoys a Carefree Life",
    titre_secondaire: "7th Time Loop",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Rishe Imgard Wertsner vit sa 7ème réincarnation. Dans ses vies précédentes, elle a été marchande, médecin, chevalier... Dans cette nouvelle vie, le prince Arnold du royaume ennemi (responsable de sa mort passée) lui demande sa hand."
  },
  {
    titre: "A Certain Middle-Aged Man's VRMMO Activity Log",
    titre_secondaire: "Toaru Ossan no VRMMO Katsudouki",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Taichi Tanaka, un employé ordinaire de 38 ans, joue au jeu VRMMO 'One More Free Life Online'. Il choisit délibérément des compétences jugées inutiles (cuisine, fabrication de flèches, magie faible) et apprécie son expérience à son propre rythme."
  },
  {
    titre: "A Galaxy Next Door",
    titre_secondaire: "Otonari ni Ginga",
    date_sortie: "Avril 2023 (Printemps 2023)",
    synopsis: "Ichiro Kuga, mangaka luttant pour élever ses jeunes frères et sœurs, engage une nouvelle assistante talentueuse, Shiori Goshiki. Il découvre rapidement qu'elle est en réalité une princesse extraterrestre liée à lui par un pacte mystique."
  },
  {
    titre: "A Girl & Her Guard Dog",
    titre_secondaire: "Ojōto Guard Dog",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Isaku, petite-fille d'un chef Yakuza, souhaite simplement avoir une vie lycéenne normale. Cependant, Keiya, un membre du clan surprotecteur de 26 ans, s'inscrit dans le même lycée pour être son garde du corps."
  },
  {
    titre: "A Sign of Affection",
    titre_secondaire: "Yubisaki to Renren",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Yuki Itose, une étudiante sourde de naissance, croise la route d'Itsuomi Nagi, un étudiant trilingue passionné de voyages. Ce dernier ne montre aucune hésitation face à son handicap et s'intéresse sincèrement à son monde."
  },
  {
    titre: "Tying the Knot with an Amagami Sister",
    titre_secondaire: "Amagami-san Chi no Enmusubi",
    date_sortie: "Octobre 2024 (Automne 2024)",
    synopsis: "Uryu Kamiki vise à entrer à la faculté de médecine. Il est accueilli par le prêtre du sanctuaire Amagami, à condition qu'il se marie avec l'une des trois sœurs miko du sanctuaire."
  },
  {
    titre: "Arifureta: From Commonplace to World's Strongest (Saison 3 & 4)",
    titre_secondaire: "Arifureta Season 3 / Season 4",
    date_sortie: "Octobre 2024 (S3)",
    synopsis: "Hajime Nagumo et son groupe continuent leur parcours à travers les labyrinthes légendaires pour trouver le moyen de retourner sur Terre tout en affrontant la menace des apôtres."
  },
  {
    titre: "Back Arrow",
    titre_secondaire: "Back Arrow",
    date_sortie: "Janvier 2021 (Hiver 2021)",
    synopsis: "Le monde de Lingalind est entouré par un mur gigantesque. Un homme mystérieux nommé Back Arrow apparaît en tombant du ciel à l'intérieur du mur sans aucun souvenir, affirmant qu'il vient de 'l'extérieur'."
  },
  {
    titre: "Battle Game in 5 Seconds",
    titre_secondaire: "Deatte 5-byou de Battle",
    date_sortie: "Juillet 2021 (Été 2021)",
    synopsis: "Akira Shiyanagi, un lycéen passionné de jeux, est entraîné dans une bataille de compétences mystérieuse après avoir été piégé par une fille nommée Mion. Il doit utiliser sa compétence unique pour survivre."
  },
  {
    titre: "Beast Tamer",
    titre_secondaire: "Yuusha Party wo Tsuihou Sareta Beast Tamer",
    date_sortie: "Octobre 2022 (Automne 2022)",
    synopsis: "Rein, un dompteur de bêtes, est chassé de l'équipe du héros car considéré comme trop faible. Il rencontre Kanade, une jeune fille de la tribu des chats (l'espèce la plus puissante), et passe un pacte avec elle."
  },
  {
    titre: "Berserk of Gluttony",
    titre_secondaire: "Boushou no Berserk",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Fate Graphite travaille comme garde. Maltraité en raison de sa compétence 'Gloutonnerie' jugée inutile, il découvre en tuant un voleur qu'elle lui permet de dévorer les capacités et compétences de ses victimes."
  },
  {
    titre: "Betrothed to My Sister's Ex",
    titre_secondaire: "Betrothed to My Sister's Ex",
    date_sortie: "Projet Webtoon / Manga",
    synopsis: "Après la rupture de sa sœur avec son fiancé, la protagoniste se retrouve contrainte par la famille d'accepter un mariage arrangé avec cet ex-fiancé."
  },
  {
    titre: "Black Butler (Saison 1)",
    titre_secondaire: "Kuroshitsuji Season 1",
    date_sortie: "Octobre 2008 (Automne 2008)",
    synopsis: "Dans l'Angleterre victorienne, Ciel Phantomhive, un jeune comte, résout des enquêtes sombres pour la Reine avec l'aide de Sebastian Michaelis, un majordome démoniaque lié à lui par un pacte."
  },
  {
    titre: "Black Summoner",
    titre_secondaire: "Kuro no Shokuan",
    date_sortie: "Juillet 2022 (Été 2022)",
    synopsis: "Kelvin se réincarne dans un autre monde en échange de ses souvenirs passés afin d'obtenir des compétences d'invocateur surpuissantes. Il commence son périple pour recruter des alliés redoutables."
  },
  {
    titre: "Bogus Skill Fruitmaster (Saison 1)",
    titre_secondaire: "Hazure Skill \"Kinomoto\" S1",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Light obtient la compétence jugée inutile 'Fruitmaster'. Il découvre toutefois que consommer certains fruits magiques lui confère une multitude de compétences cheatées et d'évolutions."
  },
  {
    titre: "Call of the Night (Saison 1)",
    titre_secondaire: "Yofukashi no Uta",
    date_sortie: "Juillet 2022 (Été 2022)",
    synopsis: "Kou Yamori, un collégien insomniaque, se promène la nuit et rencontre Nazuna Nanakusa, une vampire excentrique. Kou décide de tomber amoureux d'elle pour devenir vampire à son tour."
  },
  {
    titre: "Campione!",
    titre_secondaire: "Campione!: Matsuroshi Kami to Kamigoshi no Maou",
    date_sortie: "Juillet 2012 (Été 2012)",
    synopsis: "Kusanagi Godou parvient à tuer le dieu de la guerre Verethragna. Cet exploit fait de lui un 'Campione', un tueur de dieux doté d'immenses pouvoirs divins que les prêtresses cherchent à accompagner."
  },
  {
    titre: "Can a Boy-Girl Friendship Survive? (Saison 1)",
    titre_secondaire: "Danjo no Friendship wa Seiritsu Suru?",
    date_sortie: "Annoncé pour 2025",
    synopsis: "Himari et Yuu ont juré de rester meilleurs amis éternels. Deux ans plus tard au lycée, l'éveil de nouveaux sentiments vient mettre à rude épreuve leur promesse d'amitié platonique."
  },
  {
    titre: "Chilling in Another World with Level 2 Super Cheat Powers",
    titre_secondaire: "Lv2 Kara Cheat tatara Moto Yuusha Houbu",
    date_sortie: "Avril 2024 (Printemps 2024)",
    synopsis: "Banaza est invoqué comme héros mais banni à cause de statistiques faibles. En passant au niveau 2, ses capacités deviennent infinies. Il décide de cacher sa force et de mener une vie tranquille."
  },
  {
    titre: "Clevatess: Majū no Ō to Redi to Baby (Saison 1)",
    titre_secondaire: "Clevatess - King of Devil Beasts",
    date_sortie: "Annoncé pour 2025",
    synopsis: "Clevatess, le Roi des Bêtes Démons, décide d'anéantir l'humanité mais se retrouve à devoir élever un bébé humain nouveau-né, ce qui va bouleverser sa vision du monde."
  },
  {
    titre: "Conception (13 Wives)",
    titre_secondaire: "Conception: Ore no Kodomo wo Ute Kure!",
    date_sortie: "Octobre 2018 (Automne 2018)",
    synopsis: "Itsuki Yushina est transporté dans le monde de Granvania. Pour sauver le monde de la pollution stellaire, il doit concevoir des 'Enfants Étoiles' avec 12 miko représentant les constellations."
  },
  {
    titre: "Dandadan (Saison 1)",
    titre_secondaire: "Dandadan Season 1",
    date_sortie: "Octobre 2024 (Automne 2024)",
    synopsis: "Momo Ayase croit aux fantômes et Okarun aux extraterrestres. En défiant chacun le domaine de l'autre, ils découvrent que les deux existent et se retrouvent impliqués dans des événements paranormaux survoltés."
  },
  {
    titre: "The Dangers in My Heart (Saison 2)",
    titre_secondaire: "Boku no Kokoro no Yabai Yatsu S2",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Kyotaro Ichikawa et Anna Yamada continuent de se rapprocher au collège, apprenant à dépasser leurs complexes et leurs peurs respectives."
  },
  {
    titre: "Is It Wrong to Try to Pick Up Girls in a Dungeon? (Saison 5)",
    titre_secondaire: "DanMachi Season 5",
    date_sortie: "Octobre 2024 (Automne 2024)",
    synopsis: "Bell Cranel continue sa progression dans Orario. Dans cette saison 5, la déesse Freya passe à l'action pour s'emparer définitivement de lui."
  },
  {
    titre: "Dealing with Mikadono Sisters",
    titre_secondaire: "Mikadono-san Chi no San Shimai wa Keikatsu",
    date_sortie: "Annoncé pour 2025",
    synopsis: "Yuu Ayase est hébergé chez la famille Mikadono et se retrouve à vivre sous le même toit que les trois sœurs Mikadono, des génies dans leurs domaines respectifs."
  },
  {
    titre: "Death March to the Parallel World Rhapsody",
    titre_secondaire: "Death March kara Hajimaru Isekai Kyousoukyoku",
    date_sortie: "Janvier 2018 (Hiver 2018)",
    synopsis: "Ichirou Suzuki, un programmeur de 29 ans, se réveille dans un monde de jeu de fantasy. Après avoir accidentellement éliminé une armée de monstres avec un sort de niveau ultime, il devient surpuissant."
  },
  {
    titre: "Demon Lord 2099 (Saison 1)",
    titre_secondaire: "Maou 2099",
    date_sortie: "Octobre 2024 (Automne 2024)",
    synopsis: "Le Roi Démon Veltol se réveille après 500 ans dans la métropole futuriste cyberpunk de Shinjuku 2099, où la magie s'est mêlée aux hautes technologies et au streaming."
  },
  {
    titre: "Chained Soldier (Demon Slave) (Saison 1)",
    titre_secondaire: "Mato Seihei no Slave",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Dans un monde où seules les femmes tirent des pouvoirs de dimension magiques, Yuuki Wakura devient l'esclave magique de Kyouka Uzen pour combattre les créatures démoniaques."
  },
  {
    titre: "Demon Spirit Seed Manual",
    titre_secondaire: "Yao Jing Chong Sheng Ji (Donghua)",
    date_sortie: "2020",
    synopsis: "Yuan Ding est transporté dans un monde fantastique où la culture des graines d'esprits démoniaques confère des pouvoirs uniques et permet de faire éclore des gardiennes magiques."
  },
  {
    titre: "Ron Kamonohashi's Forbidden Deductions (Deranged Detective S1)",
    titre_secondaire: "Kamonohashi Ron no Kindaichi Shou",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Ron Kamonohashi, un détective de génie déchu, s'associe avec Totomaru Isshiki, un policier naïf, pour résoudre des affaires mystérieuses."
  },
  {
    titre: "Failure Frame (Saison 1)",
    titre_secondaire: "Hazurewaku no \"Joutai Abnormality\" Magic",
    date_sortie: "Juillet 2024 (Été 2024)",
    synopsis: "Touka Mimori est banni dans un donjon par une déesse en raison de compétences de rang E jugées inutiles. Il découvre que ses sorts d'altération d'état sont dévastateurs et jure de se venger."
  },
  {
    titre: "Fate/stay night",
    titre_secondaire: "Fate stay night",
    date_sortie: "Janvier 2006 (Hiver 2006)",
    synopsis: "Shirou Emiya est entraîné dans la Cinquième Guerre du Saint-Graal, un rituel où 7 mages invoquent des esprits héroïques (Servants) pour se battre jusqu'au dernier."
  },
  {
    titre: "Fire Force (Saison 2)",
    titre_secondaire: "Enen no Shouboutai Season 2",
    date_sortie: "Juillet 2020 (Été 2020)",
    synopsis: "Shinra Kusakabe et la 8e brigade poursuivent leurs recherches sur le Grand Prédicateur et les détenteurs de la Flamme d'Adolla pour sauver le monde de la combustion spontanée."
  },
  {
    titre: "Frieren: Beyond Journey's End",
    titre_secondaire: "Sousou no Frieren",
    date_sortie: "Septembre 2023 (Automne 2023)",
    synopsis: "Après la défaite du Roi Démon, l'elfe Frieren voit ses compagnons humains vieillir et mourir. Elle entreprend un nouveau voyage pour mieux comprendre la valeur des liens humains."
  },
  {
    titre: "From Old Country Bumpkin to Master Swordsman",
    titre_secondaire: "Katainaka no Ossan, Kensei ni Naru",
    date_sortie: "Avril 2025 (Printemps 2025)",
    synopsis: "Beryl Gardinant est un maître d'escrime médiocre d'un village rural. Son ancienne élève, devenue capitaine des chevaliers, le recrute comme instructeur spécial dans la capitale."
  },
  {
    titre: "The Fruit of Grisaia (Saisons 1 & 2)",
    titre_secondaire: "Grisaia no Kajitsu / Grisaia no Rakuen",
    date_sortie: "Octobre 2014 (S1) / Avril 2015 (S2)",
    synopsis: "Yuuji Kazami s'inscrit à l'académie Mihama, une école fermée abritant cinq jeunes filles au passé sombre et traumatisant qu'il cherchera à aider."
  },
  {
    titre: "Fugushoku Kanteishi (Les Sœurs Arbre Monde - Saison 1)",
    titre_secondaire: "Fugushoku Kanteishi ga Shin no Chikara",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Ein possède la compétence d'Appréciateur jugée inutile. En découvrant le secret de ses yeux magiques et avec l'aide des Esprits de l'Arbre Monde, il devient un combattant puissant."
  },
  {
    titre: "GATE: Thus the JSDF Fought There!",
    titre_secondaire: "Gate: Jieitai Kanochi ni te, Kaku Tatakaeri",
    date_sortie: "Juillet 2015 (Saison 1)",
    synopsis: "Une porte dimensionnelle déversant des monstres s'ouvre à Tokyo. L'armée japonaise (JSDF) repousse la menace et envoie l'otaku Youji Itami explorer ce monde fantastique."
  },
  {
    titre: "Goblin Slayer (Saison 2)",
    titre_secondaire: "Goblin Slayer 2nd Season",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Dans un monde de fantasy, un aventurier solitaire se consacre exclusivement à l'extermination des goblins. Dans cette saison 2, il continue ses quêtes avec son groupe."
  },
  {
    titre: "God's Games We Play",
    titre_secondaire: "Kami wa Game ni Ueteiru",
    date_sortie: "Avril 2024 (Printemps 2024)",
    synopsis: "Des dieux ennuyés créent un jeu de réflexion ultime. Fay, un humain passionné de jeux, fait équipe avec Leoleshea, une déesse éveillée, pour tenter d'être le premier à les battre."
  },
  {
    titre: "The Devil is a Part-Timer!",
    titre_secondaire: "Hataraku Maou-sama!",
    date_sortie: "Avril 2013 (Saison 1)",
    synopsis: "Le Roi Démon Satan s'échappe vers le Tokyo moderne après sa défaite. Privé de magie, il prend le nom de Sadao Maou et commence à travailler dans un fast-food à mi-temps."
  },
  {
    titre: "Headhunted to Another World (Saison 1)",
    titre_secondaire: "Salaryman ga Isekai ni Ittara Shitennou ni Natta",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Dennosuke, un cadre de bureau, est transporté dans un autre monde et recruté par le Roi Démon pour devenir l'un des Quatre Rois Démons grâce à ses talents en gestion."
  },
  {
    titre: "Hell Mode",
    titre_secondaire: "Hell Mode: Yarikomi Suki no Gamer wa Musou Suru",
    date_sortie: "Projet en cours / Annoncé",
    synopsis: "Kenichi est réincarné sous le nom d'Allen dans un monde fantasy en choisissant la difficulté maximale : 'Hell Mode'. Il doit s'entraîner d'une manière extrême pour progresser."
  },
  {
    titre: "Hokkaido Gals Are Super Adorable!",
    titre_secondaire: "Dosanko Gal wa Masara Ni Kawaii",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Tsubasa déménage à Hokkaido et rencontre Minami Fuyuki, une jeune fille gal chaleureuse et adorable qui brave le froid nordique en tenue légère."
  },
  {
    titre: "An Archdemon's Dilemma: How to Love Your Elf Bride",
    titre_secondaire: "Maou no Ore ga Loli Elf wo Yome ni Shita",
    date_sortie: "Avril 2024 (Printemps 2024)",
    synopsis: "Zagan, un sorcier craint de tous, achète et tombe amoureux de Nephy, une elfe aux cheveux blancs. Sans aucune compétence sociale, il tente d'exprimer ses sentiments."
  },
  {
    titre: "I Have a Crush at Work",
    titre_secondaire: "Konomachi no Futari wa",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Deux collègues de bureau tombent amoureux et entament une relation romantique qu'ils doivent garder totalement secrète vis-à-vis des autres employés."
  },
  {
    titre: "I Left My A-Rank Party (Saison 1)",
    titre_secondaire: "A-Rank Party wo Tsuihou Sareta Mage",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Yuke, un mage rouge maltraité dans son groupe de rang A, décide de démissionner et fonde son propre groupe avec d'anciennes étudiantes pour prouver sa véritable force."
  },
  {
    titre: "I Parry Everything",
    titre_secondaire: "Ore wa Subete wo [Parry] Suru",
    date_sortie: "Juillet 2024 (Été 2024)",
    synopsis: "Noor s'est entraîné des années à la parade basique et a porté cette compétence à un niveau divin capable de tout parer, tout en croyant être le plus faible."
  },
  {
    titre: "I'm a Noble on the Brink of Ruin",
    titre_secondaire: "Poverty Noble Liam Magic Story",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Un homme se réincarne en Liam, fils d'un noble ruiné. Pour redresser la situation familiale, il se consacre passionnément à la maîtrise de la magie."
  },
  {
    titre: "I'm Getting Married to the Girl I Hate in My Class",
    titre_secondaire: "Klass no Kirai na Joshi to Kekkon Suru",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Saito et Akane se détestent en classe. Par un arrangement familial, ils se retrouvent forcés de se marier et d'habiter sous le même toit."
  },
  {
    titre: "I'm Giving the Disgraced Noble Lady I Rescued a Crash Course in Naughtiness",
    titre_secondaire: "Konyaku Hakai Sareta Reijou wo Hirotta",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Allen recueille Charlotte, une noble faussement accusée et bannie. Il décide de lui apprendre à profiter de la vie à travers des gâteries et plaisirs du quotidien."
  },
  {
    titre: "Infinite Stratos",
    titre_secondaire: "IS: Infinite Stratos",
    date_sortie: "Janvier 2011 (Hiver 2011)",
    synopsis: "Les armures mecha IS ne peuvent être pilotées que par des femmes. Ichika Orimura étant le seul homme capable d'en piloter une, il intègre une académie exclusivement féminine."
  },
  {
    titre: "Isekai Yururi Kiko (Saison 1)",
    titre_secondaire: "A Journey Through Another World: Raising Kids",
    date_sortie: "Juillet 2024 (Été 2024)",
    synopsis: "Takumi se réincarne dans un monde de fantasy. Il recueille deux jumeaux doués pour la magie, Allen et Elena, et entame une aventure paisible à leurs côtés."
  },
  {
    titre: "Izure Saikyou no Renkinjutsushi?",
    titre_secondaire: "Possibly the Greatest Alchemist of All Time",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Takumi Iruma est invoqué dans un autre monde et reçoit la compétence d'Alchimie pour créer des objets magiques d'exception et vivre à son propre rythme."
  },
  {
    titre: "Bottom-Tier Character Tomozaki (La vie est un jeu)",
    titre_secondaire: "Jaku-Chara Tomozaki-kun",
    date_sortie: "Janvier 2021 (S1) / Janvier 2024 (S2)",
    synopsis: "Tomozaki, joueur de jeu vidéo hors pair mais asocial, est pris en main par Aoi Hinami qui décide de lui apprendre à réussir dans le 'jeu de la vie'."
  },
  {
    titre: "Jujutsu Kaisen (Saison 2)",
    titre_secondaire: "JJK Season 2",
    date_sortie: "Juillet 2023 (Été 2023)",
    synopsis: "Arc du passé de Satoru Gojo et Suguru Geto à l'école d'exorcisme, suivi par les événements tragiques et violents de l'incident de Shibuya."
  },
  {
    titre: "Just Because!",
    titre_secondaire: "Just Because!",
    date_sortie: "Octobre 2017 (Automne 2017)",
    synopsis: "À la fin du lycée, le retour d'un ancien élève transféré ravive des souvenirs et vient bousculer les sentiments amoureux d'un groupe d'amis."
  },
  {
    titre: "Kaiju No. 8 (Saison 1)",
    titre_secondaire: "Kaijuu 8-gou",
    date_sortie: "Avril 2024 (Printemps 2024)",
    synopsis: "Kafka Hibino acquiert la capacité de se transformer en Kaiju après qu'une créature s'est introduite en lui. Il tente d'intégrer les Forces de Défense japonaises."
  },
  {
    titre: "Kakushite! Makina-san!!",
    titre_secondaire: "Hide It! Makina-san!!",
    date_sortie: "Annoncé pour 2025",
    synopsis: "Eita découvre que sa voisine d'enfance Makina est un androïde de combat perfectionné qui emménage chez lui tout en dissimulant sa nature."
  },
  {
    titre: "Kemono Jihen (Saison 1)",
    titre_secondaire: "Kemono Jihen",
    date_sortie: "Janvier 2021 (Hiver 2021)",
    synopsis: "Kohachi Inugami, détective de l'occulte, enquête dans un village et rencontre Kabane, un garçon mi-humain mi-monstre (Kemono) rejeté par les villageois."
  },
  {
    titre: "Kemono Michi: Rise Up",
    titre_secondaire: "Hataage! Kemono Michi",
    date_sortie: "Octobre 2019 (Automne 2019)",
    synopsis: "Un catcheur pro passionné par les animaux est invoqué pour tuer les monstres d'un monde fantastique. Il refuse et décide plutôt d'ouvrir un animalerie de monstres."
  },
  {
    titre: "Kimi ni Todoke: From Me to You (Saison 1)",
    titre_secondaire: "Kimi ni Todoke",
    date_sortie: "Octobre 2009 (Automne 2009)",
    synopsis: "Sawako, surnommée Sadako pour son allure effrayante malgré sa grande gentillesse, voit sa vie changer lorsque le garcon le plus populaire de la classe s'intéresse à elle."
  },
  {
    titre: "The 100 Girlfriends Who Really, Really, Really, Really, REALLY Love You",
    titre_secondaire: "Kimi no Koto ga Daidaidaidaidaisuki (S1 & S2)",
    date_sortie: "Octobre 2023 (S1) / Janvier 2025 (S2)",
    synopsis: "Rentaro doit sortir avec ses 100 âmes sœurs au lycée sous peine de les voir mourir tragiquement s'il refuse de répondre à leur amour."
  },
  {
    titre: "Boarding School Juliet",
    titre_secondaire: "Kishuku Gakkou no Juliet",
    date_sortie: "Octobre 2018 (Automne 2018)",
    synopsis: "Romio et Juliet sont les chefs de dortoirs de deux nations ennemies dans une académie. En secret, ils mènent une relation amoureuse interdite."
  },
  {
    titre: "Kizetsu Yuusha to Ansatsu Hime (Saison 1)",
    titre_secondaire: "The Fainting Hero and Assassin Princess",
    date_sortie: "Projet en cours",
    synopsis: "Un héros ultra-puissant s'évanouit au moindre stress ou choc émotionnel. Une princesse assassine a pour mission de le protéger discrètement."
  },
  {
    titre: "Noble Reincarnation (Saison 2)",
    titre_secondaire: "Kizoku Tensei S2",
    date_sortie: "Projet en cours",
    synopsis: "Noah, 13e fils de l'empereur réincarné avec des compétences optimisées, utilise sa stratégie et sa magie pour étendre son influence politique et militaire."
  },
  {
    titre: "Komi Can't Communicate (Saison 1)",
    titre_secondaire: "Komi-san wa, Komyushou Desu S1",
    date_sortie: "Octobre 2021 (Automne 2021)",
    synopsis: "Komi est considérée comme la déesse du lycée mais souffre d'anxiété sociale extrême. Tadano découvre son problème et l'aide dans son objectif de se faire 100 amis."
  },
  {
    titre: "Kunon the Sorcerer Can See",
    titre_secondaire: "Kunon the Sorcerer Can See Through It All",
    date_sortie: "Projet annoncé",
    synopsis: "Kunon, un jeune garçon aveugle, utilise la magie de l'eau pour concevoir de nouveaux yeux magiques et explorer le monde à sa façon."
  },
  {
    titre: "Medaka Kuroiwa Is Impervious to My Charms (Saison 1)",
    titre_secondaire: "Kuroiwa Medaka ni Watashi no Kawaii ga Tsūjinai",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Mona Kawai fait craquer tous les garçons sauf Medaka, un moine en formation interdisant tout contact féminin. Mona fait tout pour le séduire."
  },
  {
    titre: "Let's Grieve: Treasure Hunter",
    titre_secondaire: "Nageki no Shoujo wa引退したい",
    date_sortie: "Octobre 2024 (Automne 2024)",
    synopsis: "Krai est un chercheur de trésor dénué de talent qui se retrouve malgré lui propulsé à la tête du plus puissant groupe d'aventuriers de la capitale."
  },
  {
    titre: "Loner Life in Another World",
    titre_secondaire: "Hitoribocchi no Isekai Kouryaku",
    date_sortie: "Octobre 2024 (Automne 2024)",
    synopsis: "Haruka est invoqué dans un autre monde avec sa classe. Arrivé en dernier, il n'obtient que les compétences jugées inutiles et le talent 'Solitaire'."
  },
  {
    titre: "Lord Marksman and Vanadis",
    titre_secondaire: "Madan no Ou to Vanadis",
    date_sortie: "Octobre 2014 (Automne 2014)",
    synopsis: "Tigre, un jeune comte archer, est capturé au combat par Eleonora, l'une des sept Vanadis détentrices d'armes magiques. Elle en fait son serviteur."
  },
  {
    titre: "Love Through a Prism",
    titre_secondaire: "Prism Love",
    date_sortie: "2025",
    synopsis: "Une romance originale et visuelle explorant la dynamique amoureuse entre des personnages au caractère très contrasté."
  },
  {
    titre: "Magic Maker: How to Make Magic in Another World",
    titre_secondaire: "Magic Maker: Isekai Mahou no Tsukurikata",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Shion se réincarne dans un monde où la magie n'existe pas. Il étudie les phénomènes scientifiques pour inventer le premier système magique de ce monde."
  },
  {
    titre: "The Ancient Magus' Bride (Saison 1)",
    titre_secondaire: "Mahoutsukai no Yome S1",
    date_sortie: "Octobre 2017 (Automne 2017)",
    synopsis: "Chise Hatori, une orpheline vendue aux enchères, est achetée par Elias Ainsworth, un sorcier mystérieux qui en fait son apprentie et sa fiancée."
  },
  {
    titre: "Marriagetoxin",
    titre_secondaire: "Mariage Toxin",
    date_sortie: "Projet en développement",
    synopsis: "Hikaru Gero[cite: 1, 2], assassin spécialisé dans les poisons, engage Mei Kinosaki[cite: 1, 2], un arnaqueur au mariage, comme coach en séduction afin de trouver une épouse."
  },
  {
    titre: "Mashle: Magic and Muscles (Saison 2)",
    titre_secondaire: "Mashle Season 2",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Mash Burnedead ne possède pas de magie mais des muscles surhumains. Dans la saison 2, il participe à l'examen pour devenir Visionnaire Divin."
  },
  {
    titre: "Masamune-kun's Revenge (Saison 2)",
    titre_secondaire: "Masamune-kun no Revenge R",
    date_sortie: "Juillet 2023 (Été 2023)",
    synopsis: "Masamune poursuit son plan de vengeance amoureuse contre Aki Adagaki lors d'un voyage scolaire à Paris, mais ses sentiments se compliquent."
  },
  {
    titre: "Miss Kobayashi's Dragon Maid (Saison 2)",
    titre_secondaire: "Kobayashi-san Chi no Maid Dragon S",
    date_sortie: "Juillet 2021 (Été 2021)",
    synopsis: "Le quotidien de Kobayashi et de ses dragons s'anime encore plus avec l'arrivée d'Ilulu, un dragon de la faction du Chaos déchaîné."
  },
  {
    titre: "My Daughter Left the Nest and Returned an S-Rank Adventurer",
    titre_secondaire: "Boukensha ni Naritai to Miyako ni Deteitta Musume",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Belgrieve a élevé sa fille adoptive Angeline. Devenue une aventurière de rang S légendaire dans la capitale, elle ne rêve que d'une chose : revoir son père."
  },
  {
    titre: "My Gift Lvl 9999 Unlimited Gacha",
    titre_secondaire: "Gift Unlimited Gacha Level 9999",
    date_sortie: "Annoncé",
    synopsis: "Trahis par son groupe dans un donjon mortel, Light active la compétence 'Gacha Illimité' pour invoquer des alliés niveau 9999 et accomplir sa vengeance."
  },
  {
    titre: "My Isekai Life",
    titre_secondaire: "Tensei Kenja no Isekai Life",
    date_sortie: "Juillet 2022 (Été 2022)",
    synopsis: "Yuji Sano, employé surmené, est transporté dans un autre monde. En apprivoisant des slimes, il débloque des compétences magiques devenant un Sage surpuissant."
  },
  {
    titre: "My Instant Death Ability Is Overpowered",
    titre_secondaire: "Sokushi Cheat ga Saikyou Sugite",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Yogiri Takatou possède la compétence d'éliminer instantanément toute cible ou menace par la pensée, ce qui lui permet de traverser ce nouveau monde sans effort."
  },
  {
    titre: "My Status as an Assassin Exceeds the Hero's",
    titre_secondaire: "Ansatsu Skill de Isekai Musou",
    date_sortie: "Projet Light Novel / Anime",
    synopsis: "Oda Akira est invoqué dans un autre monde avec sa classe. Il obtient des statistiques et compétences d'assassin surpassant de loin celles du Héros."
  },
  {
    titre: "Myriad Colors Phantom World",
    titre_secondaire: "Musaigen no Phantom World",
    date_sortie: "Janvier 2016 (Hiver 2016)",
    synopsis: "Dans un futur où les entités surnaturelles nommées Phantoms sont visibles, des élèves dotés de pouvoirs travaillent à sceller les Phantoms gênants."
  },
  {
    titre: "Reign of the Seven Spellblades",
    titre_secondaire: "Nanatsu no Maken ga Shihai Suru",
    date_sortie: "Juillet 2023 (Été 2023)",
    synopsis: "Oliver Horn intègre l'académie de magie de Kimberly. Il s'y lie d'amitié avec Nanao, une samouraï, tout en cachant ses véritables motifs de vengeance."
  },
  {
    titre: "Tsuyokute New Saga",
    titre_secondaire: "New Saga",
    date_sortie: "Annoncé",
    synopsis: "Après la défaite sanglante contre le Roi Démon, Kyle est renvoyé trois ans dans le passé avec tous ses souvenirs et compétences pour changer le futur."
  },
  {
    titre: "Welcome to Japan, Ms. Elf!",
    titre_secondaire: "Nihon e Yokoso Elf-san",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Kazuhiro rêve d'un monde de fantasy durant son sommeil. Un jour, il se réveille au Japon avec Marie, une jeune elfe de son monde onirique."
  },
  {
    titre: "Ninja Kamui",
    titre_secondaire: "Ninja Kamui",
    date_sortie: "Février 2024 (Hiver 2024)",
    synopsis: "Higan, un ancien ninja réfugié en Amérique, reprend son identité de Ninja Kamui pour se venger du massacre de sa famille par son ancien clan."
  },
  {
    titre: "No Longer Allowed in Another World (Saison 1)",
    titre_secondaire: "Isekai Shikkaku",
    date_sortie: "Juillet 2024 (Été 2024)",
    synopsis: "Un écrivain mélancolique est transporté dans un autre monde alors qu'il tentait de mourir. Déçu de ne pas être mort, il cherche constamment un moyen d'en finir."
  },
  {
    titre: "Go! Go! Loser Ranger! (No Longer Rangers)",
    titre_secondaire: "Sentai Daishakkai",
    date_sortie: "Avril 2024 (Printemps 2024)",
    synopsis: "Les Dragon Keepers obligent les démons défaits à rejouer la même défaite chaque semaine. Le Combattant D s'infiltre chez les héros pour détruire leur organisation."
  },
  {
    titre: "I've Somehow Gotten Stronger When I Improved My Farm-Related Skills",
    titre_secondaire: "Noumin K関連 Skill wo Kawatara",
    date_sortie: "Octobre 2022 (Automne 2022)",
    synopsis: "Al Wayne a poussé ses compétences agricoles au maximum, ce qui a augmenté ses statistiques globales au point de surpasser les plus grands héros."
  },
  {
    titre: "One-Punch Man (Saison 2)",
    titre_secondaire: "One Punch Man Season 2",
    date_sortie: "Avril 2019 (Printemps 2019)",
    synopsis: "Saitama continue d'éliminer les monstres en un coup de poing pendant que l'Association des Héros fait face au redoutable 'Chasseur de Héros' Garoh."
  },
  {
    titre: "The Foolish Angel Dances with the Devil",
    titre_secondaire: "Oroka na Tenshi wa Akuma to Odoru",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Masatora, un démon sur Terre pour recruter des alliés, tombe amoureux de Lily Amane, qui s'avère être un ange envoyé pour chasser les démons."
  },
  {
    titre: "Our Dating Story: The Experienced You and The Inexperienced Me",
    titre_secondaire: "Kimizero",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Ryuto, un lycéen solitaire, déclare sa flamme à Runa Shirakawa suite à un pari perdu. À sa grande surprise, la fille la plus populaire accepte de sortir avec lui."
  },
  {
    titre: "Our Last Crusade or the Rise of a New World (Saison 2)",
    titre_secondaire: "Kimi to Boku no Saigo no Senjou S2",
    date_sortie: "Juillet 2024 (Été 2024)",
    synopsis: "Iska et Aliceliese continuent d'affronter leurs devoirs militaires et leurs sentiments naissants dans une guerre opposant science et magie."
  },
  {
    titre: "The Outcast's Restaurant",
    titre_secondaire: "Outcast's Restaurant in Another World",
    date_sortie: "Projet en adaptation",
    synopsis: "Un cuisinier banni de sa guilde ouvre un restaurant près d'une forêt dangereuse, servant des plats savoureux aux aventuriers déchus et créatures."
  },
  {
    titre: "Overlord (Saison 3)",
    titre_secondaire: "Overlord III",
    date_sortie: "Juillet 2018 (Été 2018)",
    synopsis: "Ainz Ooal Gown poursuit l'extension du Grand Tombeau de Nazarick, affrontant l'Empire de Baharuth et le Royaume de Re-Estize jusqu'à fonder son Royaume Sorcier."
  },
  {
    titre: "Overmind (Saison 1)",
    titre_secondaire: "Overmind (Donghua)",
    date_sortie: "2023 / 2024",
    synopsis: "Thriller scientifique futuriste dans lequel des humains dotés de liaisons neuronales s'affrontent pour le contrôle d'un réseau virtuel conscient."
  },
  {
    titre: "Parasyte -the maxim-",
    titre_secondaire: "Kiseijuu: Sei no Kakuritsu",
    date_sortie: "Octobre 2014 (Automne 2014)",
    synopsis: "Shinichi Izumi est attaqué par un parasite extraterrestre qui s'installe dans son bras droit. Tous deux doivent cohabiter pour survivre aux autres parasites."
  },
  {
    titre: "The Private Tutor to the Duke's Daughter",
    titre_secondaire: "Private Tutor to the Duke's Daughter",
    date_sortie: "Projet en adaptation",
    synopsis: "Allen est engagé comme précepteur privé pour la fille d'un duc. Ses compétences magiques exceptionnelles vont transformer la vie de la noblesse."
  },
  {
    titre: "Rail Wars!",
    titre_secondaire: "Rail Wars!",
    date_sortie: "Juillet 2014 (Été 2014)",
    synopsis: "Dans un Japon où la compagnie ferroviaire n'a jamais été privatisée, Naoto intègre la force de sécurité ferroviaire aux côtés de camarades hauts en couleur."
  },
  {
    titre: "Re:Monster (Saison 1)",
    titre_secondaire: "Re:Monster",
    date_sortie: "Avril 2024 (Printemps 2024)",
    synopsis: "Tomokui Kanata se réincarne en goblin sous le nom de Gobrou. Grâce à sa capacité d'absorption en mangeant ses ennemis, il évolue rapidement."
  },
  {
    titre: "Ride Your Wave",
    titre_secondaire: "Kimi to, Nami ni Noretara",
    date_sortie: "Juin 2019 (Film de Masaaki Yuasa)",
    synopsis: "Hinako perd son petit ami pompier Minato dans une noyade. Elle découvre qu'elle peut faire apparaître son esprit dans l'eau en chantant leur chanson préférée."
  },
  {
    titre: "The Faraway Paladin (Saison 2)",
    titre_secondaire: "Saihate no Paladin S2",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Will, désormais Paladin, protège les terres sauvages et doit faire face à une menace ancienne venant des Montagnes Rouillées."
  },
  {
    titre: "Scooped Up by an S-Rank Adventurer (Saison 1)",
    titre_secondaire: "S-Rank Adventurer Picked Me Up",
    date_sortie: "Annoncé",
    synopsis: "Un aventurier de bas niveau au potentiel caché est repéré et pris sous son aile par une aventurière légendaire de rang S."
  },
  {
    titre: "The Demon Sword Master of Excalibur Academy",
    titre_secondaire: "Seiken Gakuin no Maken Tsukai",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Leonis, le Roi Démon, se réveille dans le corps d'un enfant de 10 ans et s'inscrit à l'Académie de la Sainte Épée pour observer le monde futur."
  },
  {
    titre: "Dragonar Academy",
    titre_secondaire: "Seikoku no Dragonar",
    date_sortie: "Avril 2014 (Printemps 2014)",
    synopsis: "Dans une académie de chevaucheurs de dragons, Ash Blake voit son dragon s'éveiller sous les traits d'une jeune fille particulièrement capricieuse."
  },
  {
    titre: "Seirei Gensouki: Spirit Chronicles (Saison 2)",
    titre_secondaire: "Seirei Gensouki S2",
    date_sortie: "Octobre 2024 (Automne 2024)",
    synopsis: "Rio continue de naviguer dans les intrigues politiques entre les royaumes tout en recherchant d'autres réincarnés venant du Japon."
  },
  {
    titre: "Shangri-La Frontier (Saison 1)",
    titre_secondaire: "Shangri-La Frontier Season 1",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Sunraku, passionné de jeux vidéo pleins de bugs, se lance dans le meilleur jeu VRMMO du moment et y applique ses réflexes hors norme."
  },
  {
    titre: "The Testament of Sister New Devil",
    titre_secondaire: "Shinmai Maou no Testament",
    date_sortie: "Janvier 2015 (Hiver 2015)",
    synopsis: "Basara découvre que ses nouvelles belles-sœurs sont la fille du Roi Démon et un succube. Il conclut un pacte avec elles pour les protéger."
  },
  {
    titre: "The Ossan Newbie Adventurer",
    titre_secondaire: "Shinmai Ossan Boukensha",
    date_sortie: "Juillet 2024 (Été 2024)",
    synopsis: "Rick Gladiator devient aventurier à 30 ans. Bien que novice en apparence, il a été entraîné par le groupe le plus fort du monde, le rendant invincible."
  },
  {
    titre: "Magi: The Adventures of Sinbad",
    titre_secondaire: "Magi: Sinbad no Bouken",
    date_sortie: "Avril 2016 (Printemps 2016)",
    synopsis: "Préquelle retraçant la jeunesse de Sinbad, sa conquête du premier donjon à 14 ans et son ascension vers la création du royaume de Sindria."
  },
  {
    titre: "Sirius the Jaeger",
    titre_secondaire: "Sirius the Jaeger",
    date_sortie: "Juillet 2018 (Été 2018)",
    synopsis: "Dans les années 1930 à Tokyo, un groupe de chasseurs de vampires affronte les créatures de la nuit. Parmi eux, Yuliy, un loup-garou en quête de vengeance."
  },
  {
    titre: "Sky Wizards Academy",
    titre_secondaire: "Kuusen Madoushi Kouhoukan no Kyoukan",
    date_sortie: "Juillet 2015 (Été 2015)",
    synopsis: "Kanata Age, ancien combattant d'élite méprisé, devient l'instructeur de l'équipe E601, réputée comme la pire escouade de l'académie magique."
  },
  {
    titre: "Smoking Behind the Supermarket with You (Saison 1)",
    titre_secondaire: "Super no Ura de Yani Sū Futari",
    date_sortie: "Projet annoncé",
    synopsis: "Sasaki, un employé de bureau épuisé, rencontre une jeune femme mystérieuse nommée Tayama derrière son supermarché habituel pour fumer une cigarette."
  },
  {
    titre: "Solo Leveling (Saison 1)",
    titre_secondaire: "Ore dake Level Up na Ken S1",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Sung Jinwoo, le plus faible des chasseurs, obtient l'accès à une interface de système unique lui permettant de monter de niveau sans limite."
  },
  {
    titre: "Spriggan",
    titre_secondaire: "Spriggan (Netlix ONA)",
    date_sortie: "Juin 2022 (Été 2022)",
    synopsis: "Les agents Spriggan de la corporation ARCAM voyagent à travers le monde pour sceller d'anciennes reliques technologiques destructrices."
  },
  {
    titre: "SPY x FAMILY (Saisons 1, 2 & 3)",
    titre_secondaire: "Spy x Family S1, S2 & S3",
    date_sortie: "Avril 2022 (S1) / 2024-2025 (S3)",
    synopsis: "L'espion Twilight crée la famille Forger avec Yor (assassine) et Anya (télépathe) sans connaître leurs secrets respectifs pour préserver la paix."
  },
  {
    titre: "Seven Senses of the Re'Union",
    titre_secondaire: "Shichisei no Subaru",
    date_sortie: "Juillet 2018 (Été 2018)",
    synopsis: "Haruto retrouve dans un nouveau jeu VRMMO son amie d'enfance Asahi, pourtant décédée six ans plus tôt dans la vraie vie suite à un événement en jeu."
  },
  {
    titre: "Super Cube (Saison 1)",
    titre_secondaire: "Super Cube (Donghua)",
    date_sortie: "2024",
    synopsis: "Wang Wei trouve un cube extraterrestre mystérieux qui lui confère des pouvoirs d'évolution et de modification corporelle sans limite."
  },
  {
    titre: "Sweet Reincarnation (Saison 1)",
    titre_secondaire: "Okashi na Tensei S1",
    date_sortie: "Juillet 2023 (Été 2023)",
    synopsis: "Un pâtissier de génie se réincarne en Pastry, fils d'un noble pauvre, et utilise ses compétences pour faire prospérer sa région à l'aide de ses créations."
  },
  {
    titre: "The Sword Master Unintentional",
    titre_secondaire: "The Sword Master",
    date_sortie: "Annoncé / Projet Manga",
    synopsis: "Un maître de l'épée décédé se réincarne avec toutes ses connaissances tactiques pour atteindre l'apogée des arts martiaux."
  },
  {
    titre: "Tales of Wedding Rings (Saisons 1 & 2)",
    titre_secondaire: "Kekkon Yubiwa Monogatari S1 & S2",
    date_sortie: "Janvier 2024 (S1) / 2025 (S2)",
    synopsis: "Sato voyage dans un autre monde pour épouser cinq princesses afin d'obtenir leurs anneaux magiques et vaincre le Roi des Ombres."
  },
  {
    titre: "The Rising of the Shield Hero (Saison 3)",
    titre_secondaire: "Tate no Yuusha no Nariagari S3",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Naofumi continue de se préparer aux Vagues de Calamité tout en reconstruisant le village de Raphtalia et en aidant les demi-humains."
  },
  {
    titre: "Suppose a Kid from the Last Dungeon Boonies Moved to a Starter Town",
    titre_secondaire: "Tatoeba Last Dungeon Mae no Mura",
    date_sortie: "Janvier 2021 (Hiver 2021)",
    synopsis: "Lloyd est considéré comme le plus faible de son village natal mortel. En allant à la capitale, il ignore que ses capacités dépassent de loin tout humain ordinaire."
  },
  {
    titre: "That Time I Got Reincarnated as a Slime (Saison 3)",
    titre_secondaire: "Tensura Season 3",
    date_sortie: "Avril 2024 (Printemps 2024)",
    synopsis: "Devenu Roi Démon Officiel, Rimuru Tempest gère la diplomatie de sa nation et fait face aux tensions avec l'Église Sainte de Lubelius."
  },
  {
    titre: "I Was Reincarnated as the 7th Prince",
    titre_secondaire: "Tensei Shitara Daini Ouji Datta no de",
    date_sortie: "Avril 2024 (Printemps 2024)",
    synopsis: "Un sorcier sans talent se réincarne sous les traits de Lloyd, 7e prince du royaume de Saloum, doté cette fois d'une réserve de mana et de magie infinie."
  },
  {
    titre: "The Banished Court Magician",
    titre_secondaire: "The Banished Court Magician Wants a Quiet Life",
    date_sortie: "Projet en adaptation",
    synopsis: "Un puissant magicien banni de la cour royale s'installe à la campagne pour une vie paisible, mais ses talents continuent d'attirer l'attention."
  },
  {
    titre: "The Banished Former Hero Lives as He Pleases",
    titre_secondaire: "Dekisokonai to Yobareta Moto Yuusha",
    date_sortie: "Avril 2024 (Printemps 2024)",
    synopsis: "Allen est banni par sa famille car sans bénédiction divine. En réalité, il se souvient de sa vie de héros passé et veut simplement vivre libre."
  },
  {
    titre: "The Brilliant Healer's New Life in the Shadows",
    titre_secondaire: "The Brilliant Healer's New Life in Shadows",
    date_sortie: "Annoncé pour 2025",
    synopsis: "Zeno, un soigneur d'exception méprisé par l'académie, utilise ses compétences médicales hors pair dans les bas-fonds de la ville pour sauver des vies."
  },
  {
    titre: "The Daily Life of a Middle-Aged Online Shopper in Another World",
    titre_secondaire: "Amo no Naka no Online Shopper (Invocation Tracteur)",
    date_sortie: "Janvier 2025 (Hiver 2025)",
    synopsis: "Ken'ichi est transféré dans un monde fantastique avec la compétence unique de commander du matériel moderne sur un site d'achat en ligne."
  },
  {
    titre: "The Devil is a Part-Timer!",
    titre_secondaire: "Hataraku Maou-sama!",
    date_sortie: "Avril 2013 (Saison 1)",
    synopsis: "Le Roi Démon Satan se retrouve sans magie dans le Tokyo moderne et décroche un job à mi-temps dans une chaîne de fast-food."
  },
  {
    titre: "The Dreaming Boy Is a Realist (Saison 1)",
    titre_secondaire: "Yumemiru Otoko wa Genjitsushugisha",
    date_sortie: "Juillet 2023 (Été 2023)",
    synopsis: "Wataru abandonne ses tentatives maladroites de séduire Aika en revenant à la réalité. Ce changement de comportement soudain perturbe grandement la jeune fille."
  },
  {
    titre: "The Duke of Death and His Maid (Saison 1)",
    titre_secondaire: "Shinigami Bocchan to Kuro Maid S1",
    date_sortie: "Juillet 2021 (Été 2021)",
    synopsis: "Un jeune duc maudit fait mourir tout être vivant qu'il touche. Il vit isolé avec sa servante Alice, qui s'amuse à le taquiner au quotidien."
  },
  {
    titre: "The Eminence in Shadow (Saison 2)",
    titre_secondaire: "Kage no Jitsuryokusha ni Naritakute! S2",
    date_sortie: "Octobre 2023 (Automne 2023)",
    synopsis: "Cid Kagenou explore la Cité Sans Loi pour affronter la Reine Sanglante tout en jouant son rôle d'Éminence de l'Ombre."
  },
  {
    titre: "The Girl Downstairs",
    titre_secondaire: "Aisa de Nyuuyoku (Donghua Chinois)",
    date_sortie: "Avril 2023 (Printemps 2023)",
    synopsis: "Yuan Juntang emménage dans son appartement d'étudiant et découvre que sa voisine est Li Shiya, une ancienne idole de K-Pop retirée des médias."
  },
  {
    titre: "The Healer Who Was Banished From His Party Is In Fact the Strongest",
    titre_secondaire: "Party wo Tsuihou Sareta Healer",
    date_sortie: "Octobre 2024 (Automne 2024)",
    synopsis: "Zenos, soigneur d'exception expulsé par son groupe d'aventuriers, ouvre une clinique clandestine où ses capacités de soin s'avèrent phénoménales."
  },
  {
    titre: "The Hero Is Overpowered but Overly Cautious",
    titre_secondaire: "Cautious Hero / Shinchou Yuusha",
    date_sortie: "Octobre 2019 (Automne 2019)",
    synopsis: "La déesse Ristarte invoque Seiya pour sauver un monde. Bien qu'extrêmement puissant, le héros est d'une prudence maladive et sur-entraîné."
  },
  {
    titre: "The Most Notorious \"Talker\" Runs the World's Greatest Clan (Saison 1)",
    titre_secondaire: "Saikyou no Talker S1",
    date_sortie: "Octobre 2024 (Automne 2024)",
    synopsis: "Noel Stollen utilise la ruse, la manipulation et son intelligence pour compenser sa classe de soutien 'Talker' et fonder le plus puissant clan."
  },
  {
    titre: "The New Gate (Saison 1)",
    titre_secondaire: "The New Gate Season 1",
    date_sortie: "Avril 2024 (Printemps 2024)",
    synopsis: "Shin terrasse le boss final d'un jeu VR pour libérer les joueurs, mais se retrouve projeté 500 ans dans le futur réel du monde du jeu."
  },
  {
    titre: "The Saint's Magic Power is Omnipotent",
    titre_secondaire: "Seijo no Maryoku wa Ban'nou Desu",
    date_sortie: "Avril 2021 (S1) / Octobre 2023 (S2)",
    synopsis: "Sei Takanashi est invoquée comme Sainte dans un autre monde. Ignorée au départ, elle rejoint un institut d'herboristerie où son mana se révèle sans égal."
  },
  {
    titre: "The Strongest Magician in the Demon Lord's Army is a Human",
    titre_secondaire: "Maou-gun Saikyou no Magician wa Ningen Datta",
    date_sortie: "Juillet 2024 (Été 2024)",
    synopsis: "Ike est le plus redoutable magicien commandant les armées du Roi Démon. Il doit cependant garder secret le fait qu'il est en réalité un humain."
  },
  {
    titre: "The Too-Perfect Saint Was Banished",
    titre_secondaire: "Perfect Saint Banished",
    date_sortie: "Annoncé pour 2025",
    synopsis: "Philia, une sainte aux compétences parfaites, est bannie par son fiancé qui la trouve trop distante, avant d'être accueillie par un royaume voisin."
  },
  {
    titre: "The Unaware Atelier Master",
    titre_secondaire: "Kanchigai no Atelier Master",
    date_sortie: "Annoncé pour 2025",
    synopsis: "Kurt est convaincu d'être un artisan médiocre, sans réaliser que ses créations et réparations quotidiennes constituent de véritables miracles magiques."
  },
  {
    titre: "The Witch and the Beast",
    titre_secondaire: "Majo to Yaitchou",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Guideau, une fille maudite aux instincts sauvages, et Ashaf, un sorcier élégant, parcourent le monde pour dénicher des sorcières et lever le sort."
  },
  {
    titre: "The Wrong Way to Use Healing Magic",
    titre_secondaire: "Chiyu Mahou no Machigatta Tsukai-kata",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Usato est transporté par erreur dans un autre monde. Découvrant qu'il maîtrise la Magie de Soin, il subit l'entraînement physique extrême de la capitaine Rose."
  },
  {
    titre: "Alya Sometimes Hides Her Feelings in Russian",
    titre_secondaire: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
    date_sortie: "Juillet 2024 (Été 2024)",
    synopsis: "Alya exprime ses sentiments timides en russe à son voisin de classe Masachika, sans se douter que celui-ci comprend parfaitement la langue."
  },
  {
    titre: "Tokyo Ravens",
    titre_secondaire: "Tokyo Ravens",
    date_sortie: "Octobre 2013 (Automne 2013)",
    synopsis: "Harutora est issu d'une branche secondaire d'Onmyoji sans pouvoirs magiques, mais la rencontre avec son amie d'enfance Natsume va bouleverser son destin."
  },
  {
    titre: "Rokka: Braves of the Six Flowers (Saison 1)",
    titre_secondaire: "Rokka no Yuusha",
    date_sortie: "Juillet 2015 (Été 2015)",
    synopsis: "Six héros sont choisis pour vaincre le Roi Démon. Lors de leur rassemblement, ils s'aperçoivent qu'ils sont sept au total et cherchent l'imposteur."
  },
  {
    titre: "Tsukimichi: Moonlit Fantasy (Saison 2)",
    titre_secondaire: "Tsukimichi Season 2",
    date_sortie: "Janvier 2024 (Hiver 2024)",
    synopsis: "Makoto Misumi continue de développer sa cité dans sa dimension privée tout en s'inscrivant comme enseignant et étudiant à l'Académie de Rotsgard."
  },
  {
    titre: "Unnamed Memory (Saisons 1 & 2)",
    titre_secondaire: "Unnamed Memory S1 & S2",
    date_sortie: "Avril 2024 (S1) / Janvier 2025 (S2)",
    synopsis: "Oscar monte au sommet de la tour de la Sorcière de la Lune Bleue pour briser sa malédiction et lui demande de devenir sa fiancée."
  },
  {
    titre: "Water Magician",
    titre_secondaire: "Mizu no Madoushi",
    date_sortie: "Annoncé",
    synopsis: "Un jeune mage pousse l'utilisation de l'élément aquatique à son potentiel maximal pour maîtriser la glace, la vapeur et la pression en combat."
  },
  {
    titre: "Wistoria: Wand and Sword (Saison 2)",
    titre_secondaire: "Wistoria Season 2",
    date_sortie: "Annoncé pour 2025",
    synopsis: "Will Serfort ne maîtrise pas la magie mais combat avec une épée redoutable pour tenir la promesse faite à son amie d'enfance Elfaria."
  },
  {
    titre: "Witchcraft Works",
    titre_secondaire: "Witch Craft Works",
    date_sortie: "Janvier 2014 (Hiver 2014)",
    synopsis: "Takamiya Honoka est un élève ordinaire continuellement protégé par Kagari Ayaka, la fille la plus populaire de l'école qui s'avère être une sorcière du feu."
  },
  {
    titre: "Yakuza Fiancé: Raise wa Kootonai ga Ii",
    titre_secondaire: "Raise wa Kootonai ga Ii",
    date_sortie: "Octobre 2024 (Automne 2024)",
    synopsis: "Yoshino, petite-fille d'un chef Yakuza d'Osaka, est fiancée à Kirishima, petit-fils d'un chef Yakuza de Tokyo qui s'avère être un grand masochiste."
  },
  {
    titre: "Yandere Dark Elf",
    titre_secondaire: "Yandere Dark Elf",
    date_sortie: "Projet en adaptation",
    synopsis: "Un aventurier réanime une elfe noire blessée. Cependant, la dévotion de la créature se transforme rapidement en un amour obsessionnel et Yandere."
  },
  {
    titre: "Sing \"Yesterday\" for Me",
    titre_secondaire: "Yesterday wo Utatte",
    date_sortie: "Avril 2020 (Printemps 2020)",
    synopsis: "Rikuo travaille sans conviction dans un supermarché après ses études. Sa vie prend une tournure imprévue lorsqu'il rencontre Haru Nonaka."
  },
  {
    titre: "Yuusha Party wo Oidasareta Kiyou Binbou",
    titre_secondaire: "The Jack-of-All-Trades Kicked Out of the Hero's Party",
    date_sortie: "Projet en adaptation",
    synopsis: "Orn est renvoyé du groupe du héros car jugé trop polyvalent. Sa grande adaptabilité va pourtant s'avérer indispensable pour ses nouvelles aventures."
  }
];

// Initialisation et création de la table (si elle n'existe pas)
db.exec(`
  CREATE TABLE IF NOT EXISTS animes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titre TEXT NOT NULL,
    titre_secondaire TEXT,
    date_sortie TEXT,
    synopsis TEXT
  );
`);

// Préparation de la requête SQLite d'insertion
const stmt = db.prepare(`
  INSERT INTO animes (titre, titre_secondaire, date_sortie, synopsis, note, image) 
  VALUES (?, ?, ?, ?, ?, ?)
`);

// Exécution au sein d'une transaction SQLite pour des performances optimales
const insertMany = db.transaction((animes) => {
  for (const anime of animes) {
    stmt.run(anime.titre, anime.titre_secondaire, anime.date_sortie, anime.synopsis, null, null);
  }
});

insertMany(mesAnimes);

console.log(`✅ Succès : ${mesAnimes.length} animés ont été insérés dans la base de données !`);