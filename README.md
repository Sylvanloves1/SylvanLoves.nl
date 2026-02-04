# Sylvan Loves - Portfolio Website

A modern, code-themed portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Terminal-style Hero Section**: Interactive command-line interface design
- **Git Log Timeline**: Experience section styled as git commits
- **JSON Skills Visualization**: Skills displayed as code objects
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Contact Form**: Integrated contact form with email notifications
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Comprehensive metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: Formspree
- **Theme**: next-themes
- **Icons**: lucide-react

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```

4. Configure environment variables:
   - `FORMSPREE_FORM_ID`: Your Formspree form ID (get one at https://formspree.io)
   - `NEXT_PUBLIC_SITE_URL`: Your website URL

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── animations/        # Animation wrappers
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── lib/                   # Utilities and data
│   ├── data/             # Content data
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Customization

### Content

Update your personal information in:
- `lib/constants.ts` - Site configuration
- `lib/data/experience.ts` - Work experience
- `lib/data/education.ts` - Education and certifications
- `lib/data/skills.ts` - Technical skills

### Styling

Customize colors and theming in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - CSS variables for themes

## License

This project is open source and available under the MIT License.

## Contact

Sylvan Loves - [LinkedIn](https://www.linkedin.com/in/sylvanloves/)
