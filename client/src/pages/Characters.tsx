import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import type { Character, QuizQuestion } from "@shared/schema";
import harryImage from "@assets/generated_images/harry_potter_character_portrait.png";
import hermioneImage from "@assets/generated_images/hermione_character_portrait.png";
import ronImage from "@assets/generated_images/ron_weasley_character_portrait.png";
import dumbledoreImage from "@assets/generated_images/dumbledore_character_portrait.png";
import snapeImage from "@assets/generated_images/snape_character_portrait.png";
import lunaImage from "@assets/generated_images/luna_lovegood_character_portrait.png";

const imageMap: Record<string, string> = {
  "Гарри Поттер": harryImage,
  "Гермиона Грейнджер": hermioneImage,
  "Рон Уизли": ronImage,
  "Альбус Дамблдор": dumbledoreImage,
  "Северус Снейп": snapeImage,
  "Полумна Лавгуд": lunaImage,
};

export default function Characters() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const { data: characters, isLoading } = useQuery<Character[]>({
    queryKey: ["/api/characters"],
  });

  const { data: quizQuestions, isLoading: isLoadingQuiz, error: quizError } = useQuery<QuizQuestion[]>({
    queryKey: ["/api/quiz-questions"],
  });

  const displayQuestions = quizQuestions || [];

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (displayQuestions.length === 0) return;
    if (currentQuestion < displayQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    if (displayQuestions.length === 0) return 0;
    return answers.reduce((score, answer, index) => {
      if (!displayQuestions[index]) return score;
      return answer === displayQuestions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getHouseColor = (house: string) => {
    const colors: Record<string, string> = {
      Гриффиндор: "bg-red-500/20 text-red-300 border-red-500/30",
      Слизерин: "bg-green-500/20 text-green-300 border-green-500/30",
      Когтевран: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Пуффендуй: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    };
    return colors[house] || "bg-primary/20 text-primary border-primary/30";
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
            Встретьте Легендарных Персонажей Волшебного Мира
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Погрузитесь в жизни Гарри, Гермионы и Рона — узнайте их истории, магию и борьбу со злом.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Главные Герои</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Skeleton className="w-32 h-32 rounded-full mb-4" />
                    <Skeleton className="h-6 w-32 mb-2" />
                    <Skeleton className="h-4 w-24 mb-4" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {characters?.map((character, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate transition-all"
                data-testid={`card-character-${index}`}
              >
                <div className="p-6 space-y-4">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/20">
                      <AvatarImage src={imageMap[character.name]} alt={character.name} />
                      <AvatarFallback>{character.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-secondary text-2xl font-semibold mb-2">{character.name}</h3>
                    <Badge className={getHouseColor(character.house)} data-testid={`badge-house-${index}`}>
                      {character.house}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">{character.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {character.description}
                    </p>
                  </div>
                </div>
              </Card>
              ))}
            </div>
          )}
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Проверьте свои знания
          </h2>

          {!quizStarted && !showResult && (
            <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-purple-500/5">
              {isLoadingQuiz ? (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-full max-w-md mx-auto" />
                  <Skeleton className="h-10 w-48 mx-auto" />
                </div>
              ) : quizError || displayQuestions.length === 0 ? (
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    {quizError ? "Не удалось загрузить викторину. Попробуйте обновить страницу." : "Вопросы для викторины недоступны."}
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-lg text-muted-foreground mb-6">
                    Как хорошо вы знаете персонажей? Пройдите викторину и проверьте свои знания!
                  </p>
                  <Button
                    size="lg"
                    onClick={() => setQuizStarted(true)}
                    data-testid="button-start-quiz"
                  >
                    Начать викторину
                  </Button>
                </>
              )}
            </Card>
          )}

          {quizStarted && !showResult && displayQuestions.length > 0 && (
            <Card className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    Вопрос {currentQuestion + 1} из {displayQuestions.length}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(((currentQuestion + 1) / displayQuestions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{
                      width: `${((currentQuestion + 1) / displayQuestions.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <h3 className="font-secondary text-2xl font-semibold mb-6" data-testid="text-quiz-question">
                {displayQuestions[currentQuestion].question}
              </h3>

              <RadioGroup
                value={answers[currentQuestion]}
                onValueChange={handleQuizAnswer}
                className="space-y-3"
              >
                {displayQuestions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg border border-border hover-elevate transition-all cursor-pointer"
                    data-testid={`option-${index}`}
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer text-base"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <Button
                className="w-full mt-8"
                onClick={handleNextQuestion}
                disabled={!answers[currentQuestion]}
                data-testid="button-next-question"
              >
                {currentQuestion < displayQuestions.length - 1
                  ? "Следующий вопрос"
                  : "Показать результаты"}
              </Button>
            </Card>
          )}

          {showResult && displayQuestions.length > 0 && (
            <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-purple-500/5">
              <h3 className="font-display text-3xl font-bold mb-4" data-testid="text-quiz-result">
                Ваш результат
              </h3>
              <p className="text-6xl font-bold text-primary mb-6">
                {calculateScore()} / {displayQuestions.length}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {calculateScore() === displayQuestions.length
                  ? "Превосходно! Вы настоящий знаток волшебного мира!"
                  : calculateScore() >= displayQuestions.length / 2
                  ? "Отлично! Вы хорошо знаете персонажей!"
                  : "Неплохо! Перечитайте книги, чтобы узнать больше!"}
              </p>
              <Button onClick={resetQuiz} data-testid="button-restart-quiz">
                Пройти еще раз
              </Button>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
}
