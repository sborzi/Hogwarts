import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/characters", async (_req, res) => {
    try {
      const characters = await storage.getAllCharacters();
      res.json(characters);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch characters" });
    }
  });

  app.get("/api/spells", async (_req, res) => {
    try {
      const spells = await storage.getAllSpells();
      res.json(spells);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch spells" });
    }
  });

  app.get("/api/quotes", async (_req, res) => {
    try {
      const quotes = await storage.getAllQuotes();
      res.json(quotes);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch quotes" });
    }
  });

  app.get("/api/houses", async (_req, res) => {
    try {
      const houses = await storage.getAllHouses();
      res.json(houses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch houses" });
    }
  });

  app.get("/api/book-parts", async (_req, res) => {
    try {
      const bookParts = await storage.getAllBookParts();
      res.json(bookParts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch book parts" });
    }
  });

  app.get("/api/quiz-questions", async (_req, res) => {
    try {
      const quizQuestions = await storage.getAllQuizQuestions();
      res.json(quizQuestions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch quiz questions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
