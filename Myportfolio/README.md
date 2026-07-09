# Md Kaif | Responsive Developer Portfolio

A production-grade, dark-themed, and highly interactive single-page portfolio built to showcase a **Java & MERN Stack** engineering profile. It features professional UI components, buttery-smooth cursor trailing animations, custom glassmorphic cards with cursor-responsive spotlight glows, and backend-less email contact capabilities.

---

## 🎨 Design & Interactivity Features

- **Custom Spring Cursor**: Implements a high-performance viewport tracker using `framer-motion` spring mechanics. The pointer expands, changes opacity, and transitions colors when hovering over links and cards. Hides automatically on mobile screens.
- **Vercel-Style Spotlight Glows**: Interactive cards (`GlowingCard.jsx`) track relative mouse coordinates and feed local CSS variables (`--mouse-x` and `--mouse-y`) to render a smooth radial gradient border and background glow that follows the cursor.
- **Scroll Reveal Animations**: Component containers stagger-animate and fade into the viewport on scroll using `whileInView` thresholds. Technical skills progress indicators animate from 0% to scale.
- **Glassmorphic Navigation**: Centered pill-shaped header navigation that floats dynamically on viewport scroll with custom active blur filters. Supports a responsive hamburger menu for mobile layouts.

---

## 📂 Layout Sections

1. **Intro / Hero**: Multi-role typewriter animation coupled with an interactive code window compiler mockup showing syntax highlights and stats.
2. **Experience**: Staggered vertical timeline featuring custom node rings, duration details, contribution bullet lists, and technology badges.
3. **Education**: Grid layout detailing computer science degree milestones, PMC PU scores, and high school academic history.
4. **Skills**: Divided categories (Languages, Frontend, Backend, Tools) equipped with custom glowing linear gauge indicators.
5. **Projects**: Showcase of three key applications (*Book My Ticket*, *Real-Time Chat App*, *Hybrid Steganography*) detailing feature metrics, source code redirects, and demo links.
6. **Certifications**: Grid of credentials (NPTEL, CySecK, Node.js) featuring verification hooks and dedicated **View Certificate** buttons linked to Google Drive storage.
7. **LeetCode analytics**: Dashboard rendering total question progress (circular SVG indicators), Easy/Medium/Hard distribution graphs, ranking milestones, and a simulated git-style coding calendar contribution heatmap.
8. **Contact Form**: Form with floating inputs that submits messages directly to `mdkaifshaik11196@gmail.com` using Web3Forms, including loading, success checkmarks, and retry error handlers.
9. **Social Footer**: Connecting links to LinkedIn, GitHub, LeetCode, Instagram, X, and Naukri with custom hover effects.

---

## 🛠️ Technology Stack

- **Core**: [React 19](https://react.dev) (UI Layout)
- **Bundler & Dev Server**: [Vite](https://vite.dev) (Hot Module Replacement)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Utility-first framework and native CSS compiler)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Coordinate tracking and physics spring loops)
- **Icons**: [Lucide React](https://lucide.dev) (SVG vectors)

---

## 🚀 Local Setup & Development

To run this portfolio locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org) (v18+) and npm installed.

### 2. Installation
Open your terminal inside the `ui/` directory and install dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local hot-reload web server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To build static, minified HTML, CSS, and JS files for deployment:
```bash
npm run build
```
*The compiled bundle will be outputted to the `ui/dist` folder, ready for drag-and-drop hosting.*

---

## ⚙️ Configuration File Locations

- **Favicon Icon**: Inside [index.html](index.html), change the `href` attribute inside `<link rel="icon" ...>` to point to custom logo assets.
- **Gmail Access Key**: Located in `src/components/Contact.jsx` under `WEB3FORMS_ACCESS_KEY`. Register your Gmail at [web3forms.com](https://web3forms.com) and replace the placeholder string.
- **Resume Download**: Located in `public/resume.pdf`. Replace this PDF file with your actual resume document.
- **Social URLs**: Located in `src/components/Footer.jsx` under the `socialLinks` array. Replace the URLs with your custom profile pages.
