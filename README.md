# 🏥 AASAAN ENT Clinic - Professional Medical Website

[![CI](https://github.com/yourusername/aasaan-ent-clinic/workflows/CI/badge.svg)](https://github.com/yourusername/aasaan-ent-clinic/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-94%2F100-green?style=flat&logo=lighthouse&logoColor=white)](https://developers.google.com/web/tools/lighthouse)

A modern, high-performance medical clinic website built with Next.js, TypeScript, and Tailwind CSS. Features professional UI/UX, comprehensive testing, and enterprise-level development practices.

## ✨ Features

- **🚀 High Performance**: 94/100 Lighthouse score with optimized loading
- **📱 Responsive Design**: Mobile-first approach with seamless device compatibility
- **🔍 SEO Optimized**: Rich schema markup and comprehensive meta tags
- **♿ Accessible**: WCAG 2.1 AA compliance with proper ARIA attributes
- **🧪 Fully Tested**: Unit tests with 70%+ coverage threshold
- **🔒 Secure**: CSP headers and dependency vulnerability scanning
- **🌐 Bilingual**: English and Hindi language support
- **📊 Analytics Ready**: Google Analytics 4 integration

### Medical Features
- **📋 Services Showcase**: Complete ENT treatment offerings
- **👨‍⚕️ Doctor Profile**: Professional credentials and experience
- **📞 Direct Contact**: Click-to-call and WhatsApp integration
- **🗺️ Location Maps**: Embedded Google Maps for clinic locations
- **⭐ Patient Reviews**: Google Reviews integration
- **🎥 Educational Content**: YouTube video integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint
- **CI/CD**: GitHub Actions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/aasaan-ent-clinic.git
cd aasaan-ent-clinic

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Google Analytics ID and other config

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Quality Checks
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Security audit
npm run audit:deps

# Run all validation checks
npm run validate
```

## 📊 Code Coverage

Current coverage thresholds:
- **Branches**: 70%
- **Functions**: 70% 
- **Lines**: 70%
- **Statements**: 70%

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── __tests__/      # Component tests
│   ├── Header.tsx      # Site header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── ...            # Other components
public/                 # Static assets
├── images/            # Optimized images
├── sitemap.xml        # SEO sitemap
└── robots.txt         # Search engine directives
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📈 Performance Metrics

- **Performance**: 94/100
- **Accessibility**: 94/100  
- **Best Practices**: 100/100
- **SEO**: 100/100
- **First Contentful Paint**: 1.2s
- **Largest Contentful Paint**: 2.7s

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Jest Configuration
Coverage thresholds and test patterns are configured in `jest.config.js`.

### ESLint Configuration  
Code quality rules are defined in `.eslintrc.json`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Dr. Anshita Gupta**  
ENT Specialist  
📱 +91-7240868002  
📧 contact@aasaanentclinic.com  
🌐 [aasaanentclinic.vercel.app](https://aasaanentclinic.vercel.app)

---

<div align="center">
  <strong>Built with ❤️ for better healthcare accessibility</strong>
</div>
