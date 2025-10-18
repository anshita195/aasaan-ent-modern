# AASAAN ENT Clinic Website

A modern, responsive healthcare website built with Next.js, TypeScript, and Tailwind CSS. Features comprehensive testing, CI/CD pipeline, and production-ready deployment.

## Live Website

[View Live Site](https://www.aasaanentclinic.com/)

## Overview

This project is a professional medical clinic website for AASAAN ENT Clinic, featuring doctor profiles, service listings, patient testimonials, and contact information. The website is optimized for performance, SEO, and accessibility.

## Technical Features

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom medical theme
- **Testing**: Jest with React Testing Library (70%+ coverage)
- **CI/CD**: GitHub Actions with multi-version Node.js testing
- **Performance**: Optimized images and lazy loading
- **SEO**: Structured data, meta tags, and sitemap
- **Analytics**: Google Analytics 4 integration
- **Accessibility**: WCAG 2.1 AA compliance

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and CSS variables
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page component
├── components/         # React components
│   ├── __tests__/      # Unit tests for components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── About.tsx       # Doctor profile section
│   ├── Locations.tsx   # Clinic locations
│   ├── Contact.tsx     # Contact information
│   ├── Testimonials.tsx # Patient reviews
│   ├── YouTube.tsx     # Educational content
│   └── Footer.tsx      # Site footer
public/                 # Static assets
├── sitemap.xml        # SEO sitemap
├── robots.txt         # Search engine directives
└── google*.html       # Google verification files
```

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/aasaan-ent-clinic.git
cd aasaan-ent-clinic

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Google Analytics ID: NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript type checking
npm run validate     # Run all quality checks

# Security
npm run audit:deps   # Audit dependencies for vulnerabilities
```

## Testing

The project includes comprehensive unit tests using Jest and React Testing Library:

- Component rendering tests
- User interaction tests
- Accessibility tests
- Integration tests

Coverage threshold: 70% lines, 60% functions

## CI/CD Pipeline

GitHub Actions workflow configured with:

- Multi-version Node.js testing (18.x, 20.x)
- Automated dependency installation
- Code quality checks (TypeScript, ESLint)
- Test execution with coverage reporting
- Build validation

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Performance Metrics

- **Lighthouse Performance**: 94/100
- **Lighthouse Accessibility**: 94/100
- **Lighthouse Best Practices**: 100/100
- **Lighthouse SEO**: 100/100
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## SEO Features

- Structured data markup for medical practice
- Open Graph and Twitter Card meta tags
- XML sitemap generation
- Robots.txt configuration
- Mobile-first responsive design
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions about this project, please contact the development team.