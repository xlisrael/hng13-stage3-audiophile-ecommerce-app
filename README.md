# Audiophile E-Commerce Website

A premium audio equipment e-commerce website built with Next.js 14, and Typescript.

## Features

- 🎨 Modern, responsive design
- 🛒 Shopping cart functionality
- 📱 Mobile-first approach
- 🎯 Product categories (Headphones, Speakers, Earphones)
- 📦 Product detail pages
- 💳 Checkout process
- ✨ Smooth animations and transitions

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Manrope (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or create the project:**

```bash
npx create-next-app@latest audiophile-ecommerce --typescript --tailwind --app
cd audiophile-ecommerce
```

2. **Install dependencies:**

```bash
npm install
```

6. **Run the development server:**

```bash
npm run dev
```

7. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)


## Pages

- **Home :** Hero section, featured products, categories
- **Category Pages :** Product listings by category
- **Product Detail :** Individual product information
- **Checkout :** Order form and summary

## Components

- **Navbar:** Site navigation with cart icon
- **Footer:** Site footer with links and social media
- **CategoryCard:** Reusable category card component
- **AboutSection:** Company information section
- **CartModal:** Shopping cart overlay

## Styling

The project uses Tailwind CSS with custom configuration:

- Custom colors: dark-orange, light-orange, very-dark, etc.
- Custom components: btn-primary, btn-secondary, btn-tertiary
- Responsive breakpoints
- Custom container styling

## Data Management

Product data is stored in `lib/data.ts` and includes:
- Product details
- Images (mobile, tablet, desktop)
- Features and specifications
- Gallery images
- Related products

## Building for Production

```bash
npm run build
npm start
```

## Notes

- Images are expected to be in the `public/assets/` directory
- The cart uses in-memory state (no persistence)
- No backend or API integration (static data only)
- Form validation is basic (HTML5 validation)
