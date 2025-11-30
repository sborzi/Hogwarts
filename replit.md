# Magical World Multi-Page Website

## Overview

A dark fantasy-themed multi-page website exploring the Harry Potter universe. Built with React and Express, this application provides an immersive experience featuring characters, spells, Hogwarts houses, quotes, and interactive quizzes. The site employs a sophisticated dark theme with magical aesthetics inspired by Netflix-style interactive content and premium fantasy gaming interfaces.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing. The application is organized as a multi-page experience with routes for Home, About, Characters, Magic, Hogwarts, and Quotes pages.

**State Management**: TanStack Query (React Query) for server state management. Data fetching is centralized through a custom query client with disabled refetching on window focus and infinite stale time, suitable for relatively static content.

**UI Components**: Extensive use of Radix UI primitives with custom styling via shadcn/ui component system. Components follow the "new-york" style variant with extensive customization for the dark fantasy theme.

**Styling Approach**:
- Tailwind CSS for utility-first styling
- Custom CSS variables for theming (defined in index.css)
- Dark mode as the default and primary theme
- Custom font families: Cinzel/Playfair Display for display text, Lora for secondary headers, Inter for body text
- Special elevation effects via custom `hover-elevate` and `active-elevate` classes
- Comprehensive color system with HSL-based theme variables

**Design System**: Follows detailed design guidelines specified in `design_guidelines.md`, emphasizing:
- Typography hierarchy with specific font families for different content types
- Consistent spacing primitives (4, 6, 8, 12, 16, 20, 24)
- Responsive layouts with mobile-first approach
- Immersive imagery with magical themes

### Backend Architecture

**Framework**: Express.js server with TypeScript support.

**Server Modes**:
- Development mode (`server/index-dev.ts`): Integrates Vite middleware for HMR and serves the application with hot module reloading
- Production mode (`server/index-prod.ts`): Serves pre-built static assets from the `dist/public` directory

**API Design**: RESTful API endpoints providing read-only access to content:
- `/api/characters` - Character information
- `/api/spells` - Magic spells and incantations
- `/api/quotes` - Memorable quotes from the series
- `/api/houses` - Hogwarts house information
- `/api/book-parts` - Book structure and parts
- `/api/quiz-questions` - Interactive quiz data

**Data Layer**: Currently using in-memory storage (`MemStorage` class in `server/storage.ts`) with hardcoded content. The storage interface (`IStorage`) is designed to allow future database integration without changing the API layer.

**Rationale**: The in-memory approach is suitable for static content that doesn't require persistence. If user-generated content or personalization is added later, the storage layer can be swapped for a database implementation.

### Data Storage

**Current Implementation**: In-memory storage with TypeScript interfaces.

**Database Schema Defined**: Drizzle ORM schema exists in `shared/schema.ts` defining PostgreSQL tables for:
- Characters (id, name, house, role, description, imageUrl)
- Spells (id, name, incantation, type, description, effect)
- Quotes (id, text, character, book)
- Houses (id, name, founder, traits, colors, animal, element, crestUrl)
- Book parts (id, title, description, order)
- Quiz questions (id and additional fields)

**Migration Strategy**: The application is configured for PostgreSQL via Drizzle (`drizzle.config.ts`), but the database is not currently provisioned. When needed, running `npm run db:push` will create the schema.

**Rationale**: The dual approach (in-memory for current use, database schema for future) allows rapid development while maintaining a clear path to scalable data persistence.

### Path Resolution

**Module Aliases**: Configured in both `tsconfig.json` and `vite.config.ts`:
- `@/*` → `client/src/*` (frontend source)
- `@shared/*` → `shared/*` (shared schemas and types)
- `@assets/*` → `attached_assets/*` (static image assets)

**Asset Management**: Images are stored in `attached_assets/generated_images/` and imported directly in components, leveraging Vite's asset handling for optimization.

## External Dependencies

### UI Component Library

**Radix UI**: Comprehensive set of unstyled, accessible component primitives including accordions, dialogs, dropdowns, navigation menus, popovers, radio groups, select inputs, tabs, and tooltips. Provides the foundation for all interactive UI elements.

**shadcn/ui**: Component configuration system (not a traditional dependency) that provides pre-styled components built on Radix UI. Configuration stored in `components.json`.

### State Management & Data Fetching

**TanStack Query v5**: Client-side data fetching, caching, and synchronization. Handles all API interactions with the Express backend.

### Styling & Design

**Tailwind CSS**: Utility-first CSS framework with extensive customization via `tailwind.config.ts`.

**Google Fonts**: External fonts loaded via CDN:
- Cinzel (display headings)
- Playfair Display (alternative display)
- Lora (secondary headers)
- Inter (body text)

**class-variance-authority & clsx**: Utilities for conditional and variant-based class name generation.

### Forms & Validation

**React Hook Form**: Form state management (dependency present, usage in quiz/sorting hat features).

**Zod**: Schema validation with Drizzle integration via `drizzle-zod`.

### Routing

**Wouter**: Minimalist routing library for React, chosen for its small bundle size and simplicity over React Router.

### Database & ORM

**Drizzle ORM**: Type-safe ORM for PostgreSQL with migration support.

**@neondatabase/serverless**: PostgreSQL driver designed for serverless environments (currently configured but not actively used).

**connect-pg-simple**: PostgreSQL session store for Express (dependency present but sessions not implemented).

### Development Tools

**Vite**: Build tool and development server with HMR support.

**ESBuild**: Used for production server bundling.

**tsx**: TypeScript execution for development server.

**@replit/vite-plugin-***: Replit-specific development plugins for error overlays, cartographer, and dev banner (conditionally loaded in development).

### Image Assets

**Static Images**: Pre-generated images stored in `attached_assets/generated_images/` including character portraits, house crests, magical items, and environmental scenes. All images are imported and bundled through Vite.

### Notable Architectural Decisions

1. **Dark-First Theme**: The entire application is built around a dark color scheme with no light mode toggle, aligning with the magical/mystical aesthetic.

2. **Static Content Approach**: Content is hardcoded in the storage layer rather than user-editable, appropriate for a content showcase site.

3. **Type Safety**: Comprehensive TypeScript usage across frontend, backend, and shared schemas ensures type safety end-to-end.

4. **Separation of Concerns**: Clear separation between client (`client/`), server (`server/`), and shared (`shared/`) code with appropriate module boundaries.

5. **Asset Co-location**: Images are referenced by path aliases and imported directly in components, allowing Vite to optimize and version them automatically.