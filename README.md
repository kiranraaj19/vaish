# Vaishnavi Padmanathan - Portfolio Website

A modern, responsive portfolio website for Vaishnavi Padmanathan, an Indian writer for television and screen based in Los Angeles.

## Features

- **Modern Design**: Clean, elegant design with Playfair Display and Inter fonts
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Fade-in animations and smooth scrolling
- **Accessible**: Built with accessibility in mind
- **TypeScript**: Written in TypeScript for better maintainability

## Sections

1. **Landing**: Introduction statement
2. **About**: Personal story and background
3. **Accomplishments**: 
   - Credits (TV series, films, audio plays)
   - Accolades (awards, fellowships, programs)
4. **Press Buzz**: Media coverage and press mentions
5. **Portfolio**:
   - TV Pilots (3 projects)
   - Screenplays (3 projects)
6. **Contact**: Contact form for inquiries

## Technology Stack

- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS v4**
- **React 18**

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Landing.tsx         # Landing section
│   ├── About.tsx           # About section
│   ├── Accomplishments.tsx # Accomplishments section
│   ├── PressBuzz.tsx       # Press section
│   ├── Portfolio.tsx       # Portfolio section
│   └── Contact.tsx         # Contact form
public/
└── static/                 # All portfolio images and assets
    ├── accomplishments/
    ├── tvpilots/
    ├── screenplays/
    └── profilepic/
```

## Customization

- **Colors**: Update CSS variables in `globals.css`
- **Fonts**: Modify font imports in `layout.tsx`
- **Content**: Update component data arrays
- **Images**: Replace images in `public/static/` directory

## Deployment

The site can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

## Contact Form

The contact form is currently set up for future integration with Formspree or a custom backend. Update the `handleSubmit` function in `Contact.tsx` to integrate with your preferred service.
