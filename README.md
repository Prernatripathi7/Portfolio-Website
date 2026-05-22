# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and TailwindCSS. Features smooth animations, dark/light mode, a filterable skills section, project showcase, and a fully functional contact form powered by EmailJS — no backend required.

**Live Demo:** [portfolio-website-1yzk.vercel.app](https://portfolio-website-1yzk.vercel.app)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Component-based UI development |
| **Vite** | Lightning-fast build tool |
| **TailwindCSS** | Utility-first CSS styling |
| **Lucide Icons** | Clean and minimal icon pack |
| **Radix UI** | Accessible component primitives |
| **EmailJS** | Contact form email delivery (no backend) |
| **Vercel** | Deployment and hosting |

---

## Features

- **Dark / Light Mode** — Toggle between themes with smooth transitions
- **Animated UI** — Stars, meteors, scroll effects, and glowing elements
- **Fully Responsive** — Works seamlessly on desktop and mobile
- **Glassmorphism Navigation** — Desktop and mobile menus with modern styling
- **Hero & About Sections** — Personal introduction with smooth animations
- **Filterable Skills Grid** — Skills organized by category with animated progress bars
- **Projects Showcase** — Project cards with tech stack, GitHub links, and live demos
- **Contact Form with EmailJS** — Send messages directly to inbox without any backend server
- **Deployed on Vercel** — Live and accessible via a custom subdomain

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Installation

```bash
git clone https://github.com/Prernatripathi7/Portfolio-Website.git
cd Portfolio-Website
npm install
npm run dev
```

Your app will be available at: [http://localhost:5173](http://localhost:5173)

---

## EmailJS Setup

This project uses [EmailJS](https://www.emailjs.com/) to handle contact form submissions directly from the frontend.

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an **Email Service** and an **Email Template**
3. Add your credentials to the project:

```js
emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current,
  'YOUR_PUBLIC_KEY'
)
```

---

## Deployment

This site is deployed on **Vercel**.

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Import your repository
4. Click **Deploy**

Live at: `https://portfolio-website-1yzk.vercel.app`

---

## Contact

Feel free to reach out via the contact form on the website or connect on:

- **GitHub:** [Prernatripathi7](https://github.com/Prernatripathi7)
