import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, BookOpen, Users, Wand2, Castle, Quote } from "lucide-react";
import heroImage from "@assets/generated_images/magical_starry_castle_hero_banner.png";

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "О книге",
      description: "Узнайте о частях романа, истории создания и мире волшебства",
      href: "/about",
    },
    {
      icon: Users,
      title: "Персонажи",
      description: "Познакомьтесь с героями, которые изменили волшебный мир",
      href: "/characters",
    },
    {
      icon: Wand2,
      title: "Магия и Заклинания",
      description: "Откройте для себя могущественные заклинания и их секреты",
      href: "/magic",
    },
    {
      icon: Castle,
      title: "Хогвартс",
      description: "Исследуйте легендарную школу чародейства и волшебства",
      href: "/hogwarts",
    },
    {
      icon: Quote,
      title: "Цитаты",
      description: "Вдохновляющие слова, которые остаются в сердце навсегда",
      href: "/quotes",
    },
    {
      icon: Sparkles,
      title: "Волшебный мир",
      description: "Погрузитесь в атмосферу магии и приключений",
      href: "/about",
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight" data-testid="text-hero-title">
              Хроники Волшебного Мира
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
              Погрузитесь в мистический мир Дж.К. Роулинг. Откройте для себя незабываемые персонажи,
              могущественные заклинания и тайны Хогвартса в захватывающем приключении.
            </p>
            
            <Link href="/about">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 border-primary-border"
                data-testid="button-explore"
              >
                Исследуйте Волшебный Мир
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" data-testid="text-explore-title">
              Исследуйте Волшебный Мир
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Откройте для себя все грани магического мира через персонажей, заклинания и легендарные локации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} href={feature.href} className="group" data-testid={`card-feature-${index}`}>
                  <div className="bg-card border border-card-border rounded-xl p-8 h-full hover-elevate transition-all">
                    <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-secondary text-2xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="space-y-6">
            <p className="font-serif text-2xl md:text-3xl italic text-foreground/90 leading-relaxed" data-testid="text-quote">
              "Счастье можно найти даже в самые темные времена, если не забывать обращаться к свету."
            </p>
            <footer className="text-lg text-muted-foreground">
              — Альбус Дамблдор
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
