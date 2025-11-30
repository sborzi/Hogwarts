import {
  type Character,
  type Spell,
  type Quote,
  type House,
  type BookPart,
  type QuizQuestion,
} from "@shared/schema";

export interface IStorage {
  getAllCharacters(): Promise<Character[]>;
  getAllSpells(): Promise<Spell[]>;
  getAllQuotes(): Promise<Quote[]>;
  getAllHouses(): Promise<House[]>;
  getAllBookParts(): Promise<BookPart[]>;
  getAllQuizQuestions(): Promise<QuizQuestion[]>;
}

export class MemStorage implements IStorage {
  private characters: Character[];
  private spells: Spell[];
  private quotes: Quote[];
  private houses: House[];
  private bookParts: BookPart[];
  private quizQuestions: QuizQuestion[];

  constructor() {
    this.characters = [
      {
        id: "1",
        name: "Гарри Поттер",
        house: "Гриффиндор",
        role: "Избранный",
        description:
          "Мальчик, который выжил. Герой волшебного мира, сирота, воспитанный маглами, обнаружил свою истинную судьбу в одиннадцать лет.",
        imageUrl: "/assets/generated_images/harry_potter_character_portrait.png",
      },
      {
        id: "2",
        name: "Гермиона Грейнджер",
        house: "Гриффиндор",
        role: "Самая умная ведьма",
        description:
          "Рожденная в семье маглов, Гермиона доказала, что происхождение не имеет значения. Её интеллект и храбрость спасли друзей множество раз.",
        imageUrl: "/assets/generated_images/hermione_character_portrait.png",
      },
      {
        id: "3",
        name: "Рон Уизли",
        house: "Гриффиндор",
        role: "Верный друг",
        description:
          "Преданный друг Гарри из многодетной магической семьи. Его храбрость и юмор делают его незаменимым членом команды.",
        imageUrl: "/assets/generated_images/ron_weasley_character_portrait.png",
      },
      {
        id: "4",
        name: "Альбус Дамблдор",
        house: "Гриффиндор",
        role: "Директор Хогвартса",
        description:
          "Величайший волшебник своего времени, мудрый наставник и защитник справедливости. Его прошлое хранит множество тайн.",
        imageUrl: "/assets/generated_images/dumbledore_character_portrait.png",
      },
      {
        id: "5",
        name: "Северус Снейп",
        house: "Слизерин",
        role: "Профессор зелий",
        description:
          "Загадочный профессор с трагичным прошлым. Его истинная верность раскрывается лишь в конце истории.",
        imageUrl: "/assets/generated_images/snape_character_portrait.png",
      },
      {
        id: "6",
        name: "Полумна Лавгуд",
        house: "Когтевран",
        role: "Мечтательница",
        description:
          "Уникальная и эксцентричная ведьма с необычным взглядом на мир. Её доброта и мудрость неожиданны и глубоки.",
        imageUrl: "/assets/generated_images/luna_lovegood_character_portrait.png",
      },
    ];

    this.spells = [
      {
        id: "1",
        name: "Экспеллиармус",
        incantation: "Expelliarmus",
        type: "Чары",
        description: "Заклинание обезоруживания",
        effect: "Выбивает предметы из рук противника, часто используется в дуэлях",
      },
      {
        id: "2",
        name: "Люмос",
        incantation: "Lumos",
        type: "Чары",
        description: "Заклинание света",
        effect: "Зажигает свет на кончике волшебной палочки, освещая темноту",
      },
      {
        id: "3",
        name: "Экспекто Патронум",
        incantation: "Expecto Patronum",
        type: "Защитные чары",
        description: "Вызов покровителя",
        effect:
          "Вызывает позитивную магическую силу, защищающую от дементоров и других темных существ",
      },
      {
        id: "4",
        name: "Авада Кедавра",
        incantation: "Avada Kedavra",
        type: "Непростительное проклятие",
        description: "Убийственное заклинание",
        effect:
          "Мгновенно убивает жертву. Одно из трех Непростительных заклинаний, использование карается пожизненным заключением",
      },
      {
        id: "5",
        name: "Вингардиум Левиоса",
        incantation: "Wingardium Leviosa",
        type: "Чары",
        description: "Заклинание левитации",
        effect: "Заставляет предметы парить в воздухе и двигаться по желанию заклинателя",
      },
      {
        id: "6",
        name: "Феликс Фелицис",
        incantation: "Felix Felicis",
        type: "Зелье",
        description: "Жидкая удача",
        effect: "Зелье, приносящее удачу тому, кто его пьет. Чрезвычайно сложно в приготовлении",
      },
    ];

    this.quotes = [
      {
        id: "1",
        text: "Счастье можно найти даже в самые темные времена, если не забывать обращаться к свету.",
        character: "Альбус Дамблдор",
        book: "Гарри Поттер и Узник Азкабана",
      },
      {
        id: "2",
        text: "Я не ищу проблем. Проблемы обычно находят меня.",
        character: "Гарри Поттер",
        book: "Гарри Поттер и Узник Азкабана",
      },
      {
        id: "3",
        text: "У нас внутри свет и тьма. Важно то, какую сторону мы выбираем. Вот кто мы на самом деле.",
        character: "Сириус Блэк",
        book: "Гарри Поттер и Орден Феникса",
      },
      {
        id: "4",
        text: "Не жалей мертвых, Гарри. Жалей живых, и особенно тех, кто живет без любви.",
        character: "Альбус Дамблдор",
        book: "Гарри Поттер и Дары Смерти",
      },
      {
        id: "5",
        text: "Это наш выбор, Гарри, а не способности показывают, кто мы на самом деле.",
        character: "Альбус Дамблдор",
        book: "Гарри Поттер и Тайная комната",
      },
      {
        id: "6",
        text: "Всегда.",
        character: "Северус Снейп",
        book: "Гарри Поттер и Дары Смерти",
      },
    ];

    this.houses = [
      {
        id: "1",
        name: "Гриффиндор",
        founder: "Годрик Гриффиндор",
        traits: ["Храбрость", "Отвага", "Рыцарство", "Решительность"],
        colors: ["Алый", "Золотой"],
        animal: "Лев",
        element: "Огонь",
        crestUrl: "/assets/generated_images/gryffindor_house_crest.png",
      },
      {
        id: "2",
        name: "Слизерин",
        founder: "Салазар Слизерин",
        traits: ["Хитрость", "Амбициозность", "Находчивость", "Лидерство"],
        colors: ["Зеленый", "Серебряный"],
        animal: "Змея",
        element: "Вода",
        crestUrl: "/assets/generated_images/slytherin_house_crest.png",
      },
      {
        id: "3",
        name: "Когтевран",
        founder: "Кандида Когтевран",
        traits: ["Ум", "Мудрость", "Креативность", "Любознательность"],
        colors: ["Синий", "Бронзовый"],
        animal: "Орел",
        element: "Воздух",
        crestUrl: "/assets/generated_images/ravenclaw_house_crest.png",
      },
      {
        id: "4",
        name: "Пуффендуй",
        founder: "Пенелопа Пуффендуй",
        traits: ["Трудолюбие", "Преданность", "Честность", "Справедливость"],
        colors: ["Желтый", "Черный"],
        animal: "Барсук",
        element: "Земля",
        crestUrl: "/assets/generated_images/hufflepuff_house_crest.png",
      },
    ];

    this.bookParts = [
      {
        id: "1",
        title: "Гарри Поттер и Философский камень",
        description:
          "Гарри, сирота, живущий с жестокими родственниками, в свой одиннадцатый день рождения узнает, что он волшебник. Его принимают в Хогвартс, школу чародейства и волшебства, где он знакомится с Роном и Гермионой и узнает о магическом мире и тайне Философского камня.",
        order: 1,
      },
      {
        id: "2",
        title: "Гарри Поттер и Тайная комната",
        description:
          "В Хогвартсе открывается легендарная Тайная комната, и студенты подвергаются таинственным нападениям. Гарри обнаруживает свою способность говорить на змеином языке и раскрывает древнюю тайну, связанную с наследием Слизерина.",
        order: 2,
      },
      {
        id: "3",
        title: "Гарри Поттер и Узник Азкабана",
        description:
          "Опасный заключенный Сириус Блэк сбегает из тюрьмы Азкабан, предположительно охотясь на Гарри. Гарри узнает правду о предательстве своих родителей и открывает для себя покровителя — защитное заклинание.",
        order: 3,
      },
      {
        id: "4",
        title: "Гарри Поттер и Кубок огня",
        description:
          "Гарри неожиданно становится четвертым участником Турнира Трех Волшебников, опасного магического соревнования. События приводят к возрождению Темного Лорда и началу новой войны.",
        order: 4,
      },
      {
        id: "5",
        title: "Гарри Поттер и Орден Феникса",
        description:
          "Министерство магии отрицает возвращение Волан-де-Морта, и Гарри борется как с внешними угрозами, так и с внутренними демонами. Формируется Орден Феникса для противостояния темным силам.",
        order: 5,
      },
      {
        id: "6",
        title: "Гарри Поттер и Принц-полукровка",
        description:
          "Гарри находит учебник зелий бывшего владельца, известного как Принц-полукровка. Дамблдор обучает Гарри тайнам прошлого Волан-де-Морта, раскрывая секрет крестражей.",
        order: 6,
      },
      {
        id: "7",
        title: "Гарри Поттер и Дары Смерти",
        description:
          "Гарри, Рон и Гермиона отправляются в опасное путешествие для поиска и уничтожения крестражей Волан-де-Морта. Финальная битва за Хогвартс определит судьбу волшебного мира.",
        order: 7,
      },
    ];

    this.quizQuestions = [
      {
        id: "1",
        question: "Какое животное является покровителем Гарри Поттера?",
        options: ["Олень", "Собака", "Орел", "Феникс"],
        correctAnswer: "Олень",
        type: "character",
        relatedHouse: null,
      },
      {
        id: "2",
        question: "Какой предмет является талисманом цепочки для Гермионы Грейнджер?",
        options: ["Ожерелье", "Книга заклинаний", "Маховик времени", "Волшебная палочка"],
        correctAnswer: "Маховик времени",
        type: "character",
        relatedHouse: null,
      },
    ];
  }

  async getAllCharacters(): Promise<Character[]> {
    return this.characters;
  }

  async getAllSpells(): Promise<Spell[]> {
    return this.spells;
  }

  async getAllQuotes(): Promise<Quote[]> {
    return this.quotes;
  }

  async getAllHouses(): Promise<House[]> {
    return this.houses;
  }

  async getAllBookParts(): Promise<BookPart[]> {
    return this.bookParts;
  }

  async getAllQuizQuestions(): Promise<QuizQuestion[]> {
    return this.quizQuestions;
  }
}

export const storage = new MemStorage();
