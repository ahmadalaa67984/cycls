# Cycls Landing Page

A modern, professional landing page for Cycls - the definitive platform for commercial AI agents. Built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Hero Section**: Compelling headline and call-to-action
- **Problem Statement**: Clear articulation of the gap between AI agents and viable businesses
- **How It Works**: Three-step process explanation
- **Developer Focus**: Zero-config philosophy and Python SDK showcase
- **Enterprise Ready**: Business and enterprise solutions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design using shadcn/ui components

## Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cycls-task
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Header.tsx    # Navigation header
│   ├── Footer.tsx    # Site footer
│   └── LandingPage.tsx # Main landing page
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main app component
└── main.tsx          # App entry point
```

## Customization

### Colors and Theme

The landing page uses a tech-centric color scheme with:

- Primary: Blue (#2563eb) to Indigo (#4f46e5) gradients
- Accent: Red (#dc2626) for highlighting problems
- Neutral: Gray scale for text and backgrounds

### Content Updates

To update the content, modify the respective sections in `src/components/LandingPage.tsx`:

- Hero section: Update headline, subheadline, and CTA
- Problem section: Modify the gap description and solutions
- How it works: Update the three-step process
- Developer section: Customize the Python code example
- Enterprise section: Modify business value propositions

### Styling

The project uses Tailwind CSS for styling. You can:

- Modify colors in `src/index.css`
- Update component styles in individual component files
- Add custom CSS classes as needed

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

### Netlify

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Other Platforms

The built files in the `dist` directory can be deployed to any static hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions about the landing page, please open an issue in the repository.
