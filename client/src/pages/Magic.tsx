import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Zap, Shield, Wind } from "lucide-react";
import type { Spell } from "@shared/schema";
import wandImage from "@assets/generated_images/detailed_magic_wand_close-up.png";
import magicalObjectsImage from "@assets/generated_images/magical_objects_collection.png";

const getSpellIcon = (type: string) => {
  if (type.includes("Защитные")) return Shield;
  if (type.includes("проклятие")) return Zap;
  if (type === "Зелье") return Sparkles;
  return Wind;
};

const getSpellColor = (name: string) => {
  const colors: Record<string, string> = {
    Экспеллиармус: "bg-red-500/20 text-red-300 border-red-500/30",
    Люмос: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    "Экспекто Патронум": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Авада Кедавра": "bg-green-500/20 text-green-300 border-green-500/30",
    "Вингардиум Левиоса": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Феликс Фелицис": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  };
  return colors[name] || "bg-primary/20 text-primary border-primary/30";
};

export default function Magic() {
  const { data: spells, isLoading } = useQuery<Spell[]>({
    queryKey: ["/api/spells"],
  });

  const wandTypes = [
    {
      name: "Палочка старейшины",
      wood: "Бузина",
      core: "Волос фестрала",
      description:
        "Самая могущественная палочка, созданная Смертью. Одна из Даров Смерти, непобедима в руках истинного владельца.",
    },
    {
      name: "Палочка Гарри",
      wood: "Остролист",
      core: "Перо феникса",
      description:
        "Братская палочка Волан-де-Морта. Перо от феникса Фоукса, верного спутника Дамблдора.",
    },
    {
      name: "Палочка Гермионы",
      wood: "Виноградная лоза",
      core: "Жила дракона",
      description: "Идеально подходит для умелой и преданной ведьмы с острым умом.",
    },
    {
      name: "Палочка Рона",
      wood: "Ива",
      core: "Волос единорога",
      description: "Надежная и стабильная, как и её владелец. Прекрасно подходит для чар.",
    },
    {
      name: "Палочка Дамблдора",
      wood: "Бузина",
      core: "Волос фестрала",
      description: "Легендарная палочка старейшины, мощнейшая волшебная палочка всех времен.",
    },
    {
      name: "Палочка Снейпа",
      wood: "Березовая кость",
      core: "Волос дракона",
      description: "Темная и таинственная, отражающая сложный характер её владельца.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
            Магия и Заклинания
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Откройте для себя древние заклинания и могущественные чары, которые сделали волшебный мир
            таким удивительным. Каждое заклинание имеет свою силу и назначение.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Знаменитые Заклинания
          </h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all" data-testid="tab-all-spells">
                Все
              </TabsTrigger>
              <TabsTrigger value="charms" data-testid="tab-charms">
                Чары
              </TabsTrigger>
              <TabsTrigger value="curses" data-testid="tab-curses">
                Проклятия
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, index) => (
                    <Card key={index} className="p-6">
                      <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                      <Skeleton className="h-6 w-32 mb-2" />
                      <Skeleton className="h-4 w-24 mb-3" />
                      <Skeleton className="h-20 w-full" />
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {spells?.map((spell, index) => {
                    const Icon = getSpellIcon(spell.type);
                    return (
                      <Card
                        key={index}
                        className="p-6 hover-elevate transition-all"
                        data-testid={`card-spell-${index}`}
                      >
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge className={getSpellColor(spell.name)}>{spell.type}</Badge>
                      </div>
                      <h3 className="font-secondary text-xl font-semibold mb-2">{spell.name}</h3>
                      <p className="text-primary italic mb-3 text-sm">{spell.incantation}</p>
                      <p className="text-sm font-medium mb-2">{spell.description}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{spell.effect}</p>
                      </Card>
                    );
                  })}
                </div>
              )}
            </TabsContent>

            <TabsContent value="charms">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, index) => (
                    <Card key={index} className="p-6">
                      <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                      <Skeleton className="h-6 w-32 mb-2" />
                      <Skeleton className="h-4 w-24 mb-3" />
                      <Skeleton className="h-20 w-full" />
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {spells
                    ?.filter((spell) => spell.type === "Чары")
                    .map((spell, index) => {
                      const Icon = getSpellIcon(spell.type);
                      return (
                        <Card key={index} className="p-6 hover-elevate transition-all">
                        <div className="flex items-start justify-between mb-4">
                          <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <Badge className={getSpellColor(spell.name)}>{spell.type}</Badge>
                        </div>
                        <h3 className="font-secondary text-xl font-semibold mb-2">{spell.name}</h3>
                        <p className="text-primary italic mb-3 text-sm">{spell.incantation}</p>
                        <p className="text-sm font-medium mb-2">{spell.description}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{spell.effect}</p>
                        </Card>
                      );
                    })}
                </div>
              )}
            </TabsContent>

            <TabsContent value="curses">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(2)].map((_, index) => (
                    <Card key={index} className="p-6">
                      <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                      <Skeleton className="h-6 w-32 mb-2" />
                      <Skeleton className="h-4 w-24 mb-3" />
                      <Skeleton className="h-20 w-full" />
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {spells
                    ?.filter((spell) => spell.type.includes("проклятие"))
                    .map((spell, index) => {
                      const Icon = getSpellIcon(spell.type);
                      return (
                        <Card key={index} className="p-6 hover-elevate transition-all">
                          <div className="flex items-start justify-between mb-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <Badge className={getSpellColor(spell.name)}>{spell.type}</Badge>
                          </div>
                          <h3 className="font-secondary text-xl font-semibold mb-2">{spell.name}</h3>
                          <p className="text-primary italic mb-3 text-sm">{spell.incantation}</p>
                          <p className="text-sm font-medium mb-2">{spell.description}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{spell.effect}</p>
                        </Card>
                      );
                    })}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Выбор Волшебной Палочки
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="flex justify-center items-center">
              <img
                src={wandImage}
                alt="Волшебная палочка"
                className="rounded-xl shadow-2xl max-w-full hover:scale-105 transition-transform"
                data-testid="img-wand"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="font-display text-3xl font-bold">
                Из чего же делают лучшие волшебные палочки?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Волшебная палочка — одна из самых важных магических принадлежностей в арсенале любого
                волшебника. Дерево для палочки выбирается по характеру владельца, а сердцевина должна
                быть магической субстанцией.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Сердцевина обычно содержит перо феникса, волос единорога или жилу дракона. Каждая палочка
                уникальна и выбирает своего владельца сама, а не наоборот.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wandTypes.map((wand, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all"
                data-testid={`card-wand-${index}`}
              >
                <h3 className="font-secondary text-xl font-semibold mb-3">{wand.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Древесина:</span>
                    <Badge variant="secondary">{wand.wood}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Сердцевина:</span>
                    <Badge variant="secondary">{wand.core}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{wand.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={magicalObjectsImage}
              alt="Магические предметы"
              className="w-full h-64 object-cover"
              data-testid="img-magical-objects"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="font-display text-3xl font-bold text-white mb-2">
                  Исследуйте Волшебный Мир
                </h3>
                <p className="text-white/90 max-w-2xl">
                  Откройте для себя древние артефакты, мощные зелья и магические предметы, которые
                  формируют историю волшебного мира.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
