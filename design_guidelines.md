# Design Guidelines: Magical World Multi-Page Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from immersive dark fantasy experiences like Netflix's interactive content, premium fantasy gaming interfaces, and modern magical-themed web experiences. The design creates an enchanting, mysterious atmosphere while maintaining excellent readability and navigation.

## Typography System

**Font Families** (via Google Fonts):
- Primary Display: 'Cinzel' or 'Playfair Display' (700, 600) - for headings and dramatic statements
- Secondary Headers: 'Lora' or 'Merriweather' (600, 500) - for section titles
- Body Text: 'Inter' or 'Open Sans' (400, 500) - for readable content

**Type Scale**:
- Hero Headlines: text-6xl to text-7xl (desktop), text-4xl (mobile)
- Page Titles: text-5xl (desktop), text-3xl (mobile)
- Section Headers: text-3xl to text-4xl (desktop), text-2xl (mobile)
- Card Titles: text-xl to text-2xl
- Body: text-base to text-lg
- Captions: text-sm

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Card padding: p-6 to p-8
- Element gaps: gap-6 to gap-12

**Container Strategy**:
- Full-width sections with inner max-w-7xl containers
- Content areas: max-w-6xl
- Text-heavy sections: max-w-4xl for readability

## Page-Specific Layouts

### Home Page
**Hero Section**: Full-viewport (min-h-screen) with large atmospheric background image featuring magical starry sky or castle silhouette. Center-aligned content with dramatic headline, subtitle, and primary CTA button with blurred background.

**Features Grid**: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1) showcasing the six main sections (About, Characters, Magic, Hogwarts, Quotes, Explore) with icon-topped cards.

**Quote Highlight**: Single centered quote with large typography and character attribution.

**Call-to-Action Banner**: Full-width section with secondary background treatment and exploration prompt.

### About the Book Page
**Introduction Section**: 2-column layout (lg:grid-cols-2) with book cover image and descriptive text.

**Story Parts Timeline**: Vertical timeline or stacked cards (max 7 parts) with expandable descriptions, each featuring part number, title, and synopsis.

**Author Section**: Single column with centered content, author portrait, and biography.

### Characters Page
**Character Grid**: 3-4 column masonry/grid layout (lg:grid-cols-4, md:grid-cols-2) with character portrait cards. Each card includes image, name, house affiliation, and role description.

**Featured Character Spotlight**: Large 2-column section for protagonist with extended biography and key traits list.

**Interactive Quiz Section**: Centered quiz component with question cards and result display area.

### Magic and Spells Page
**Spell Categories**: Tabbed or sectioned layout organizing spells by type (Charms, Transfiguration, Defense, etc.).

**Spell Cards Grid**: 3-column grid with spell name in stylized typography, incantation, description, and wand movement icon/illustration.

**Magical Objects Gallery**: 4-column grid showcasing wands, potions, artifacts with hover reveal details.

### Hogwarts Page
**Houses Showcase**: 4-column grid (lg:grid-cols-4, md:grid-cols-2) with house crests, traits, founder information, and notable members for Gryffindor, Slytherin, Ravenclaw, Hufflepuff.

**Sorting Hat Quiz**: Interactive multi-step form with personality questions leading to house assignment result with celebration animation.

**Castle Map Section**: Large image or illustrated map with clickable locations.

### Quotes Page
**Quote Cards**: Masonry or staggered grid layout (lg:grid-cols-2) with quote text in large serif font, character attribution, and book reference.

**Featured Quote Hero**: Large centered quote at page top with decorative elements.

**Filter Navigation**: Horizontal tabs or buttons to filter by character or book.

## Component Library

### Navigation
**Header**: Fixed top navigation with logo/site title left, centered navigation links, and search/theme toggle right. Use backdrop blur effect (backdrop-blur-lg) over page content.

**Mobile Menu**: Full-screen overlay navigation with stacked links and animated entrance.

### Cards
**Standard Card**: Rounded corners (rounded-xl), padding (p-6 to p-8), subtle border or glow effect, hover lift animation (transform).

**Character Card**: Portrait image top, content below, centered text, badge for house affiliation.

**Spell Card**: Icon or symbol top, spell name in decorative font, incantation in italics, description text.

### Forms & Interactive Elements
**Quiz Components**: Radio button groups styled as large clickable cards, progress indicator, submit button, result card with house crest/spell details.

**Search Bar**: Rounded input (rounded-full), icon left, backdrop blur background.

### Footer
**Multi-Column Layout**: 3-4 column grid with sections:
- EXPLORE: Links to all main pages
- LEGAL: Privacy, Terms, Copyright
- SOCIAL: Icon links
- ABOUT: Brief site description

Add newsletter signup form in footer with email input and subscribe button.

## Visual Effects (Minimal Animation)

**Starfield Background**: Animated twinkling stars using CSS keyframes or static parallax effect.

**Card Interactions**: Subtle hover lift (translateY(-4px)) and glow enhancement only.

**Page Transitions**: Fade in content on load (opacity animation).

**Scroll Reveals**: Fade up entrance for sections (use intersection observer).

Avoid excessive animations - maintain focus on content and readability.

## Images

**Required Images**:
1. **Hero Background** (Home): Atmospheric magical landscape, starry night sky over castle, or mystical forest - full width, min-height viewport
2. **Book Cover** (About): Official or artistic book cover illustration
3. **Character Portraits** (Characters): 8-12 illustrated or photographic portraits of main characters
4. **House Crests** (Hogwarts): Four house emblems in high detail
5. **Magical Objects** (Magic page): Wand illustrations, potion bottles, spell books
6. **Castle Map** (Hogwarts): Illustrated or detailed map of castle and grounds
7. **Decorative Elements**: Floating orbs, magical particles, constellation patterns for section backgrounds

All images should support the mysterious, enchanting aesthetic with rich detail and atmospheric lighting.

## Accessibility & Polish

- Maintain WCAG contrast ratios for all text over backgrounds
- All interactive elements have focus states with visible outlines
- Form inputs include labels and error states
- Icons from Heroicons via CDN
- Consistent hover states across all clickable elements
- Responsive breakpoints: mobile (default), md (768px), lg (1024px), xl (1280px)