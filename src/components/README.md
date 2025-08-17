# Cycls Landing Page Components

This directory contains the modular components for the Cycls landing page, organized for better maintainability and reusability.

## ✨ New Features

### 🎨 **Theme Toggle System**

- **Light/Dark Theme**: Switch between light and dark themes with smooth transitions
- **Persistent Storage**: Theme preference is saved in localStorage
- **System Preference Detection**: Automatically detects user's system theme preference
- **CSS Variables**: Uses CSS custom properties for seamless theme switching
- **Smooth Transitions**: All theme changes include smooth animations

### 🌍 **Multi-Language Support**

- **5 Languages**: English, Arabic, French, Spanish, German
- **RTL Support**: Full right-to-left support for Arabic
- **Automatic Detection**: Detects browser language preference
- **Persistent Storage**: Language choice is saved in localStorage
- **Context-Based**: Uses React Context for global language management

## 🔧 **Component Structure**

```
src/components/
├── ui/                    # Reusable UI components
│   ├── Button.tsx        # Button component
│   ├── Card.tsx          # Card components
│   ├── ThemeToggle.tsx   # Theme toggle button
│   └── LanguageSelector.tsx # Language dropdown
├── sections/             # Page section components
│   ├── HeroSection.tsx   # Hero section with main headline and CTA
│   ├── ProblemSection.tsx # Problem statement and solutions
│   ├── HowItWorksSection.tsx # Three-step process explanation
│   ├── DevelopersSection.tsx # Developer-focused content
│   ├── EnterpriseSection.tsx # Business and enterprise content
│   ├── CTASection.tsx    # Final call-to-action section
│   └── index.ts          # Export all section components
├── contexts/             # React Context providers
│   ├── ThemeContext.tsx  # Theme management context
│   └── LanguageContext.tsx # Language management context
├── Header.tsx            # Navigation header with theme/language controls
├── Footer.tsx            # Site footer
├── LandingPage.tsx       # Main page component (assembles all sections)
├── DemoControls.tsx      # Demo controls for theme/language switching
├── styles/
│   └── commonStyles.ts   # Shared styles and design tokens
└── README.md             # This file
```

## 🚀 **Usage**

### Main Landing Page

```tsx
import LandingPage from "./components/LandingPage";

// Use in your app
<LandingPage />;
```

### Individual Sections

```tsx
import { HeroSection, ProblemSection } from './components/sections';

// Use sections independently
<HeroSection />
<ProblemSection />
```

### Theme Management

```tsx
import { useTheme } from "./contexts/ThemeContext";

const MyComponent = () => {
  const { theme, toggleTheme, setTheme } = useTheme();

  return <button onClick={toggleTheme}>Current theme: {theme}</button>;
};
```

### Language Management

```tsx
import { useLanguage } from "./contexts/LanguageContext";

const MyComponent = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <p>{t("hero.title")}</p>
      <button onClick={() => setLanguage("ar")}>Switch to Arabic</button>
    </div>
  );
};
```

### Common Styles

```tsx
import { commonStyles } from "./components/styles/commonStyles";

// Apply consistent styling
<div style={commonStyles.container}>
  <h1 style={commonStyles.h1}>Title</h1>
</div>;
```

## 🎯 **Features in Detail**

### Theme System

- **CSS Variables**: All colors use CSS custom properties
- **Smooth Transitions**: 300ms transitions for all theme changes
- **Persistent Storage**: Saves theme preference in localStorage
- **System Detection**: Automatically detects prefers-color-scheme
- **Accessibility**: Proper contrast ratios for both themes

### Language System

- **Translation Keys**: Structured translation system with keys
- **RTL Support**: Full right-to-left layout for Arabic
- **Browser Detection**: Automatically detects user's preferred language
- **Fallback**: Falls back to English if translation is missing
- **Context Integration**: Seamlessly integrates with React components

## 🔄 **Adding New Features**

### Adding New Languages

1. Add language code to `Language` type in `LanguageContext.tsx`
2. Add translations to the `translations` object
3. Update language selector component if needed

### Adding New Theme Colors

1. Add CSS variables to `:root`, `.light`, and `.dark` in `App.css`
2. Use the new variables in your components
3. Update `ThemeContext.tsx` if needed

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Export it in `src/components/sections/index.ts`
3. Import and use it in `LandingPage.tsx`
4. Add any new styles to `commonStyles.ts` if they'll be reused
5. Add translations for the new section

## 🎨 **Styling Guidelines**

- Use `commonStyles` for consistent design tokens
- Keep inline styles minimal and specific to the component
- Use CSS variables for theme-dependent colors: `var(--text-primary)`, `var(--bg-card)`
- Maintain consistent spacing using the predefined values
- Follow the established typography scale
- Use the translation function `t()` for all text content

## 🌍 **Supported Languages**

| Language | Code | Flag | RTL Support |
| -------- | ---- | ---- | ----------- |
| English  | `en` | 🇺🇸   | No          |
| Arabic   | `ar` | 🇸🇦   | Yes         |
| French   | `fr` | 🇫🇷   | No          |
| Spanish  | `es` | 🇪🇸   | No          |
| German   | `de` | 🇩🇪   | No          |

## 🎨 **Theme Colors**

### Dark Theme (Default)

- Primary Background: `#0a0a0a`
- Secondary Background: `#111111`
- Tertiary Background: `#1a1a1a`
- Card Background: `#1f1f1f`
- Primary Text: `#ffffff`
- Secondary Text: `#a3a3a3`
- Border: `#262626`

### Light Theme

- Primary Background: `#ffffff`
- Secondary Background: `#f8fafc`
- Tertiary Background: `#f1f5f9`
- Card Background: `#ffffff`
- Primary Text: `#0f172a`
- Secondary Text: `#475569`
- Border: `#e2e8f0`

## 🚀 **Performance Features**

- **Code Splitting**: Each section is a separate component
- **Lazy Loading**: Ready for lazy loading implementation
- **Context Optimization**: Minimal re-renders with context
- **CSS Variables**: Efficient theme switching without JavaScript
- **Local Storage**: Fast theme/language persistence

## 🧪 **Testing**

Each component can be tested in isolation:

- Theme switching functionality
- Language switching functionality
- Component rendering with different themes/languages
- Responsive behavior
- Accessibility features

## 🔧 **Development Commands**

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 **Responsive Design**

- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Flexible grid systems
- Adaptive typography with `clamp()`
- Touch-friendly controls

## ♿ **Accessibility**

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly
- Focus management
