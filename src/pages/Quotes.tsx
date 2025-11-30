import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Quote as QuoteIcon } from "lucide-react";
import type { Quote } from "@shared/schema";

export default function Quotes() {
  const { data: quotes, isLoading } = useQuery<Quote[]>({
    queryKey: ["/api/quotes"],
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <QuoteIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
            Запоминающиеся цитаты из Волшебного мира
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Откройте для себя самые знаковые и волшебные фразы, которые сформировали наше путешествие
            по чарующим историям Дж.К. Роулинг.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="p-8">
                <Skeleton className="h-32 w-full mb-6" />
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-32" />
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quotes?.map((quote, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all relative overflow-hidden"
              data-testid={`card-quote-${index}`}
            >
              <div className="absolute top-4 left-4 text-primary/10">
                <QuoteIcon className="w-16 h-16" />
              </div>
              <div className="relative z-10">
                <blockquote className="mb-6">
                  <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-foreground/90">
                    "{quote.text}"
                  </p>
                </blockquote>
                <div className="space-y-1">
                  <p className="font-secondary text-lg font-semibold text-primary">
                    — {quote.character}
                  </p>
                  <p className="text-sm text-muted-foreground">{quote.book}</p>
                </div>
              </div>
            </Card>
            ))}
          </div>
        )}

        <div className="mt-20 text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-purple-500/5 border-card-border max-w-4xl mx-auto">
            <QuoteIcon className="w-12 h-12 mx-auto mb-6 text-primary" />
            <blockquote className="space-y-6">
              <p className="font-serif text-3xl md:text-4xl italic text-foreground/90 leading-relaxed">
                "Слова — наш неисчерпаемый источник магии, способный как ранить, так и исцелить."
              </p>
              <footer className="text-xl text-muted-foreground">
                — Альбус Дамблдор
              </footer>
            </blockquote>
          </Card>
        </div>
      </div>
    </div>
  );
}
