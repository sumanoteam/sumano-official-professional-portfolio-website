# Sumano Team Portfolio Website

A professional portfolio website for the Sumano team, designed with a file explorer interface and enterprise-standard architecture.

## 🚀 Features

- **File Explorer Interface**: Modern file-like navigation system
- **Team Profiles**: Individual team member showcases with bios, skills, and resumes
- **Service Showcase**: Comprehensive display of company services
- **Portfolio Gallery**: Project showcase with case studies
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Enterprise Architecture**: Scalable, maintainable codebase

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Icons**: Heroicons (React-compatible)
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Build Tool**: Create React App

## 📁 Project Structure

```
sumano-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Common components (Header, Footer, etc.)
│   │   ├── layout/         # Layout components
│   │   ├── ui/             # Basic UI components
│   │   └── file-explorer/  # File explorer specific components
│   ├── pages/              # Page components
│   ├── services/           # API and business logic
│   ├── utils/              # Utility functions and helpers
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # Application constants
│   └── styles/             # Global styles and themes
├── docs/                   # Documentation
└── tests/                  # Test files
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #1e3a8a
- **Secondary Blue**: #3b82f6
- **Accent Blue**: #dbeafe
- **Success Green**: #10b981
- **Warning Orange**: #f59e0b
- **Error Red**: #ef4444

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sumano-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run lint` - Runs ESLint
- `npm run type-check` - Runs TypeScript type checking

## 📱 Pages

- **Home**: Welcome page with company overview
- **About**: Company information and mission
- **Team**: Team member profiles and bios
- **Services**: Service offerings and capabilities
- **Portfolio**: Project showcase and case studies
- **Contact**: Contact information and form

## 🔧 Configuration

Environment variables can be configured in `.env` file:

```env
REACT_APP_API_URL=https://api.sumano.com
REACT_APP_BASE_PATH=/portfolio
REACT_APP_MAIN_WEBSITE_URL=https://sumano.com
REACT_APP_GA_ID=your-google-analytics-id
```

## 🏗️ Architecture

The project follows enterprise-level architecture patterns:

- **Component-based**: Modular, reusable components
- **Type-safe**: Full TypeScript implementation
- **Scalable**: Organized folder structure
- **Maintainable**: Clear separation of concerns
- **Testable**: Component isolation and mocking

## 📄 License

This project is proprietary to Sumano. All rights reserved.

## 👥 Team

Developed by the Sumano development team.

## 📞 Support

For support or questions, contact us at info@sumano.com

