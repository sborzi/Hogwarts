import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { House } from "@shared/schema";
import gryffindorCrest from "@assets/generated_images/gryffindor_house_crest.png";
import slytherinCrest from "@assets/generated_images/slytherin_house_crest.png";
import ravenclawCrest from "@assets/generated_images/ravenclaw_house_crest.png";
import hufflepuffCrest from "@assets/generated_images/hufflepuff_house_crest.png";
import hogwartsMap from "@assets/generated_images/hogwarts_castle_detailed_map.png";
import classroomImage from "@assets/generated_images/magical_classroom_scene.png";

const crestMap: Record<string, string> = {
  Гриффиндор: gryffindorCrest,
  Слизерин: slytherinCrest,
  Когтевран: ravenclawCrest,
  Пуффендуй: hufflepuffCrest,
};

export default function Hogwarts() {
  const [sortingStarted, setSortingStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [sortedHouse, setSortedHouse] = useState<string | null>(null);

  const { data: houses, isLoading } = useQuery<House[]>({
    queryKey: ["/api/houses"],
  });

  const sortingQuestions = [
    {
      question: "Вопрос 1 из 5: Какой из этих магических предметов вы бы выбрали?",
      options: [
        { text: "Меч Гриффиндора", house: "Гриффиндор" },
        { text: "Диадема Когтевран", house: "Когтевран" },
        { text: "Медальон Слизерина", house: "Слизерин" },
        { text: "Кубок Пуффендуя", house: "Пуффендуй" },
      ],
    },
    {
      question: "Вопрос 2 из 5: Как вы предпочитаете проводить свободное время?",
      options: [
        { text: "Исследовать новые места и рисковать", house: "Гриффиндор" },
        { text: "Читать книги в библиотеке", house: "Когтевран" },
        { text: "Планировать будущее и строить планы", house: "Слизерин" },
        { text: "Помогать друзьям и проводить время с близкими", house: "Пуффендуй" },
      ],
    },
    {
      question: "Вопрос 3 из 5: Какое качество вы цените больше всего?",
      options: [
        { text: "Храбрость и отвага", house: "Гриффиндор" },
        { text: "Интеллект и мудрость", house: "Когтевран" },
        { text: "Амбиции и целеустремленность", house: "Слизерин" },
        { text: "Преданность и справедливость", house: "Пуффендуй" },
      ],
    },
    {
      question: "Вопрос 4 из 5: Какое животное вам ближе?",
      options: [
        { text: "Лев - смелый и сильный", house: "Гриффиндор" },
        { text: "Орел - мудрый и проницательный", house: "Когтевран" },
        { text: "Змея - хитрая и изобретательная", house: "Слизерин" },
        { text: "Барсук - трудолюбивый и надежный", house: "Пуффендуй" },
      ],
    },
    {
      question: "Вопрос 5 из 5: Как вы справляетесь с трудностями?",
      options: [
        { text: "Смело бросаюсь в бой", house: "Гриффиндор" },
        { text: "Анализирую ситуацию и ищу решение", house: "Когтевран" },
        { text: "Использую любые доступные средства", house: "Слизерин" },
        { text: "Прошу помощи у друзей", house: "Пуффендуй" },
      ],
    },
  ];

  const handleSortingAnswer = (house: string) => {
    const newAnswers = [...answers, house];
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < sortingQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateHouse();
    }
  };

  const calculateHouse = () => {
    const houseCounts: Record<string, number> = {};
    answers.forEach((house) => {
      houseCounts[house] = (houseCounts[house] || 0) + 1;
    });

    const sortedHouse = Object.keys(houseCounts).reduce((a, b) =>
      houseCounts[a] > houseCounts[b] ? a : b
    );
    setSortedHouse(sortedHouse);
  };

  const resetSorting = () => {
    setSortingStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setSortedHouse(null);
  };

  const getHouseColors = (houseName: string) => {
    const colors: Record<string, string> = {
      Гриффиндор: "from-red-500/20 to-yellow-500/20 border-red-500/30",
      Слизерин: "from-green-500/20 to-gray-500/20 border-green-500/30",
      Когтевран: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      Пуффендуй: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
    };
    return colors[houseName] || "";
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
            Добро пожаловать в Хогвартс
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Школа чародейства и волшебства Хогвартс — место, где юные волшебники учатся магии,
            находят друзей и открывают свою судьбу.
          </p>
        </div>

        <section className="mb-20">
          <div className="relative rounded-xl overflow-hidden mb-12">
            <img
              src={hogwartsMap}
              alt="Карта Хогвартса"
              className="w-full h-96 object-cover"
              data-testid="img-hogwarts-map"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex items-end">
              <div className="p-8">
                <h2 className="font-display text-4xl font-bold text-white mb-2">Замок Хогвартс</h2>
                <p className="text-white/90 max-w-2xl">
                  Древний замок, полный тайн и магии. В его стенах скрываются секретные проходы,
                  призраки и волшебные артефакты.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Дома Хогвартса</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, index) => (
                <Card key={index} className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <Skeleton className="w-32 h-32 rounded-lg flex-shrink-0" />
                    <div className="flex-1 space-y-4">
                      <Skeleton className="h-8 w-48" />
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-16 w-full" />
                      <Skeleton className="h-20 w-full" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {houses?.map((house, index) => (
                <Card
                  key={index}
                  className={`p-8 bg-gradient-to-br ${getHouseColors(house.name)} hover-elevate transition-all`}
                  data-testid={`card-house-${index}`}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={crestMap[house.name]}
                        alt={`Герб ${house.name}`}
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl font-bold mb-2">{house.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Основатель: {house.founder}
                    </p>
                    <p className="text-base mb-4">{house.description}</p>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm font-medium">Характеристики:</span>
                        {house.traits.map((trait, i) => (
                          <span
                            key={i}
                            className="text-sm bg-background/50 px-2 py-1 rounded-md"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Цвета:</span>
                        <span className="text-sm">{house.colors.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Символ:</span>
                        <span className="text-sm">{house.animal}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Стихия:</span>
                        <span className="text-sm">{house.element}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              ))}
            </div>
          )}
        </section>

        <section className="mb-20">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={classroomImage}
              alt="Класс в Хогвартсе"
              className="w-full h-64 object-cover"
              data-testid="img-classroom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="font-display text-3xl font-bold text-white mb-2">
                  Магические уроки
                </h3>
                <p className="text-white/90 max-w-2xl">
                  От зелий до трансфигурации — студенты изучают все аспекты магического мира под
                  руководством опытных профессоров.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Распределяющая шляпа
          </h2>

          {!sortingStarted && !sortedHouse && (
            <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-purple-500/5">
              <p className="text-lg text-muted-foreground mb-6">
                Пришло время узнать, в какой дом вас распределит волшебная шляпа! Ответьте на вопросы
                честно, и шляпа примет решение.
              </p>
              <Button
                size="lg"
                onClick={() => setSortingStarted(true)}
                data-testid="button-start-sorting"
              >
                Надеть Распределяющую шляпу
              </Button>
            </Card>
          )}

          {sortingStarted && !sortedHouse && (
            <Card className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    Вопрос {currentQuestion + 1} из {sortingQuestions.length}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(((currentQuestion + 1) / sortingQuestions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{
                      width: `${((currentQuestion + 1) / sortingQuestions.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <h3 className="font-secondary text-2xl font-semibold mb-6" data-testid="text-sorting-question">
                {sortingQuestions[currentQuestion].question}
              </h3>

              <RadioGroup
                value={answers[currentQuestion]}
                onValueChange={handleSortingAnswer}
                className="space-y-3"
              >
                {sortingQuestions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg border border-border hover-elevate transition-all cursor-pointer"
                    data-testid={`sorting-option-${index}`}
                  >
                    <RadioGroupItem value={option.house} id={`sorting-option-${index}`} />
                    <Label
                      htmlFor={`sorting-option-${index}`}
                      className="flex-1 cursor-pointer text-base"
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <Button
                className="w-full mt-8"
                onClick={handleNextQuestion}
                disabled={!answers[currentQuestion]}
                data-testid="button-next-sorting"
              >
                {currentQuestion < sortingQuestions.length - 1
                  ? "Следующий вопрос"
                  : "Узнать свой дом"}
              </Button>
            </Card>
          )}

          {sortedHouse && (
            <Card
              className={`p-8 text-center bg-gradient-to-br ${getHouseColors(sortedHouse)}`}
            >
              <div className="mb-6">
                <img
                  src={houses.find((h) => h.name === sortedHouse)?.crest}
                  alt={`Герб ${sortedHouse}`}
                  className="w-40 h-40 mx-auto object-contain"
                  data-testid="img-sorted-house-crest"
                />
              </div>
              <h3 className="font-display text-4xl font-bold mb-4" data-testid="text-sorted-house">
                {sortedHouse}!
              </h3>
              <p className="text-lg mb-8">
                {houses.find((h) => h.name === sortedHouse)?.description}
              </p>
              <Button onClick={resetSorting} data-testid="button-restart-sorting">
                Пройти еще раз
              </Button>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
}
