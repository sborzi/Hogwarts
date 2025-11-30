import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import bookCover from "@assets/generated_images/magical_book_cover_design.png";
import harryPortrait from "@assets/generated_images/harry_potter_character_portrait.png";
import hermionePortrait from "@assets/generated_images/hermione_character_portrait.png";
import ronPortrait from "@assets/generated_images/ron_weasley_character_portrait.png";

export default function About() {
  const bookParts = [
    {
      title: "Гарри Поттер и Философский камень",
      description:
        "Гарри, сирота, живущий с жестокими родственниками, в свой одиннадцатый день рождения узнает, что он волшебник. Его принимают в Хогвартс, школу чародейства и волшебства, где он знакомится с Роном и Гермионой и узнает о магическом мире и тайне Философского камня.",
    },
    {
      title: "Гарри Поттер и Тайная комната",
      description:
        "В Хогвартсе открывается легендарная Тайная комната, и студенты подвергаются таинственным нападениям. Гарри обнаруживает свою способность говорить на змеином языке и раскрывает древнюю тайну, связанную с наследием Слизерина.",
    },
    {
      title: "Гарри Поттер и Узник Азкабана",
      description:
        "Опасный заключенный Сириус Блэк сбегает из тюрьмы Азкабан, предположительно охотясь на Гарри. Гарри узнает правду о предательстве своих родителей и открывает для себя покровителя — защитное заклинание.",
    },
    {
      title: "Гарри Поттер и Кубок огня",
      description:
        "Гарри неожиданно становится четвертым участником Турнира Трех Волшебников, опасного магического соревнования. События приводят к возрождению Темного Лорда и началу новой войны.",
    },
    {
      title: "Гарри Поттер и Орден Феникса",
      description:
        "Министерство магии отрицает возвращение Волан-де-Морта, и Гарри борется как с внешними угрозами, так и с внутренними демонами. Формируется Орден Феникса для противостояния темным силам.",
    },
    {
      title: "Гарри Поттер и Принц-полукровка",
      description:
        "Гарри находит учебник зелий бывшего владельца, известного как Принц-полукровка. Дамблдор обучает Гарри тайнам прошлого Волан-де-Морта, раскрывая секрет крестражей.",
    },
    {
      title: "Гарри Поттер и Дары Смерти",
      description:
        "Гарри, Рон и Гермиона отправляются в опасное путешествие для поиска и уничтожения крестражей Волан-де-Морта. Финальная битва за Хогвартс определит судьбу волшебного мира.",
    },
  ];

  const keyCharacters = [
    {
      name: "Гарри Поттер",
      image: harryPortrait,
      description: "Мальчик, который выжил",
    },
    {
      name: "Гермиона Грейнджер",
      image: hermionePortrait,
      description: "Самая умная ведьма своего поколения",
    },
    {
      name: "Рон Уизли",
      image: ronPortrait,
      description: "Верный друг и храбрый волшебник",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
            О книге
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Серия книг о Гарри Поттере — это эпическая сага о мальчике-волшебнике, который противостоит
            самому могущественному темному магу всех времен в борьбе за свободу волшебного мира.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="flex justify-center items-start">
            <img
              src={bookCover}
              alt="Обложка книги"
              className="rounded-xl shadow-2xl max-w-md w-full hover:scale-105 transition-transform"
              data-testid="img-book-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">Части романа</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {bookParts.map((part, index) => (
                  <AccordionItem
                    key={index}
                    value={`part-${index}`}
                    className="bg-card border border-card-border rounded-lg overflow-hidden"
                    data-testid={`accordion-part-${index}`}
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover-elevate">
                      <span className="font-secondary text-lg font-semibold text-left">
                        {part.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">{part.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">История создания</h2>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 border-card-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-secondary text-2xl font-semibold mb-4">Начало волшебного мира</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Идея Гарри Поттера пришла Дж.К. Роулинг во время поездки на поезде из Манчестера в Лондон
                  в 1990 году. Она воплощала идею молодого мальчика, открывшего, что он волшебник, постепенно
                  наращивая детали его мира.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  В течение следующих пяти лет Роулинг начала планировать все семь книг серии, создавая
                  сложный и последовательный волшебный мир, полный деталей, сюжетных линий и богатой
                  истории.
                </p>
              </div>
              <div>
                <h3 className="font-secondary text-2xl font-semibold mb-4">Путь к публикации</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Первая книга была отклонена двенадцатью издателями прежде чем Bloomsbury согласился
                  опубликовать её в 1997 году. Редактор посоветовал Роулинг найти работу, так как у неё
                  мало шансов заработать на детских книгах.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Сегодня серия о Гарри Поттере является одной из самых продаваемых серий всех времен,
                  переведена на более чем 80 языков и оказала огромное культурное влияние.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Ключевые персонажи</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyCharacters.map((character, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-elevate transition-all"
                data-testid={`card-character-${index}`}
              >
                <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-primary/20">
                  <AvatarImage src={character.image} alt={character.name} />
                  <AvatarFallback>{character.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-secondary text-xl font-semibold mb-2">{character.name}</h3>
                <p className="text-muted-foreground text-sm">{character.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
