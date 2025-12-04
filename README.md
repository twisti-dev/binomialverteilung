# BINOMIALVERTEILUNG.APP

A Next.js documentation website for learning about binomial distributions and statistics, built with Tailwind CSS and MDX.

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## Features

- 📚 **MDX Support** - Write content in MDX with support for React components
- 🎨 **Tailwind CSS** - Modern styling with utility-first CSS
- 🧮 **Math Rendering** - LaTeX math equations with KaTeX
- 📊 **Interactive Graphs** - Dynamic visualizations for normal distribution
- 🎯 **Custom Components** - Cards, Accordions, Tips, Notes, Steps, and more
- 📱 **Responsive Design** - Works on all device sizes
- 🌓 **Dark Mode Ready** - Dark mode support built-in

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **MDX** - Markdown with JSX
- **KaTeX** - Math rendering
- **Mermaid** - Diagrams
- **TypeScript** - Type safety

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── [content]/       # Content pages
├── components/          # React components
│   ├── Accordion.tsx
│   ├── Callouts.tsx
│   ├── Card.tsx
│   └── ...
├── lib/                 # Utility functions
├── public/              # Static assets
└── mdx-components.tsx   # MDX component mapping
```

## License

See LICENSE file for details.
